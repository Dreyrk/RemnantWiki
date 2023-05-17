import React from 'react'

function randomizeItem(head, body, legs, weapons, rings, amulets) {

    const fullSet = {
        head: {},
        body: {},
        legs: {},
        weapon: {},
        ring1: {},
        ring2: {},
        amulet: {}
    }

    const headPart = head[Math.floor(Math.random() * head.length)]
    const bodyPart = body[Math.floor(Math.random() * body.length)]
    const legsPart = legs[Math.floor(Math.random() * legs.length)]
    const weapon = weapons[Math.floor(Math.random() * weapons.length)]
    let ring1 = rings[Math.floor(Math.random() * rings.length)]
    let ring2;

    do {
        ring2 = rings[Math.floor(Math.random() * rings.length)]
    } while (ring1 === ring2)

    const amulet = amulets[Math.floor(Math.random() * amulets.length)]

    fullSet.head = headPart
    fullSet.body = bodyPart
    fullSet.legs = legsPart
    fullSet.weapon = weapon
    fullSet.ring1 = ring1
    fullSet.ring2 = ring2
    fullSet.amulet = amulet

    return fullSet;
}


function ChallengeBuild() {

    return (
        <div>
            challenge
        </div>
    )
}

export default ChallengeBuild;
