import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axoisAPI from '../../axoisAPI.ts';
import { Iposts } from '../../types';

const Posts = () => {
  const [posts, setPosts] = useState<Iposts[]>([]); // Инициализация как объект
  const navigate = useNavigate();

  const getPosts =  useCallback(async ()=> {
    try {
      const response = await axoisAPI.get(`posts.json`);
      console.log(response.data);
      if(response.data){
        const array = Object.keys(response.data).map(postkey =>(
          {
            ...response.data[postkey],
            id: postkey,
          }
        ));
        setPosts(array);
      }
    }catch (e){
      console.error(e);
    }
  }, []);

  useEffect(() => {
    void getPosts();
  }, [getPosts]);

  return (
    <>
      {posts.length === 0 ? <>No posts.</> :
        <>
          {posts.map(post => (
            <div key={post.id} className="border border-gray p-2 mb-2 border-opacity-50 w-50 mt-4">
              <div className="row mt-2">
                <p className="col-10">{new Date (post.time).toLocaleString()}</p>
              </div>
              <hr/>
              <div>
                <strong>Title:</strong>
                <span> {post.title}</span>
              </div>
              <hr/>
              <button className="btn btn-primary" onClick={() => navigate(`/post/${post.id}`)}>Read more</button>
            </div>
          ))}
        </>
      }


    </>
  );
};

export default Posts;