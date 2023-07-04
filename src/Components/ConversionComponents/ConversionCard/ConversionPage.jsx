import { DirectionsBusFilled } from '@mui/icons-material';
import { MenuItem, Select, TextField, InputLabel, Button } from '@mui/material';
import React, { useState, useEffect } from 'react';


const ConversionPage = () => {


    //Component states
    const [from, setFrom] = useState(0); //From unit value
    const [to, setTo] = useState(0); // Target or to unit value
    const [value, setValue] = useState(0); // the target value to transform
    const [fvalue, setFValue] = useState('Empty');//state of finalized output string  
    const [outputString, setOutputString] = useState([]);// List of output strings to be printed

    //Method handler for select(From input)
    const FromChange = (event) => {
        setFrom(event.target.value);
    };
    //Method handler for select(To input)
    const ToChange = (event) => {
        setTo(event.target.value);
    };
    //Method handler for input value
    const changeValue = (event) => {
        setValue(event.target.value);
    };

    const ConvertUnitValue = () => {
        /**
         * the values for 'from' and  'to' are used to tell us the unit selected 
         * 30 == yard 10==inches etc....
         * this method is to take the input values for from,to and number and convert it step by step
         * according to conversion unit chart provided in week 1 of the machinist class
         * the 'from' unit will serve as the spoint and the 'to' unit will serve as the 
         * the difference is calculated, this will tell us the steps we need to take our conversion row
         * 
         * 
         * 
         * 
         */
        let stringput1, stringput2, stringput3, stringput4, stringput5;
        let output1 = 0;
        let output2 = 0;
        let output3 = 0;
        let output4 = 0;
        let output5 = 0;
        let conversionArray = [60, 50, 40, 30, 20, 10]

        let spoint = from;
        let epoint = to;
        let diff = 0;
        // if(spoint>epoint)
        diff = spoint - epoint;


        //find starting point equivalent in conversion array
        let sindex = conversionArray.findIndex(v => v === spoint);
        //steps to take is the distance to move towards or away
        let stepstoTake = ((diff / 10));
        //the head of the counter should be the initial unit,starting point
        var cnt = sindex;
        // the value the starting index should not exceed
        var conversionTableDifferences = stepstoTake + sindex;


        //to store temporary conversion for each applicable step

       var tempConversionVariable=value;
       

        //if difference is a positive number
        if (diff >= 0)
            while (cnt <= conversionTableDifferences)//stepstoTake+(spoint/10))//cnt<epoint/10
            {
                /*
                The loop actually is a representation of a mechanism where by each  value represents
                a range of unit to be converted. The range is a higher unit to a low unit
                  output1 = value * 3;
                output2 = output1 * 12;
                output3 = output2 * 25.4;
                output4 = output3 * 0.1;
                output5 = output4 * 0.01;
                */
              debugger;
                if (cnt === 0) {
                    console.log("Yard to foot");
                    console.log(value * 3);
                    output1 = tempConversionVariable * 3;
                    //tempConversionVariable
                    stringput1 = `${tempConversionVariable} Yard is  ${output1} Foot `;
                    tempConversionVariable=output1; //make output new tempconversion for follow up steps

                }
                if (cnt === 1) {
                    console.log("foot to inches");
                    console.log(fvalue * 12);
                    
                    output2 = tempConversionVariable * 12;
                    stringput2 = `${tempConversionVariable} Foot is  ${output2} Inch `;
                    tempConversionVariable=output2;

                }
                if (cnt === 2) {
                    console.log("Inches to millimeter");

                    output3 = tempConversionVariable * 25.4;
                    stringput3=`${tempConversionVariable} Inch is  ${output3} Millimeter `;
                    tempConversionVariable=output3;

                }
                if (cnt === 3) {

                    output4 = tempConversionVariable * 0.1;
                    stringput4 = `${tempConversionVariable} Millimeter is  ${output4} Centimeter `;
                    tempConversionVariable=output4;

                }
                if (cnt === 4) {

                    output5 = tempConversionVariable * 0.01;
                    stringput5 = `${tempConversionVariable} Centimeter is  ${output5} Meter `;
                    tempConversionVariable=output5;


                    //setFValue(()=>value*12);
                }
                cnt = cnt + 1;
            }

        else
          { 
            //cnt will remain the same we have to use a temp value that will change oerloop
            var tempval=conversionTableDifferences;
            while (cnt >= tempval)//stepstoTake+(spoint/10))//cnt<epoint/10
            {/* 
                if (cnt === 1) {
                    console.log("Yard to foot");
                    console.log(value * 3);
                    output1 = value * 3;
                    //setFValue(()=>value*3)
                    //setFValue(value*3);
                }
                if (cnt === 2) {
                    console.log("foot to inches");
                    console.log(fvalue * 12);
                    output2 = output1 * 12
                    //setFValue(()=>value*12);
                }
                cnt = cnt - 1; */


                if (tempval === 4) {
                    console.log("Yard to foot");
                    console.log(value * 3);
                    output5 = tempConversionVariable / 3;
                    //tempConversionVariable
                    stringput5 = `${tempConversionVariable} Yard is  ${output5} Foot `;
                    tempConversionVariable=output5; //make output new tempconversion for follow up steps

                }
                if (tempval === 3) {
                    console.log("foot to inches");
                    console.log(fvalue * 12);
                    
                    output4 = tempConversionVariable / 12;
                    stringput4 = `${tempConversionVariable} Foot is  ${output4} Inch `;
                    tempConversionVariable=output4;

                }
                if (tempval === 2) {
                    console.log("Inches to millimeter");

                    output3 = tempConversionVariable / 25.4;
                    stringput3=`${tempConversionVariable} Millimeter  is  ${output3} Inch `;
                    tempConversionVariable=output3;

                }
                if (tempval === 1) {

                    output2 = tempConversionVariable / 0.1;
                    stringput2 = `${tempConversionVariable} Centimeter  is  ${output2} Millimeter `;
                    tempConversionVariable=output2;

                }
                if (tempval === 0) {

                    output1 = tempConversionVariable / 0.01;
                    stringput1 = `${tempConversionVariable} Meter is  ${output1} Centimeter `;
                    tempConversionVariable=output1;


                    //setFValue(()=>value*12);
                }
                tempval = tempval + 1;
          
            }
        }


        setOutputString(() => [...outputString, stringput1, stringput2, stringput3, stringput4, stringput5])

        //Once output string has been set, set final value status to done
        //this will cause the fvalue to re-render
        setFValue('done');

    }
    useEffect(
        () => {
            console.log(from);
            console.log(to);
            console.log(value);
        },
        [from, to]
    );

    return (
        <>
            <h1>From</h1>
            <TextField
                id="outlined-number"
                label="Number"
                type="number"
                onChange={changeValue}
                InputLabelProps={{
                    shrink: true,
                }}
            />
            <InputLabel id="demo-simple-select-label">Unit</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={from}
                label="Unit"
                onChange={FromChange}
            >
                <MenuItem value={60}>Yards</MenuItem>
                <MenuItem value={50}>Feet</MenuItem>
                <MenuItem value={40}>Inches</MenuItem>
                <MenuItem value={30}>Millimeters</MenuItem>
                <MenuItem value={20}>Centimeters</MenuItem>
                <MenuItem value={10}>Meters</MenuItem>
            </Select>

            <h1>To</h1>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={to}
                label="Unit"
                onChange={ToChange}
            >
                <MenuItem value={60}>Yards</MenuItem>
                <MenuItem value={50}>Feet</MenuItem>
                <MenuItem value={40}>Inches</MenuItem>
                <MenuItem value={30}>Millimeters</MenuItem>
                <MenuItem value={20}>Centimeters</MenuItem>
                <MenuItem value={10}>Meters</MenuItem>
            </Select>
            <br></br>
            <Button size="small" onClick={ConvertUnitValue}>Calculate</Button>
            <p>

            </p>
            {
                fvalue !== 'Empty' ? outputString.map(
                    (d) => {
                        return (
                            <>
                                {d}
                                <br></br>
                            </>
                        );
                    }
                ) : ''
            }
        </>
    );
}

export default ConversionPage;