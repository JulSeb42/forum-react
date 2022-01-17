// Packages
import React, { useContext, useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, Navigate } from "react-router-dom"

// Components
import { AuthContext } from "../../context/auth"
import * as Font from "../../components/styles/Font"
import Page from "../../components/layouts/Page"
import Form from "../../components/forms/Form"
import Input from "../../components/forms/Input"
import Link from "../../components/utils/LinkScroll"
import ErrorMessage from "../../components/forms/ErrorMessage"
import ListSuggestions from "../../components/forms/ListSuggestions"

// Utils
import getRandomString from "../../components/utils/getRandomString"
import randomAvatar from "../../components/utils/randomAvatar"

// Data
import ListCities from "../../components/data/cities.json"

// username,
// email,
// password,
// verifyToken,
// imageUrl,
// gender,
// location,

function Signup() {
    const { loginUser, isLoggedIn } = useContext(AuthContext)
    const navigate = useNavigate()

    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [gender, setGender] = useState("other")
    const [location, setLocation] = useState("")
    const [errorMessage, setErrorMessage] = useState(undefined)

    const handleUsername = e => setUsername(e.target.value)
    const handleEmail = e => setEmail(e.target.value)
    const handlePassword = e => setPassword(e.target.value)
    const handleGender = e => setGender(e.target.value)

    const [cities, setCities] = useState([])

    useEffect(() => {
        setCities(ListCities.map(city => `${city.name}, ${city.country}`))
    }, [])

    const [filteredCities, setFilteredCities] = useState("")

    const handleFilterLocation = e => {
        setLocation(e.target.value)
        setFilteredCities(e.target.value)
    }

    let resultsCities = cities.filter(city => {
        return city.toLowerCase().includes(filteredCities.toLowerCase())
    })

    const handleClickSuggestion = e => {
        setLocation(e.target.innerText)
    }

    const handleSubmit = e => {
        e.preventDefault()

        const requestBody = {
            username,
            email,
            password,
            imageUrl: randomAvatar(gender),
            gender,
            location,
            verifyToken: getRandomString(20),
        }

        axios
            .put("/auth/signup", requestBody)
            .then(res => {
                navigate("/thank-you")
                loginUser(res.data)
            })
            .catch(err => {
                const errorDescription = err.response.data.message
                setErrorMessage(errorDescription)
            })
    }

    return isLoggedIn ? (
        <Navigate to="/my-account" />
    ) : (
        <Page title="Signup" noAside>
            <Font.H1>Signup</Font.H1>

            <Form onSubmit={handleSubmit} btnprimary="Create your account">
                <Input
                    label="Username"
                    id="username"
                    onChange={handleUsername}
                    value={username}
                />

                <Input
                    label="Email"
                    type="email"
                    id="email"
                    onChange={handleEmail}
                    value={email}
                />

                <Input
                    label="Gender"
                    as="select"
                    id="gender"
                    onChange={handleGender}
                    defaultValue={gender}
                >
                    <option value="male">Man</option>
                    <option value="female">Woman</option>
                    <option value="other">Other</option>
                </Input>

                <ListSuggestions
                    label="Location"
                    id="location"
                    onChange={handleFilterLocation}
                    value={location}
                    items={resultsCities}
                    onMouseDown={handleClickSuggestion}
                />

                <Input
                    label="Password"
                    inputtype="password"
                    id="password"
                    onChange={handlePassword}
                    value={password}
                />
            </Form>

            <Font.P>
                You already have an account? <Link to="/login">Log in</Link>
            </Font.P>

            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
        </Page>
    )
}

export default Signup
