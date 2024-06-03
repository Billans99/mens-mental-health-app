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
        <div className="app-heading-container">
            <h1 className="app-heading">Vital Help</h1>
        </div>

    {/* Home page summary, using a grid describing the value this app can deliver.
        Each row includes, an img, heading, and paragraph body */}
    <div className="home-summary-container">
    <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={10}
              direction="row"
              justifyContent="center"
              alignItems="center"
              paddingTop="40px"
          >
          {/* First row of grid */}
          <Grid item xs={4}>
            <Item>
              <img className="home-summary-img" src="/home-summary-img1.png"></img>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item><h2 className="home-summary-heading">Reach out to a professional</h2></Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <h6 className="home-summary-body">
                  Reaching out to a professional can be a great step to recovery.
              </h6>
            </Item>
          </Grid>

          {/* Second row of grid */}
          <Grid item xs={4}>
            <Item>
              <img className="home-summary-img" src="/home-summary-img2.png"></img>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
            <h2 className="home-summary-heading">Have more insight</h2>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <h6 className="home-summary-body">
                  Statistical data can give you a greater understanding of the problems you face.
              </h6>
            </Item>
          </Grid>

          {/* Third row of grid */}
          <Grid item xs={4}>
            <Item>
              <img className="home-summary-img" src="/home-summary-img3.png"></img>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <h2 className="home-summary-heading">External support</h2>
            </Item>
          </Grid>
          <Grid item xs={4}>
            <Item>
              <h6 className="home-summary-body">
                  Having a support network can be vital in our journey to recovery in mental health.
              </h6>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
      





        
        </>
    )
}

export default Home