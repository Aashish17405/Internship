import React from "react";

function CompanyDetailsForm3({ setFormNum }) {
  return (
    <div className="rounded px-18 pt-2 pb-8 mb-4 font-inter">
    <div>
        <h2 className="text-xl font-semibold text-[#111827]">Select Category</h2>
    </div>
      <div className="w-full my-4">
        <input
          type="text"
          id="prime-category"
          className="w-full px-4 py-2 border border-[#CAD0D9] text-[#5F5F5F] rounded-lg "
          placeholder="Prime Category *"
        />
      </div>
      <div className="w-full mb-4">
        <input
          type="text"
          id="secondary-category"
          className="w-full px-4 py-2 border border-[#CAD0D9] text-[#5F5F5F] rounded-lg "
          placeholder="Secondary Category *"
        />
      </div>
      <div>
        <h2 className="text-xl font-semibold text-[#111827]">Image Upload</h2>
      </div>
      <div className="w-full my-4">
      <label
        htmlFor="thumbnail-banner-image"
        className="w-full flex items-center px-4 py-2 border border-[#CAD0D9] rounded-lg cursor-pointer"
        >
        <span className="flex-grow text-[#9CA3AF]">
            Thumbnail Banner Image *
        </span>
        <input
            type="file"
            id="thumbnail-banner-image"
            className="hidden"
        />
        </label>
      </div>
      <div className="flex justify-center">
        <button
          className="w-full px-4 py-2 text-white bg-[#5D5D5D] rounded-lg"
          type="button"
          onClick={() => setFormNum((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default CompanyDetailsForm3;