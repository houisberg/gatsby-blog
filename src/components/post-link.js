import { Link } from "gatsby";
import React from "react"
import "../styles/post-link.css"

export default function PostLink({ post }) {
    const { title, createdAt } = post;
    const description = post.description?.description ?? '';
    const pageLink = `/post/${post.slug}/`

    return (
        <Link to={pageLink} className="post-link-anchor">
            <div className="post-link">
                <div className="post-link-text">
                    <h2>{title}</h2>
                    <p className="post-link-body">{description}</p>
                    <p className="post-link-date">{createdAt}</p>
                </div>
            </div>
        </Link>
    )
}