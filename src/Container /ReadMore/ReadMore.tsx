import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axoisAPI from '../../axoisAPI.ts';
import { Iposts } from '../../types';

const ReadMore = () => {
  const [post, setPost] = useState<Iposts | null>(null);
  const navigate = useNavigate();
  const params = useParams<{ postId: string }>();

  const fetchOnePost = useCallback(async (id: string) => {
    const response = await axoisAPI.get<Iposts>(`posts/${id}.json`);
    if (response.data) {
      setPost(response.data);
    }
  }, []);

  useEffect(() => {
    if (params.postId) {
      void fetchOnePost(params.postId);
    }
  }, [params.postId, fetchOnePost]);

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (!post) return;

    const { name, value } = e.target;
    setPost(prevState => {
      if (prevState) {
        return {
          ...prevState,
          [name]: value,
        };
      }
      return null;
    });
  };

  const savePost = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (post) {
      try {
        await axoisAPI.put(`posts/${params.postId}.json`, post);
        navigate(`/`);
      } catch (error) {
        console.error(error);
      }
    }
  };

  return (
    post && (
      <div className="w-50">
        <h3>Edit post</h3>
        <form onSubmit={savePost}>
          <label className="form-label mt-3">Title</label>
          <input
            className="form-control"
            type="text"
            name="title"
            value={post.title}
            onChange={onChangeInput}
          />
          <label className="form-label mt-3">Description</label>
          <textarea
            className="form-control"
            name="text"
            value={post.text}
            onChange={onChangeInput}
          />
          <button className="btn btn-primary mt-2" type="submit">Edit</button>
        </form>
      </div>
    )
  );
};

export default ReadMore;
