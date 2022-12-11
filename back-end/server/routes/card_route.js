const router = require('express').Router();
const { wrapAsync } = require('../../util/util');
const { verifiedAuth } = require('../controllers/auth_controller');
const {
  fetchCardCategory,
  saveMessagesToNote,
  fetchCardHistory,
  deleteCardById,
  setLikeById,
  setDislikeById,
  checkCardExist,
  fetchCardDetailsByCategory,
  updateCardTitleAndNotes,
  updateCategory,
} = require('../controllers/card_controller');
const { fetchCardHistoryByCategory } = require('../models/card_model');

// 取得user過去的卡片歷史紀錄
router
  .route('/card/history')
  .get(wrapAsync(verifiedAuth), wrapAsync(fetchCardHistory));

// 新增至最愛 TODO: 刪除verifiedAuth的wrapAsync
router
  .route('/card/like')
  .post(
    wrapAsync(verifiedAuth),
    wrapAsync(checkCardExist),
    wrapAsync(setLikeById),
  );
// 從最愛移除
router
  .route('/card/dislike')
  .post(
    wrapAsync(verifiedAuth),
    wrapAsync(checkCardExist),
    wrapAsync(setDislikeById),
  );

// 刪除卡片資料 //TODO: 前後端改delte
router
  .route('/card/remove')
  .post(wrapAsync(verifiedAuth), wrapAsync(deleteCardById));

// 取得category資料
router.route('/card/category').get(wrapAsync(fetchCardCategory));

// 新增卡片
router
  .route('/card/notes')
  .post(wrapAsync(verifiedAuth), wrapAsync(saveMessagesToNote));

// 取得歷史紀錄by category
router
  .route('/card/details/:category')
  .get(wrapAsync(verifiedAuth), wrapAsync(fetchCardDetailsByCategory));

// 更新卡片Title以及notes //TODO: patch 前後端
router
  .route('/card/modification')
  .post(
    verifiedAuth,
    wrapAsync(checkCardExist),
    wrapAsync(updateCardTitleAndNotes),
  );
// 更新卡片category FIXME: 改成category
router
  .route('/card/changecategory')
  .post(verifiedAuth, wrapAsync(checkCardExist), wrapAsync(updateCategory));

module.exports = router;
