// top navbar searchbar
import { useState, useTransition } from "react";
import type { Dispatch, SetStateAction } from "react";

interface Props {
	getSearchResults: (input: string) => Promise<string[]>;
	setResults: Dispatch<SetStateAction<string[]>>;
}

function SearchInput({ getSearchResults, setResults }: Props) {
	const [input, setInput] = useState("");
	const [isPending, startTransition] = useTransition();

	const onUserType = (e: any) => {
		setInput(e.target.value);
		startTransition(() => {
			handleSearch();
		});
	};

	const handleSearch = async () => {
		const res = await getSearchResults(input);
		setResults(res);
	};

	return (
		<label className="border-red-400 border-2 bg-green-400">
			<button disabled={isPending} onClick={() => handleSearch()}>
				SE
			</button>
			<input value={input} onChange={(e) => onUserType(e)} />
		</label>
	);
}

export default SearchInput;
