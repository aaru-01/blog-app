import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import blogData from "./../../configs/blogsData.json"

function ReadPost() {
  const{ id } = useParams()

  const [post, setPost] = useState({})
  
  // blogData.forEach((postObj)=>{
  //   if(postObj.id === id){
  //     setPost(postObj)
  //   }
  // })

  useEffect(()=>{
    blogData.forEach((postObj)=>{
      if(postObj.id == id){
        setPost(postObj)
      }
    })
  },[id])

  return (
    <div>
      <h1>{post.title}</h1>
      <span>By {post.author}</span>
      <p>{post.description}</p>
      <p>{post.content}</p>
      <p>Published On {post.publishedDate}</p>
      {/* <h1>Read Post{id}</h1> */}
    </div>
  )
}

export default ReadPost
