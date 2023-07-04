import { DirectionsBusFilled } from '@mui/icons-material';
import { MenuItem, Select, TextField ,InputLabel, Button} from '@mui/material';
import  React,{useState,useEffect} from 'react';

//Lathe Operations
//RT
const cuttingSpeedChartforTurningDepth150=
[
    [180, 195,600],
    [150,170,600],
    [150, 205,675]
  ];
//FT
  const cuttingSpeedChartforTurningDepth025=
  [
      [240,260,1000],
     
      [185,210,770],
      [240,260,900]
    ];


//Mill Operations
//Drill

const millDrillSpeed=
[
100,
80,
90,
60,
40,
30,
70,
40,
100,
80,
70,
200,
250
];
const millReamSpeed = [
    70,
    50,
    55,
    40,
    30,
    20,
    40,
    30,
    65,
    50,
    40,
    120,
    150
    ];

    const millEndMillSpeed=
    [
        [90,80,90,70,60,50,50,40,120,100,80,300,400],
       
        [450,400,450,350,300,250,250,200,600,500,400,1000,1200]
       
      ];


      const millFaceMillSpeed=
      [
          [100,90,100,80,70,60,60,50,130,120,90,320,420],
         
          [500,450,500,400,350,300,300,250,650,600]
         
        ];
  


    ////////////////////////////////////////////////////////
    const  LatheMachine =()=>{

        const[latheMaterialMetal,setLatheMaterialMetal]=useState(0);
        const[latheCuttingToolMetal,setLatheCuttingToolMetal]=useState(0);
        const[latheOperation,setLatheOperation]=useState('');
        const[latheMaterialDiameter,setLatheMaterialDiameter]=useState(0);
    
        const[cs,setCS]=useState(0);
        const[rpm,setRPM]=useState(0);
    
    //Component states
     
    
    //formula for RPM, selected machine
    ////latheMaterialMetal,latheCuttingToolMetal,latheOperation,latheMaterialDiameter
    
    function latheMaterialMetalSetter(e){
        setLatheMaterialMetal(e.target.value)
    
    }
    
    function latheCuttingToolMetalSetter(e){
        setLatheCuttingToolMetal(e.target.value)
    
    }
    
    function latheOperationSetter(e){
        setLatheOperation(e.target.value)
    
    }
    
    function latheMaterialDiameterSetter(e){
        setLatheMaterialDiameter(e.target.value)
    
    }
    
     
    
    function setCuttingSpeed()
    {
    
    
    }
    
    function calculateRPM()
    {
    //RPM =(4*CS)/Diameter
    if (latheOperation==='RT')
    {
        //debugger;
       setCS(   
        cuttingSpeedChartforTurningDepth150[latheMaterialMetal ][latheCuttingToolMetal]
    )
    setRPM((4*cs)/latheMaterialDiameter)
       }
    else
    {
        setCS(   
            cuttingSpeedChartforTurningDepth025[latheMaterialMetal ][latheCuttingToolMetal]
        )
        setRPM((4*cs)/latheMaterialDiameter)
    
    }
}

useEffect(
    ()=>{

       console.log(latheMaterialMetal);
       console.log(latheCuttingToolMetal); 
       console.log(latheOperation);
       console.log(latheMaterialDiameter); 
      
       console.log(cs);
    }
    ,[ latheMaterialMetal,latheCuttingToolMetal,latheOperation,latheMaterialDiameter]
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
          onChange={latheMaterialDiameterSetter}
         
          InputLabelProps={{
              shrink: true,
          }}
      />
        <br></br>
        <InputLabel id="demo-simple-select-label">Material Metal</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={latheMaterialMetal}
          label="Material Metal"
          onChange={latheMaterialMetalSetter}
          
      >
          <MenuItem value={0}>Free MC Carbon steel</MenuItem>
          <MenuItem value={1}>Low Carbon Steel</MenuItem>
          <MenuItem value={2}>Low Carbon Leaded</MenuItem>
      
      </Select>
      <br></br>
        <InputLabel id="demo-simple-select-label">Cutting Tool Metal</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={latheCuttingToolMetal}
          label="Material Metal"
          onChange={latheCuttingToolMetalSetter}
          
      >
          <MenuItem value={0}>HSS Tool</MenuItem>
          <MenuItem value={1}>CAST ALLOY TOOL</MenuItem>
          <MenuItem value={2}>CARBIDE TOOL</MenuItem>
      
      </Select>
    
        <br></br>
        <InputLabel id="demo-simple-select-label">Operation</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={latheOperation}
          label="Operation"
          onChange={latheOperationSetter}
           
      >
          <MenuItem value={"FT"}>Finish turn</MenuItem>
          <MenuItem value={"RT"}>Rough turn</MenuItem>
    
      
      </Select>
      <br />
                <Button size="small" onClick={calculateRPM} >Calculate RPM</Button> 
                <p>RPM :: {rpm}</p>
              </>
          
    
    );
    
    }
    
    
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
        millDrillSpeed[millMaterialMetal ]
    )
    setRPM((4*cs)/millCuttingToolDiameter)
       }
       else     if (millOperation==='RM')
       {
           debugger;
          setCS(   
            millReamSpeed[millMaterialMetal ]
       )
       setRPM((4*cs)/millCuttingToolDiameter)
          }
          else     if (millOperation==='EM')
          {
              debugger;
             setCS(   
                millEndMillSpeed[millCuttingToolMetal ][millMaterialMetal]
          )
          setRPM((4*cs)/millCuttingToolDiameter)
             }
    else if (millOperation==='FM')
    {
        setCS(   
            millFaceMillSpeed[millCuttingToolMetal ][millMaterialMetal]
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
    
const CuttingSpeedPage = () => {

    const[machine,setMachine]=useState('');

    //latheMaterialMetal,latheCuttingToolMetal,latheOperation,latheMaterialDiameter

 

//Component states
 

//formula for RPM, selected machine
////latheMaterialMetal,latheCuttingToolMetal,latheOperation,latheMaterialDiameter



function selectedMachine(e)
{
let selectedVal = e.target.value;
setMachine(selectedVal)
console.log(selectedVal)
}

function setCuttingSpeed()
{


}
 





return(
    <>
    DRILL DECIMALS PAGE

    
    <InputLabel id="demo-simple-select-label">Milling Machine</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={machine}
                label="Drill Size"
                onChange={selectedMachine}
            >
                <MenuItem value={"l"}>Lathe</MenuItem>
                <MenuItem value={"vm"}>Vertical Mill</MenuItem>
            
            </Select>
            {machine==='l'?
            
              
           <LatheMachine/>

                
            :
           <MillingMachine/>        
            }
       
       
          
       
    </>
);
}

export  default CuttingSpeedPage;