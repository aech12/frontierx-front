// No auth, /home top navbar
// import api from "./someApiRoute";
import Search from "./Search";

const apiMock = {
	getSomeResults: async (): Promise<string[]> =>
		new Promise((resolve) => {
			setTimeout(() => {
				resolve(["Banana", "Orange", "Apple", "Mango"]);
			}, 2000);
		}),
};

function Navbar() {
	// api call to GET results
	const getSearchResults = async (input: string): Promise<string[]> => {
		if (!input) return [];
		return await apiMock.getSomeResults();
	};

	return (
		<div className="flex justify-between">
			<p>Logo</p>
			<div className="flex">
				<Search getSearchResults={getSearchResults} />
				<div className="flex">
					<p>Lorem</p>
					<p>Lorem</p>
					<p>Lorem</p>
				</div>
			</div>
		</div>
	);
}

export default Navbar;
