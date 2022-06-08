// Imports
import React, { useContext } from "react"
import { Flexbox, Avatar, Icon, Font, Grid } from "tsx-library-julseb"

import { AuthContext } from "../../context/auth"

import CardContainer from "../ui/CardContainer"
import ButtonConversation from "./ButtonConversation"
import SetAdmin from "./SetAdmin"
import TitleFlex from "../ui/TitleFlex"

const CardUser = ({ user, account, edited, setEdited }) => {
    const { imageUrl, username, location, bio } = user
    const { isLoggedIn } = useContext(AuthContext)

    return (
        <CardContainer as={Grid} gap="s">
            <TitleFlex>
                <Flexbox gap="s" alignItems="center" as="span">
                    <Avatar size={32} src={imageUrl} alt={username} />

                    <Font.H2 style={{ flexGrow: 1 }}>
                        {account && "Hello "}
                        {username}
                    </Font.H2>
                </Flexbox>

                {isLoggedIn && (
                    <ButtonConversation
                        user={user}
                        edited={edited}
                        setEdited={setEdited}
                    />
                )}
            </TitleFlex>

            <Font.P as={Flexbox} gap="xxs" alignItems="center" color="gray">
                <Icon size={16} src="map" />

                {location ? location : "Earth"}
            </Font.P>

            <Font.P>{bio && bio}</Font.P>

            <SetAdmin user={user} />
        </CardContainer>
    )
}

export default CardUser
