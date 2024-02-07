import React, { useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
// import { AppBar, Toolbar, Typography, InputBase, IconButton, makeStyles } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';

// const useStyles = makeStyles((theme) => ({
//     search: {
//       position: 'relative',
//       borderRadius: theme.shape.borderRadius,
//       backgroundColor: 'rgba(255, 255, 255, 0.15)',
//       '&:hover': {
//         backgroundColor: 'rgba(255, 255, 255, 0.25)',
//       },
//       marginRight: theme.spacing(2),
//       marginLeft: 0,
//       width: '100%',
//       [theme.breakpoints.up('sm')]: {
//         marginLeft: theme.spacing(3),
//         width: 'auto',
//       },
//     },
//     searchIcon: {
//       padding: theme.spacing(0, 2),
//       height: '100%',
//       position: 'absolute',
//       pointerEvents: 'none',
//       display: 'flex',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//     inputRoot: {
//       color: 'inherit',
//     },
//     inputInput: {
//       padding: theme.spacing(1, 1, 1, 0),
//       paddingLeft: `calc(1em + ${theme.spacing(4)})`,
//       transition: theme.transitions.create('width'),
//       width: '100%',
//       [theme.breakpoints.up('md')]: {
//         width: '20ch',
//       },
//     },
//   }));

const ChatScreen = () => {
  const [messages, setMessages] = useState([]);

  const onSend = (newMessages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, newMessages)
    );
  };

  return (
    <>
        {/* <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" noWrap>
            Chat
          </Typography>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        </Toolbar>
      </AppBar> */}
      <GiftedChat
      messages={messages}
      onSend={newMessages => onSend(newMessages)}
      user={{ _id: 1 }}
    />
    </>
  );
};

export default ChatScreen;
