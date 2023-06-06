import React from 'react'

import useFetch from '../hooks/useFetch.js'
import Navbar from '../components/Navbar'
import World from '../components/World'
import Loading from '../components/Loading'

function Walkthrough() {
    const { data, isLoading, isError } = useFetch("worlds")

    if (!data && isLoading) {
        return (
            <>
                <Navbar />
                <Loading />
            </>
        )
    } else if (!data && isError) {
        return (
            <>
                <Navbar />
                <p>{isError}</p>
            </>
        )
    } else {
        return (
            <>
                <Navbar />
                {data.map((world, i) => (
                    <World key={world._id} world={world} />
                ))}
            </>
        )
    }
}

export default Walkthrough;
