// Imports
import React, { useState, useContext, useLayoutEffect } from "react"
import { v4 as uuid } from "uuid"
import { DropdownContainer, Dropdown, Avatar, Hr } from "tsx-library-julseb"

import { AuthContext } from "../../../context/auth"

import LinkDropdown from "../LinkDropdown"

import { Button } from "./styles"

const DropdownHeader = () => {
    const { user, logoutUser } = useContext(AuthContext)

    const [isOpen, setIsOpen] = useState(false)

    const links = [
        {
            icon: "user",
            to: "/my-account",
            text: "My account",
        },
        {
            icon: "edit",
            to: "/my-account/edit",
            text: "Edit account",
        },
    ]

    const [isMobile, setIsMobile] = useState(true)

    useLayoutEffect(() => {
        window.addEventListener("resize", () => {
            console.log(window.innerWidth)

            if (window.innerWidth <= 600) {
                setIsMobile(true)
            } else {
                setIsMobile(false)
            }
        })
    })

    return (
        <DropdownContainer justifyContent="flex-end">
            <Button onClick={() => setIsOpen(!isOpen)}>
                <Avatar src={user.imageUrl} alt={user.username} size={32} />

                {user.username}
            </Button>

            <Dropdown isOpen={isOpen} position={isMobile ? "left" : "right"}>
                {links.map(link => (
                    <LinkDropdown
                        icon={link.icon}
                        text={link.text}
                        to={link.to}
                        key={uuid()}
                    />
                ))}

                <LinkDropdown icon="user" to="/all-users" text="All users" />

                <Hr style={{ width: "90%" }} />

                <LinkDropdown icon="quit" text="Log out" onClick={logoutUser} />
            </Dropdown>
        </DropdownContainer>
    )
}

export default DropdownHeader
