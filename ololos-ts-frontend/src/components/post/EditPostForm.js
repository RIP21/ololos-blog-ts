import React, {PropTypes} from 'react';
import SimpleMDE from 'react-simplemde-editor';
import TextInput from '../common/TextInput';

const EditPostForm = ({saving, onSave, post, onChange, errors, handleEditorChange}) => {
  return (
    <form>
      {post.id == '' ? <h1>Create post</h1> : <h1>Edit post</h1>}

      <TextInput
        name="title"
        label="Title"
        value={post.title}
        onChange={onChange}
        error={errors.title}
      />
      <SimpleMDE onChange={handleEditorChange} value={post.body} options={{
        autofocus: true,
        spellChecker: false
      }}/>
      <input
        type="submit"
        disabled={saving}
        value={saving ? 'Saving...' : 'Save'}
        className="btn btn-primary"
        onClick={onSave}
      />
    </form>
  );
};

EditPostForm.propTypes = {
  saving: PropTypes.bool,
  onSave: PropTypes.func,
  post: PropTypes.object,
  onChange: PropTypes.func.isRequired,
  handleEditorChange: PropTypes.func.isRequired,
  errors: PropTypes.object
};

export default EditPostForm;
