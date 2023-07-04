import * as React from 'react';
import { Card } from '@mui/material';
import Box from '@mui/material/Box';
 
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
const DrillDecimalLayout=()=>{

    return(
        <Card sx={{maxWidth:275}}>
         <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
         DRILL SIZES
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Get Drill Size And Milling Speed
        </Typography>
      </CardContent>
      <CardActions>

      <Link to={'/DrillDecimalsPage'}>
        <Button size="small">Calculate</Button>  
        </Link>    
      </CardActions>
      
            </Card>
                
    );
}

export default DrillDecimalLayout;
