import { useEffect } from 'react';
import './App.css';


const App = () => {
	// console.log('render');
	// const [monsters, setMonsters] = useState<MonsterProps[]>([] as MonsterProps);
	// const [searchString, setSearchString] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => console.log(data))
	}, [])

	// const handleChange = (event) => {
	// 	setSearchString(event.target.value);
	// }

	// const filteredMonsters = monsters.filter((monster) => {return monster.name.toLowerCase().includes(searchString)});

	return (
		<div>
			<h1>Test</h1>
		</div>
		// <>
		// 	<h1 className='app-title'>Monster Rolodex</h1>
		// 	<SearchBox 
		// 		className="search-box"
		// 		onChangehandler={handleChange}
		// 		placeholder="Search Monsters"
		// 	/>
		// 	<CardList monsters={filteredMonsters}/>
		// </>
	)
}

export default App;
