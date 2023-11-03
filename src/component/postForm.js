import React, { useState } from 'react';

const PostForm = ({ addPost }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');
  const [content, setContent] = useState('');
  const [timestamp, setTimestamp] = useState(new Date());
  const [tags, setTags] = useState([]);
  const [status, setStatus] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const newPost = { title, author, content, timestamp, tags, status };
    addPost(newPost);
    setTitle('');
    setAuthor('');
    setContent('');
    setTimestamp(new Date());
    setTags([]);
    setStatus(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" className="form-control" value={title} onChange={e => setTitle(e.target.value)} placeholder="Title" required />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" value={author} onChange={e => setAuthor(e.target.value)} placeholder="Author" required />
      </div>
      <div className="form-group">
        <textarea className="form-control" value={content} onChange={e => setContent(e.target.value)} placeholder="Content" required />
      </div>
      <div className="form-group">
        <input type="text" className="form-control" value={tags} onChange={e => setTags(e.target.value.split(','))} placeholder="Tags (comma-separated)" />
      </div>
      <button type="submit" className="btn btn-primary">Add Post</button>
    </form>
  );
};

export default PostForm;
