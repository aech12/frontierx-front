function SearchResults({ results }: { results: string[] }) {
	if (!results) return <></>;
	return (
		<div className="bg-green-600">
			{results.map((result) => (
				<p key={result} className="cursor-pointer">
					{result}
				</p>
			))}
		</div>
	);
}

export default SearchResults;
