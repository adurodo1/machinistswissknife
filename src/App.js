import logo from './logo.svg';
import './App.css';

 import ConversionCardLayout from './Components/ConversionComponents/ConversionCard/ConversionCardLayout';

import GaugeBarLayout from './Components/GaugeBarComponents/GaugeBarLayout';

import DrillDecimalLayout from './Components/DrillDecimals/DrillDecimalsLayout';
import CuttingSpeedLayout from './Components/CuttingSpeed/CuttingSpeedLayout';

import VerticalMillLayout from './Components/VerticalMillOperations/VerticalMillLayout';



 
/*
Steps taken:

Card,Card sub components and button was used to create ConversionCardLayout
react router dom was used to create links to other pages

*/

function App() {
  return (
    <div className="App">
    <ConversionCardLayout/>  
    <GaugeBarLayout/>
    <DrillDecimalLayout/>
    
    <CuttingSpeedLayout/>
    <VerticalMillLayout/>

    <br></br>
 </div>

  );
}

export default App;
