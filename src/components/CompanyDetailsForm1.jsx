import React from "react";

const CompanyDetailsForm1 = ({ setFormNum }) => {
  return (<div className="mt-4 space-y-4 font-inter">
      <div className="">
        <div>
          <h2 className="text-2xl font-semibold text-[#111827] ml-1 mb-4">Company Details</h2>
        </div>
        <div>
          <input
            type="text"
            id="fullName"
            name="fullName"
            placeholder="Full name *"
            className="w-full px-4 py-2 mb-4 border border-[#CAD0D9] text-[#5F5F5F] rounded-lg"
            required
          />
        </div>

        <div>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Email *"
            className="w-full px-4 py-2 mb-4 border border-[#CAD0D9] text-[#5F5F5F] rounded-lg"
            required
          />
        </div>

        <div>
          <label htmlFor="otp" className="py-2 px-4 block text-sm text-[#9CA3AF] mb-4">
            Please enter the OTP sent to your email.
          </label>
          <div className="p-3 px-4 border border-[#CAD0D9] rounded-md mt-1">
            <div className="flex justify-between gap-4 mx-4">
              <input
                type="text"
                maxLength="1"
                className="w-full text-center border-b-2 border-[#A9A9A9] text-[#5F5F5F] sm:text-sm"
                required
              />
              <input
                type="text"
                maxLength="1"
                className="w-full text-center border-b-2 border-[#A9A9A9] text-[#5F5F5F] sm:text-sm"
                required
              />
              <input
                type="text"
                maxLength="1"
                className="w-full text-center border-b-2 border-[#A9A9A9] text-[#5F5F5F] sm:text-sm"
                required
              />
              <input
                type="text"
                maxLength="1"
                className="w-full text-center border-b-2 border-[#A9A9A9] text-[#5F5F5F] sm:text-sm"
                required
              />
            </div>
          </div>
        </div>
      </div>

      <div>
        <button
          type="submit"
          onClick={() => setFormNum((prev) => prev + 1)}
          className="w-full px-4 py-2 text-white bg-[#5D5D5D] rounded-lg"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default CompanyDetailsForm1;
