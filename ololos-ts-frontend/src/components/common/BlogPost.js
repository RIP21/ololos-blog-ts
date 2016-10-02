import React, {PropTypes} from 'react';
import BlogPostBody from '../common/BlogPostBody';
import BlogPostHeader from '../common/BlogPostHeader';

const BlogPost = ({post, open}) => {
  return (
    <div className="blog-post">
      <BlogPostHeader post={post} open={open}/>
      <BlogPostBody post={post}/>
    </div>
  );
};

BlogPost.propTypes = {
  post: PropTypes.object.isRequired,
  open: PropTypes.bool
};

export default BlogPost;
