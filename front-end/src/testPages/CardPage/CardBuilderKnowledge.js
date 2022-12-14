// 放單卡
import React, { useState } from 'react';
import {
  Box,
  ListItemAvatar,
  ListItem,
  ListItemText,
  Typography,
  Divider,
  useTheme,
  Checkbox,
  IconButton,
  Tooltip,
} from '@mui/material';
import Label from '../../shared/components/Lable';

import ExportIconList from './Component/ExportIconList';
import EmailIcon from '@mui/icons-material/Email';
import DraftsIcon from '@mui/icons-material/Drafts';

import Swal from 'sweetalert2';
// stands for knowledge
import SchoolIcon from '@mui/icons-material/School';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import * as api from '../../api';
import { getActions } from '../../store/actions/card_actions';
import { connect } from 'react-redux';

import QuickMessageView from './QuickMessageView';

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  // onOpen: (toast) => {
  //   toast.addEventListener('mouseenter', Swal.stopTimer);
  //   toast.addEventListener('mouseleave', Swal.resumeTimer);
  // },
});

// TODO: 這邊變數名稱待改 CardBuilder

const CardBuilderKnowledge = ({
  cardId,
  noteTime,
  from,
  category,
  title,
  notes,
  liked,
  transferred,
  deleted,
  messageRecords,
  selecteExportCards,
  isMessageViewOpen,
  setMessageView,
  setDeleteAlert,
  setMessagesArrayInQuickView,
  addOrDeleteCard,
}) => {
  const accessToken = localStorage.getItem('accessToken');
  const handleCardInfo = { token: accessToken, cardId: cardId };
  const theme = useTheme();
  const [selected, setSelected] = useState(liked);
  const [isTransferred, setIsTransferred] = useState(transferred);
  const handleOpenMessageView = () => {
    // 把值傳到state去做渲染
    setMessagesArrayInQuickView(messageRecords);

    setMessageView(true);
  };

  const handleOpenDeleteAlert = () => {
    // set true 打開  delete Alert
    // setDeleteAlert(true);

    const deletedCardInfo = { data: { token: accessToken, cardId: cardId } };
    Swal.fire({
      title: 'Are you sure?',
      html: `<p>The following card will be deleted forever!<p><b>Title:</b> ${title}</p><p><b>Card Id:</b> ${cardId}</p>`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete',
    }).then(async (result) => {
      if (result.isConfirmed) {
        const result = await api.deleteCard(deletedCardInfo);
        addOrDeleteCard(deletedCardInfo);
        Toast.fire({
          icon: 'success',
          title: `${result.data.message}`,
        });
        // Swal.fire(`${result.data.message}`);
      }
    });
  };

  const handleCloseMessageView = () => {
    setMessageView(false);
  };

  // Like以及unlike的onchange
  const handleLiked = async () => {
    if (selected === true) {
      setSelected(false);
      Toast.fire({
        icon: 'success',
        title: 'Unread it！',
      });
      await api.dislikeCard(handleCardInfo);
    }
    if (selected === false) {
      setSelected(true);
      Toast.fire({
        icon: 'success',
        title: 'Add to read！',
      });
      await api.likeCard(handleCardInfo);
    }
  };

  // TODO: 之後notion正式點起來的時候使用
  const handleSelected = () => {
    const selectedCardInfo = {
      noteTime: noteTime,
      from: from,
      messageRecords: messageRecords,
      notes: notes,
      category: category,
    };

    // 轉換卡片用
    selecteExportCards(selectedCardInfo);
  };

  return (
    <Box sx={{ backgroundColor: '#cff5E7' }}>
      <ListItem
        sx={{
          alignItems: 'flex-start',
          p: 2,
        }}
      >
        {/* <Checkbox {...label} size="small" /> */}
        <Box alignSelf="center" display="flex" flexDirection="column">
          <ListItemAvatar
            sx={{
              mr: 2,
              display: 'flex',
              alignItems: 'center',
              minWidth: 0,
              marginRight: '20px',
            }}
          >
            <SchoolIcon />
          </ListItemAvatar>
        </Box>

        {/* 與誰的訊息 */}

        <ListItemText
          sx={{ marginTop: '5%' }}
          primary={<Typography variant="h4"> {title}</Typography>}
          secondary={
            <div
              dangerouslySetInnerHTML={{
                __html: notes,
              }}
            />
          }
        />

        <Box
          alignSelf="center"
          display="flex"
          flexDirection="column"
          marginLeft="20px"
        >
          <Tooltip title="Read">
            <Checkbox
              {...label}
              icon={<EmailIcon />}
              checkedIcon={<DraftsIcon />}
              checked={selected}
              onChange={handleLiked}
              style={{ color: '#223354' }}
            />
          </Tooltip>
          {/* 按了之後打開確認popout */}
          <Tooltip title="Delete">
            <IconButton onClick={handleOpenDeleteAlert}>
              <DeleteOutlineIcon
                style={{
                  color: '#223354',
                }}
              />
            </IconButton>
          </Tooltip>

          {/* export到第三方 */}
          <Box marginTop="2px" marginLeft="9px">
            <ExportIconList
              setIsTransferred={setIsTransferred}
              cardId={cardId}
              noteTime={noteTime}
              from={from}
              category={category}
              title={title}
              notes={notes}
              messageRecords={messageRecords}
            />
          </Box>
          {/* <DeleteAlertMessage cardId={cardId} /> */}
          {/* 按了之後就打開紀錄的訊息 */}
          <>
            <Tooltip title="Messages">
              <IconButton
                // messageRecords={messageRecords}
                onClick={handleOpenMessageView}
              >
                <Box
                  mt={0.5}
                  marginTop="7px"
                  marginLeft="3px"
                  marginBottom={'10px'}
                >
                  <Label color="secondary">
                    <b
                      style={{
                        color: '#223354',
                      }}
                    >
                      {messageRecords.length}
                    </b>
                  </Label>
                </Box>
              </IconButton>
            </Tooltip>
            {/* 拿messageRecords到下層渲染 */}
            <QuickMessageView />
          </>
        </Box>

        {/* <Box
          alignSelf="center"
          marginLeft="30px"
          display="flex"
          flexDirection="column"
        >
          <Box mt={0.5}>
            <Label color="secondary">
              <b>{messageRecords.length}</b>
            </Label>
          </Box>
        </Box> */}
      </ListItem>
      <Divider />
    </Box>
  );
};

const mapStoreStateToPropse = ({ card }) => {
  return { ...card };
};

const mapActionsToProps = (dispatch) => {
  return { ...getActions(dispatch) };
};

export default connect(
  mapStoreStateToPropse,
  mapActionsToProps,
)(CardBuilderKnowledge);
