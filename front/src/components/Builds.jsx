import React from 'react'
import { useParams } from 'react-router-dom';

import useCurrentUserContext from '../hooks/useCurrentUserContext';

function Builds() {
    const { token } = useCurrentUserContext()
    const { type } = useParams()

    switch (type) {
        case "challenge":
            return (
                <div>
                    <h1>Challenge Build</h1>
                </div>
            )
        case "saved" && token:
            return (
                <div>
                    <h1>Saved Builds</h1>
                </div>
            )
        default:
            return (
                <div>
                    <h1>
                        login first
                    </h1>
                </div>
            )
    }
}

export default Builds;
