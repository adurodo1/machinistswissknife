import { DirectionsBusFilled } from '@mui/icons-material';
import { MenuItem, Select, TextField ,InputLabel, Button} from '@mui/material';
import  React,{useState,useEffect} from 'react';
import DrillingSteps from './DrillingSteps';

 

    ////////////////////////////////////////////////////////
 
    const MillingMachine=()=>{
        const[millMaterialMetal,setMillMaterialMetal]=useState(0);
        const[millCuttingToolMetal,setMillCuttingToolMetal]=useState(0);
        const[millOperation,setMillOperation]=useState('');
        const[millCuttingToolDiameter,setMillCuttingToolDiameter]=useState(0);
    
        const[cs,setCS]=useState(0);
        const[rpm,setRPM]=useState(0);
    
    //Component states
     
    
    //formula for RPM, selected machine
    ////latheMaterialMetal,latheCuttingToolMetal,latheOperation,latheMaterialDiameter
    
    function MillMaterialMetalSetter(e){
        setMillMaterialMetal(e.target.value)
    
    }
    
    function millCuttingToolMetalSetter(e){
        setMillCuttingToolMetal(e.target.value)
    
    }
    
    function millOperationSetter(e){
        setMillOperation(e.target.value)
    
    }
    
    function millCuttingToolDiameterSetter(e){
        setMillCuttingToolDiameter(e.target.value)
    
    }
    
     
    
    function setCuttingSpeed()
    {
    
    
    }
    
    function calculateRPM()
    {
    //RPM =(4*CS)/Diameter

    /*
 <MenuItem value={"DR"}>Drilling</MenuItem>
              <MenuItem value={"BR"}>Boring</MenuItem>
              <MenuItem value={"EM"}>End Milling</MenuItem>
              <MenuItem value={"EM"}>Face Milling</MenuItem>
    */
    if (millOperation==='DR')
    {
        debugger;
       setCS(   
       // millDrillSpeed[millMaterialMetal ]
    )
    setRPM((4*cs)/millCuttingToolDiameter)
       }
       else     if (millOperation==='RM')
       {
           debugger;
          setCS(   
          //  millReamSpeed[millMaterialMetal ]
       )
       setRPM((4*cs)/millCuttingToolDiameter)
          }
          else     if (millOperation==='EM')
          {
              debugger;
             setCS(   
               // millEndMillSpeed[millCuttingToolMetal ][millMaterialMetal]
          )
          setRPM((4*cs)/millCuttingToolDiameter)
             }
    else if (millOperation==='FM')
    {
        setCS(   
          //  millFaceMillSpeed[millCuttingToolMetal ][millMaterialMetal]
        )
        setRPM((4*cs)/millCuttingToolDiameter)
    
    }
}

useEffect(
    ()=>{
 
    }
    ,[millOperation]
);
        return(
            <>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <TextField
              id="sine-bar-length"
              label="Material Diameter"
              type="number"
             
              onChange={millCuttingToolDiameterSetter}
              InputLabelProps={{
                  shrink: true,
              }}
          />
            <br></br>
            <InputLabel id="demo-simple-select-label">Work piece Metal</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              
              label="Work piece Metal"

              onChange={MillMaterialMetalSetter}
              
              
          >
              <MenuItem value={0}>FREE MC CARBON STEEL</MenuItem>
              
              <MenuItem value={1}>LOW CARBON STEEL</MenuItem>
              
              <MenuItem value={2}>LOW CARBON LEADED</MenuItem>
              
              <MenuItem value={3}>MEDIUM CARBON STEEL</MenuItem>
              
              <MenuItem value={4}>HIGH CARBON STEEL</MenuItem>
              
              <MenuItem value={5}>ALLOY TOOL STEEL</MenuItem>
              
              <MenuItem value={6}>STAINLESS STEEL FERRITIC</MenuItem>
              
              <MenuItem value={7}>STAINLESS STEEL AUSTENTIC</MenuItem>
              
              <MenuItem value={8}>CAST IRON CAST 20</MenuItem>
              
              <MenuItem value={9}>CAST IRON CAST 40</MenuItem>
              
              <MenuItem value={10}>CAST IRON 60</MenuItem>
              
              <MenuItem value={11}>ALUMINIUM ALLOYS WROUGHT</MenuItem>
              
              <MenuItem value={12}>ALUMINIUM ALLOYS CAST</MenuItem>

             
          </Select>
          <br></br>
            <InputLabel id="demo-simple-select-label">Cutting Tool Metal</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
             
              label="Material Metal"
              onChange={millCuttingToolMetalSetter}
            
              
          >
              <MenuItem value={0}>HSS</MenuItem>
              <MenuItem value={1}>CARBIDE</MenuItem>
            
          
          </Select>

            <br></br>
            <InputLabel id="demo-simple-select-label">Operation</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
          
              label="Operation"
              onChange={millOperationSetter}
        
               
          >
              <MenuItem value={"DR"}>Drilling</MenuItem>
              <MenuItem value={"RM"}>Reaming</MenuItem>
              <MenuItem value={"EM"}>End Milling</MenuItem>
              <MenuItem value={"FM"}>Face Milling</MenuItem>
          
          </Select>

          <br />
            <Button size="small"   onClick={calculateRPM}>Calculate RPM</Button> 
            <p>RPM :: {rpm}</p>
                  </>
            
        );
    }
    
const VerticallMillOperations=["Drilling" , "Tapping"  ,"Boring", "Facemilling", "Endmilling"];

const DrillingOperations=()=>{
const[selectedDrill,setSelectedDrill]=useState('');
const[drillState,setDrillState]=useState(false);


function dddd(){

}

    function DrillOperationStepsHandler(e){
        setSelectedDrill(e.target.value);
        setDrillState(true)


    }

    return(
        <>
           <InputLabel id="demo-simple-select-label">Select Drill Size</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={selectedDrill}
                label="Drill Size"
                onChange={DrillOperationStepsHandler}
            >
                <MenuItem value={0.2500}>1/4</MenuItem>
                <MenuItem value={0.1563}>1/64</MenuItem>
                <MenuItem value={0.0313}>1/32</MenuItem>
                <MenuItem value={0.0469}>3/64</MenuItem>
                <MenuItem value={0.0625}>1/16</MenuItem>
                <MenuItem value={0.0781}>5/64</MenuItem>
            </Select>

            {
                drillState===true?
                <>
              <DrillingSteps SelectedDrill={selectedDrill}/>
              </>
                :""
            }
        </>
    );
}
const VerticalMillPage = () => {

    const[operation,setOperation]=useState('');
    const[drillState,setDrillState]=useState(false);

    //latheMaterialMetal,latheCuttingToolMetal,latheOperation,latheMaterialDiameter
function operationSelectorHandle(e)
{
    setOperation(e.target.value);


    if(e.target.value===0)//Drill operation
    setDrillState(true);
   else if(e.target.value===1)
    {
        setDrillState(false);
    }
    else if(e.target.value===2)
    {
        setDrillState(false);
    } 
    else if(e.target.value===3)
    {
        setDrillState(false);
    }
    else if(e.target.value===4)
    {
        setDrillState(false);
    }
}

return(
    <>
   VERTICAL MILL PAGE   

   <br></br>
            <InputLabel id="demo-simple-select-label">Operation</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
             
              label="Material Metal"
              onChange={operationSelectorHandle}
            
              
          >
          
              <MenuItem value={0}>Drilling</MenuItem>
              <MenuItem value={1}>Tapping</MenuItem>
              <MenuItem value={2}>Boring</MenuItem>
              <MenuItem value={3}>Facemilling</MenuItem>
              <MenuItem value={4}>Endmilling</MenuItem>
            
          
          </Select>

          {drillState===true?<DrillingOperations/>:""}
    </>
);
}

export  default VerticalMillPage;