import React from 'react';
import Itens from './Itens';
import Paginacao from './Pagination';
import './list.css';





const List = ({data, after,onNextPage }) => {
		const listOfItems = data.map(  (children, id) => <Itens key={id} art={children} /> )
			return(
				<div className='listcontainer'>
					<ul >
						{listOfItems}
					</ul>
                    <div className= 'pagina'>
                      { (<Paginacao after={after}  onNextPage={onNextPage} />)}
                    </div>
				</div>
                
				) 
};
export default List;