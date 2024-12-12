import instaIcon from '../assets/instagramIcon.svg';
import fbIcon from '../assets/fbIcon.svg';
import xIcon from '../assets/XIcon.svg';

function Footer() {
  return (
    <div className="flex flex-wrap justify-around items-center text-[#4E5562] py-6 px-4 mt-[110px]">
      <div className="flex items-center gap-2 text-center sm:text-left">
        <h6>Need help?</h6>
        <h6 className="font-bold">Contact us</h6>
      </div>

      <div className="flex items-center gap-4 mt-4 sm:mt-0">
        <img
          src={instaIcon}
          alt="Instagram icon"
        />
        <img
          src={fbIcon}
          alt="Facebook icon"
        />
        <img
          src={xIcon}
          alt="X icon"
        />
      </div>

      <h6 className="text-center sm:text-right w-full sm:w-auto mt-4 sm:mt-0">
        © All rights reserved. Made by <strong>Blue</strong> <strong>Digital</strong>
      </h6>
    </div>
  );
}

export default Footer;
