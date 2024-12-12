import Button from "../components/Button";
import Navbar from "../components/Navbar";

function ResultPage(){
    return <div className="text-[#4E5562]">
        <Navbar/>

        <div className="flex items-center gap-4 border border-gray-300 shadow-lg py-3 px-4 rounded-full text-[#6B7280] w-5/12 mx-auto">
            <div className="flex items-center gap-2 ml-2">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M1.59375 2.25C1.59375 1.88756 1.88756 1.59375 2.25 1.59375H7.5C7.86244 1.59375 8.15625 1.88756 8.15625 2.25V7.5C8.15625 7.86244 7.86244 8.15625 7.5 8.15625H2.25C1.88756 8.15625 1.59375 7.86244 1.59375 7.5V2.25ZM2.90625 2.90625V6.84375H6.84375V2.90625H2.90625Z" fill="#4E5562" />
                <path fillRule="evenodd" clipRule="evenodd" d="M9.84375 2.25C9.84375 1.88756 10.1376 1.59375 10.5 1.59375H15.75C16.1124 1.59375 16.4062 1.88756 16.4062 2.25V7.5C16.4062 7.86244 16.1124 8.15625 15.75 8.15625H10.5C10.1376 8.15625 9.84375 7.86244 9.84375 7.5V2.25ZM11.1562 2.90625V6.84375H15.0938V2.90625H11.1562Z" fill="#4E5562" />
                <path fillRule="evenodd" clipRule="evenodd" d="M9.84375 10.5C9.84375 10.1376 10.1376 9.84375 10.5 9.84375H15.75C16.1124 9.84375 16.4062 10.1376 16.4062 10.5V15.75C16.4062 16.1124 16.1124 16.4062 15.75 16.4062H10.5C10.1376 16.4062 9.84375 16.1124 9.84375 15.75V10.5ZM11.1562 11.1562V15.0938H15.0938V11.1562H11.1562Z" fill="#4E5562" />
                <path fillRule="evenodd" clipRule="evenodd" d="M1.59375 10.5C1.59375 10.1376 1.88756 9.84375 2.25 9.84375H7.5C7.86244 9.84375 8.15625 10.1376 8.15625 10.5V15.75C8.15625 16.1124 7.86244 16.4062 7.5 16.4062H2.25C1.88756 16.4062 1.59375 16.1124 1.59375 15.75V10.5ZM2.90625 11.1562V15.0938H6.84375V11.1562H2.90625Z" fill="#4E5562" />
            </svg>
            <select className="bg-transparent focus:outline-none text-base mr-16">
                <option value="">Country</option>
                <option value="Afghanistan">Afghanistan</option>
                <option value="Albania">Albania</option>
                <option value="Algeria">Algeria</option>
                <option value="Andora">Andora</option>
                <option value="Argentina">Argentina</option>
                <option value="Armenia">Armenia</option>
            </select>
            </div>

            <span className="h-6 border-l border-gray-300"></span>

            <div className="flex items-center gap-2 flex-grow">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M8.25 2.90625C5.29873 2.90625 2.90625 5.29873 2.90625 8.25C2.90625 11.2013 5.29873 13.5938 8.25 13.5938C11.2013 13.5938 13.5938 11.2013 13.5938 8.25C13.5938 5.29873 11.2013 2.90625 8.25 2.90625ZM1.59375 8.25C1.59375 4.57385 4.57385 1.59375 8.25 1.59375C11.9261 1.59375 14.9062 4.57385 14.9062 8.25C14.9062 11.9261 11.9261 14.9062 8.25 14.9062C4.57385 14.9062 1.59375 11.9261 1.59375 8.25Z" fill="#4E5562" />
                <path fillRule="evenodd" clipRule="evenodd" d="M12.0235 12.0235C12.2797 11.7672 12.6953 11.7672 12.9515 12.0235L16.214 15.286C16.4703 15.5422 16.4703 15.9578 16.214 16.214C15.9578 16.4703 15.5422 16.4703 15.286 16.214L12.0235 12.9515C11.7672 12.6953 11.7672 12.2797 12.0235 12.0235Z" fill="#4E5562" />
            </svg>
            <select className="bg-transparent focus:outline-none text-base w-full">
                <option value="" className="hover:text-black">What are you looking for?</option>
                <option value="Installer" className="hover:text-black">Installer</option>
                <option value="Panels" className="hover:text-black">Panels</option>
                <option value="Components" className="hover:text-black">Components</option>
                <option value="Material" className="hover:text-black">Material</option>
                <option value="Equipment" className="hover:text-black">Equipment</option>
                <option value="Manufacturers" className="hover:text-black">Manufacturers</option>
            </select>
            </div>
            <Button btnContent={"Search"}  />
        </div>

        <div className="mx-10 mt-10">
            <div>
                <div>Showing 116 results</div>
                
            </div>
        </div>
    </div>
}

export default ResultPage;