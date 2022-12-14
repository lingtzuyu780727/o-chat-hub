import * as api from '../../api';

export const cardActions = {
  SHOW_SELECTE_MESSAGE_BOX: 'CARDS.SHOW_SELECTE_MESSAGE_BOX',
  IS_MESSAGE_CHECKBOX_SELECTED: 'CARDS.IS_MESSAGE_CHECKBOX_SELECTED',
  SET_CARD_CATEGORY: 'CARDS.SET_CARD_CATEGORY',
  SET_SELECTED_CATEGORY_FOR_NOTE: 'CARDS.SET_SELECTED_CATEGORY_FOR_NOTE',
  SET_TRANSFFERED_MESSAGES_NOTE: 'CARD.SET_TRANSFFERED_MESSAGES_NOTE',
  SET_CARDS: 'CARDS.SET_CARDS',
  SET_EXPORTING_CARD: 'CARDS.SET_EXPORTING_CARD',
  EXPORT_TO_NOTION: 'CARDS.EXPORT_TO_NOTION',
  SET_EXPORTED_CARD: 'CARDS.SET_EXPORTED_CARD',
  SET_SAVEMESSAGE_BUTTON_DISABLED: 'CARDS.SET_SAVEMESSAGE_BUTTON_DISABLED',
  SET_TRANSFER_BUTTON_DISABLED: 'CARDS.SET_TRANSFER_BUTTON_DISABLED',
  SET_MESSAGEVIEW_OPEN: 'CARDS.SET_MESSAGEVIEW_OPEN',
  SET_DELETE_ALERT_OPEN: 'CARDS.SET_DELETE_ALERT_OPEN',
  SET_MESSAGES_IN_QUICK_VIEW: 'CARDS.SET_MESSAGES_IN_QUICK_VIEW',
  SET_EXPORT_TABLE: 'CARDS.SET_EXPORT_TABLE',
  SET_NOTOIN_STATUS: 'CARDS.SET_NOTION_STATUS',
  SET_NOTOIN_PRIORITY: 'CARDS.SET_NOTION_PRIORITY',
  SET_CARDS_BY_CATEGORY: 'CARDS.SET_CARDS_BY_CATEGORY',
  ADD_DELETE_CARD_CHANGE: 'CARDS.ADD_DELETE_CARD_CHANGE',
  SET_CANCEL_BUTTON_DISABLED: 'CARDS.SET_CANCEL_BUTTON_DISABLED',
  SET_CURRENT_CATEGORY: 'CARDS.SET_CURRETN_CATEGORY',
  SET_FILTERED_CARDS: 'CARDS.SET_FILTERED_CARDS',
  // 廢棄 TODO:
  SET_FORWARDED_TARGET: 'CARDS.SET_FORWARDED_TARGET',
};

export const getActions = (dispatch) => {
  return {
    showSelectMessageBox: (isDisabled, isShown) =>
      dispatch(showSelectMessageBox(isDisabled, isShown)),
    setCardCategory: (categories) => {
      dispatch(setCardCategory(categories));
    },
    fetchCardCategoryAction: () => {
      dispatch(fetchCardCategoryAction());
    },
    saveTransferredMessagesToMongo: (data) => {
      dispatch(saveTransferredMessagesToMongo(data));
    },
    setTransferredMessagesToStore: (data, noteId) => {
      dispatch(setTransferredMessagesToStore(data, noteId));
    },
    setSelectedCategoryForNote: (selectedCategory) => {
      dispatch(setSelectedCategoryForNote(selectedCategory));
    },
    fetchCardHistory: (data) => {
      dispatch(fetchCardHistory(data));
    },
    selecteExportCards: (cardsToBeExporting) => {
      dispatch(selecteExportCards(cardsToBeExporting));
    },
    exportToNotion: (data) => {
      dispatch(exportToNotion(data));
    },
    setSaveMessageButtonDisabled: (data) => {
      dispatch(setSaveMessageButtonDisabled(data));
    },
    setTransferButtonDisabled: (data) => {
      dispatch(setTransferButtonDisabled(data));
    },
    setMessageView: (data) => {
      dispatch(setMessageView(data));
    },
    // TODO: 待刪除
    setDeleteAlert: (data) => {
      dispatch(setDeleteAlert(data));
    },
    setMessagesArrayInQuickView: (data) => {
      dispatch(setMessagesArrayInQuickView(data));
    },
    setIsExportPopoutOpen: (data) => {
      dispatch(setIsExportPopoutOpen(data));
    },
    setNotionStatus: (data) => {
      dispatch(setNotionStatus(data));
    },
    setNotionPriority: (data) => {
      dispatch(setNotionPriority(data));
    },
    setCardsListByCategory: (data) => {
      dispatch(setCardsListByCategory(data));
    },
    addOrDeleteCard: (data) => {
      dispatch(addOrDeleteCard(data));
    },
    setCancelButtonDisable: (data) => {
      dispatch(setCancelButtonDisable(data));
    },
    setCurrentCategory: (category) => {
      dispatch(setCurrentCategory(category));
    },

    setFilteredCards: (data) => {
      dispatch(setFilteredCards(data));
    },

    forwardToTarget: (chatDetails, chatType, saveButtonOn) => {
      dispatch(forwardToTarget(chatDetails, chatType, saveButtonOn));
    },
  };
};

// export const forwardToTarget = (targetId, targetUserName) => {
//   const chatDetails = { id: targetId, name: targetUserName };
//   return async (dispatch) => {
//     dispatch(setChosenChatDetails(chatDetails, 'DIRECT', false));
//   };
// };

export const setCurrentCategory = (category) => ({
  type: cardActions.SET_CURRENT_CATEGORY,
  currentCategoryParams: category,
});

// set cancel button disabled
export const setCancelButtonDisable = (data) => ({
  type: cardActions.SET_CANCEL_BUTTON_DISABLED,
  isCancelButtonDisabeld: data,
});

// set cards list by category
export const setCardsListByCategory = (data) => ({
  type: cardActions.SET_CARDS_BY_CATEGORY,
  cards: data,
});

// set Notion status
export const setNotionStatus = (data) => ({
  type: cardActions.SET_NOTOIN_STATUS,
  notionStatus: data,
});

export const setNotionPriority = (data) => ({
  type: cardActions.SET_NOTOIN_PRIORITY,
  notionPriority: data,
});

// export 相關的table是否open，接true false
export const setIsExportPopoutOpen = (data) => ({
  type: cardActions.SET_EXPORT_TABLE,
  isExportTableOpen: data,
});

// 設定state內的messages陣列
export const setMessagesArrayInQuickView = (data) => ({
  type: cardActions.SET_MESSAGES_IN_QUICK_VIEW,
  messagesInQuickView: data,
});

// 關閉確認刪除紀錄 boolean
export const setDeleteAlert = (data) => ({
  type: cardActions.SET_DELETE_ALERT_OPEN,
  isDeleteAlertOpen: data,
});

// 關閉記錄訊息快速瀏覽 boolean
export const setMessageView = (data) => ({
  type: cardActions.SET_MESSAGEVIEW_OPEN,
  isMessageViewOpen: data,
});

// transferMessageButton顯示
export const setTransferButtonDisabled = (data) => ({
  type: cardActions.SET_TRANSFER_BUTTON_DISABLED,
  isTransferButtonDisabled: data,
});

// saveMessageButton的顯示
export const setSaveMessageButtonDisabled = (data) => ({
  type: cardActions.SET_SAVEMESSAGE_BUTTON_DISABLED,
  isSavedButtonDisabled: data,
});

// 傳送至notion
export const exportToNotion = (data) => {
  return async (dispatch) => {
    api.exportToNotionAPI(data);
    dispatch(setExportedCard(data));
  };
};

export const setExportedCard = (data) => ({
  type: cardActions.SET_EXPORTED_CARD,
  exportedCards: data,
});

// forward 到該聊天
export const forwardToTarget = (chatDetails, chatType, saveButtonOn) => ({
  type: cardActions.SET_FORWARDED_TARGET,
  chosenChatDetails: chatDetails,
  chatType: chatType,
  saveButtonShow: saveButtonOn,
});

// 把卡片區的資訊狀態帶到輸出區，並且準備輸出
export const selecteExportCards = (cardsToBeExporting) => ({
  type: cardActions.SET_EXPORTING_CARD,
  cardsToBeExporting: cardsToBeExporting,
});

// 處理action最好的方法就是將每個action都包在function內，像這樣的function就是action creator
export const showSelectMessageBox = (isDisabled, isShown) => ({
  type: cardActions.SHOW_SELECTE_MESSAGE_BOX,
  // data should be true or false
  isDisabled: isDisabled,
  isShown: isShown,
});

export const fetchCardCategoryAction = () => {
  return async (dispatch) => {
    const categories = await api.fetchCardCategory();
    const categoriesArray = categories.data;
    // 儲存到全局狀態，之後其他頁面要修改狀態可以從這邊拿
    dispatch(setCardCategory(categoriesArray));
  };
};

export const setCardCategory = (categoriesArray) => {
  return { type: cardActions.SET_CARD_CATEGORY, categories: categoriesArray };
};

export const setSelectedCategoryForNote = (selectedCategory) => {
  return {
    type: cardActions.SET_SELECTED_CATEGORY_FOR_NOTE,
    selectedCategory: selectedCategory,
  };
};

// 將選中的資料存進mongoDB，並且dispatch到setTransferredMessgesToStore渲染右方用
export const saveTransferredMessagesToMongo = (data) => {
  return async (dispatch) => {
    const response = await api.saveMessagesToNote(data);
    const noteId = response.data.noteId;

    dispatch(setTransferredMessagesToStore(data, noteId));
    // 再發到這邊做新增或是刪除改變的偵測
    dispatch(addOrDeleteCard(data));
  };
};

export const setTransferredMessagesToStore = (data, noteId) => {
  return {
    type: cardActions.SET_TRANSFFERED_MESSAGES_NOTE,
    transfferedMessages: data.messagesToBeSaved,
    noteId: noteId,
  };
};

export const fetchCardHistory = (data) => {
  return async (dispatch) => {
    const cardHistory = await api.getCardHistory(data);
    dispatch(setCards(cardHistory));
  };
};

export const setCards = (cards) => {
  return { type: cardActions.SET_CARDS, cards };
};

// 新增到cards讓其渲染畫面 (轉換訊息的時候)
export const addOrDeleteCard = (data) => {
  return {
    type: cardActions.ADD_DELETE_CARD_CHANGE,
    addCard: data,
    setCardChange: data,
  };
};

// 將filter後的東西渲染到卡片區域
export const setFilteredCards = (data) => {
  return {
    type: cardActions.SET_FILTERED_CARDS,
    filteredCards: data,
  };
};

// 跳轉回去 TODO: 廢棄
export const forwardToChatTarget = (userId) => {};
