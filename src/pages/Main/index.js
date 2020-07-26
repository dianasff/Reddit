import React from 'react';
import {NavLink} from 'react-router-dom';
import './styles.css';




export default function Principal(){
  
        
    return(
       <div >
           <h1 className='titlepage'>REACT<span>JS</span></h1>
           <div className='sub'>
                <NavLink exact className='subpage'  activeClassName='active-link' id='hot' to="/hot"> HOT </NavLink>
                <NavLink  exact className='subpage' activeClassName='active-link' id='new' to="/new" > NEW </NavLink>
                <NavLink exact className='subpage' activeClassName='active-link' id='rising' to="/rising" > RISING </NavLink>
           </div>
           
       </div>

    );
}