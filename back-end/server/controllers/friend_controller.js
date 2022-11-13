require('dotenv').config();
const Joi = require('joi');
const Friend = require('../models/friend_model');
const EmitEvent = require('../../socketConnectDealer/updateChatStatus');

// mail from friendInvitation
const invitationSchema = Joi.object({
  mail: Joi.string().email().required(),
  // https://github.com/hapijs/joi/issues/992
  token: Joi.string().regex(
    /^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_.+/=]*$/
  ),
});

// id from accept (or reject) => {id: 47}
const friendConfirmSchema = Joi.object({
  // TODO: 這個用number或是string都會過..靠邀
  acceptId: Joi.number().required(),
  // https://github.com/hapijs/joi/issues/992
  token: Joi.string()
    .regex(/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_.+/=]*$/)
    .required(),
});

// TODO: accept以及reject可以合併，需要改body內的key，統一為id (instead of acceptId & rejectId)
const friendRejectSchema = Joi.object({
  // TODO: 這個用number或是string都會過..靠邀
  rejectId: Joi.number().required(),
  // https://github.com/hapijs/joi/issues/992
  token: Joi.string()
    .regex(/^[A-Za-z0-9-_]+\.[A-Za-z0-9-_]+\.[A-Za-z0-9-_.+/=]*$/)
    .required(),
});

// 送出好友邀請
const sentFriendInvitation = async (req, res) => {
  // 可以從 verifiedAuth(auth_controller)的middleware中拿到是誰發出(sender_user_id)的順便認證
  const senderMail = req.user.mail;
  // 從payload中拿到mail (送出者: frontend: api.sendFriendRequest)
  const receiverMail = req.body.mail;

  const checkRecieverIdExist = await Friend.checkUserExist(receiverMail);
  const checkSenderIdExist = await Friend.checkUserExist(senderMail);
  const receiverId = checkRecieverIdExist[0]?.id;
  const senderId = checkSenderIdExist[0].id;

  try {
    // receiver使用者不存在
    if (receiverId === undefined) {
      return res.status(400).send({ error: `User ${receiverMail} not exist` });
    }
    // 不能加自己
    if (receiverId === senderId) {
      return res
        .status(400)
        .send({ error: 'You are not allowed to add yourself' });
    }

    // 已經是好友

    const targetfriendCheck = await Friend.getTargetFriendFromDB(
      senderId,
      receiverId
    );

    if (targetfriendCheck[0]) {
      return res.status(400).json({
        error: `The user ${receiverMail} is already your friend`,
      });
    }

    // 已經被加過了，在等待
    const checkPendingInvitation = await Friend.checkPendingInvitation(
      senderId,
      receiverId
    );
    // !=null => 表內有資料，已經邀請過
    if (checkPendingInvitation[0]) {
      const sentTime = checkPendingInvitation[0].sendtime;

      return res.status(400).json({
        error: 'You have already sent the invitation',
        senttime: `${sentTime}`,
      });
    }

    // 加入好友邀請資料表
    const result = await Friend.sendFriendRequest(senderId, receiverId);

    // 靠event: friendInvitations來傳送邀請到某個特定的socketId(s)
    EmitEvent.updateInvitations(receiverMail, receiverId);

    return res.status(200).json({
      status: 'Friend Request sent ok',
      friendRequestId: result.insertId,
    });
  } catch (err) {
    console.log('error msg', err);
    res.status(500).send('Internal Error controller');
  }
};

// 接受好友邀請
const accpetFriendInvitation = async (req, res) => {
  const { acceptId } = req.body;
  // TODO: 直接在body內 (JWT解出來的地方)，改為id也帶進去，就不用再query sql找一次id
  const acceptorMail = req.user.mail;
  const queryAccptorIdByMail = await Friend.checkUserExist(acceptorMail);
  const acceptorId = queryAccptorIdByMail[0].id;
  const acceptTime = new Date();
  console.log('接受這個人的好友', acceptId);
  console.log('這是接受別人好友的人', acceptorId);
  // 插入資料
  try {
    const result = await Friend.insertDaulFriendship(
      acceptId,
      acceptorId,
      acceptTime
    );

    // update socket event friendInvitation (讓渲染pending List的消失)
    await EmitEvent.updateInvitations(acceptorMail, acceptId);
    return res.status(200).json({ result: 'Accept invitation' });
  } catch (err) {
    console.log('accept error', err);
    return res.status(500).sned('internal error');
  }
};

// 拒絕好友邀請
const rejectFriendInvitation = async (req, res) => {
  try {
    const { rejectId } = req.body;
    // TODO: 直接在body內 (JWT解出來的地方)，改為id也帶進去，就不用再query sql找一次id
    const rejectorMail = req.user.mail;
    const queryRejectorIdByMail = await Friend.checkUserExist(rejectorMail);
    const rejectorId = queryRejectorIdByMail[0].id;
    console.log('拒絕這個人的好友', rejectId);
    console.log('這是拒絕別人好友的人', rejectorId);
    // update socket event friendInvitation
    // TODO: 這邊之後也需要做更改... 統一用id
    await EmitEvent.updateInvitations(rejectorMail, rejectId);

    res.status(200).json({ result: 'Reject invitation success' });

    const result = await Friend.deleteRejectedFriendship(rejectId, rejectorId);
  } catch (err) {
    console.log(err);
    return res.status(500).send('Internal Error, please try again');
  }
};

module.exports = {
  invitationSchema,
  friendConfirmSchema,
  friendRejectSchema,
  sentFriendInvitation,
  accpetFriendInvitation,
  rejectFriendInvitation,
};