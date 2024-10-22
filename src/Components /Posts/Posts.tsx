import { useState } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([
    {
      id: "1",
      title:"fvghjk",
      text:'asdfgh',
      time: new Date(),
    },
    {
      id: "2",
      title:"dfgbhn",
      text:'asdfgh',
      time: new Date(),
    },
    {
      id: "3",
      title:"fasdfg",
      text:'asdfgh',
      time: new Date(),
    }
  ]);
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id} className="border border-gray p-2 mb-2 border-opacity-50 w-50 mt-4">
          <div className="row mt-2">
            <p className="col-10">{post.time.toLocaleString()}</p>
            <button className="btn btn-close ms-5 col-9"></button>
          </div>
          <hr/>
          <div>
            <strong>Title:</strong>
            <span> {post.title}</span>
          </div>
          <div>
            <strong>Text:</strong>
            <p> {post.text}</p>
          </div>
          <hr/>
          <button className="btn btn-primary ">Read more</button>
        </div>
      ))}

    </div>
  );
};

export default Posts;