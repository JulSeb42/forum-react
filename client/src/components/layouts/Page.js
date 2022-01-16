// Packages
import React from "react"

// Components
import Helmet from "./Helmet"
import Header from "./Header"
import Container from "./Container"

function Page(props) {
    return (
        <>
            <Helmet
                title={props.title}
                description={props.description}
                keywords={props.keywords}
            />

            <Header />


            <Container>
                {props.children}
            </Container>
        </>
    )
}

export default Page
