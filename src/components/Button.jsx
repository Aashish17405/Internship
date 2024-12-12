import { useNavigate } from "react-router-dom";

function Button({btnContent}){
    const navigate = useNavigate();
    return <div className="">
        <button 
            onClick={() => navigate('/result_page')} 
            className="p-2 px-4 rounded-3xl bg-[#006A4E] text-white"
            >{btnContent}</button>
    </div>
}

export default Button;