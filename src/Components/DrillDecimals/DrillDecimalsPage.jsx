import { DirectionsBusFilled } from '@mui/icons-material';
import { MenuItem, Select, TextField ,InputLabel, Button} from '@mui/material';
import  React,{useState,useEffect} from 'react';


const DrillDecimalsPage = () => {

//Component states
const [drillsize, setDrillsize] = useState(0);
const [metalType, setMetalType] = useState('');
const [speed, setSpeed] = useState(0);

//formula for Drill speed
const speedFormula=()=>setSpeed( (4 * metalType)/drillsize);
 

const DrillSizeChangeHandler = (event) => {
    setDrillsize(event.target.value );
};
const metalTypeChangeHandler = (event) => {
    setMetalType(event.target.value );
};

return(
    <>
    DRILL DECIMALS PAGE

    
    <InputLabel id="demo-simple-select-label">Drill Size</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={drillsize}
                label="Drill Size"
                onChange={DrillSizeChangeHandler}
            >
                <MenuItem value={0.0096}>1/4</MenuItem>
                <MenuItem value={0.156}>1/64</MenuItem>
                <MenuItem value={0.0313}>1/32</MenuItem>
                <MenuItem value={0.0469}>3/64</MenuItem>
                <MenuItem value={0.0625}>1/16</MenuItem>
                <MenuItem value={0.0781}>5/64</MenuItem>
            </Select>

            <InputLabel id="demo-simple-select-label">Metal Type</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={metalType}
                label="Drill Size"
                onChange={metalTypeChangeHandler}
            >
                <MenuItem value={100}>Metal 1</MenuItem>
                <MenuItem value={200}>Metal 2</MenuItem>
             
            </Select>
            <br />
            <Button size="small" onClick={speedFormula}>Calculate Speed</Button> 

            <p>Speed :: {speed}</p>
    </>
);
}
export default DrillDecimalsPage;