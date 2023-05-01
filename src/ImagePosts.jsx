// import React from 'react'

import { useEffect, useState } from "react"
import LazyLoadPost from "./LazyLoadPost";

const ImagePosts = () => {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/photos/")
        .then((response)=>response.json())
        .then((json)=>setPosts(json));
        // console.log(json);
        })
        
  return (
    <div className="container">
        <h1>Posts Images</h1>
        <div className="container d-flex flex-column">
    {posts.map((post)=>
        <LazyLoadPost key={post.id} title={post.title} img={post.url}/>
    )}
        </div>
    </div>
  )
}

export default ImagePosts