// Packages
import React from "react"
import { Helmet as HelmetMeta } from "react-helmet"

// Data
import SiteData from "../data/SiteData"

function Helmet(props) {
    return (
        <HelmetMeta>
            <title>
                {props.title} | {SiteData.Name}
            </title>
            <link rel="icon" href={SiteData.Favicon} />
            <meta content="IE=edge" http-equiv="X-UA-Compatible" />
            <meta
                content="width=device-width, initial-scale=1"
                name="viewport"
            />
            <meta
                name="description"
                content={
                    props.description ? props.description : SiteData.Description
                }
            />
            <meta
                name="keywords"
                content={`${props.keywords}, ${SiteData.Keywords}`}
            />
            <meta name="author" content={SiteData.Author} />
            <meta property="og:title" content={props.title} />
            <meta property="og:type" content={SiteData.Type} />
            <meta property="og:image" content={SiteData.Cover} />
            <meta property="og:site_name" content={SiteData.Title} />
            <meta property="og:locale" content={SiteData.Language} />
        </HelmetMeta>
    )
}

export default Helmet
