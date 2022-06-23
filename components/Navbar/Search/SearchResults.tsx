function SearchResults({ results }: { results: string[] }) {
	if (!results) return <></>;
	return (
		<div className="bg-[#1F1F1F] rounded-b transition">
			{results.map((result) => (
				<p key={result} className="cursor-pointer hover:text-red-400">
					{result}
				</p>
			))}
		</div>
	);
}

export default SearchResults;
