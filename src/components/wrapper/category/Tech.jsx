import React from 'react'
import { useQuery } from '@apollo/client'
import { GET_PRODUCTS } from '../../../query/category'
import Item from './item/Item'
import { NavLink } from 'react-router-dom'

const Tech = ({currentCurrency, title}) => {
	const { data, loading, error } = useQuery(GET_PRODUCTS)
	if (loading) return null;
	if (error) return `Error! ${error}`;

	return (
		<div className='wrapper'>
			<h2>{title}</h2>
			<div className='wrapper-content'>
				{data.categories[2].products.map(el => (
					<NavLink key={el.id} to={'/Pdp/' + el.id}>
						<Item
							img={el.gallery}
							key={el.id}
							id={el.id}
							title={el.name}
							prices={el.prices.find(el => el.currency.symbol === currentCurrency)}
						/>
					</NavLink>
				))}
			</div>
		</div>
	)
}
export default Tech
