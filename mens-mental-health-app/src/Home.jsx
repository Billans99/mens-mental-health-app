// Imports for Home component
import NavBar from './NavBar.jsx'
import * as React from 'react'
// Imports for MUI components
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'

// Styled components
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(3),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    boxShadow: "none",
  }));

// Home component
const Home = () => {


    return(
        <>
        <NavBar />
        {/* Welcome message for home component 
        This home page is mobile and web responsive */}
        <div className="welcome-message-container">
            <h1 className="welcome-message">Welcome to the Men's Mental Health App</h1>
        </div>

    {/* Home page summary, using a grid describing the value this app can deliver.
        Each row includes, an img, heading, and paragraph body */}
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={5}
            direction="row"
            justifyContent="center"
            alignItems="center"
            paddingTop="40px"
        >
        {/* First row of grid */}
        <Grid item xs={4}>
          <Item>
            <img className="home-summary-img1" src="/home-summary-img1.png"></img>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item><h2 className="home-summary-heading">Reach out to a professional for targeted support</h2></Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <h6 className="home-summary-body">
                Reaching out to a professional can be the first step to recovery. They can provide targeted support to help you overcome the challenges
                you face in your mental health journey.
            </h6>
          </Item>
        </Grid>

        {/* Second row of grid */}
        <Grid item xs={4}>
          <Item>
            <img className="home-summary-img2" src="/home-summary-img2.png"></img>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
          <h2 className="home-summary-heading">Have more insight with statistical data</h2>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <h6 className="home-summary-body">
                Statistical data can give men a stronger understanding of the problems they face, increasing the chances of recognizing probkems
                that arise among themselves, friends and family.
            </h6>
          </Item>
        </Grid>

        {/* Third row of grid */}
        <Grid item xs={4}>
          <Item>
            <img className="home-summary-img3" src="/home-summary-img3.png"></img>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <h2 className="home-summary-heading">External support can can be vital to recovery</h2>
          </Item>
        </Grid>
        <Grid item xs={4}>
          <Item>
            <h6 className="home-summary-body">
                Having a support network can be vital in our journey to recovery in mental health. Make sure to reach out to the people that care 
                the most.
            </h6>
          </Item>
        </Grid>
      </Grid>
    </Box>





        
        </>
    )
}

export default Home