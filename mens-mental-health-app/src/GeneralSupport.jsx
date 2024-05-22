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


const GeneralSupport = () => {



    return(
        <>
        <NavBar />
        {/* App heading */}
        <h1 className="app-heading">General Support Links</h1>
            
        <div className="card-container">
            <Card sx={{ maxWidth: 345 }}>
                {/* On click of the card action area, open modal */}
                <CardActionArea onClick={() => handleOpenModal(statistic)}>
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
                            {/* https://www.beyondblue.org.au/ */}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
                {/* On click of the card action area, open modal */}
                <CardActionArea onClick={() => handleOpenModal(statistic)}>
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
            </Card>

            <Card sx={{ maxWidth: 345 }}>
                {/* On click of the card action area, open modal */}
                <CardActionArea onClick={() => handleOpenModal(statistic)}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="sane-logo.png"
                        alt="Suicide Awareness"
                    />
                    <CardContent>
                        <Typography sx={style2} gutterBottom variant="h5" component="div">
                            {/* Change this to API data (title prop of schema) */}
                            Sane
                            {/* https://www.sane.org/get-support */}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
                {/* On click of the card action area, open modal */}
                <CardActionArea onClick={() => handleOpenModal(statistic)}>
                    <CardMedia
                        component="img"
                        height="140"
                        image="headspace-logo.png"
                        alt="Suicide Awareness"
                    />
                    <CardContent>
                        <Typography sx={style2} gutterBottom variant="h5" component="div">
                            {/* Change this to API data (title prop of schema) */}
                            Headspace
                            {/* https://headspace.org.au/ */}
                        </Typography>
                    </CardContent>
                </CardActionArea>
            </Card>

        </div>
        </>
        
    )
}

export default GeneralSupport