import React from "react";
import {Route, IndexRoute} from "react-router";
import App from "./components/App";
import HomePage from "./components/home/HomePage";
import PostPage from "./components/post/PostPage";
import EditPostPage from "./components/post/EditPostPage";
import ManagePostsPage from "./components/post/ManagePostsPage";


export default (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="/post" component={PostPage}/>
    <Route path="/post/:id" component={PostPage}/>
    <Route path="/post/edit/:id" component={EditPostPage}/>
    <Route path="/create/post" component={EditPostPage}/>
    <Route path="/admin/posts" component={ManagePostsPage}/>
  </Route>
);
