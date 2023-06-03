import React from 'react'
import Navbar from '../components/Navbar'
import useFetch from '../hooks/useFetch.js'
import World from '../components/World'

function Walkthrough() {
    const { data, isLoading, isError } = useFetch("worlds")

    if (!data && isLoading) {
        return (
            <>
                <Navbar />
                <p>Loading...</p>
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
