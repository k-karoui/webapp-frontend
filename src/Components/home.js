// import React from 'react'

// const home = () => {
//   return (
//     <div>home</div>
//   )
// }

// export default home

import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Grid, } from '@mui/material';
import { color, display, styled } from '@mui/system';
import EditIcon from '@mui/icons-material/Edit';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from "react-router-dom";



const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

const CustomCard = styled(Card)({
  padding:'3px',
  height:'290px',
  width:'250px',
  backgroundColor:'#293846',
});

export default function Home() {

  let navigate = useNavigate(); 
  const routeChangeCreateNew = () =>{ 
    let path = `/newForecast`; 
    navigate(path);
  }

  const routeChangeEditPrevious = () =>{ 
    let path = `/editForecast`; 
    navigate(path);
  }

  return (
    <Grid

      container 
      spacing={12}
      justifyContent="center"
      alignItems="center"
      //style={{ height: '100vh' }}
    >
      <Grid item>
        <CustomCard>
          <CardContent>
            <AddIcon style={{ color: '#f1f4f7',fontSize: '50px'}}/>
          </CardContent>
          <CardActions>
            <Button style={{ color: '#f1f4f7', fontSize:'20px'}} onClick={routeChangeCreateNew}>Create New Forecast</Button>
          </CardActions>
        </CustomCard>
      </Grid>
      <Grid item>
        <CustomCard>
          <CardContent>
            <EditIcon style={{color: '#f1f4f7', fontSize: '50px'}}/>
          </CardContent>
          <CardActions>
            <Button style={{ color: '#f1f4f7', fontSize:'20px'}} onClick={routeChangeEditPrevious}>Edit Previous Forecast</Button>
          </CardActions>
        </CustomCard>
      </Grid>
    </Grid>

  );
}
