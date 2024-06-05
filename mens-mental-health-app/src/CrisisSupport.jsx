import NavBar from './NavBar.jsx'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import Button from '@mui/material/Button'
import * as React from 'react'
import Link from '@mui/material/Link'

// style for text in card components
const style2 = {
    textAlign: 'center',
    fontWeight: 'bold',
    minHeight: '60px',
}

const CrisisSupport = () => {





    return(
        <>
        <NavBar />
        {/* <div className="app-heading-container">
            <h1 className="app-heading">Emergency Links</h1>
        </div> */}
        
        <div className="card-container">
            {/* sx is material UI prop to style */}
            <Card sx={{ 
                maxWidth: 345, 
                height: 140,
                '&:hover': {
                    transform: 'translateY(-5px)',
                }
                }}>
                {/* On click of the card action area, open modal */}
                <Link sx={{ color: "#000000" }} href="https://www.triplezero.gov.au/" target="_blank" underline="none">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="gov-logo.png"
                            alt="Suicide Awareness"
                        />
                        <CardContent>
                            <Typography sx={style2} gutterBottom variant="h5" component="div">
                                
                                {/* 000 */}
                                {/* https://www.triplezero.gov.au/ */}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>

            <Card sx={{ 
                maxWidth: 345, 
                height: 140,
                '&:hover': {
                    transform: 'translateY(-5px)',
                }
                }}>
                {/* On click of the card action area, open modal */}
                <Link sx={{ color: "#000000" }} href="https://www.lifeline.org.au/" target="_blank" underline="none">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="lifeline-logo.png"
                            alt="Suicide Awareness"
                        />
                        <CardContent>
                            <Typography sx={style2} gutterBottom variant="h5" component="div">
                                
                                {/* Lifeline */}
                                {/* https://www.lifeline.org.au/ */}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>

            <Card sx={{ 
                maxWidth: 345, 
                height: 140,
                '&:hover': {
                    transform: 'translateY(-5px)',
                }
                }}>
                {/* On click of the card action area, open modal */}
                <Link sx={{ color: "#000000" }} href="https://www.beyondblue.org.au/get-support/urgent-help" target="_blank" underline="none">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="beyond-blue-logo.png"
                            alt="Suicide Awareness"
                        />
                        <CardContent>
                            <Typography sx={style2} gutterBottom variant="h5" component="div">
                                
                                {/* Beyond blue */}
                                {/* https://www.beyondblue.org.au/get-support/urgent-help */}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>

            <Card sx={{ 
                maxWidth: 345, 
                height: 140,
                '&:hover': {
                    transform: 'translateY(-5px)',
                }
                }}>
                {/* On click of the card action area, open modal */}
                <Link sx={{ color: "#000000" }} href="https://www.suicidecallbackservice.org.au/" target="_blank" underline="none">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="suicide-call-back-service-logo.png"
                            alt="Suicide Awareness"
                        />
                        <CardContent>
                            <Typography sx={style2} gutterBottom variant="h5" component="div">
                                
                                {/* Suicide Call Back Service */}
                                {/* https://www.suicidecallbackservice.org.au/ */}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>

            <Card sx={{ 
                maxWidth: 345, 
                height: 140,
                '&:hover': {
                    transform: 'translateY(-5px)',
                }
                }}>
                {/* On click of the card action area, open modal */}
                <Link sx={{ color: "#000000" }} href="https://www.qld.gov.au/health/mental-health/help-lines/1300-mh-call" target="_blank" underline="none">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="qld-gov-logo.png"
                            alt="Suicide Awareness"
                        />
                        <CardContent>
                            <Typography sx={style2} gutterBottom variant="h5" component="div">
                                
                                {/* Queensland Government Public Health */}
                                {/* https://www.qld.gov.au/health/mental-health/help-lines/1300-mh-call */}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>

        </div>
        </>
        
    )
}

export default CrisisSupport