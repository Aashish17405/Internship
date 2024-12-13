import React from "react";

const CompanyDetailsForm2 = ({ setFormNum }) => {
  return <div class="mt-5 font-inter">
  <div>
    <h2 className="text-lg mb-4 font-semibold text-[#111827]">Company Details</h2>
  </div>
  <form class="w-full max-w-md bg-white rounded-lg text-[#5F5F5F]">
    <input
      type="text"
      placeholder="Username *"
      value="Mukesh"
      class="w-full px-4 py-2 mb-4 border border-[#CAD0D9] rounded-lg"
    />
    <input
      type="email"
      placeholder="Email *"
      value="Mukesh@solar.com"
      class="w-full px-4 py-2 mb-4 border border-[#CAD0D9] rounded-lg "
    />
    <input
      type="text"
      placeholder="Region *"
      class="w-full px-4 py-2 mb-4 border border-[#CAD0D9] rounded-lg "
    />
    <input
      type="text"
      placeholder="Country *"
      class="w-full px-4 py-2 mb-4 border border-[#CAD0D9] rounded-lg "
    />
    <input
      type="text"
      placeholder="Address *"
      class="w-full px-4 py-2 mb-4 border border-[#CAD0D9] rounded-lg "
    />
    <input
      type="text"
      placeholder="ZipCode *"
      class="w-full px-4 py-2 mb-4 border border-[#CAD0D9] rounded-lg "
    />
    <input
      type="text"
      placeholder="Phone *"
      class="w-full px-4 py-2 mb-4 border border-[#CAD0D9] rounded-lg "
    />
    <input
      type="text"
      placeholder="Website *"
      class="w-full px-4 py-2 mb-4 border border-[#CAD0D9] rounded-lg "
    />
    <div class="w-full mb-4">
      <input
        type="text"
        placeholder="Upload you Logo * "
        class="w-full px-4 py-2 border border-[#CAD0D9] rounded-lg "
      />
    </div>
    <button
      type="submit"
      onClick={() => setFormNum(3)}
      class="w-full px-4 py-2 text-white bg-[#5D5D5D] rounded-lg "
    >
      Next
    </button>
  </form>
</div>
};

export default CompanyDetailsForm2;