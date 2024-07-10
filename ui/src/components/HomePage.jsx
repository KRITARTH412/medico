import React from 'react'
import Cards from './Cards'
import TopRatedDoctors from './Body/TopRated/TopRatedDoctors'
import QuickConsult from './Body/Services/QuickConsult.jsx'
import Wellness from './Body/Medicines/Wellness.jsx'
import HealthProgram from './Body/HealthCareProgram/HealthProgram.jsx'
import Testimonial from './Body/Testimonial/Testimonial.jsx'
import Footer from './Body/Footer/Footer.jsx'

function HomePage() {
    return (
        <>
            <Cards />
            <TopRatedDoctors />
            <QuickConsult />
            <Wellness />
            <HealthProgram />
            <Testimonial />
            <Footer />
        </>

    )
}

export default HomePage
