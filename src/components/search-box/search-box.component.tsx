import './search-box.style.css';

const SearchBox = (props) => {
	return (
		<>
			<input 
				className={props.className}
				type="search" 
				placeholder={props.placeholder} 
				onChange={props.onChangehandler}
			/>
		</>
	);
};

export default SearchBox;
