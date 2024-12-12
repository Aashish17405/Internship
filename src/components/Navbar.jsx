import Button from './Button';
import logo from '../assets/logo.svg';
import { useNavigate } from 'react-router-dom';

function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="flex justify-between items-center ml-20 py-5 mr-24">
      <button onClick={() => navigate('/')}>
      <img 
        src={logo} 
        alt='logo'
        />
        </button>
      <Button btnContent={"+ Add Expense"} />
    </div>
  );
}

export default Navbar;