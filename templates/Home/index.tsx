// local
import { Navbar, Accordion } from "../../components";
import AccordionA from "./AccordionA";
import AccordionB from "./AccordionB";

const HomeTemplate = () => {
	return (
		<main className="bg-gray-400 text-white">
			<Navbar />
			<Accordion title="Title1">
				<AccordionA />
			</Accordion>
			<Accordion title="Title2">
				<AccordionB />
			</Accordion>
		</main>
	);
};

export default HomeTemplate;
