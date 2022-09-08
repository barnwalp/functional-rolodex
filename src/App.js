import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component.jsx';
import './App.css';

const App = () => {
	console.log('render');
	const [monsters, setMonsters] = useState([]);
	const [searchString, setSearchString] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => setMonsters(data))
	}, [])

	const handleChange = (event) => {
		setSearchString(event.target.value);
	}

	const filteredMonsters = monsters.filter((monster) => {return monster.name.toLowerCase().includes(searchString)});

	return (
		<>
			<h1 className='app-title'>Monster Rolodex</h1>
			<SearchBox 
				className="search-box"
				onChangehandler={handleChange}
				placeholder="Search Monsters"
			/>
			<CardList monsters={filteredMonsters}/>
		</>
	)
}

export default App;
