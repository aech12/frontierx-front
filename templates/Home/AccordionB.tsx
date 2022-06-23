import { useState } from "react";
import type { SetStateAction, Dispatch } from "react";
import clsx from "clsx";

const Square = ({ activeSquare, setActiveSquare, i }: { activeSquare: Number; setActiveSquare: Dispatch<SetStateAction<number>>; i: number }) => (
	<div className={clsx("p-2 mr-1 mb-1 px-4 flex justify-center items-center flex-col bg-black selection:leading-3 rounded-md cursor-pointer", activeSquare === i && "border-2 border-red-400")} onClick={() => setActiveSquare(i)}>
		<p className="text-gray-400 text-sm leading-none">Over</p>
		<p className="font-bold">Lorem ipsum</p>
		<p className="text-gray-400 text-sm">15%</p>
	</div>
);

const characterItem = Array(10).fill(0);

const AccordionB = () => {
	const [activeSquare, setActiveSquare] = useState(0);
	return (
		<div className="flex flex-wrap overflow-auto justify-center">
			{characterItem.map((item, i) => (
				<Square key={i} activeSquare={activeSquare} setActiveSquare={setActiveSquare} i={i} />
			))}
		</div>
	);
};
export default AccordionB;
