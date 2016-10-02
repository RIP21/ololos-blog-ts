import React, {PropTypes} from 'react';
import ReactMarkdown from 'react-markdown';

const BlogPostBody = ({post}) => {

  return (
      <ReactMarkdown source={post.body}/>
  );
};

BlogPostBody.propTypes = {
  post: PropTypes.object.isRequired
};

export default BlogPostBody;
