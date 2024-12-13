import { useState } from "react";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import CompanyDetailsForm1 from "../components/CompanyDetailsForm1";
import CompanyDetailsForm2 from "../components/CompanyDetailsForm2";
import CompanyDetailsForm3 from "../components/CompanyDetailsForm3";
import CompanyDetailsForm4 from "../components/CompanyDetailsForm4";

function AddCompanyPage() {
    const [formNum,setFormNum] = useState(1);

    const renderForm = () => {
        switch (formNum) {
          case 1:
            return <CompanyDetailsForm1 setFormNum={setFormNum} />;
          case 2:
            return <CompanyDetailsForm2 setFormNum={setFormNum} />;
          case 3:
            return <CompanyDetailsForm3 setFormNum={setFormNum} />;
          case 4:
            return <CompanyDetailsForm4 setFormNum={setFormNum} />;
          default:
            return <p>Invalid Form Number</p>;
        }
    };

    return (
        <div className="font-inter min-h-screen flex flex-col">
            <Navbar />
            <div className="flex-grow flex flex-col mb-10 items-center justify-center">
                <div className="text-center mt-10">
                    <h2 className="text-4xl font-bold my-6 text-[#111827]">Add New Company</h2>
                    <p className="text-[#4E5562]">
                        Basic listings on Elso are free - and contain a great deal of information. Each company can take charge of their listing -
                    </p>
                    <p className="text-[#4E5562] mb-8">
                        the more information you can provide, the more attractive and professional your company will appear.
                    </p>
                </div>
                <div className="w-full max-w-md">
                {renderForm()}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AddCompanyPage;