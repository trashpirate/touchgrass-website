import ContactUs from './contactUs';
import Exchanges from './exchanges';
import Footer from './footer';
import Introduction from './introduction';
import Nfts from './nfts';
import Tokenomics from './tokenomics';


export default function Homepage() {
    return (
        <div className='no-scrollbar overflow-y-auto h-screen w-full'>
            <Introduction></Introduction>
            <Tokenomics></Tokenomics>
            <Nfts></Nfts>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    )
}