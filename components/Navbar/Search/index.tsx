// No auth, /home top navbar
import React, { useState } from "react";
import SearchInput from "./SearchInput";
const SearchResults = React.lazy(() => import("./SearchResults"));

function SearchComponent({ getSearchResults }: { getSearchResults: (input: string) => Promise<string[]> }) {
	const [results, setResults] = useState<string[]>([]);

	return (
		<div className="flex justify-between">
			<SearchInput getSearchResults={getSearchResults} setResults={setResults} />
			<React.Suspense fallback="LoadingSpinner">
				<SearchResults results={results} />
			</React.Suspense>
		</div>
	);
}

export default SearchComponent;
