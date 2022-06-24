// top navbar searchbar
import { useState, useTransition } from "react";
import type { Dispatch, SetStateAction } from "react";
import { BsSearch } from "react-icons/bs";
import { ImSpinner3 } from "react-icons/im";

interface Props {
	getSearchResults: (input: string) => Promise<string[]>;
	setResults: Dispatch<SetStateAction<string[]>>;
}

function SearchInput({ getSearchResults, setResults }: Props) {
	const [input, setInput] = useState("");
	const [isPending, startTransition] = useTransition();

	const onUserType = (e: any) => {
		const value = e.target.value;
		setInput(value);
		// console.log("INPUT", e.target.value, typeof e.target.value);
		startTransition(() => {
			handleSearch(value);
		});
	};

	const handleSearch = async (value: string) => {
		console.log("VALUE", value, input);
		const res = await getSearchResults(value);
		setResults(res);
	};

	return (
		<label className="w-full md:w-96 lg:w-full focus:border-2 focus:border-gray-200 bg-[#1F1F1F] rounded flex items-center justify-between">
			<button className="p-2 px-4 active:bg-red-400" aria-label="Search input" disabled={isPending} onClick={async () => setResults(await getSearchResults(input))}>
				{isPending ? <ImSpinner3 /> : <BsSearch />}
			</button>
			<input value={input} type="input" onChange={(e) => onUserType(e)} className="bg-[#1F1F1F] focus:border-0  w-full h-6" />
		</label>
	);
}

export default SearchInput;
