import { FaDiscord } from "react-icons/fa";

const Link = () => (
	<a href="" className="pr-2 py-1 flex items-center w-min cursor-hover ">
		<FaDiscord />
		<span className="ml-2 mr-4 text-red-600 hover:text-white">Lorem</span>
	</a>
);

const AccordionA = () => (
	<div>
		<p className="text-sm">
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
			type specimen book.
		</p>
		<nav className="m-4">
			<div className="flex">
				<Link />
				<Link />
			</div>
			<div className="flex">
				<Link />
				<Link />
			</div>
		</nav>
	</div>
);
export default AccordionA;
