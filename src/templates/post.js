import React from "react"
import Layout from "../components/layout";
import Seo from "../components/seo";
import { Link } from "gatsby";
import "../styles/post.css"

export default function Post({ pageContext }) {
    const { title, createdAt } = pageContext.post;
    const description = pageContext.post.description.description
    const body = pageContext.post.body.childMarkdownRemark.html;
    const previous = pageContext.previous
    const next = pageContext.next
    
    return (
        <Layout>
            <Seo title={title} description={description} />
            <div className="post-header">
                <h1>{title}</h1>
                <p className="post-date">{createdAt}</p>
            </div>
            <div dangerouslySetInnerHTML={{ __html: body }} className="post-body" />
            <hr></hr>
            
            <nav className="blog-post-nav">
                <ul
                style={{
                    display: `flex`,
                    flexWrap: `wrap`,
                    justifyContent: `space-between`,
                    listStyle: `none`,
                    padding: 0,
                }}
                >
                <li>
                    {previous && (
                    <Link to={`/post/${previous.slug}/`} rel="prev">
                        ← {previous.title}
                    </Link>
                    )}
                </li>
                <li>
                    {next && (
                    <Link to={`/post/${next.slug}/`}  rel="next">
                        {next.title} →
                    </Link>
                    )}
                </li>
                </ul>
            </nav>
        </Layout>
    )
}