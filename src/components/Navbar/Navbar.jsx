import { useState } from "react";
import Link from "../Link/Link";
import { RiMenu2Fill } from "react-icons/ri";
import { IoCloseCircleOutline } from "react-icons/io5";



const Navbar = () => {
    const routes = [
      { id: 1, path: "/", name: "Home" },
      { id: 2, path: "/about", name: "About" },
      { id: 3, path: "/services", name: "Services" },
      { id: 4, path: "/contact", name: "Contact" },
      { id: 5, path: "*", name: "NotFound" }, // Wildcard route for 404
    ];

    const [open, setOpen] = useState(false);

    return (
      <nav className=" text-4xl bg-yellow-300 p-4">
        <div onClick={() => setOpen(!open)}>
                {open === true ? (
                     <IoCloseCircleOutline className="cursor-pointer md:hidden" />
                     
                    ) : (
              <RiMenu2Fill className="cursor-pointer md:hidden"></RiMenu2Fill>
           
          )}
        </div>

            <ul className={`md:flex bg-yellow-300 duration-1000 absolute md:static
            ${open? 'top-24':'-top-96'}
            p-4 `}>
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </nav>
    );
};

export default Navbar;