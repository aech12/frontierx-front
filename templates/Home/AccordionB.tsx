import { useState } from "react";
import type { SetStateAction, Dispatch } from "react";
import clsx from "clsx";

const Square = ({ activeSquare, setActiveSquare, i }: { activeSquare: Number; setActiveSquare: Dispatch<SetStateAction<number>>; i: number }) => (
	<div className={clsx(activeSquare === i && "bg-green-400")} onClick={() => setActiveSquare(i)}>
		<p>Over</p>
		<p>Lorem ipsum</p>
		<p>Lang</p>
	</div>
);

const characterItem = Array(5).fill(0);

const AccordionB = () => {
	const [activeSquare, setActiveSquare] = useState(0);
	return (
		<div>
			{characterItem.map((item, i) => (
				<Square key={i} activeSquare={activeSquare} setActiveSquare={setActiveSquare} i={i} />
			))}
		</div>
	);
};
export default AccordionB;
