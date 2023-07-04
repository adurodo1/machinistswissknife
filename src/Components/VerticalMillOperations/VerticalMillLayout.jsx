import * as React from 'react';
import { Card } from '@mui/material';
import Box from '@mui/material/Box';
 
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
const VerticalMillLayout=()=>{

    return(
        <Card sx={{maxWidth:275}}>
         <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Vertical Mill Operations
        </Typography>
        <Typography variant="body2" color="text.secondary">
        Get Instructions for specified operations
        </Typography>
      </CardContent>
      <CardActions>

      <Link to={'/VerticalMillPage'}>
        <Button size="small">Operate</Button>  
        </Link>    
      </CardActions>
      
            </Card>
                
    );
}

export default VerticalMillLayout;
