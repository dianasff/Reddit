import React, {useEffect} from 'react';
import {Link, useHistory} from 'react-router-dom';

import api from '../service/api';


export default function Hot(){
    useEffect(()=>{
        api.get()
        },[]);
        
        
    return(
       <div >
           <p>HEllo it's me!</p>
       </div>

    );
}