// local
import { Accordion } from "../../components";
import AccordionA from "./AccordionA";
import AccordionB from "./AccordionB";

const HomeTemplate = () => {
	return (
		<main className="grid grid-cols-1  justify-items-center md:grid-cols-2">
			<Accordion title="Title1">
				<AccordionA />
			</Accordion>
			<Accordion title="Title2">
				<AccordionB />
			</Accordion>
			<Accordion title="Title1" className="md:col-start-2">
				<AccordionA />
			</Accordion>
		</main>
	);
};

export default HomeTemplate;
