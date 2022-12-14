// 取得資料並且渲染好友列表
import React from 'react';
import { styled } from '@mui/system';
import { connect } from 'react-redux';
import FriendDataItems from './FriendDataItems';

const FriedListWrapper = styled('div')({
  overflow: 'auto',
  flexGrow: 1,
  width: '100%',
});

const checkOnline = (friends = [], onlineUsers = []) => {
  // iterate每個朋友檢查他是否online
  friends.forEach((friend) => {
    // find找到就停止的特性效率上會比較好
    const isOnline = onlineUsers.find((ele) => ele.userMail === friend.mail);
    // 新增一個欄位 isOnline (1 online, 0 offline)
    friend.isOnline = isOnline ? 1 : 0;
  });
  return friends;
};

// 從props來的friends => connect to store
const FriendsUsernameList = ({ friends, onlineUsers }) => {
  return (
    <FriedListWrapper>
      {/* 拆解出來渲染 */}

      {/* !!! forEach()方法不会返回执行结果，而是undefined。 forEach() 被调用时，不会改变原数组，也就是调用它的数组（尽管callback 函数在被调用时可能会改变原数组）。 map()方法会分配内存空间存储新数组并返回，map 不修改调用它的原数组本身（当然可以在callback 执行时改变原数组 !!!*/}
      {/* 用chekOnline生出來的新friends取代原本直接拿backend來的friends資料 */}
      {checkOnline(friends, onlineUsers).map((ele) => (
        <FriendDataItems
          // FriendDataItems會製造擺放這些key, username, id的元素
          key={ele.id}
          username={ele.username}
          id={ele.id}
          // 如果mail跟socket廣播onlineUsers資料中任何一個相符合的話，就代表online
          isOnline={ele.isOnline}
        />
      ))}
    </FriedListWrapper>
  );
};

// store.js內卻忍有combine相關的 => friends: friendReducer,
const mapStoreStateToProps = ({ friends }) => {
  return { ...friends };
};

export default connect(mapStoreStateToProps)(FriendsUsernameList);
