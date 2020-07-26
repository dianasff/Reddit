import React from 'react';
import {BrowserRouter,Route, Switch} from 'react-router-dom';
import Hot from './pages/Hot';
import New from './pages/New';
import Rising from './pages/Rising';


export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Hot}/>
                <Route path='/hot' component={Hot}/>
                <Route path='/new' component={New}/>
                <Route path='/rising' component={Rising}/>
                
            </Switch>   
        </BrowserRouter>
    );
    
}