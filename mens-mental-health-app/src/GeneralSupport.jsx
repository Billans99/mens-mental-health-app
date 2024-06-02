import NavBar from './NavBar.jsx'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { CardActionArea } from '@mui/material'
import Button from '@mui/material/Button'
import * as React from 'react'
import Link from '@mui/material/Link';

// style for text in card components
const style2 = {
    textAlign: 'center',
    fontWeight: 'bold',
    minHeight: '60px',
  }

const GeneralSupport = () => {



    return(
        <>
        <NavBar />
        {/* App heading */}
        <h1 className="app-heading">General Support Links</h1>

        {/* sx is material UI prop to style */}
        <div className="card-container">
            <Card sx={{ maxWidth: 345 }}>
                {/* On click of the card action area, open modal */}
                <Link sx={{ color: "#000000" }} href="https://www.beyondblue.org.au/" target="_blank" underline="none">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="beyond-blue-logo.png"
                            alt="Suicide Awareness"
                        />
                        <CardContent>
                            <Typography sx={style2} gutterBottom variant="h5" component="div">
                                Beyond blue
                                {/* https://www.beyondblue.org.au/ */}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
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
                                Lifeline
                                {/* https://www.lifeline.org.au/ */}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
                {/* On click of the card action area, open modal */}
                <Link sx={{ color: "#000000" }} href="https://www.sane.org/get-support" target="_blank" underline="none">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="sane-logo.png"
                            alt="Suicide Awareness"
                        />
                        <CardContent>
                            <Typography sx={style2} gutterBottom variant="h5" component="div">
                                Sane
                                {/* https://www.sane.org/get-support */}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>

            <Card sx={{ maxWidth: 345 }}>
                {/* On click of the card action area, open modal */}
                <Link sx={{ color: "#000000" }} href="https://headspace.org.au/" target="_blank" underline="none">
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="140"
                            image="headspace-logo.png"
                            alt="Suicide Awareness"
                        />
                        <CardContent>
                            <Typography sx={style2} gutterBottom variant="h5" component="div">
                                Headspace
                                {/* https://headspace.org.au/ */}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Link>
            </Card>

        </div>
        </>
        
    )
}

export default GeneralSupport