import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ChatList from './pages/chatList/chatList.jsx';
import Chats from './pages/chats/chats.jsx';
import Login from './pages/login/Login.jsx';

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// )
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <Router>
    <Routes>
      <Route exact path="/"  element={<App/>} />
      <Route path="/chatList" element={<ChatList/>}  />
      <Route path="/chats" element={<Chats/>} />
      <Route path="/Login" element={<Login/>} />
      <Route element={<App/>}  />
    </Routes>
  </Router>
  </React.StrictMode>
);