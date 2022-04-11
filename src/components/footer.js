// src/components/footer.js
import React from "react"
import "../styles/footer.css"

export default function Footer() {
    return (
        <footer className="footer">
             © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.com">Gatsby</a>
        </footer>
    )
}