import "./userInfo.css"
import { useUserStore } from "../../../lib/userStore";
import { auth } from "../../../lib/firebase";
import { useChatStore } from "../../../lib/chatStore";
import { isMobile } from "react-device-detect";

const Userinfo = () => {

  const { currentUser } = useUserStore();
  const { resetChat } = useChatStore();
  const handleLogout = () => {
    auth.signOut();
    resetChat()
  };
  return (
    <div className={isMobile ? 'userInfo Mobile' : 'userInfo desktop'}>
      <div className="user">
        <img src={currentUser.avatar || "./avatar.png"} alt="" />
        <h2>{currentUser.username}</h2>
      </div>
      <div className="icons">
        <svg xmlns="http://www.w3.org/2000/svg" onClick={handleLogout} stroke-width="10px" class="Logout" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M6 12.5a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-8a.5.5 0 0 0-.5.5v2a.5.5 0 0 1-1 0v-2A1.5 1.5 0 0 1 6.5 2h8A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-8A1.5 1.5 0 0 1 5 12.5v-2a.5.5 0 0 1 1 0z"/>
  <path fill-rule="evenodd" d="M.146 8.354a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L1.707 7.5H10.5a.5.5 0 0 1 0 1H1.707l2.147 2.146a.5.5 0 0 1-.708.708z"/>
</svg>
      </div>
    </div>
  )
}

export default Userinfo