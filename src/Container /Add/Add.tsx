import { useState } from 'react';
import { Iposts } from '../../types';
import * as React from 'react';

const Add = () => {
  const [posts, setPosts] = useState<Iposts[]>([]);
  const[inputPost, setInputPost] = useState('');
  const [text, setText] = useState('');

  const savePost = (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();
  }
  return (
    <div className="w-50">
      <h3>Add new post</h3>
      <form onSubmit={savePost}>
        <label className="form-label mt-3">Title</label>
        <input
          className="form-control"
          type="text"
          value={inputPost}
          onChange={(e) => setInputPost(e.target.value)}
        />
        <label className="form-label mt-3">Description</label>
        <textarea
          className="form-control"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button className="btn btn-primary" type="submit">Save</button>
      </form>

    </div>
  );
};

export default Add;