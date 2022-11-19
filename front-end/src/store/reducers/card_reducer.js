import { cardActions } from '../actions/card_actions';

//初始化state，避免最開始取得的state是undefined
// 設定reducer function，第一個參數為state，第二個參數為action
// 目前action尚未被指派任務，而這個function目前只會回傳state。

// 初始值為array，透過array儲存多筆
const initState = {
  // default 是 disabled
  isSelectMessageBoxDisabled: true,
  // fefault 是 全plain => 出現換成"outlined"
  isSelectedMessageBoxShown: 'plain',
  cardCategories: [],
};

const reducer = (state = initState, action) => {
  switch (action.type) {
    case cardActions.SHOW_SELECTE_MESSAGE_BOX:
      return {
        // ...state,
        // should receive true
        isSelectMessageBoxDisabled: action.isDisabled,
        isSelectedMessageBoxShown: action.isShown,
      };
    case cardActions.SET_CARD_CATEGORY:
      return {
        cardCategories: action.categories,
      };

    default:
      return state;
  }
};

export default reducer;