import React from "react";

type Props = {
    buttonText: string;
    externalLink: string;
};

export default function LinkButton({ buttonText, externalLink }: Props) {
    return (
        <a href={externalLink} target="_blank">
            <button className=' bg-primary text-textColor hover:font-bold px-3 pb-1 pt-2 rounded-lg cursor-pointer hover:text-secondary  border-textColor hover:border-secondary border-4 ease-in-out duration-500 leading-tight'
                type="button">
                {buttonText}
            </button>
        </a>
    )
}