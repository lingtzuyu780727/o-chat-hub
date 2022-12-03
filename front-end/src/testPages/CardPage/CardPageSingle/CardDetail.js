import React from 'react';
import {
  Box,
  Card,
  alpha,
  Typography,
  Divider,
  Stack,
  IconButton,
  Avatar,
  styled,
  useTheme,
  Link,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Grid,
  Tooltip,
} from '@mui/material';
import NotionIcon from '../../../shared/images/notion-icon.png';
import TrelloIcon from '../../../shared/images/trello-icon.png';
import Text from '../../../shared/components/Text';
import Label from '../../../shared/components/Lable';
import MoreHorizTwoToneIcon from '@mui/icons-material/MoreHorizTwoTone';
import AddLinkTwoToneIcon from '@mui/icons-material/AddLinkTwoTone';
import LinkOffTwoToneIcon from '@mui/icons-material/LinkOffTwoTone';
import InsertLinkTwoToneIcon from '@mui/icons-material/InsertLinkTwoTone';
import AutorenewTwoToneIcon from '@mui/icons-material/AutorenewTwoTone';
import BorderColorTwoToneIcon from '@mui/icons-material/BorderColorTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import FavoriteBorderTwoToneIcon from '@mui/icons-material/FavoriteBorderTwoTone';
import ImportExportTwoToneIcon from '@mui/icons-material/ImportExportTwoTone';

// category icons
import WorkIcon from '../../../shared/images/Icons/work_icon.png';
import KnowledgeIcon from '../../../shared/images/Icons/bachelor_icon.png';
import LifeIcon from '../../../shared/images/Icons/bar_icon.png';
import LikeIcon from '../../../shared/images/Icons/like_icon.png';
import UnlikeIcon from '../../../shared/images/Icons/unlike_icon.png';
import IntegrationIcon from '../../../shared/images/Icons/integration_icon.png';
import APIIcon from '../../../shared/images/Icons/api_icon.png';
import SmsTwoToneIcon from '@mui/icons-material/SmsTwoTone';

// mock
import Sundar from '../../../shared/images/mock/sundar_head.jpg';

const CardActions = styled(Box)(
  ({ theme }) => `
    position: absolute;
    right: ${theme.spacing(1.5)};
    top: ${theme.spacing(1.5)};
    z-index: 7;
  `
);

const CardActionAreaWrapper = styled(Box)(
  ({ theme }) => `
        text-align: center;
        background: ${alpha(theme.colors.primary.main, 0.03)};

        .MuiTouchRipple-root {
          opacity: .2;
        }
  
        .MuiCardActionArea-focusHighlight {
          background: ${theme.colors.primary.main};
        }
  
        &:hover {
          .MuiCardActionArea-focusHighlight {
            opacity: .05;
          }
        }
  `
);

const DotLegend = styled('span')(
  ({ theme }) => `
    border-radius: 22px;
    width: 10px;
    height: 10px;
    display: inline-block;
    margin-right: ${theme.spacing(0.5)};
`
);

const cardFakeData = [
  {
    Category: 'knowledge',
    Liked: true,
    Transferred: true,
    Photo: Sundar,
  },
];

function CardDetail() {
  const theme = useTheme();

  return (
    <Box marginTop={'30px'} padding={'10px'}>
      <Card
        sx={{
          position: 'relative',
          textAlign: 'center',
          pt: 4,
          pb: 3,
          px: 3,
        }}
      >
        {/* 狀態 1. 分類 2. notetime 3. Transferred 4. From */}
        <Box>
          <Box p={2}>
            <Grid container spacing={4}>
              {/* 分類 */}
              <Grid item xs={12} sm={3}>
                {cardFakeData[0].Category === 'work' ? (
                  <Card variant="outlined" sx={{ backgroundColor: '#EAF6F6' }}>
                    <CardActionAreaWrapper
                      sx={{
                        p: 2,
                      }}
                    >
                      <Box>
                        <img
                          src={WorkIcon}
                          style={{ width: 60, borderRadius: 10 }}
                          alt="Work"
                        />
                      </Box>

                      <Typography variant="h3">{'Work'}</Typography>

                      {/* <Typography
                      sx={{
                        fontSize: `${theme.typography.pxToRem(11)}`,
                        lineHeight: 1,
                      }}
                      variant="subtitle2" */}

                      <Box
                        marginTop="10px"
                        display="flex"
                        alignItems="flex-start"
                        justifyContent={'center'}
                      >
                        {/* <DotLegend
                          style={{
                            background: `${theme.colors.success.main}`,
                          }}
                        /> */}
                        <Typography
                          sx={{
                            fontSize: `${theme.typography.pxToRem(11)}`,
                            lineHeight: 1,
                          }}
                          variant="subtitle2"
                        >
                          <Text color="#111145">Category</Text>
                        </Typography>
                      </Box>
                      {/* // <Text color="success">{user.notionConnect}</Text> */}
                      {/* </Typography> */}
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        marginTop="10px"
                      >
                        <Box>
                          <Tooltip title="Change Category">
                            <IconButton color="primary" size="small">
                              <BorderColorTwoToneIcon />
                            </IconButton>
                          </Tooltip>
                        </Box>

                        {/* {cardFakeData.category === 1 ? (
                          <Box>
                            <Tooltip title="Go to linked notion">
                              <Link href={`https://www.google.com`}>
                                <IconButton>
                                  <InsertLinkTwoToneIcon />
                                </IconButton>
                              </Link>
                            </Tooltip>
                            <Tooltip title="disconnect to Notion">
                              <IconButton>
                                <LinkOffTwoToneIcon />
                              </IconButton>
                            </Tooltip>
                          </Box>
                        ) : (
                          <Box>
                            <Tooltip title="Recover previous linked db">
                              <IconButton>
                                <AutorenewTwoToneIcon />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="connect to Notion (build a new linked Notion db)">
                              <Link href={`https://www.google.com`}>
                                <IconButton>
                                  <AddLinkTwoToneIcon />
                                </IconButton>
                              </Link>
                            </Tooltip>
                          </Box>
                        )} */}
                      </Box>
                    </CardActionAreaWrapper>
                  </Card>
                ) : null}
                {cardFakeData[0].Category === 'life' ? (
                  <Card variant="outlined" sx={{ backgroundColor: '#C4DDFF' }}>
                    <CardActionAreaWrapper
                      sx={{
                        p: 2,
                      }}
                    >
                      <Box>
                        <img
                          src={LifeIcon}
                          style={{ width: 60, borderRadius: 10 }}
                          alt="Work"
                        />
                      </Box>

                      <Typography variant="h3">{'Life'}</Typography>

                      {/* <Typography
                      sx={{
                        fontSize: `${theme.typography.pxToRem(11)}`,
                        lineHeight: 1,
                      }}
                      variant="subtitle2" */}

                      <Box
                        marginTop="10px"
                        display="flex"
                        alignItems="flex-start"
                        justifyContent={'center'}
                      >
                        {/* <DotLegend
                          style={{
                            background: `${theme.colors.success.main}`,
                          }}
                        /> */}
                        <Typography
                          sx={{
                            fontSize: `${theme.typography.pxToRem(11)}`,
                            lineHeight: 1,
                          }}
                          variant="subtitle2"
                        >
                          <Text color="#111145">Category</Text>
                        </Typography>
                      </Box>
                      {/* // <Text color="success">{user.notionConnect}</Text> */}
                      {/* </Typography> */}
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        marginTop="10px"
                      >
                        <Box>
                          <Tooltip title="Change Category">
                            <IconButton color="primary" size="small">
                              <BorderColorTwoToneIcon />
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </Box>
                    </CardActionAreaWrapper>
                  </Card>
                ) : null}
                {cardFakeData[0].Category === 'knowledge' ? (
                  <Card variant="outlined" sx={{ backgroundColor: '#EAF6F6' }}>
                    <CardActionAreaWrapper
                      sx={{
                        p: 2,
                      }}
                    >
                      <Box>
                        <img
                          src={KnowledgeIcon}
                          style={{ width: 60, borderRadius: 10 }}
                          alt="Knowledge"
                        />
                      </Box>

                      <Typography variant="h3">{'Knowledge'}</Typography>

                      {/* <Typography
                      sx={{
                        fontSize: `${theme.typography.pxToRem(11)}`,
                        lineHeight: 1,
                      }}
                      variant="subtitle2" */}

                      <Box
                        marginTop="10px"
                        display="flex"
                        alignItems="flex-start"
                        justifyContent={'center'}
                      >
                        {/* <DotLegend
                          style={{
                            background: `${theme.colors.success.main}`,
                          }}
                        /> */}
                        <Typography
                          sx={{
                            fontSize: `${theme.typography.pxToRem(11)}`,
                            lineHeight: 1,
                          }}
                          variant="subtitle2"
                        >
                          <Text color="#111145">Category</Text>
                        </Typography>
                      </Box>
                      {/* // <Text color="success">{user.notionConnect}</Text> */}
                      {/* </Typography> */}
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        marginTop="10px"
                      >
                        <Box>
                          <Tooltip title="Change Category">
                            <IconButton color="primary" size="small">
                              <BorderColorTwoToneIcon />
                            </IconButton>
                          </Tooltip>
                        </Box>

                        {/* {cardFakeData.category === 1 ? (
                          <Box>
                            <Tooltip title="Go to linked notion">
                              <Link href={`https://www.google.com`}>
                                <IconButton>
                                  <InsertLinkTwoToneIcon />
                                </IconButton>
                              </Link>
                            </Tooltip>
                            <Tooltip title="disconnect to Notion">
                              <IconButton>
                                <LinkOffTwoToneIcon />
                              </IconButton>
                            </Tooltip>
                          </Box>
                        ) : (
                          <Box>
                            <Tooltip title="Recover previous linked db">
                              <IconButton>
                                <AutorenewTwoToneIcon />
                              </IconButton>
                            </Tooltip>
                            <Tooltip title="connect to Notion (build a new linked Notion db)">
                              <Link href={`https://www.google.com`}>
                                <IconButton>
                                  <AddLinkTwoToneIcon />
                                </IconButton>
                              </Link>
                            </Tooltip>
                          </Box>
                        )} */}
                      </Box>
                    </CardActionAreaWrapper>
                  </Card>
                ) : null}
              </Grid>
              {/* 喜歡 */}
              <Grid item xs={12} sm={3}>
                {cardFakeData[0].Liked === true ? (
                  <Card variant="outlined">
                    <CardActionAreaWrapper
                      sx={{
                        p: 2,
                      }}
                    >
                      <Box>
                        <img
                          src={LikeIcon}
                          style={{ width: 60, borderRadius: 10 }}
                          alt="take-notes.chat"
                        />
                      </Box>

                      <Typography variant="h3">{'Read'}</Typography>

                      {/* <Typography
                      sx={{
                        fontSize: `${theme.typography.pxToRem(11)}`,
                        lineHeight: 1,
                      }}
                      variant="subtitle2" */}

                      {/* TODO: 待搬出去 */}

                      {cardFakeData[0].Liked === true ? (
                        <Box
                          marginTop="10px"
                          display="flex"
                          alignItems="flex-start"
                          justifyContent={'center'}
                        >
                          {/* <DotLegend
                            style={{
                              background: `${theme.colors.success.main}`,
                            }}
                          /> */}
                          <Typography
                            sx={{
                              fontSize: `${theme.typography.pxToRem(11)}`,
                              lineHeight: 1,
                            }}
                            variant="subtitle2"
                          >
                            <Text color="#111145">
                              Press to remove from read
                            </Text>
                          </Typography>
                        </Box>
                      ) : (
                        <Box
                          marginTop="10px"
                          display="flex"
                          alignItems="flex-start"
                          justifyContent={'center'}
                        >
                          {/* <DotLegend
                            style={{
                              background: `${theme.colors.success.main}`,
                            }}
                          /> */}
                          <Typography
                            sx={{
                              fontSize: `${theme.typography.pxToRem(11)}`,
                              lineHeight: 1,
                            }}
                            variant="subtitle2"
                          >
                            <Text color="#111145">Press to add to like</Text>
                          </Typography>
                        </Box>
                      )}
                      {/* // <Text color="success">{user.notionConnect}</Text> */}
                      {/* </Typography> */}
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        marginTop="10px"
                      >
                        {cardFakeData[0].Liked === true ? (
                          <Box>
                            <Tooltip title="Remove from read">
                              <IconButton color="primary" size="small">
                                <FavoriteBorderTwoToneIcon />
                              </IconButton>
                            </Tooltip>
                          </Box>
                        ) : (
                          <Box>
                            <Tooltip title="Add to like">
                              <IconButton color="primary" size="small">
                                <FavoriteTwoToneIcon />
                              </IconButton>
                            </Tooltip>
                          </Box>
                        )}
                      </Box>
                    </CardActionAreaWrapper>
                  </Card>
                ) : (
                  <Card variant="outlined">
                    <CardActionAreaWrapper
                      sx={{
                        p: 2,
                      }}
                    >
                      <Box>
                        <img
                          src={UnlikeIcon}
                          style={{ width: 60, borderRadius: 10 }}
                          alt="take-notes.chat"
                        />
                      </Box>

                      <Typography variant="h3">{'Not read yet'}</Typography>

                      {/* <Typography
                  sx={{
                    fontSize: `${theme.typography.pxToRem(11)}`,
                    lineHeight: 1,
                  }}
                  variant="subtitle2" */}

                      {/* TODO: 待搬出去 */}

                      {cardFakeData[0].Liked === false ? (
                        <Box
                          marginTop="10px"
                          display="flex"
                          alignItems="flex-start"
                          justifyContent={'center'}
                        >
                          {/* <DotLegend
                        style={{
                          background: `${theme.colors.success.main}`,
                        }}
                      /> */}
                          <Typography
                            sx={{
                              fontSize: `${theme.typography.pxToRem(11)}`,
                              lineHeight: 1,
                            }}
                            variant="subtitle2"
                          >
                            <Text color="#111145">Press to add to read</Text>
                          </Typography>
                        </Box>
                      ) : (
                        <Box
                          marginTop="10px"
                          display="flex"
                          alignItems="flex-start"
                          justifyContent={'center'}
                        >
                          <Typography
                            sx={{
                              fontSize: `${theme.typography.pxToRem(11)}`,
                              lineHeight: 1,
                            }}
                            variant="subtitle2"
                          >
                            <Text color="#111145">
                              Press to remove from read
                            </Text>
                          </Typography>
                        </Box>
                      )}
                      {/* // <Text color="success">{user.notionConnect}</Text> */}
                      {/* </Typography> */}
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        marginTop="10px"
                      >
                        {cardFakeData[0].Liked === false ? (
                          <Box>
                            <Tooltip title="Add to read">
                              <IconButton color="primary" size="small">
                                <FavoriteTwoToneIcon />
                              </IconButton>
                            </Tooltip>
                          </Box>
                        ) : (
                          <Box>
                            <Tooltip title="Remove from read">
                              <IconButton color="primary" size="small">
                                <FavoriteBorderTwoToneIcon />
                              </IconButton>
                            </Tooltip>
                          </Box>
                        )}
                      </Box>
                    </CardActionAreaWrapper>
                  </Card>
                )}
              </Grid>
              <Grid item xs={12} sm={3}>
                {cardFakeData[0].Transferred === true ? (
                  <Card variant="outlined" sx={{ backgroundColor: '#CEF1F5' }}>
                    <CardActionAreaWrapper
                      sx={{
                        p: 2,
                      }}
                    >
                      <Box>
                        <img
                          src={IntegrationIcon}
                          style={{ width: 60, height: 60, borderRadius: 10 }}
                          alt="take-notes.chat"
                        />
                      </Box>

                      <Typography variant="h3">{'Exported'}</Typography>
                      <Box
                        marginTop="10px"
                        display="flex"
                        alignItems="flex-start"
                        justifyContent={'center'}
                      >
                        {/* <DotLegend
                            style={{
                              background: `${theme.colors.success.main}`,
                            }}
                          /> */}
                        <Typography
                          sx={{
                            fontSize: `${theme.typography.pxToRem(11)}`,
                            lineHeight: 1,
                          }}
                          variant="subtitle2"
                        >
                          <Text color="#111145">
                            Press to check external page
                          </Text>
                        </Typography>
                      </Box>
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        marginTop="10px"
                      >
                        <Box>
                          <Tooltip title="Go to linked page">
                            <IconButton color="primary" size="small">
                              <InsertLinkTwoToneIcon />
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </Box>
                    </CardActionAreaWrapper>
                  </Card>
                ) : (
                  <Card variant="outlined" sx={{ backgroundColor: '#E7EBC1' }}>
                    <CardActionAreaWrapper
                      sx={{
                        p: 2,
                      }}
                    >
                      <Box>
                        <img
                          src={APIIcon}
                          style={{ width: 60, height: 60, borderRadius: 10 }}
                          alt="take-notes.chat"
                        />
                      </Box>

                      <Typography variant="h3">{'Not expoted'}</Typography>
                      <Box
                        marginTop="10px"
                        display="flex"
                        alignItems="flex-start"
                        justifyContent={'center'}
                      >
                        {/* <DotLegend
                            style={{
                              background: `${theme.colors.success.main}`,
                            }}
                          /> */}
                        <Typography
                          sx={{
                            fontSize: `${theme.typography.pxToRem(11)}`,
                            lineHeight: 1,
                          }}
                          variant="subtitle2"
                        >
                          <Text color="#111145">Press to export</Text>
                        </Typography>
                      </Box>
                      <Box
                        display="flex"
                        flexDirection="column"
                        alignItems="center"
                        marginTop="10px"
                      >
                        <Box>
                          <Tooltip title="Press to export">
                            <IconButton color="primary" size="small">
                              <ImportExportTwoToneIcon />
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </Box>
                    </CardActionAreaWrapper>
                  </Card>
                )}
              </Grid>
              <Grid item xs={12} sm={3}>
                <Card variant="outlined">
                  <CardActionAreaWrapper
                    sx={{
                      p: 2,
                    }}
                  >
                    <Box>
                      <img
                        src={Sundar}
                        style={{ width: 60, height: 60, borderRadius: 10 }}
                        alt="take-notes.chat"
                      />
                    </Box>

                    <Typography variant="h3">{'Sundar Pitchai'}</Typography>

                    {/* <Typography
                      sx={{
                        fontSize: `${theme.typography.pxToRem(11)}`,
                        lineHeight: 1,
                      }}
                      variant="subtitle2" */}

                    {/* TODO: 待搬出去 */}

                    <Box
                      marginTop="10px"
                      display="flex"
                      alignItems="flex-start"
                      justifyContent={'center'}
                    >
                      <Typography
                        sx={{
                          fontSize: `${theme.typography.pxToRem(11)}`,
                          lineHeight: 1,
                        }}
                        variant="subtitle2"
                      >
                        <Text color="#111145">Inspired by chat with</Text>
                      </Typography>
                    </Box>
                    {/* // <Text color="success">{user.notionConnect}</Text> */}
                    {/* </Typography> */}
                    <Box
                      display="flex"
                      flexDirection="column"
                      alignItems="center"
                      marginTop="10px"
                    >
                      <Box>
                        <Tooltip title="Chat">
                          <IconButton>
                            <SmsTwoToneIcon />
                          </IconButton>
                        </Tooltip>
                      </Box>
                    </Box>
                  </CardActionAreaWrapper>
                </Card>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* 標題 */}
        <Typography gutterBottom variant="h3">
          Alex Ling
        </Typography>
        {/* Tag生成，如果有需要要map出來 [tags] */}
        {/* <Box py={2}>
        <Label color="info">Web developer</Label>
        <Box component="span" px={1}>
          <Label color="warning">Javascript</Label>
        </Box>
        <Label color="error">Angular</Label>
      </Box> */}
        {/* 筆記內文 */}
        <Typography
          sx={{
            px: { xs: 4, md: 8 },
          }}
          variant="subtitle2"
        >
          {
            'BAGANONONONONONONONONONONONONO BAGANONONONONONONONONONONONONO BAGANONONONONONONONONONONONONO BAGANONONONONONONONONONONONONO BAGANONONONONONONONONONONONONO'
          }
          .
        </Typography>
        <Divider
          sx={{
            mt: 3,
          }}
        />
        <>
          <React.Fragment key={123}>
            <Divider />
            <ListItem>
              <ListItemAvatar>
                {/* TODO: 目前沒有AVATAR */}
                <Avatar alt="User" src={''} />
              </ListItemAvatar>
              <ListItemText
                // TODO: 改成吃username
                primary={<Text color="black">{'Sundar'}</Text>}
                primaryTypographyProps={{
                  variant: 'h5',
                  // noWrap: true,
                }}
                secondary={
                  'This is test messages This is test messages This is test messages This is test messages This is test messages This is test messages This is test messages This is test messages This is test messages This is test messages This is test messages This is test messages This is test messages This is test messages This is test messages This is test messages '
                }
                secondaryTypographyProps={{
                  variant: 'subtitle2',
                  // noWrap: true,
                }}
              />
            </ListItem>
          </React.Fragment>
        </>
        {/* 這邊要放message from以及內文的itemList */}
        <Divider
          sx={{
            mt: 3,
          }}
        />
        <Stack
          sx={{
            mt: 2.5,
            textAlign: 'center',
          }}
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={2}
        >
          <Box>
            <Typography gutterBottom variant="h4">
              2022-12-30
            </Typography>
            <Typography variant="subtitle2">{'新增時間'}</Typography>
          </Box>
          <Box>
            <Typography gutterBottom variant="h4">
              2022-12-30
            </Typography>
            <Typography variant="subtitle2">{'新增時間'}</Typography>
          </Box>
          <Box>
            <Typography gutterBottom variant="h4">
              Sundar Pichai
            </Typography>
            <Typography variant="subtitle2">{'From'}</Typography>
          </Box>
          <Box>
            <Typography gutterBottom variant="h4">
              <Link href="#" variant="body2">
                Notion Link
              </Link>
            </Typography>
            <Typography variant="subtitle2">{'Exported'}</Typography>
          </Box>
        </Stack>
      </Card>
    </Box>
  );
}

export default CardDetail;
