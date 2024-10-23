import { useState } from 'react';
import * as React from 'react';
import axoisAPI from '../../axoisAPI.ts';
import { IPosrAddMutation } from '../../types';
import { useNavigate } from 'react-router-dom';

const initialStateToAuthor ={
  title:'',
  text:'',
};

const Add = () => {
  const [author, setAuthor] = useState(initialStateToAuthor);
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = e.target;
    setAuthor(prevState => {
      return{
        ...prevState,
        [name]: value,
      }
    })
  }
  const savePost = async (e: React.FormEvent<HTMLFormElement>) =>{
    e.preventDefault();

    const postAdd = {
      title: author.title,
      text: author.text,
    };

    try{
      await axoisAPI.post<IPosrAddMutation>('posts.json', {...postAdd, time: new Date().toISOString()});
    }catch (e){
      console.error(e);
    }
    console.log(postAdd);
    setAuthor({...initialStateToAuthor});
    navigate('/');
  }
  return (
    <div className="w-50">
      <h3>Add new post</h3>
      <form onSubmit={savePost}>
        <label className="form-label mt-3">Title</label>
        <input
          className="form-control"
          type="text"
          name="title"
          value={author.title}
          onChange={onChange}
        />
        <label className="form-label mt-3">Description</label>
        <textarea
          className="form-control"
          name="text"
          value={author.text}
          onChange={onChange}
        />
        <button className="btn btn-primary mt-2" type="submit">Save</button>
      </form>

    </div>
  );
};

export default Add;