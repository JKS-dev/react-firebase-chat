import { useEffect, useState } from "react";
import Chat from "./components/chat/Chat";
import Detail from "./components/detail/Detail";
import List from "./components/list/List";
import Login from "./components/login/Login";
import Notification from "./components/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";
import { useUserStore } from "./lib/userStore";
import { useChatStore } from "./lib/chatStore";
import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

const App = () => {
  const { currentUser, isLoading, fetchUserInfo } = useUserStore();
  const { chatId } = useChatStore();
  const navigate = useNavigate();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    });

    return () => {
      unSub();
    };
  }, [fetchUserInfo]);
  console.log(currentUser)

  if (isLoading) return <div className="loading">Loading...</div>;

  return (
    <>
      <BrowserView>
        <div className="container">
          {currentUser ? (
            <>
              <List />
              {chatId && <Chat />}
              {chatId && <Detail />}
            </>
          ) : (
            navigate('/Login')
          )}
          <Notification />
        </div>
      </BrowserView>


      <MobileView>
        <div className="container">
          {currentUser ? (
            <>
              <List />
              {chatId && <Detail />}
            </>
          ) : (
            navigate('/Login')
          )}
          <Notification />
        </div>
      </MobileView>
    </>
  );
};

export default App;
