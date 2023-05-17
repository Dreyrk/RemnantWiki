import React from 'react'
import { useParams } from 'react-router-dom';

import useCurrentUserContext from '../hooks/useCurrentUserContext';
import ChallengeBuild from '../components/ChallengeBuild';
import SavedBuilds from '../components/SavedBuilds';

function Builds() {
    const { token } = useCurrentUserContext()
    const { type } = useParams()
    switch (type) {
        case "challenge":
            return (
                <ChallengeBuild />
            )
        case "saved" && token:
            return (
                <SavedBuilds />
            )
        default:
            return (
                <div>
                    builds page
                </div>
            )
    }
}

export default Builds
