// import axios from 'axios'
import axios from 'axios';
import React, { useEffect } from 'react'
import LandingPage from './Landing'

const Home = ({data}) => {

    return(
        <LandingPage data={data}>
        </LandingPage>
    )
}

export async function getServerSideProps() {
    try {      
        // Fetch data from external API
        const res = await axios.get(`http://localhost:7500/recipe`)
        const data = res.data.data

        // Pass data to the page via props
        return { props: { data } }
    } catch (error) {
        console.log(error);
        return { props: {} }
    }
}

export default Home