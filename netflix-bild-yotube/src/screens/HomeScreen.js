import React from 'react';
import "./HomeScreen.css";
import Nav from "../Nav";
import Banner from '../Banner';
import Row from '../Row'
function HomeScreen() {
    return (
        <div className="HomeScreen">
            <Nav/>
            <Banner/>
            <Row title='NETFLIX ORIGNALS'
            fetchUrl={"https://api.themoviedb.org/3/discover/tv?api_key=03cf7673f21ae8c63d4097e2a8bf28df&with_networks=213"}
            islargeRow/>
            <Row title='Top Rated'
            fetchUrl={"https://api.themoviedb.org/3/movie/top_rated?api_key=03cf7673f21ae8c63d4097e2a8bf28df&language=en-US"}/>
            <Row title='Action Movies'
            fetchUrl={"https://api.themoviedb.org/3/discover/tv?api_key=03cf7673f21ae8c63d4097e2a8bf28df&with_networks=28"}/>
            <Row title='Comedy Movies'
            fetchUrl={"https://api.themoviedb.org/3/discover/tv?api_key=03cf7673f21ae8c63d4097e2a8bf28df&with_networks=35"}/>
            <Row title='Documentries'
            fetchUrl={"https://api.themoviedb.org/3/discover/tv?api_key=03cf7673f21ae8c63d4097e2a8bf28df&with_networks=99"}/>
            

        </div>
    )
}

export default HomeScreen
