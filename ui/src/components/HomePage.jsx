import React from 'react'
import Cards from './Cards'
import TopRatedDoctors from './Body/TopRated/TopRatedDoctors'
import QuickConsult from './Body/Services/QuickConsult.jsx'
import  Wellness  from './Body/Medicines/Wellness.jsx'

function HomePage() {
    return (
        <>
        <Cards />
        <TopRatedDoctors/>
        <QuickConsult/>
        <Wellness/>
        </>

     )
}

export default HomePage
