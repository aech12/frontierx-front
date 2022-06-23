import Image from "next/image";
import { AiOutlineAlignLeft } from "react-icons/ai";

import avatar from "../../media/Ellipse 37.png";
import banner from "../../media/image 125.jpg";

const Intro = () => {
	return (
		<section className="py-8">
			<div className="flex flex-col items-center ">
				<div className="px-3 w-full z-0">
					<Image src={banner} alt="Banner" layout="responsive" priority={false} />
				</div>
				<div className="relative h-32 w-32  bg-red-40">
					<div className="w-32 h-32 absolute bottom-16 bg-green-40 ">
						<Image className="z-10 " src={avatar} alt="Avatar" width={120} height={120} priority={false} />
					</div>
				</div>
			</div>
			<div>
				<p className="text-5xl">Lorem ipsum</p>
				<p className="mt-3 mb-1 text-gray-100">
					Created by <span className="text-red-500">Lorem ipsum</span>
				</p>
				<p className="text-gray-100">Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>
			</div>
			<nav className="mt-5">
				<button className="m-2 btn-dark-gray">
					<AiOutlineAlignLeft className="inline-block mb-1 mr-1" />
					Lorem ipsum
				</button>
				<button className="m-2 btn-dark-gray">
					<AiOutlineAlignLeft className="inline-block mb-1 mr-1" />
					Lorem ipsum
				</button>
				<button className="m-2 btn-dark-gray">
					<AiOutlineAlignLeft className="inline-block mb-1 mr-1" />
					Lorem ipsum
				</button>
			</nav>
		</section>
	);
};

export default Intro;
