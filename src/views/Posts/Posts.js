import React from 'react'
import blogData from "./../../configs/blogsData.json"
import "./Posts.css"
import PreviewPostCard from '../../components/PreviewPostCard/PreviewPostCard'
function Posts() {
  return (
    <div>
      <h1 className='post-heading1'>Mobiles</h1>
      {
        blogData.map((post, index)=>{
return <PreviewPostCard key={index} id= {post.id} title={post.title} description={post.description} blogContent={post.blogContent}/>
        })

      }
    </div>
  )
}

export default Posts
