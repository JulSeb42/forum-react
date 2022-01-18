// Packages
import styled from "styled-components"

// Components
import * as Variables from "../styles/Variables"

const ListNotifications = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${Variables.Margins.M};

    & > div:not(:last-child) {
        border-bottom: 1px solid ${Variables.Colors.LightGray};
        padding-bottom: ${Variables.Margins.M};
    }
`

export default ListNotifications
