// Imports
import React, { useContext } from "react"
import { Grid, Input } from "tsx-library-julseb"

import { AuthContext } from "../../context/auth"

const SearchUsers = ({ users, inputs, onChange }) => {
    const { user, isLoggedIn } = useContext(AuthContext)

    const maxLength = 12

    return (
        <Grid
            col={isLoggedIn && user.admin && users.length > maxLength ? 3 : 2}
            gap="l"
        >
            <Input
                label="Search by username"
                id="username"
                onChange={onChange}
                value={inputs.username}
            />

            {isLoggedIn && user.admin && (
                <Input
                    label="Filter by role"
                    type="select"
                    id="role"
                    onChange={onChange}
                    value={inputs.role}
                >
                    <option value="all">All</option>
                    <option value="admin">Admin</option>
                    <option value="user">User</option>
                </Input>
            )}

            {users.length > maxLength && (
                <Input
                    label="Items per page"
                    type="select"
                    id="items"
                    onChange={onChange}
                    value={inputs.items}
                >
                    <option value={12}>12</option>
                    {users.length >= 12 && <option value={24}>24</option>}
                    {users.length >= 24 && <option value={48}>48</option>}
                    {users.length >= 48 && <option value={96}>96</option>}
                </Input>
            )}
        </Grid>
    )
}

export default SearchUsers
