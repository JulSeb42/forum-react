// Imports
import React, { useState, useContext, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios"
import {
    Font,
    Form,
    Input,
    Alert,
    InputImage,
    Autocomplete,
} from "tsx-library-julseb"
import { passwordRegex, getRandom, getRandomAvatar } from "js-utils-julseb"

import { AuthContext } from "../../context/auth"
import authService from "../../api/auth.service"
import cloudinaryService from "../../api/cloudinary.service"

import Page from "../../components/layouts/Page"

import movieQuotes from "../../data/movie-quotes.json"

const Signup = () => {
    const { loginUser } = useContext(AuthContext)
    const navigate = useNavigate()

    // Autocomplete
    const [cities, setCities] = useState([])
    const [filteredCities, setFilteredCities] = useState("")

    useEffect(() => {
        axios
            .get("/allCities.json")
            .then(res =>
                setCities(res.data.map(city => `${city.name}, ${city.country}`))
            )
            .catch(err => console.log(err))
    }, [])

    const handleFilterLocation = e => {
        setLocation(e.target.value)
        setFilteredCities(e.target.value)
    }

    let resultsCities = cities.filter(city => city.toLowerCase().includes(filteredCities.toLowerCase()))

    // Form items
    const [inputs, setInputs] = useState({
        email: "",
        imageUrl: getRandomAvatar("other"),
        password: "",
    })
    const [username, setUsername] = useState("")
    const [location, setLocation] = useState("")
    const [validation, setValidation] = useState("not-passed")
    const [validationUsername, setValidationUsername] = useState("not-passed")
    const [errorMessage, setErrorMessage] = useState(undefined)
    const [isLoading, setIsLoading] = useState(false)

    // Form handles
    const handleUsername = e => {
        setUsername(e.target.value)

        if (e.target.value.length >= 3) {
            setValidationUsername("passed")
        } else {
            setValidationUsername("not-passed")
        }
    }

    const handleChange = e => {
        setInputs({
            ...inputs,
            [e.target.id]: e.target.value,
        })

        if (e.target.id === "password" && passwordRegex.test(e.target.value)) {
            setValidation("passed")
        } else {
            setValidation("not-passed")
        }
    }

    const handleFileUpload = e => {
        e.preventDefault()
        const uploadData = new FormData()
        setIsLoading(true)

        uploadData.append("imageUrl", e.target.files[0])

        cloudinaryService
            .uploadImage(uploadData)
            .then(res => {
                setInputs({
                    ...inputs,
                    imageUrl: res.secure_url,
                })
                setIsLoading(false)
            })
            .catch(err => console.log(err))

        if (e.target.files[0]) {
            setInputs({
                ...inputs,
                imageUrl: e.target.files[0],
            })
            const reader = new FileReader()
            reader.addEventListener("load", () => {
                setInputs({
                    ...inputs,
                    imageUrl: reader.result,
                })
            })
            reader.readAsDataURL(e.target.files[0])
        }
    }

    const handleClickSuggestion = e => setLocation(e.target.innerText)

    // Submit form
    const handleSubmit = e => {
        e.preventDefault()

        const requestBody = {
            ...inputs,
            username,
            location,
            bio: getRandom(movieQuotes),
        }

        authService
            .signup(requestBody)
            .then(res => {
                loginUser(res.data.authToken)
                navigate("/thank-you")
            })
            .catch(err => {
                const errorDescription = err.response.data.message
                setErrorMessage(errorDescription)
            })
    }

    return (
        <Page title="Sign up" mainWidth={400}>
            <Font.H1>Create an account</Font.H1>

            <Form
                btnPrimary="Create your account"
                onSubmit={handleSubmit}
                loading={isLoading}
            >
                <Input
                    label="Username"
                    id="username"
                    onChange={handleUsername}
                    value={username}
                    validationText="Username must be at least 3 characters long"
                    validation={validationUsername}
                    autoFocus
                />

                <Input
                    label="Email"
                    id="email"
                    type="email"
                    onChange={handleChange}
                    value={inputs.email}
                />

                <Input
                    label="Password"
                    id="password"
                    password
                    iconPassword
                    onChange={handleChange}
                    value={inputs.password}
                    validationText="Password must be at least 6 characters long and must contain at least one number, one lowercase and one uppercase letter."
                    validation={validation}
                />

                <Autocomplete
                    label="Location"
                    id="location"
                    onChange={handleFilterLocation}
                    value={location}
                    items={resultsCities}
                    onMouseDown={handleClickSuggestion}
                />

                <InputImage
                    label="Avatar"
                    id="imageUrl"
                    src={inputs.imageUrl}
                    alt="Avatar"
                    onChange={e => handleFileUpload(e)}
                />
            </Form>

            {errorMessage && (
                <Alert as={Font.P} color="danger">
                    {errorMessage}
                </Alert>
            )}

            <Font.P>
                You already have an account? <Link to="/login">Log in</Link>.
            </Font.P>
        </Page>
    )
}

export default Signup
