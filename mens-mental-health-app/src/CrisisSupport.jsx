import NavBar from './NavBar.jsx'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import Button from '@mui/material/Button'
import * as React from 'react'

const style2 = {
    textAlign: 'center',
    fontWeight: 'bold',
  }

const CrisisSupport = () => {





    return(
        <>
        <NavBar />
        <h1 className="app-heading">Emergency Links</h1>
        <div className="card-container">
            <Card sx={{ maxWidth: 345 }}>
                {/* On click of the card action area, open modal */}
                <a href="https://www.triplezero.gov.au/" target="_blank" className="support-links"> 
                    <CardActionArea onClick={() => handleOpenModal(statistic)}>
                        <CardMedia
                            component="img"
                            height="140"
                            image="gov-logo.png"
                            alt="Suicide Awareness"
                        />
                        <CardContent>
                            <Typography sx={style2} gutterBottom variant="h5" component="div">
                                {/* Change this to API data (title prop of schema) */}
                                000
                                {/* https://www.triplezero.gov.au/ */}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </a>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
                {/* On click of the card action area, open modal */}
                <a href="https://www.lifeline.org.au/" target="_blank" className="support-links"> 
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="lifeline-logo.png"
                            alt="Suicide Awareness"
                        />
                        <CardContent>
                            <Typography sx={style2} gutterBottom variant="h5" component="div">
                                {/* Change this to API data (title prop of schema) */}
                                Lifeline
                                {/* https://www.lifeline.org.au/ */}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </a>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
                {/* On click of the card action area, open modal */}
                <a href="https://www.beyondblue.org.au/get-support/urgent-help" target="_blank" className="support-links"> 
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="beyond-blue-logo.png"
                            alt="Suicide Awareness"
                        />
                        <CardContent>
                            <Typography sx={style2} gutterBottom variant="h5" component="div">
                                {/* Change this to API data (title prop of schema) */}
                                Beyond blue
                                {/* https://www.beyondblue.org.au/get-support/urgent-help */}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </a>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
                {/* On click of the card action area, open modal */}
                <a href="https://www.suicidecallbackservice.org.au/" target="_blank" className="support-links"> 
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="suicide-call-back-service-logo.png"
                            alt="Suicide Awareness"
                        />
                        <CardContent>
                            <Typography sx={style2} gutterBottom variant="h5" component="div">
                                {/* Change this to API data (title prop of schema) */}
                                Suicide Call Back Service
                                {/* https://www.suicidecallbackservice.org.au/ */}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </a>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
                {/* On click of the card action area, open modal */}
                <a href="https://www.qld.gov.au/health/mental-health/help-lines/1300-mh-call" target="_blank" className="support-links"> 
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="qld-gov-logo.png"
                            alt="Suicide Awareness"
                        />
                        <CardContent>
                            <Typography sx={style2} gutterBottom variant="h5" component="div">
                                {/* Change this to API data (title prop of schema) */}
                                Queensland Government Public Health
                                {/* https://www.qld.gov.au/health/mental-health/help-lines/1300-mh-call */}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </a>
            </Card>

        </div>
        </>
        
    )
}

export default CrisisSupport