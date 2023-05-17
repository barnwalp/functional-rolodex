import './search-box.style.css';

interface SearchBoxProps {
	onChangehandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
	placeholder: string;
	className: string;
}

const SearchBox = (props: SearchBoxProps) => {
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
