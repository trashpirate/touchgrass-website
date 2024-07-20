import { SocialIcon } from 'react-social-icons';
import Link from 'next/link';
import Image from 'next/image';
import CopyToClipboard from './copyToClipboard';

export default function Footer() {
    return (
        <footer className="text-center py-8 px-8 w-full bg-black/50">
            <div className="text-lg text-secondary mx-auto flex flex-row justify-center ">
                <p className="opacity-80 mr-2">
                    Copyright 2024 @
                </p>
                <a className="font-bold hover:opacity-100 opacity-60 transition duriation-500" href="https://t.me/TouchBasedGrass">Touch Grass</a>
            </div>


        </footer>);
}

// export default function Footer() {
//     return (
//         <div className='flex flex-col justify-center h-64 w-full bg-black align-middle sm:px-16'>
//             <div className='flex flex-row flex-wrap justify-between w-full my-auto h-max'>
//                 <div className="text-sm sm:text-lg text-secondary flex justify-center w-fit sm:mx-2 mx-auto">
//                     <p className="opacity-80 mr-2">
//                         Copyright 2024 @
//                     </p>
//                     <a className="font-bold hover:opacity-100 opacity-60 transition duriation-500" href="https://t.me/TouchBasedGrass">Touch Grass</a>
//                 </div>
//                 <div className="text-sm sm:text-lg text-secondary flex justify-center sm:w-fit sm:mx-2 mx-auto">
//                     <p className="opacity-80 mr-2">
//                         Powered by
//                     </p>
//                     <Link className="font-bold hover:opacity-100 opacity-60 transition duriation-500" href="https://t.me/EARNServices">EARN Services</Link>
//                 </div>
//             </div >


//             {/* <div className='mx-auto mt-8 h-fit w-fit'>Footer</div> */}
//         </div >
//     )
// }