import { AiFillThunderbolt } from "react-icons/ai";


const Card = ({option}) => {
    const {name, features, price} = option;

    return (
        <div className="border-2 py-5 rounded-lg pl-5 space-y-3 mb-5 bg-lime-100 flex flex-col">
            <h2>
                <span className="text-5xl font-extrabold">${price}</span> <span className="text-xl">/Month</span>
            </h2>
            <h3 className="text-4xl">{name}</h3>
            <h4 className="font-bold text-xl">Features - </h4>
            <ul className="ml-10 flex-grow">
                {features.map(feature => <li className="flex gap-1 items-center"><AiFillThunderbolt />
                    {feature}</li>)}
            </ul>
          <div className="w-full mx-auto">
          <button className="w-11/12 bg-indigo-200 hover:bg-indigo-400 py-2 rounded-lg text-md">Buy Now!</button>
          </div>
        </div>
    );
};

export default Card;