// Imports
import styled, { css } from "styled-components"
import { NavLink } from "react-router-dom"
import { Burger, Variables } from "tsx-library-julseb"
import PropTypes from "prop-types"

const Container = styled.header`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${Variables.Spacers.M} 5vw;
    position: fixed;
    background-color: ${({ isScrolled, isOpen }) =>
        (isScrolled || isOpen) && Variables.Colors.White};
    box-shadow: ${({ isScrolled }) => isScrolled && Variables.Shadows.L};
    transition: ${Variables.Transitions.Short};
    z-index: 999;
    gap: ${Variables.Spacers.M};
`

const MenuButton = styled(Burger)`
    display: none;
    color: ${Variables.Colors.Primary500};

    @media ${Variables.Breakpoints.Mobile} {
        display: inline;
    }
`

const Nav = styled.nav`
    display: flex;
    align-items: center;

    & > *:not(:last-child) {
        margin-right: ${Variables.Spacers.M};
    }

    @media ${Variables.Breakpoints.Mobile} {
        position: absolute;
        flex-direction: column;
        align-items: flex-start;
        left: 0;
        width: 100%;
        top: ${props => (props.isOpen ? 56 : -250)}px;
        padding: ${Variables.Spacers.XS} 5vw;
        z-index: 999;
        background-color: ${Variables.Colors.White};
        transition: ${Variables.Transitions.Short};

        & > *:not(:last-child) {
            margin-right: 0;
            margin-bottom: ${Variables.Spacers.XS};
        }
    }

    form {
        width: 150px;
    }
`

const MenuLinkStyled = styled(NavLink)`
    text-decoration: none;
    color: ${Variables.Colors.Primary500};
    transition: ${Variables.Transitions.Short};
    padding: 0;
    border: none;
    background: none;
    font-size: ${Variables.FontSizes.Body};

    &:hover {
        color: ${Variables.Colors.Primary300};
    }

    &:active {
        color: ${Variables.Colors.Primary600};
    }

    &.active {
        font-weight: ${Variables.FontWeights.Black};
    }

    ${({ logo }) =>
        logo === 1 &&
        css`
            font-weight: ${Variables.FontWeights.Black};
        `}
`

Nav.propTypes = {
    isOpen: PropTypes.bool,
}

MenuLinkStyled.propTypes = {
    logo: PropTypes.number,
}

export { Container, MenuButton, Nav, MenuLinkStyled }
