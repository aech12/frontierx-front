import { FaDiscord } from "react-icons/fa";

const AccordionA = () => (
	<div>
		<div className="flex justify-between">
			<p>Lorem</p>
			<button>&#62;</button>
		</div>
		<p>
			Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a
			type specimen book.
		</p>
		<nav>
			<div>
				<FaDiscord />
				<a href="" className="text-red-600 hover:text-white">
					Lorem
				</a>
			</div>
		</nav>
	</div>
);
export default AccordionA;
