// Packages
import React, { useContext, useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import axios from "axios"

// Components
import { AuthContext } from "../../context/auth"
import * as Font from "../../components/styles/Font"
import Page from "../../components/layouts/Page"
import Form from "../../components/forms/Form"
import Input from "../../components/forms/Input"
import DangerZone from "../../components/forms/DangerZone"
import Link from "../../components/utils/LinkScroll"
import ErrorMessage from "../../components/forms/ErrorMessage"
import service from "../../components/service/cloudinary-service"
import ListSuggestions from "../../components/forms/ListSuggestions"
import InputProfilePicture from "../../components/forms/InputProfilePicture"

// Data
import ListCities from "../../components/data/cities.json"

function EditAccount({ edited, setEdited }) {
    const { user, updateUser, logoutUser } = useContext(AuthContext)
    const navigate = useNavigate()

    const [username, setUsername] = useState(user.username)
    const [bio, setBio] = useState(user.bio || "")
    const [gender, setGender] = useState(user.gender)
    const [location, setLocation] = useState(user.location)
    const [imageUrl, setImageUrl] = useState(user.imageUrl)
    const [picture, setPicture] = useState(user.imageUrl)
    const [isLoading, setIsLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState(undefined)

    const handleUsername = e => setUsername(e.target.value)
    const handleBio = e => setBio(e.target.value)
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

    const handleFileUpload = e => {
        e.preventDefault()
        const uploadData = new FormData()
        setIsLoading(true)

        uploadData.append("imageUrl", e.target.files[0])

        service
            .uploadImage(uploadData)
            .then(res => {
                setImageUrl(res.secure_url)
                setIsLoading(false)
            })
            .catch(err => console.log(err))

        if (e.target.files[0]) {
            setPicture(e.target.files[0])
            const reader = new FileReader()
            reader.addEventListener("load", () => {
                setPicture(reader.result)
            })
            reader.readAsDataURL(e.target.files[0])
        }
    }

    // Edit account
    const handleSubmit = e => {
        e.preventDefault()

        const requestBody = { id: user._id, username, bio, gender, location, imageUrl }

        axios
            .put("/users/edit", requestBody)
            .then(res => {
                const { user } = res.data
                updateUser(user)
                setEdited(!edited)
                navigate("/my-account")
            })
            .catch(err => {
                const errorDescription = err.response.data.message
                setErrorMessage(errorDescription)
            })
    }

    // Delete account
    const handleDelete = () => {
        axios
            .delete(`/users/delete-user/${user._id}`)
            .then(() => {
                logoutUser()
                navigate("/goodbye")
            })
            .catch(err => console.log(err))
    }

    return (
        <Page title="Edit your account">
            <Font.H1>Edit your account</Font.H1>

            <Form
                btnprimary="Save changes"
                btncancel="/my-account"
                onSubmit={handleSubmit}
                isLoading={isLoading}
            >
                <Input
                    label="Full name"
                    id="fullName"
                    onChange={handleUsername}
                    value={username}
                />

                <Input
                    label="Email"
                    type="email"
                    id="email"
                    value={user.email}
                    disabled
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
                    label="Bio"
                    id="bio"
                    inputtype="textarea"
                    onChange={handleBio}
                    value={bio}
                    counter={140}
                />

                <InputProfilePicture
                    label="Profile picture"
                    src={picture}
                    alt={user.fullName}
                    onChange={e => handleFileUpload(e)}
                    id="imageUrl"
                />
            </Form>

            {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}

            <Font.P>
                <Link to="/my-account/edit-password">Edit your password.</Link>
            </Font.P>

            <DangerZone onClickPrimary={handleDelete} />
        </Page>
    )
}

export default EditAccount
