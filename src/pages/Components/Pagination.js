import React from 'react';
import './pagination.css';

const Paginacao=({after, onNextPage})=>{
	 
	return(
		<div className='pag'>
			{(after) ? (<button className= 'paginacao' onClick={()=> onNextPage(after)} > + Ver mais </button>): (null)	}
			
		</div>	
		);

} ;

export default Paginacao;