import React from "react";

type Props = {
    value: string;
    handler: React.ChangeEventHandler<HTMLInputElement>;
};

export default function TokenAddressInput({ value, handler }: Props) {
    return (
        <div className="w-full">
            <h3 className="text-sm font-light pt-1 opacity-80">Estimate reward payout: </h3>
            <input
                className="w-64 h-fit p-2 border border-gray-300 rounded-md text-black my-2 text-xs font-light"
                value={value}
                onChange={handler}
                placeholder="Enter wallet address"
            />
        </div>
    )
}