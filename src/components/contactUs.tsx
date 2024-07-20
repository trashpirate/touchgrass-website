import Link from "next/link";
import { SocialIcon } from "react-social-icons";

export default function ContactUs() {
    return (
        <section id='contactUs' className='flex flex-col h-screen w-full relative bg-primary/90 justify-center'>
            <div className='flex flex-col w-max mx-auto'>
                <h1 className='text-secondary text-4xl sm:text-6xl leading-tight align-middle font-semibold uppercase font-heading'>Contact Us</h1>
                <div className='bg-secondary rounded-full h-1 sm:h-2 w-full'></div>
            </div>

            <div className="w-full flex flex-col justify-center mt-16 mb-8 gap-5">
                <div className="w-full flex flex-row justify-center my-8 gap-5">
                    <SocialIcon className=' hover:scale-125 transition-all duration-500 my-auto' network="telegram" url="https://t.me/TouchBasedGrass" bgColor="#21bb03" style={{ height: 60, width: 60 }} label="Telegram" />
                    <SocialIcon className='hover:scale-125 transition-all duration-500  my-auto' network="x" url="https://x.com/TouchBasedGrass" bgColor="#21bb03" style={{ height: 60, width: 60 }} label="X" />

                </div>
                <div className="w-full flex flex-row justify-center">
                    <a className="sm:text-lg text-secondary font-semibold hover:underline hover:scale-125 transition-all duration-500" href="mailto:contact@touchbasedgrass.com">
                        contact@touchbasedgrass.com
                    </a>
                </div>
            </div>
            <div className="w-full flex flex-row justify-center text-secondary mt-6">
                <p className="opacity-80 mr-2">
                    Powered by
                </p>
                <Link className="font-bold hover:opacity-100 opacity-60 transition duriation-500" href="https://t.me/EARNServices">EARN Services</Link>
            </div>


        </section>
    )
}