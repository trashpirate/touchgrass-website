// components/SmoothScrollLink.js
import { ReactNode, MouseEvent } from 'react';

// Define the Props interface
type Props = {
    href: string;
    children: ReactNode;
}

export default function SmoothScrollLink({ href, children }: Props) {

    const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const targetId = href.substring(1); // Remove '#' from href to get the ID
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    };

    return (
        <a href={href} onClick={handleClick} className='leading-6 mb-1'>
            {children}
        </a>
    );
};

