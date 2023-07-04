import logo from './logo.svg';
import './App.css';
import { HashRouter,BrowserRouter as Router, Route,Routes } from "react-router-dom";
 import ConversionCardLayout from './Components/ConversionComponents/ConversionCard/ConversionCardLayout';
import ConversionPage from './Components/ConversionComponents/ConversionCard/ConversionPage';
import GaugeBarCalculationPage from './Components/GaugeBarComponents/GaugeBarCalculationPage';
import GaugeBarLayout from './Components/GaugeBarComponents/GaugeBarLayout';
import DrillDecimalsPage from './Components/DrillDecimals/DrillDecimalsPage';
import DrillDecimalLayout from './Components/DrillDecimals/DrillDecimalsLayout';
import CuttingSpeedLayout from './Components/CuttingSpeed/CuttingSpeedLayout';
import CuttingSpeedPage from './Components/CuttingSpeed/CuttingSpeedPage';
import VerticalMillLayout from './Components/VerticalMillOperations/VerticalMillLayout';
import VerticalMillPage from './Components/VerticalMillOperations/VerticalMillPage';


 
/*
Steps taken:

Card,Card sub components and button was used to create ConversionCardLayout
react router dom was used to create links to other pages

*/

function App() {
  return (
<HashRouter>
    {/** Router*/}
    <div className="App">
       <ConversionCardLayout/>  
       <GaugeBarLayout/>
       <DrillDecimalLayout/>
       
       <CuttingSpeedLayout/>
       <VerticalMillLayout/>

       <br></br>
    </div>
     <Routes>
      <Route path="/ConversionPage" exact element={<ConversionPage/>}/>
      <Route path="/GaugeBarCalculationPage" exact element={<GaugeBarCalculationPage/>}/>  
      <Route path='/DrillDecimalsPage' exact element={<DrillDecimalsPage/>}/>
      <Route path='/CuttingSpeedPage' exact element={<CuttingSpeedPage/>}/>
      <Route path='/VerticalMillPage' exact element={<VerticalMillPage/>}/>

      
      
     </Routes>
        {/**Router */}
 
  </HashRouter>
  );
}

export default App;
