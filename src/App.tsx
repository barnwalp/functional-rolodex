import { useState, useEffect } from 'react';
import './App.css';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

export interface MonsterProps {
	id: number;
	name: string;
	email: string;
}

const App:React.FC = () => {
	const [monsters, setMonsters] = useState<MonsterProps[]>([] as MonsterProps[]);
	const [searchString, setSearchString] = useState<string>('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(response => response.json())
			.then(data => {
				setMonsters(data.map((item: MonsterProps) => {
					return({
						id: item.id,
						name: item.name,
						email: item.email,
					})
				}));
			})
	}, [])

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
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
			<CardList monsterItems={filteredMonsters}/>
		</>
	)
}

export default App;
