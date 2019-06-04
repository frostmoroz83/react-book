import React from 'react';
import {Menu, Input} from 'semantic-ui-react';


const Filter = ({setFilter, filterBy, searchQueryy, setSerchQuery }) => (
	// console.log(`Filter -`, searchQuery),
	// console.log(`filterBy -`, filterBy),
	// console.log(`this filter -`, this),
	<Menu secondary>
		<Menu.Item
			active={filterBy === 'all'}
			onClick={setFilter.bind(this, 'all')}>
			Все
		</Menu.Item>
		<Menu.Item
			active={filterBy === 'price_high'}
			onClick={setFilter.bind(this, 'price_high')}>
			Цена (дорогие)
		</Menu.Item>
		<Menu.Item
			active={filterBy === 'price_low'}
			onClick={setFilter.bind(this, 'price_low')}>
			Цена (дешевые)
		</Menu.Item>
		<Menu.Item
			active={filterBy === 'author'}
			onClick={setFilter.bind(this, 'author')}>
			Автор
		</Menu.Item>
		<Menu.Item>
			<Input icon="search"
						 onChange={e => setSerchQuery(e.target.value)}
						 value={searchQueryy}
						 placholder="Введите запрос...">
			</Input>
		</Menu.Item>
	</Menu>
)
export default Filter;