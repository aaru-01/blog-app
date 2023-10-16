import React from 'react'
import "./PreviewPostCard.css"
import { Link } from 'react-router-dom'

function PreviewPostCard({ id, title, author, description, blogContent }) {
    return (
        <div className='preview-post-card'>
            <h2>{title}</h2>
            <span>{author}</span>
            <p>{description}</p>
            <p>{blogContent}</p>
            <Link to={`/posts/read/${id}`}>Read More</Link>
        </div>
    )
}

export default PreviewPostCard
