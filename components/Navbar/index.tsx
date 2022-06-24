// import api from "./someApiRoute";
import Search from "./Search";

const apiMock = {
	getSomeResults: async (): Promise<string[]> =>
		new Promise((resolve) => {
			setTimeout(() => {
				resolve(["Banana", "Orange", "Apple", "Mango"]);
			}, 1000);
		}),
};

function Navbar() {
	// fake api call to GET search results
	const getSearchResults = async (input: string): Promise<string[]> => {
		if (!input) return [];
		return await apiMock.getSomeResults();
	};

	return (
		<header className="bg-[#0D0D0D]">
			<div className="p-4 py-5 m-auto flex flex-col sm:flex-row justify-between  max-w-screen-2xl">
				<p className="text-xl ">LOGO</p>
				<div className="lg:w-8/12 xl:w-7/12 flex flex-col sm:flex-row justify-end">
					<Search getSearchResults={getSearchResults} className="m-auto my-2 sm:my-0 sm:mx-4" />
					<div className="flex m-auto sm:m-0">
						<p className="mx-4 cursor-pointer hover:text-red-400 transition">Lorem</p>
						<p className="mx-4 cursor-pointer hover:text-red-400 transition">Lorem</p>
						<p className="mx-4 cursor-pointer hover:text-red-400 transition">Lorem</p>
					</div>
				</div>
			</div>
			<div className="h-1 w-full bg-gradient-to-r from-[#665AEF] to-[#FC364C]"></div>
		</header>
	);
}

export default Navbar;
