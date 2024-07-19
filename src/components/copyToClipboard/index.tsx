"use client";
import { useEffect, useState } from "react";
import { ClipboardDocumentIcon, CheckIcon } from "@heroicons/react/24/solid";

export default function CopyToClipboard(props: { text: string; copyText: string; textColor: string; textSize: string; iconSize: string }) {
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    // Use setTimeout to update the message after 2000 milliseconds (2 seconds)
    const timeoutId = setTimeout(() => {
      setCopied(false);
    }, 2000);

    // Cleanup function to clear the timeout if the component unmounts
    return () => clearTimeout(timeoutId);
  }, [copied]); // Empty dependency array ensures the effect runs only once

  const copylink = async (e: any) => {
    try {
      navigator.clipboard.writeText(props.copyText);
      setCopied(true);
      console.log("copied: " + props.copyText);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="flex flex-row hover:cursor-pointer opacity-80 hover:opacity-100 transition-all duration-100 w-full justify-end ">
      <a href={`https://basescan.org/address/${props.copyText}`} target="_blank" className={`${props.textSize} ${props.textColor} text-ellipsis overflow-hidden leading-normal py-1`}>{props.text}</a>
      <div onClick={copylink} className="flex justify-center align-middle">
        <div className={`${props.textColor} ${props.iconSize} ml-2 h-full py-1 align-middle w-4`}>
          {copied ? <CheckIcon /> : <ClipboardDocumentIcon />}
        </div>

      </div>
    </div>
  );
}
