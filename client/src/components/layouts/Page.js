// Imports
import React from "react"
import PropTypes from "prop-types"
import { Helmet, Main } from "tsx-library-julseb"

import Header from "../header/Header"
import Wrapper from "./Wrapper"

import siteData from "../../data/siteData"

const Page = ({
    title,
    description,
    keywords,
    cover,
    template = "1col",
    children,
    mainWidth,
}) => {
    return (
        <>
            <Helmet
                title={`${title} | ${siteData.name}`}
                description={description}
                keywords={[siteData.keywords, keywords]}
                siteName={siteData.name}
                favicon={siteData.favicon}
                author={siteData.author}
                type={siteData.type}
                cover={cover || siteData.cover}
                language={siteData.language}
            />

            <Header />

            <Wrapper
                template={template || "1col"}
                style={{ backgroundColor: "var(--background-color)" }}
            >
                {template === "1col" ? (
                    <Main width={mainWidth}>{children}</Main>
                ) : (
                    children
                )}
            </Wrapper>
        </>
    )
}

Page.propTypes = {
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    keywords: PropTypes.array,
    cover: PropTypes.string,
    template: PropTypes.string,
    mainWidth: PropTypes.number,
    children: PropTypes.any,
}

export default Page
