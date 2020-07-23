import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Hot from './pages/Hot';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Hot}/>
                
            </Switch>   
        </BrowserRouter>
    );
    
}