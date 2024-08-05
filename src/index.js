import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import NotFound from "./pages/NotFound";
import CreatePost from "./pages/CreatePost";
import EditProfile from "./pages/EditProfile";
import LoginForm from "./pages/LoginForm";
import Post from "./pages/Post";
import PostList from "./pages/PostList";
import RegisterForm from "./pages/RegisterForm";
import Main from "./pages/Main";
import Developer from "./pages/Developer";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <BrowserRouter basename="/Inhelion_Test_3">
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Main />} />
          <Route path="LoginForm" element={<LoginForm />} />
          <Route path="CreatePost" element={<CreatePost />} />
          <Route path="EditProfile/:userId" element={<EditProfile />} />
          <Route path="post/:post_id" element={<Post />} />
          <Route path="PostList/:userId" element={<PostList />} />
          <Route path="RegisterForm" element={<RegisterForm />} />
          <Route path="Developer" element={<Developer />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
