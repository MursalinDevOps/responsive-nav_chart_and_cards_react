import { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import { IoCloseSharp } from "react-icons/io5";
export default function Navbar() {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: "/", name: "Home" },
        { id: 2, path: "/about", name: "About" },
        { id: 3, path: "/services", name: "Services" },
        { id: 4, path: "/contact", name: "Contact" },
        { id: 5, path: "/blog", name: "Blog" }
    ];

    return (
        <nav className="flex justify-between items-center px-6 py-4">
            <h3>MN.</h3>
            <div className="md:flex gap-5 ">
            <div onClick={()=>setOpen(!open)} className="md:hidden text-2xl">
            {
                open ? <IoCloseSharp /> : <RiMenu4Line />
            }
            </div>
            <ul className={`absolute md:static md:flex right-12 bg-lime-200 md:rounded-full rounded-lg font-thin ${open ? 'top-14 duration-500' : ' hidden'}`}>
                {
                    routes.map(route => <li className="px-10 py-2 hover:underline hover:bg-lime-600 w-full md:rounded-full rounded-lg md:hover:text-white" key={route.id}>
                        <a href={route.path}>{route.name}</a>
                        </li>)
                }
                </ul>
               
            </div>

        </nav>
    )
}
