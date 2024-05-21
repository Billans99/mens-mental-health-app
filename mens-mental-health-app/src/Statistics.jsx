// Imports
import NavBar from './NavBar.jsx'
import * as React from 'react'
// Imports for MUI components
import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import Button from '@mui/material/Button'
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';



// Statistics component
const Statistics = () => {

    useEffect(() => {
        getStatisticsData()
    }, [])

// Handle card click when statistic card is clicked -> a modal will pop up
const handleCardClick = () => {
    
}

// States used to store API data and map to Material UI cards
const [statisticsData, setStatisticsData] = useState([])
    // Function to fetch statistics data from API endpoint using axios, log the response and set the data to statisticsData state
    // If there's an error, log the error
    const getStatisticsData = async () => {
        try {
            const statisticsResponse = await axios.get('http://localhost:3000/statistics')
            console.log(statisticsResponse)
            setStatisticsData(statisticsResponse.data.statistics)
        } catch (err) {
            console.error(err)
        } finally {
            
        }
    }


    return(
        <>
        <NavBar />
        {/* Statistics component heading */}
        <div className="statistics-heading-container">
            <h1 className="statistics-heading">Mens Mental Health Statistics</h1>
        </div>

        {/* Statistics inside MUI card components */}
        <div className="card-container">
            {statisticsData.map((statistic) => {
                return (
                    <Card sx={{ maxWidth: 345 }}>
                        <CardActionArea onClick={handleCardClick}>
                            <CardMedia
                                component="img"
                                height="140"
                                image="statistic-mens-suicide-rates-2023.png"
                                alt="Suicide Awareness"
                                />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {/* Change this to API data (title prop of schema) */}
                                    {statistic.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {/* Change this to API data (content prop schema) */}
                                    {statistic.content}
                                </Typography>

                            </CardContent>
                        </CardActionArea>
                    </Card>
                )
            })}
        </div>
        
        
       
        </>
       
    )
}

export default Statistics