import * as React from 'react';
import { Card } from '@mui/material';
import Box from '@mui/material/Box';
 
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
const GaugeBarLayout=()=>{

    return(
        <Card sx={{maxWidth:275}}>
         <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         GAUGE BLOCKS
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Calculate Gauge blocks sets for sine bar
        </Typography>
      </CardContent>
      <CardActions>

      <Link to={'/GaugeBarCalculationPage'}>
        <Button size="small">Convert</Button>  
        </Link>    
      </CardActions>
      
            </Card>
                
    );
}

export default GaugeBarLayout;
