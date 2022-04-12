import { Link } from "gatsby"
import React from "react"
import "../styles/header.css"

export default function Header() {
    return (
        <header className="header">
            <h1><Link to="/">Newport 1963</Link></h1>
            <span>備忘録のようなもの。Twitter→<a href="https://twitter.com/jathinus" rel="noopener noreferrer" target="_blank">@Jathinus</a></span>
        </header>
    )
}