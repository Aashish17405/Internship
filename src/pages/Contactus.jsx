import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import logoipsumIcon1 from '../assets/logoipsumIcon1.svg';
import logoipsumIcon2 from '../assets/logoipsumIcon2.svg';
import logoipsumIcon3 from '../assets/logoipsumIcon3.svg';
import logoipsumIcon4 from '../assets/logoipsumIcon4.svg';
import logoipsumIcon5 from '../assets/logoipsumIcon5.svg';

function ContactUs(){
    return <div className="font-inter">
        <Navbar/>
        <div className="text-center mt-15">
            <h2 className="text-4xl font-bold my-10 text-[#111827]">Contact us</h2>
            <p className="text-[#4E5562]">Write to us if you have any difficulties in working with the service.</p> 
            <p className="text-[#4E5562] mb-8">We are open to communication and want to know more about those who trust us.</p>
        </div>
        <ContactForm/>
        <div className="overflow-x-auto mx-32 mb-12">
            <div className="flex gap-24 mt-12 justify-center items-center text-[#6B7280]">
                <div>
                    <img
                        src={logoipsumIcon1}
                        alt="logoipsum icon"
                    />
                </div>
                <div>
                    <img 
                        src={logoipsumIcon2} 
                        alt="logoipsum icon"
                    />
                </div>
                <div>
                    <img 
                        src={logoipsumIcon3} 
                        alt="logoipsum icon"
                    />
                </div>
                <div>
                    <img 
                        src={logoipsumIcon4} 
                        alt="logoipsum icon"
                    />
                </div>
                <div>
                    <img 
                        src={logoipsumIcon5} 
                        alt="logoipsum icon"
                    />
                </div>
            </div>
        </div>
        <Footer/>
    </div>
}

export default ContactUs