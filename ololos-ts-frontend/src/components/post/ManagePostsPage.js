import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as postActions from "../../actions/postActions";
import PostList from "./PostList";
import {browserHistory} from 'react-router';
import toastr from 'toastr';
import ToastExceptionsShower from '../../service/toastWrapper';
import {sortNewPostsFirstSelector} from '../../selector/selectors';

class ManagePostsPage extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.redirectToAddPostPage = this.redirectToAddPostPage.bind(this);
    this.deletePost = this.deletePost.bind(this);

  }

  deletePost(event, post) {
    event.preventDefault();
    this.props.actions.deletePost(post.id)
      .then(() => {
        toastr.success('Post deleted');
      })
      .catch(error => {
        ToastExceptionsShower.show(error);
      });
  }

  redirectToAddPostPage() {
    browserHistory.push('/create/post');
  }

  render() {
    const {posts} = this.props;

    return (
      <div>
        <h1>Posts</h1>
        <PostList posts={posts} onDelete={this.deletePost}/>
        <input type="submit"
               value="Add Post"
               className="btn btn-primary"
               onClick={this.redirectToAddPostPage}/>
      </div>
    );
  }
}

ManagePostsPage.propTypes = {
  posts: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};


function mapStateToProps(state) {
  return {
    posts: sortNewPostsFirstSelector(state)
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch),
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ManagePostsPage);
