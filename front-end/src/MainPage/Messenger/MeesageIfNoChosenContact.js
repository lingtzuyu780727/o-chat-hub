// 留
import React from 'react';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const HomePageWrapper = styled('div')({
  flexGrow: 1,
  height: '80%',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

// 什麼都沒選到的時候，顯示此段文字

export const MeesageIfNoChosenContact = () => {
  return (
    <HomePageWrapper>
      <Typography variant="h3" sx={{ color: 'grey' }}>
        Choose your friend to start conversation
      </Typography>
    </HomePageWrapper>
  );
};
