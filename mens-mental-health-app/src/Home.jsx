// Imports for Home component
import NavBar from './NavBar.jsx'
import * as React from 'react'
// Imports for MUI components
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import PropTypes from 'prop-types'
import Button from '@mui/material/Button';

// Styled components
// const Item = styled(Paper)(({ theme }) => ({
//     backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//     ...theme.typography.body2,
//     padding: theme.spacing(3),
//     textAlign: 'center',
//     color: theme.palette.text.secondary,
//     boxShadow: "none",
//   }));

const Item = (props) => {
  const { sx, ...other } = props;
  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
        color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
        border: '1px solid',
        borderColor: (theme) =>
          theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
        borderRadius: 2,
        fontSize: '0.875rem',
        fontWeight: '700',
        ...sx,
      }}
      {...other}
    />
  );
}




// Home component
const Home = () => {
 

    return(
        <>
        <NavBar />
        {/* Welcome message for home component 
        This home page is mobile and web responsive */}
        {/* <div className="app-heading-container">
            <h1 className="app-heading">Vital Help</h1>
        </div> */}

    
        <div className="home-flex-container">

          
            <div className="home-summary-container">
              <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    p: 1,
                    m: 1,
                    gap: 0,
                    borderRadius: 1,
                    alignItems: 'center',
                  }}
                >
                  <Item sx={{
                    bgcolor: 'paper',
                    border: 'none',
                  }}>
                    <img className="home-summary-img" src="/home-summary-img1.png"></img>
                  </Item>
                  <Item sx={{
                    bgcolor: 'paper',
                    border: 'none',
                    color: '#e6e6e6',
                  }}>
                    <h2 className="home-summary-heading">Reach out to a professional</h2>
                  </Item>
                  <Item sx={{
                    bgcolor: 'paper',
                    border: 'none',
                    marginBottom: '100px',
                    color: '#e6e6e6',
                  }}>
                    <h6 className="home-summary-body">
                          Reaching out to a professional can be a great step to recovery.
                    </h6>
                  </Item>
              </Box>

              <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    p: 1,
                    m: 1,
                    gap: 0,
                    borderRadius: 1,
                    alignItems: 'center',
                  }}
                >
                  <Item sx={{
                    bgcolor: 'paper',
                    border: 'none',
                  }}>
                    <img className="home-summary-img" src="/home-summary-img2.png"></img>
                  </Item>
                  <Item sx={{
                    bgcolor: 'paper',
                    border: 'none',
                    color: '#e6e6e6',
                  }}>
                    <h2 className="home-summary-heading">Have more insight</h2>
                  </Item>
                  <Item sx={{
                    bgcolor: 'paper',
                    border: 'none',
                    marginBottom: '100px',
                    color: '#e6e6e6',
                  }}>
                    <h6 className="home-summary-body">
                          Statistical data can give you a greater understanding of the problems you face.
                    </h6>
                  </Item>
              </Box>

              <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    p: 1,
                    m: 1,
                    gap: 0,
                    borderRadius: 1,
                    alignItems: 'center',
                  }}
                >
                  <Item sx={{
                    bgcolor: 'paper',
                    border: 'none',
                  }}>
                    <img className="home-summary-img" src="/home-summary-img3.png"></img>
                  </Item>
                  <Item sx={{
                    bgcolor: 'paper',
                    border: 'none',
                    color: '#e6e6e6',
                  }}>
                    <h2 className="home-summary-heading">External support</h2>
                  </Item>
                  <Item sx={{
                    bgcolor: 'paper',
                    border: 'none',
                    color: '#e6e6e6',
                  }}>
                    <h6 className="home-summary-body">
                          Having a support network can be vital in our journey to recovery in mental health.
                    </h6>
                  </Item>
              </Box>
            </div>
          

          {/* Code the other piece of content you want here */}
          
            <div className="mission-statement-container">
              <h2 className="mission-statement-heading">
                Your mental health is important
              </h2>

              <p className="mission-statement">
                Whether you're dealing with stress, anxiety, or seeking self-improvement, Vital Help is here to support your journey towards a healthier, happier you.
              </p>
              
              {/* Take a mental health test */}
              <div className="test-container">
                <h2 className="test-heading">
                  Take a mental health test
                </h2>

                <p>
                  Clinical Partners online mental health tests can help make sense of your feelings and could be the first step towards getting the right help.
                </p>

                <div className="test-flex-container">
                  <ul className="test-list">Clinical Partners online mental health tests include:
                    <li>ADHD</li>
                    <li>Anxiety</li>
                    <li>Bipolar</li>
                    <li>Depression</li>
                    <li>Autism</li>
                    <li>OCD</li>
                    <li>PTSD</li>
                    <li>Stress</li>
                  </ul>

                  <Button href="https://www.clinical-partners.co.uk/online-tests" variant="contained" target="_blank" 
                  sx={{
                    marginRight: '15px',
                    alignSelf: 'flex-end',
                    '&:hover': {
                      backgroundColor: 'green',
                    },
                    }}>
                      View Tests
                  </Button>
                </div>
              </div>

              {/* Mental health statistics goes here */}
              

              {/* Useful links for support */}

            </div>
          
          
        </div>
    
    
      





        
        </>
    )
}

export default Home