// Imports
import React, { useState } from "react"
import { Routes, Route, Navigate } from "react-router-dom"
import { v4 as uuid } from "uuid"

import routes from "./routes/routes"
import redirects from "./routes/redirects"

import ProtectedRoutes from "./routes/ProtectedRoutes"
import AnonRoutes from "./routes/AnonRoutes"

const App = () => {
    const [edited, setEdited] = useState(false)

    return (
        <Routes>
            {routes.map(route => (
                <Route
                    path={route.path}
                    element={
                        route.protected ? (
                            <ProtectedRoutes>
                                <route.element
                                    edited={edited}
                                    setEdited={setEdited}
                                />
                            </ProtectedRoutes>
                        ) : route.anon ? (
                            <AnonRoutes>
                                <route.element
                                    edited={edited}
                                    setEdited={setEdited}
                                />
                            </AnonRoutes>
                        ) : (
                            <route.element
                                edited={edited}
                                setEdited={setEdited}
                            />
                        )
                    }
                    key={uuid()}
                />
            ))}

            {redirects.length > 0 &&
                redirects.map(route => (
                    <Route
                        path={route.path}
                        element={<Navigate to={route.to} />}
                        key={uuid()}
                    />
                ))}
        </Routes>
    )
}

export default App
