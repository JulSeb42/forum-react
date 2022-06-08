// Imports
import styled from "styled-components"
import { Link } from "react-router-dom"

import { Variables, Image, Mixins } from "tsx-library-julseb"

const Img = styled(Image)`
    position: absolute;
    z-index: 0;
    transition: ${Variables.Transitions.Short};
`

const Container = styled(Link)`
    position: relative;
    aspect-ratio: 1;
    color: ${Variables.Colors.White};
    border-radius: ${Variables.Radiuses.M};
    overflow: hidden;
    box-shadow: ${Variables.Shadows.M};
    text-decoration: none;
    transition: ${Variables.Transitions.Short};

    &:hover {
        box-shadow: ${Variables.Shadows.XL};

        ${Img} {
            transform: scale(1.05);
        }
    }
`

const Content = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    z-index: 1;
    background: ${Variables.Overlays.Gradient.Black};
    ${Mixins.Flexbox({
        direction: "column",
        justifyContent: "flex-end",
    })};
    padding: ${Variables.Spacers.XS};
`

const Title = styled.span`
    ${Mixins.Flexbox({
        alignItems: "center",
        gap: Variables.Spacers.XS,
    })};
`

export { Container, Img, Content, Title }
