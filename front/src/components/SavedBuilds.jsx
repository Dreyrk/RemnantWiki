import React from 'react'
import styled from 'styled-components'

import useCurrentUserContext from '../hooks/useCurrentUserContext'

function SavedBuilds() {

    const { user } = useCurrentUserContext()

    return (
        <div>
            {/* {user.saved.builds.map((build) => {
                return <p>{build.name}</p>
            })} */}
        </div>
    )
}

export default SavedBuilds
