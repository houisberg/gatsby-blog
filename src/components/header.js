import React from "react"
import "../styles/header.css"

export default function Header() {
    return (
        <header className="header">
            <h1>Newport 1963</h1>
            <span>備忘録のようなもの</span> <span>Twitter→<a href="https://twitter.com/jathinus" rel="noopener" target="_blank">@Jathinus</a></span>
        </header>
    )
}