import Button from './Button';
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center mx-28 py-5">
      <button onClick={() => navigate('/')}>
      <img 
        src={logo} 
        alt='logo'
        />
        </button>
      <Button btnContent={"+ Add business"} onclickHandler={() => navigate('/add_company')} />
    </div>
  );
}

export default Navbar;