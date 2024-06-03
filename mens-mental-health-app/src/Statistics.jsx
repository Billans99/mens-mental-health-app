// Imports
import NavBar from './NavBar.jsx'
import * as React from 'react'
// Imports for MUI components
import { useState, useEffect } from 'react'
import axios from 'axios'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import Button from '@mui/material/Button'
import Backdrop from '@mui/material/Backdrop'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'
import Fade from '@mui/material/Fade'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 600,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    borderRadius: 5,
  }

  const style2 = {
    textAlign: 'center',
  }

// Statistics component
const Statistics = () => {

// State used to store API data and map to Material UI cards
const [statisticsData, setStatisticsData] = useState([])
// State to open and close modal
const [open, setOpen] = useState(false)
const [selectedStatistic, setSelectedStatistic] = useState([])
const [loading, setLoading] = useState(false)


    // UseEffect hook to fetch statistics data from API on initial render, or when
    // dependencies change
    useEffect(() => {
        getStatisticsData()
    }, [])



// Handles card click, opens modal and sets the selected statistic to the statistic data object that was clicked
const handleOpenModal = (statistic) => {
    setSelectedStatistic(statistic)
    setOpen(true)
}

// Function to close modal, sets selected statistic to an empty object and closes modal
const handleCloseModal = () => {
    setSelectedStatistic({})
    setOpen(false)
}


    // Function to fetch statistics data from API endpoint using axios, log the response and set the data to statisticsData state
    // If there's an error, log the error
    const getStatisticsData = async () => {
        try {
            setLoading(true)
            const statisticsResponse = await axios.get('http://localhost:3000/statistics')
            console.log(statisticsResponse)
            setStatisticsData(statisticsResponse.data.statistics)
        } catch (err) {
            console.error(err)
        } finally {
            setLoading(false)
        }
    }


    return(
        <>
        <NavBar />
        
        {/* Statistics component heading */}
        <div className="app-heading-container">
            <h1 className="app-heading">Statistics</h1>
        </div>

        {/* Statistics inside MUI card components */}
        <div className="card-container">
            {statisticsData.map((statistic) => {
                return (
                    <>
                    {/* sx is material UI prop to style Card component */}
                    <Card sx={{ 
                        maxWidth: 345,
                        borderRadius: '10px',
                        }}>

                        {/* On click of the card action area, open modal */}
                        <CardActionArea onClick={() => handleOpenModal(statistic)}>
                            <CardMedia
                                component="img"
                                height="160"
                                image="statistic-mens-suicide-rates-2023.png"
                                alt="Suicide Awareness"
                                />
                            </CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div" sx={{
                                    minHeight: '50px',

                                }}>
                                    {/* Change this to API data (title prop of schema) */}
                                    {statistic.title}
                                </Typography>
                                <Typography variant="body2" color="text.secondary" sx={{
                                   
                                }}>
                                    {/* Change this to API data (content prop schema) */}
                                    {statistic.content}
                                </Typography>
                            </CardContent>
                            <CardActions>
                                <div className="card-button-container">
                                    <Button className="card-button" size="large" onClick={() => handleOpenModal(statistic)} sx={{
                                        position: 'static',
                                        bottom: '100',
                                        left: '50',
                                        }}>
                                        Learn More
                                    </Button>
                                </div>
                            </CardActions>
                        
                    </Card>

                    {/* Modal that displays after a card is clicked */}
                    <Modal
                        aria-labelledby="transition-modal-title"
                        aria-describedby="transition-modal-description"
                        open={open}
                        onClose={handleCloseModal}
                        closeAfterTransition
                        slots={{ backdrop: Backdrop }}
                        slotProps={{
                        backdrop: {
                            timeout: 500,
                            },
                        }}
                        >
                        <Fade in={open}>
                            <Box sx={style}>
                                <Typography sx={style2} id="transition-modal-title" variant="h6" component="h2">
                                    {selectedStatistic.title}
                                </Typography>
                                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                    {selectedStatistic.content}
                                </Typography>
                                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                    Date: {selectedStatistic.date}
                                </Typography>
                                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                    Type: {selectedStatistic.type}
                                </Typography>
                                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                                    Comparison: {selectedStatistic.comparison}
                                </Typography>
                            </Box>
                        </Fade>
                    </Modal>
                </>                        
                )
            })}
        </div>
       
        </>
       
    )
}

export default Statistics