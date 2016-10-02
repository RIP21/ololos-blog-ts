import * as types from './actionTypes';
import BlogPostApi from '../api/mockBlogpostApi';
import {beginAjaxCall, ajaxCallError} from './ajaxStatusActions';
import * as Exception from './../exceptions/exceptions';

export function loadPostsSuccess(posts) {
  return {type: types.LOAD_POSTS_SUCCESS, posts};
}

export function createPostSuccess(post) {
  return {type: types.CREATE_POST_SUCCESS, post};
}

export function updatePostSuccess(post) {
  return {type: types.UPDATE_POST_SUCCESS, post};
}

export function deletePostSuccess(post) {
  return {type: types.DELETE_POST_SUCCESS, post};
}


export function loadPosts() {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return BlogPostApi.getAll().then((courses) => {
      dispatch(loadPostsSuccess(courses));
    }).catch((error) => {
      throw (new Exception.Error(error));
    });
  };
}

export function savePost(post) {
  return function (dispatch) {
    dispatch(beginAjaxCall());
    return BlogPostApi.save(post).then((savedPost) => {
      post.id ? dispatch(updatePostSuccess(savedPost)) :
        dispatch(createPostSuccess(savedPost));
    }).catch((error) => {
      dispatch(ajaxCallError());
      throw (new Exception.Error(error));
    });
  };
}
export function deletePost(postId) {
  return (dispatch) => {
    dispatch(beginAjaxCall());
    return BlogPostApi.deletePost(postId).then((post) => {
      dispatch(deletePostSuccess(post));
    }).catch((error) => {
      dispatch(ajaxCallError());
      throw (new Exception.Error(error));
    });
  };
}

