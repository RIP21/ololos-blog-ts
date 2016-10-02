import React, {PropTypes} from "react";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import * as postActions from "../../actions/postActions";
import {getById} from "../../selector/selectors";
import BlogPost from "../../components/common/BlogPost";


class PostPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      post: Object.assign({}, props.post),
      errors: {},
      saving: false,
    };

  }

  componentWillReceiveProps(nextProps) {
    if (this.props.post.id != nextProps.post.id) {
      // Necessary to populate form when existing author is loaded directly.
      this.setState({post: Object.assign({}, nextProps.post)});
    }
  }

  render() {
    return (
      <div className="blog-main">
        <BlogPost post={this.state.post} open/>
      </div>
    );
  }
}

PostPage.propTypes = {
  post: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  errors: PropTypes.object,
  saving: PropTypes.bool
};


function mapStateToProps(state, ownProps) {
  const postId = ownProps.params.id;
  let post = {id: '', authorId: '', body: '', postdate: '', title: ''};

  if (postId && state.posts.length > 0) {
    post = getById(state.posts, postId);
  }

  return {
    post,
    posts: state.posts
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(postActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
