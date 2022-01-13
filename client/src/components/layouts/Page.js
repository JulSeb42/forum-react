// Packages
import React from "react"

// Components
import Helmet from "./Helmet"
import Header from "./Header"

function Page(props) {
    return (
        <>
            <Helmet
                title={props.title}
                description={props.description}
                keywords={props.keywords}
            />

            <Header />

            {props.children}
        </>
    )
}

export default Page
