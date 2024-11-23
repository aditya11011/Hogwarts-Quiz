import react from 'react';
import './App.css';
import {Link} from 'react-router-dom';
export default function Header() {
backgroundColor:'red'
    return(
        <div className='Header'>
        <h1 style={{backgroundColor:'yellow',color:'green',align:'center',marginTop:'20px'}}>Which House do you belong?</h1>
        <div style={{backgroundColor:'grey', display:'inline'}}><b>(Just a FUN GAME)</b></div><br/><br/>
        <Link to='/' style={{margin:'40px', fontSize:'30px'}}><u>Home</u></Link>
        <Link to='/quiz' style={{margin:'40px',fontSize:'30px'}}><u>Quiz</u></Link>
       
        </div>
    );
}