// Imports
import React, { useContext, useState, useEffect } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"
import {
    Font,
    Form,
    Input,
    Alert,
    Autocomplete,
    InputImage,
} from "tsx-library-julseb"

import { AuthContext } from "../../context/auth"
import usersService from "../../api/users.service"
import cloudinaryService from "../../api/cloudinary.service"

import Page from "../../components/layouts/Page"
import DangerZone from "../../components/DangerZone"

const EditAccount = ({ edited, setEdited }) => {
    const { user, setUser, setToken, logoutUser } = useContext(AuthContext)
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

    let resultsCities = cities.filter(city =>
        city.toLowerCase().includes(filteredCities.toLowerCase())
    )

    // Form items
    const [inputs, setInputs] = useState({
        bio: user.bio,
        imageUrl: user.imageUrl,
    })
    const [username, setUsername] = useState(user.username)
    const [location, setLocation] = useState(user.location)
    const [validationUsername, setValidationUsername] = useState(
        username.length >= 3 ? "passed" : "not-passed"
    )
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(undefined)

    // Form handles
    const handleUsername = e => {
        setUsername(e.target.value)

        if (e.target.value.length >= 3) {
            setValidationUsername("passed")
        } else {
            setValidationUsername("not-passed")
        }
    }

    const handleChange = e =>
        setInputs({ ...inputs, [e.target.id]: e.target.value })

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
        }

        usersService
            .editAccount(user._id, requestBody)
            .then(res => {
                setUser(res.data.user)
                setToken(res.data.authToken)
                setEdited(!edited)
                navigate(-1)
            })
            .catch(err => {
                setErrorMessage(err.response.data.message)
                console.log(err)
            })
    }

    // Delete account
    const handleDelete = e => {
        e.preventDefault()

        usersService
            .deleteAccount(user._id)
            .then(() => {
                logoutUser()
                navigate("/goodbye")
            })
            .catch(err => console.log(err))
    }

    return (
        <Page title="Edit your account" mainWidth={400}>
            <Font.H1>Edit your account</Font.H1>

            <Form
                btnPrimary="Save changes"
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
                    value={user.email}
                    helperBottom="You can not edit your email"
                    disabled
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

                <Input
                    label="Bio"
                    type="textarea"
                    id="bio"
                    onChange={handleChange}
                    value={inputs.bio}
                />
            </Form>

            {errorMessage && (
                <Alert as={Font.P} color="danger">
                    {errorMessage}
                </Alert>
            )}

            <Font.P>
                <Link to="/my-account/edit-password">Edit your password.</Link>
            </Font.P>

            <DangerZone
                textBtnOpen="Delete account"
                text="Are you sure you want to delete your account?"
                textBtnPrimary="Yes, delete my account"
                onClickPrimary={handleDelete}
            />
        </Page>
    )
}

export default EditAccount
