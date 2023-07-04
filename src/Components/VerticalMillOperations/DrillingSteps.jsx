import { DirectionsBusFilled } from '@mui/icons-material';
import { MenuItem, Select, TextField ,InputLabel, Button} from '@mui/material';
import  React,{useState,useEffect} from 'react';


const DrillingSteps=({SelectedDrill})=>{

    return (
        <>
        <h3>Drilling Steps</h3>
        <ul>
            <li>Mount work in vise or clamp it to the table, work must be supported </li>
            <li>Mount a drill chuck in the spindle</li>
            <li>Mount a center finder in the drill chuck</li>
            <li>Adjust the table until the  center punch mark of the hole to be drilled is in line with the tip of the rotating center finder</li>
            <li>Tighten the table and saddle clamps</li>     
            <li>Mount a center drill in the drill chick having it extend only .50 in to prevent breakage</li> 
            <li>Set the spindle speed to approximatelyu 1000 r/min, and feed the center drill with quil handfeed lever until about half of the angulat portion enters the work piece
            </li>
            <li>Mount the drill size <b>{SelectedDrill}</b> in the drill chuck</li>
            <li>Set the depth stop so that the drill just clears the bottom of the workpiece to prevent drilling
                into the machine table
            </li>
            <li>Set the machine to the proper speed and feed, Calculate using this link aaaa</li>
            <li>Apply cutting fluid and use the quil handfeed lever, or the automatic feed, to drill the hole</li>
        </ul>
        </>
    )
}

export default DrillingSteps;