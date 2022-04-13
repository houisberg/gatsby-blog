import React from "react"
import { Helmet } from "react-helmet"

const Seo = ({ title, description }) => {
    return (
        <Helmet
            htmlAttributes={{ lang: "ja-jp" }}
            title={title}
            titleTemplate={`%s`}
            meta={[
                {
                    name: `description`,
                    content: description,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: description,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },
                {
                    property: `og:site_name`,
                    content: `Newport 1963`,
                },
                {
                    property: `og:url`,
                    content: `https://newport1963.com`
                },
                {
                    property: `og:image`,
                    content: `https://newport1963.com/favicon.svg`
                },
                {
                    property: `og:locale`,
                    content: `ja_JP`,
                },
                {
                    name: `twitter:card`,
                    content: `summary`
                },
                {
                    name: `twitter:image`,
                    content: `https://newport1963.com/favicon.svg`
                },
                {
                    name: `twitter:site:id`,
                    content: `@Jathinus`
                },
                {
                    name: `twitter:creator`,
                    content: `@Jathinus`
                },
            ]}
        />
    )
}

export default Seo