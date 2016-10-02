import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const PostListRow = ({post, onDelete}) => {
  return (
    <tr>
      <td><a href="#" onClick={event => onDelete(event, post)}>Delete</a></td>
      <td><Link to={'/post/edit/' + post.id}>Edit</Link></td>
      <td>{post.id}</td>
      <td><Link to={'/post/' + post.id}>{post.title}</Link></td>
      <td>{post.authorId}</td>
      <td>{post.postdate.toString()}</td>
    </tr>
  );
};

PostListRow.propTypes = {
  post: PropTypes.object.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default PostListRow;
