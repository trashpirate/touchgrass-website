import ContactUs from './contactUs';
import Exchanges from './exchanges';
import Footer from './footer';
import Introduction from './introduction';
import Nfts from './nfts';
import Tokenomics from './tokenomics';


export default function Homepage() {
    return (
        <div className='overflow-y-auto h-screen w-full mt-24'>
            <Introduction></Introduction>
            <Tokenomics></Tokenomics>
            <Nfts></Nfts>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    )
}