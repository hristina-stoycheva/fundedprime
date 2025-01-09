import React, { useEffect, useState } from "react";
import {fetchPosts} from "../api";

const Posts = () => {
  const [posts, setPosts] = useState([]);
 
  useEffect(() => {
    const fetchData = async () => {
      const fetchedPosts = await fetchPosts();
      setPosts(fetchedPosts);

    };
    fetchData();
  }, []);

  return (
    <div>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title.rendered}</h2>
          <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
        </div>
      ))}
    </div>
  );
};

export default Posts;
