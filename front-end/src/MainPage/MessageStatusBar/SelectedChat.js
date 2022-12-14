import React from 'react';
import { Typography } from '@mui/material';
import { connect } from 'react-redux';

// 顯示Username以及mail
const SelectedChat = ({ name }) => {
  return (
    <>
      <Typography
        sx={{ fontSize: '30px', color: '#1363DF', marginLeft: '30px' }}
      >{`${name ? `Messaging To: ${name}` : ''}`}</Typography>
    </>
  );
};

// connect react-redux來依照狀態找東西來畫
const mapActionsToProps = (state) => {
  return {
    name: state.chat.chosenChatDetails?.name,
  };
};
export default connect(mapActionsToProps)(SelectedChat);
