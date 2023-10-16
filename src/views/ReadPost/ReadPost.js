import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import blogData from "./../../configs/blogsData.json"
import "./ReadPost.css"

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
      <h1 className='title-read'>{post.title}</h1>
     
      <img src={post.img} alt='img not shown' className='rd-img'/>
      <h4 className='title-read'>By {post.author}</h4>
     <div className='info-read'>
   
      <p>{post.description}</p>
      <p>{post.content}</p>
      <p>Published On {post.publishedDate}</p>
      </div>
      {/* <h1>Read Post{id}</h1> */}
    </div>
  )
}

export default ReadPost
