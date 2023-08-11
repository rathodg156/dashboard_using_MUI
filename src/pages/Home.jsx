import React from 'react'
import Sidenav from '../components/Sidenav'
import Navbar from '../components/Navbar'
import { Stack,Box,Card,CardContent,Typography } from '@mui/material'
import Grid from '@mui/material/Grid';
import "../Dash.css"
import StorefrontIcon from '@mui/icons-material/Storefront';
import CreditCardIcon from '@mui/icons-material/CreditCard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import AccordionDash from '../components/AccordionDash';
function Home() {
  return (
    <>
    <div className='bgcolor'>
    <Navbar/>
    <Box height={70}/>c
    <Box sx={{ display: 'flex' }}>
    <Sidenav/>
    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
    {/* <h1>Home Page </h1> */}
    <Grid container spacing={2}>
        <Grid item xs={8} >
        <Stack spacing={2} direction="row">
        <Card sx={{ minWidth: 49 +"%" ,height:140 }} className='gradient'>
      <CardContent>
        <div>
            <CreditCardIcon style={{ color:'white'}}/>
        </div>
        <Typography gutterBottom variant="h5" component="div"sx={{color:"white"}}>
          $ 500.00
        </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={{color:"#ccd1d1"}}>
        Total Earning
        </Typography>
      </CardContent>
     
    </Card> 
        <Card sx={{ minWidth: 49 +"%" ,height:140 }} className='gradientlight'>
      <CardContent>
      <div>
            <ShoppingBagIcon style={{ color:'white'}}/>
        </div>
        <Typography gutterBottom variant="h5" component="div" sx={{color:"white"}}>
        $ 900.00
        </Typography>
        <Typography gutterBottom variant="h5" component="div" sx={{color:"#ccd1d1"}}>
        Total order
        </Typography>
      </CardContent>
    </Card>
    </Stack>
        </Grid>
        <Grid item xs={4}>
        <Stack spacing={2}>
     
        <Card sx={{ maxWidth: 345 }} className='gradientlight'>
     <Stack spacing={2} direction="row">
       <StorefrontIcon style={{ color:'white',marginTop:"20px",marginLeft:"20px"}}/>
       <div className='paddingall'>
       <span className='price-title'>$203K</span>
       <br/>
       <span className='price-subtitle'>Total Income </span>
       </div>
       </Stack>
   </Card>
        <Card sx={{ maxWidth: 345 }} >

        <Stack spacing={2} direction="row">
       <StorefrontIcon style={{marginTop:"20px",marginLeft:"20px"}}/>
       <div className='paddingall'>
       <span className='price-title'>$203K</span>
       <br/>
       <span className='price-subtitle'>Total Income </span>
       </div>
       </Stack>
       
   </Card>
        </Stack>
        </Grid>
      
      </Grid>
    <Box height={20}/>
    <Grid container spacing={2}>
        <Grid item xs={8}>
        <Card sx={{ height:60 +"vh" }}>
     
     <CardContent></CardContent>
   </Card>
        </Grid>
        <Grid item xs={4}>
        <Card sx={{ height:60 +"vh" }}>
     
     <CardContent> 
     <div className='paddingall'>
       <span className='price-title'>Popular Product </span>
       </div>
      <AccordionDash/>
     </CardContent>
     </Card>
        </Grid>
      
      </Grid>
      </Box>
    </Box>
    </div>
    
    </>
  )
}

export default Home