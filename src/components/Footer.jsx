import instaIcon from '../assets/instagramIcon.svg';
import fbIcon from '../assets/fbIcon.svg';
import xIcon from '../assets/XIcon.svg';
import { useNavigate } from 'react-router-dom';

function Footer() {
  const navigate = useNavigate();
  return (
    <footer className="flex flex-wrap justify-around items-center text-[#6C727F] font-inter py-6 px-4 mt-auto">
      <div className="flex items-center gap-2 text-center sm:text-left">
        <h6>Need help?</h6>
        <button className="font-bold" onClick={() => navigate('/contact_us')}>Contact us</button>
      </div>

      <h6 className="text-center sm:text-right w-full sm:w-auto mt-4 sm:mt-0">
        © All rights reserved. Made by <strong>Blue</strong> <strong>Digital</strong>
      </h6>
    </footer>
  );
}

export default Footer;
