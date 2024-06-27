import { isMobile } from "react-device-detect"
import ChatList from "./chatList/ChatList"
import "./list.css"
import Userinfo from "./userInfo/Userinfo"

const List = () => {
  return (
    <div className={isMobile ? 'list Mobile' : 'list desktop'}>
      <Userinfo/>
      <ChatList/>
    </div>
  )
}

export default List