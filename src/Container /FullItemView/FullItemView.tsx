import { useCallback, useEffect, useState } from 'react';
import { Iposts } from '../../types';
import { useNavigate, useParams } from 'react-router-dom';
import axoisAPI from '../../axoisAPI.ts';
import { NavLink } from 'react-router-dom';

const FullItemView = () => {
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

  const deletePost = async (id: string | undefined) => {

    console.log('work');
    try {
      if (id) {
        console.log('work');
        await axoisAPI.delete<Iposts>(`posts/${id}.json`);
      }
      navigate('/');
    }catch (e) {
      console.log(e)
    }

  };

  return (
    <div className="w-50 border border-gray-200 p-5">
      <div>
        <h1>Title: {post?.title}</h1>
        <p>Text: {post?.text}</p>
        <strong>Time: {post?.time}</strong>
      </div>
      <hr/>
      <div className="mt-2">
        <NavLink className="text-decoration-none text-black" to={`/post/${params.postId}/edit`}>Edit</NavLink>
        <button className="btn btn-primary ms-5" type="button" onClick={() => deletePost(params.postId)}>Delete</button>
      </div>
    </div>
  );
};

export default FullItemView;