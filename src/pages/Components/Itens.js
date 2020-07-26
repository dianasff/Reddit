import React from 'react';
import './itens.css';
import thumb from '../../img/thumb.jpg';



const Itens =({art}) => {
	
	const calc = () =>{
		const now= new Date();
		const nowTimeStamp = now.getTime();
		const microsecdiff= Math.abs((art.data.created*1000) - nowTimeStamp);
		const minDiff=Math.floor(microsecdiff/60000)
		const hoursdiff= Math.floor(microsecdiff/3600000 )
		
		if(hoursdiff > 48){
			const Time=Math.floor(hoursdiff/24);
			return (Time + '  dias')
		}else if(hoursdiff > 0 && hoursdiff < 48 ){
			return hoursdiff + '  horas'
		}else if(hoursdiff === 0 ){
			return minDiff +'  minutos'

		}
		
	}
	return(

		<div className='article'>
					
						<div className='innerarticle' >
                                <div>
                                    {(art.data.thumbnail === 'self' || art.data.thumbnail === 'default')? <img alt='thumbnail' src={thumb} /> : <img alt='thumbnail' src={art.data.thumbnail}/>}
                                </div>
                                <div className='artinfo'  >
								
									<h1 className='titulo'>{art.data.title} </h1>
                                    <h3 className= 'info'>enviado a {calc()} por <span>{art.data.author}</span> </h3>
                                    <a href={art.data.url}>
									 <h2 className='domain'>{art.data.domain} </h2>
									</a>
									
							    </div>
                            
							
						</div>	
				
				
			
		</div>
		)
}

export default Itens;