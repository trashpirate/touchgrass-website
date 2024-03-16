import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

export default function MenuIcon() {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);

    return (
        <div className="flex align-middle " onClick={handleClick}>
            <div className="h-10 w-10 my-auto text-primary transition-all ease-in-out duration-500 hover:scale-125">{click ? <XMarkIcon /> : <Bars3Icon />}</div>
        </div>


    )
}