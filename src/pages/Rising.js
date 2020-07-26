import React, {useEffect, useState} from 'react';
import List from './Components/List';
import Principal from './Main';
import '../global.css';
import axios from 'axios';



export default function Rising(){
    const [res, setRes] = useState([])
    const [after, setAfter] = useState('')
    

    
        //makes a call to Reddit api
        useEffect(()=>{
            axios.get('https://www.reddit.com/r/reactjs/rising.json').then(res =>{
                setRes(res.data.data.children)
                setAfter(res.data.data.after)
                

            })
        },[])   
        // takes the results from the next page to add to the page  */}
        const onNextPage = async(after)=>{
            const resposta= await axios({
                method: 'GET',
                url:'https://www.reddit.com/r/reactjs/rising.json',
                params:{after:after}
            });
            // update the states */}
            setAfter(resposta.data.data.after) 
            setRes(res => res.concat(resposta.data.data.children)) 
        }
        
    return(
       <div >
           <Principal/>
           <div className='dados'>
            <List data={res} after={after} onNextPage={onNextPage} />
           </div>
           
       </div>

    );
}