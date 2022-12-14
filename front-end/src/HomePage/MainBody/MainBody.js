import React from 'react';
import styled from '@emotion/styled';

import { LeftBarProfileIcon } from '../../MainPage/FriendsList/LeftBarProfileIcon';

import { LeftBarSearchBar } from '../../MainPage/FriendsList/LeftBarSearchBar';

import LeftBarFriendList from '../../MainPage/FriendsList/LeftBarFriendList';

import { LeftBarPendingListTitle } from '../../MainPage/FriendsList/LeftBarPendingListTitle';

import LeftBarPendingInvitationList from '../../MainPage/FriendsList/LeftBarPendingInvitationList';

import MessageAreaTopBar from '../../MainPage/MessageStatusBar/MessageAreaTopBar';
import { MessageContentArea } from '../../MainPage/Messenger/MessageContentArea';
import CardArea from '../../MainPage/CardArea/CardArea';
import CardFilterArea from '../../MainPage/CardArea/CardFilterArea';
import CardTransferArea from '../../MainPage/CardArea/CardTransferArea';

const LeftFriendBarContainer = styled('div')({
  width: '20%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#DFF6FF',
});
const MiddleMessageBarContainer = styled('div')({
  width: '50%',
  height: '100vh',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: 'white',
  borderRight: '0.5px solid grey',
});

const RightCardBarContainer = styled('div')({
  width: '30%',
  height: '100vh',
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'whie',
});

export default function MainBody() {
  return (
    <>
      <LeftFriendBarContainer>
        <LeftBarProfileIcon />
        <LeftBarSearchBar />
        <LeftBarFriendList />
        <LeftBarPendingListTitle />

        <LeftBarPendingInvitationList />
      </LeftFriendBarContainer>
      <MiddleMessageBarContainer>
        <MessageAreaTopBar />
        <MessageContentArea />
      </MiddleMessageBarContainer>
      <RightCardBarContainer>
        <CardFilterArea></CardFilterArea>
        <CardArea></CardArea>
        <CardTransferArea></CardTransferArea>
      </RightCardBarContainer>
    </>
  );
}
