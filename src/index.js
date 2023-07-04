import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HashRouter,BrowserRouter as Router, Route,Routes } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import VerticalMillPage from './Components/VerticalMillOperations/VerticalMillPage';
import DrillDecimalsPage from './Components/DrillDecimals/DrillDecimalsPage';
import ConversionPage from './Components/ConversionComponents/ConversionCard/ConversionPage';
import GaugeBarCalculationPage from './Components/GaugeBarComponents/GaugeBarCalculationPage';
import CuttingSpeedPage from './Components/CuttingSpeed/CuttingSpeedPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   
    <HashRouter>
    {/** Router*/}
   
     <Routes>
     <Route path="/" exact element={ <App />}/>
      <Route path="/ConversionPage" exact element={<ConversionPage/>}/>
      <Route path="/GaugeBarCalculationPage" exact element={<GaugeBarCalculationPage/>}/>  
      <Route path='/DrillDecimalsPage' exact element={<DrillDecimalsPage/>}/>
      <Route path='/CuttingSpeedPage' exact element={<CuttingSpeedPage/>}/>
      <Route path='/VerticalMillPage' exact element={<VerticalMillPage/>}/>

      
      
     </Routes>
        {/**Router */}
 
  </HashRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
