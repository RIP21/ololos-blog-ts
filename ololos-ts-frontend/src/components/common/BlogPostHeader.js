import React, {PropTypes} from "react";
import {Link} from "react-router";

const BlogPostHeader = ({post, open = false}) => {
  return (
    <div>
      {!open ?
        <h2 className="blog-post-title"><Link to={`/post/${post.id}`}>{post.title}</Link></h2>
        : <h2 className="blog-post-title"> {post.title}</h2>}
      <p className="blog-post-meta">{post.postdate.toString()} by <Link to={`/author/${post.authorId}`}>{post.authorId}</Link>
      </p>
    </div>
  );
};

BlogPostHeader.propTypes = {
  post: PropTypes.object.isRequired,
  open: PropTypes.bool
};

export default BlogPostHeader;
