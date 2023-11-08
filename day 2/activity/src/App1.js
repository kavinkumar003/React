import {Airplay,ActivitySquare,ArrowUpLeft,ArrowUpRight,Pause,PauseOctagon,WifiOff,ArrowDownLeft,Projector,Router,ScreenShareOff,Globe,HandMetal,Github,ArrowDownRight} from 'lucide-react';
import './Assets/Style1.css'; 
import {AiFillApple,} from "react-icons/ai";  
const App1=()=>
    {
        return(
            <>
            <h1 className="title">ICONS TABLE</h1>
    
            <table cellPadding={15} cellSpacing={2} border={2} className="table">
              
                <tr className="row">
             <td><ArrowUpLeft /></td>
             <td><WifiOff /></td>
             <td><AiFillApple /></td>
             <td><ArrowUpRight /></td>
                </tr>
               
                
                <tr className="row">
                    <td><Pause /></td>
                    <td><ScreenShareOff /></td>
                    <td><Router /></td>
                    <td><ActivitySquare /></td>
                </tr>
               
               
                <tr className="row">
                    <td><PauseOctagon /></td>
                    <td><Globe /></td>
                    <td><Projector /></td>
                    <td><Airplay /></td>
                </tr>
                
             
                <tr className="row">
                   <td><ArrowDownLeft /></td>
                    <td><HandMetal /></td>
                    <td><Github /></td>
                    <td><ArrowDownRight /></td>
                </tr>
                
            </table>
           
            </>
        )
    }
    export default App1;