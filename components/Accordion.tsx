import { useState } from "react";
import { AiOutlineDown, AiOutlineLeft, AiOutlineAlignLeft } from "react-icons/ai";
import clsx from "clsx";

type Props = {
	title: string;
	className?: string;
	children: React.ReactNode;
};

function Accordion({ title, children, className }: Props) {
	const [isOpened, setIsOpened] = useState(true);

	return (
		<div className={clsx("m-2 p-4 h-min w-full sm:w-96 lg:w-full max-w-lg bg-[#0D0D0D80] bg-opacity-50 rounded", className)}>
			<div className="flex justify-between items/center cursor-pointer" onClick={() => setIsOpened(!isOpened)}>
				<div>
					<AiOutlineAlignLeft className="inline-block mb-1 mr-1" />
					<span className="text-lg">{title}</span>
				</div>
				<div>{isOpened ? <AiOutlineLeft className="mt-1" /> : <AiOutlineDown className="mt-1" />}</div>
			</div>
			{isOpened && <div className="mt-4 max-h-60 overflow-auto">{children}</div>}
		</div>
	);
}

export default Accordion;
