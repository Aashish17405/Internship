import React from "react";

function CompanyDetailsForm4({ setFormNum }) {
  return (
    <div className="px-22 pb-8 mb-4">
      <div>
        <h2 className="text-2xl font-semibold text-[#111827] my-4 ml-1">Additional Office</h2>
      </div>
      <div className="w-full">
        <input
          type="text"
          id="region"
          className="w-full px-4 py-2 mb-4 border border-[#CAD0D9] text-[#5F5F5F] rounded-lg"
          placeholder="Region *"
        />
      </div>
      <div className="w-full">
        <input
          type="text"
          id="country"
          className="w-full px-4 py-2 mb-4 border border-[#CAD0D9] text-[#5F5F5F] rounded-lg"
          placeholder="Country *"
        />
      </div>
      <div className="w-full">
        <input
          type="text"
          id="address"
          className="w-full px-4 py-2 mb-4 border border-[#CAD0D9] text-[#5F5F5F] rounded-lg"
          placeholder="Address *"
        />
      </div>
      <div className="w-full mb-">
        <input
          type="text"
          id="zipcode"
          className="w-full px-4 py-2 mb-4 border border-[#CAD0D9] text-[#5F5F5F] rounded-lg"
          placeholder="ZipCode *"
        />
      </div>
      <div className="w-full">
        <input
          type="text"
          id="phone"
          className="w-full px-4 py-2 mb-4 border border-[#CAD0D9] text-[#5F5F5F] rounded-lg"
          placeholder="Phone *"
        />
      </div>
      <div className="w-full">
        <input
          type="email"
          id="email"
          className="w-full px-4 py-2 mb-4 border border-[#CAD0D9] text-[#5F5F5F] rounded-lg"
          placeholder="E-mail *"
        />
      </div>
      <div className="w-full">
        <input
          type="text"
          id="website"
          className="w-full px-4 py-2 mb-4 border border-[#CAD0D9] text-[#5F5F5F] rounded-lg"
          placeholder="Website *"
        />
      </div>
      <div className="flex justify-center">
        <button
          className="w-full px-4 py-2 text-white bg-[#006A4E] rounded-lg "
          type="button"
          onClick={() => alert("Form submitted!")}
        >
          Submit
        </button>
      </div>
    </div>
  );
}

export default CompanyDetailsForm4;
