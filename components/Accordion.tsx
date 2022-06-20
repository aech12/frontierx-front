import { useState } from "react";
import { AiOutlineDown, AiOutlineLeft } from "react-icons/ai";

type Props = {
	title: string;
	children: React.ReactNode;
};

function Accordion({ title, children }: Props) {
	const [isOpened, setIsOpened] = useState(true);

	return (
		<div className="p-4 m-2 bg-blue-300 h-90 w-60">
			<div className="flex justify-between items/center cursor-pointer" onClick={() => setIsOpened(!isOpened)}>
				<div>{title}</div>
				<div>{isOpened ? <AiOutlineLeft className="mt-1" /> : <AiOutlineDown className="mt-1" />}</div>
			</div>
			{isOpened && <div className="pt-2">{children}</div>}
		</div>
	);
}

export default Accordion;
