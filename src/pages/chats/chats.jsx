import { useEffect } from "react";
import Chat from "../../components/chat/Chat";
import Detail from "../../components/detail/Detail";
import List from "../../components/list/List";
import Login from "../../components/login/Login";
import Notification from "../../components/notification/Notification";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../lib/firebase";
import { useUserStore } from "../../lib/userStore";
import { useChatStore } from "../../lib/chatStore";
import { useNavigate } from "react-router-dom";

const Chats = () => {
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
    <div className="container">
      {currentUser ? (
        <>
          {chatId ?<Chat />:navigate('/')}
          {chatId && <Detail />}
        </>
      ) : (
        navigate('/Login')
      )}
      <Notification />
    </div>
  );
};

export default Chats;
