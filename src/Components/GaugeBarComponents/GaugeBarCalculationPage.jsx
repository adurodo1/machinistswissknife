import { DirectionsBusFilled } from '@mui/icons-material';
import { MenuItem, Select, TextField ,InputLabel, Button} from '@mui/material';
import  React,{useState,useEffect} from 'react';


const GaugeBarCalculationPage = () => {
/*
The gauge block is to provide the engineer with the appropriate set of blocls to build the height fotr a desired
angle as applicable to the formulah h=l * sine of angle.
Steps to take:
How to calculate Sine angler.perpendicular/ hypotenuse.

UI Flow:
User most provide sine value.

Ui components

labels, textfield

example: input the sine of an angle


To get the solution for the gauge blocks , we need to round the number to 4 decimals, 
tofixed(4) can be used for this.
Then we need to get array-series blocks

Array 1 as 9
Array 2 as 49
Array 3 AS 19
Array 4 as 4


*/



 
      const [sineInches, setSinInches] = useState(0);
      const [sineAngle, setSineAngle] = useState(0);
      const [requiredHeight, setRequiredHeight] = useState(0)

      //Series blocks



      let series1=[0.1001,0.1002,0.1003,0.1004,0.1005,0.1006,0.1007,0.1008,0.1009]
      let series2=[0.101,0.102,0.103,0.104,0.105,0.106,0.107,0.108,0.109,0.110,
        0.111,0.112,0.113,0.114,0.115,0.116,0.117,0.118,0.119,0.120,
        0.121,0.122,0.123,0.124,0.125,0.126,0.127,0.128,0.129,0.130,
        0.131,0.132,0.133,0.134,0.135,0.136,0.137,0.138,0.139,0.140,
        0.141,0.142,0.143,0.144,0.145,0.146,0.147,0.148,0.149];
        //end of series blocks
    //reference for series set in recursion call
    let currentSeries;
  

    //function to trim decimals to N decimal places
      function transformToFixedDecimals(number,places)
      {
        var results = Number(number).toFixed(places);
        return results;
      }
      //function to calculate gauge blocks requires to zero down decimal difference
      function calcTemp(val,height)
      {
        //val represent the current level of recursion
        // apply recursion but it should go backwards for everytime it is called
        if(height===undefined) return;
        var decimals = transformToFixedDecimals(height%1,4);//modulo by 1 gives us the decimals
        var tenthousandvalue;//reference to numbers to represent position on series set(indexer[  ])
        //multiply by ten thousand to shift decimal point to right
        if (val==1)
        {
             tenthousandvalue=Number(decimals)*10000
             currentSeries=series1;
           
        }
        //multiply by  thousand to shift decimal point to right
        if (val==2)
        {
           // debugger;
             tenthousandvalue=Number(decimals)*1000
             
             currentSeries=series2;
             //to fix the error due to fact that our arrays fdo not end in tens
           
          
        }
        //multiply by one 100 to shift decimal point to right
        if (val==3)
        {
             tenthousandvalue=Number(decimals)*100
        }
        if (val==4)
        {
             tenthousandvalue=Number(decimals)*10
        }

       
        //convert to string be able to pick the number to be used as index
       var ttString= Math.trunc(tenthousandvalue).toString()
        //get the last array value
        var lastvalue;
        if(val==1)
         lastvalue =ttString.slice(-1);//get the last value
         if(val==2)
         {
            lastvalue =ttString.slice(1,3);//get the first to third value
         
        
        };
     
        var selectedHeightBlock=currentSeries[lastvalue-1]
        var newHeight=transformToFixedDecimals(height,4) - selectedHeightBlock;
        //mske real time DOM adjustment to required height

        
        console.log("series1 block to pick is " + selectedHeightBlock)
        console.log("New height is " + newHeight);
        val=val+1;
        if(val===3)
        return;
        else
        calcTemp(val,newHeight)
      }
 

  const Result=()=>{

    return(
        <>
        </>
    );
  }
 
  useEffect(
    ()=>{
        //console.log(sineInches);
        //console.log(sineAngle);
        setRequiredHeight(()=>Number(sineInches * sineAngle).toFixed(4));
        calcTemp(1,requiredHeight);
       
    },
    [sineInches,sineAngle]
  );

    return (
        <>
       
         <InputLabel id="demo-simple-select-label">formulah,height=length * sine of angle</InputLabel>
        
        <br></br>
         <TextField
                id="sine-bar-length"
                label="Length of sine bar inches"
                type="number"
                onChange={(e)=>{
                    setSinInches(e.target.value);
                }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
     <br></br>
     <br></br>
            <TextField
                id="sine-angle"
                label="Sine Angle"
                type="number"
                onChange={(e)=>{
                    setSineAngle( Math.sin( e.target.value * Math.PI / 180.0));
                }}
                InputLabelProps={{
                    shrink: true,
                }}
            />
           
        
            <br></br>
            <br></br>
       
                <br></br>
            <InputLabel id="demo-simple-select-label"> The Required Height is {requiredHeight} </InputLabel>
       
        </>
    );
}

export default GaugeBarCalculationPage;