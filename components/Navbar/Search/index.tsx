// No auth, /home top navbar
import React, { useState } from "react";
import clsx from "clsx";
import SearchInput from "./SearchInput";
const SearchResults = React.lazy(() => import("./SearchResults"));

type Props = { getSearchResults: (input: string) => Promise<string[]>; className?: string };

function SearchComponent({ getSearchResults, className }: Props) {
	const [results, setResults] = useState<string[]>([]);

	return (
		<div className={clsx(className, "flex flex-col w-full")}>
			<SearchInput getSearchResults={getSearchResults} setResults={setResults} />
			<React.Suspense fallback="LoadingSpinner">
				<SearchResults results={results} />
			</React.Suspense>
		</div>
	);
}

export default SearchComponent;
