import Button from "./Button";
import countryIcon from '../assets/countryIcon.svg';
import searchIcon from '../assets/searchIcon.svg';
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import dropDownIcon from '../assets/dropdownIcon.svg';

function Searchbar() {
  const navigate = useNavigate();
  const [isCountryDropdownVisible, setIsCountryDropdownVisible] = useState(false);
  const [isCategoryDropdownVisible, setIsCategoryDropdownVisible] = useState(false);

  const toggleCountryDropdown = () => {
    setIsCountryDropdownVisible(!isCountryDropdownVisible);
  };

  const toggleCategoryDropdown = () => {
    setIsCategoryDropdownVisible(!isCategoryDropdownVisible);
  };

  return (
    <div className="flex flex-wrap items-center gap-4 border border-gray-300 shadow-md py-3 px-4 rounded-full text-[#6B7280] w-11/12 sm:w-8/12 lg:w-5/12 mx-auto">
      {/* Country Dropdown */}
      <div className="flex items-center gap-2 ml-2">
        <div className="relative w-48">
          <button
            onClick={toggleCountryDropdown}
            className="w-full flex items-center justify-between bg-white border-none text-[#9CA3AF] py-1 px-2 rounded-lg"
          >
            <div className="flex items-center gap-2">
              <img src={countryIcon} alt="country icon" />
              <span>Country</span>
              <img src={dropDownIcon} alt="dropdown icon" className="ml-20" />
            </div>
          </button>
          {isCountryDropdownVisible && (
            <div className="absolute ml-3 mt-4 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto scrollbar-none">
              <ul className="py-1">
                {[
                  "Afghanistan",
                  "Albania",
                  "Algeria",
                  "Andorra",
                  "Argentina",
                  "Armenia",
                  "Angola",
                  "Antarctica",
                  "American Samoa",
                  "Austria",
                  "Australia",
                ].map((country, index) => (
                  <li
                    key={index}
                    className="px-4 py-1 hover:text-[#000000] cursor-pointer border-b border-gray-300 last:border-b-0"
                  >
                    {country}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <span className="hidden sm:inline h-6 border-l border-gray-300"></span>

      {/* Category Dropdown */}
      <div className="flex items-center gap-2 flex-grow">
        <div className="relative w-64">
          <button
            onClick={toggleCategoryDropdown}
            className="w-full flex items-center justify-between bg-white border-none text-[#9CA3AF] py-1 px-2 rounded-lg"
          >
            <div className="flex items-center gap-2">
              <img src={searchIcon} alt="category icon" />
              <span className="whitespace-nowrap">What are you looking for?</span>
              <img src={dropDownIcon} alt="dropdown icon" />
            </div>
          </button>
          {isCategoryDropdownVisible && (
            <div className="absolute ml-3 mt-4 w-full bg-white border border-gray-300 rounded-lg shadow-lg max-h-40 overflow-y-auto scrollbar-none">
              <ul className="py-1">
                {[
                  "Installer",
                  "Panels",
                  "Components",
                  "Material",
                  "Equipment",
                  "Manufacturers",
                ].map((category, index) => (
                  <li
                    key={index}
                    className="px-4 py-1 hover:text-[#000000] cursor-pointer border-b border-gray-300 last:border-b-0"
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <div className="mt-2 sm:mt-0">
        <Button btnContent={"Search"} onclickHandler={() => navigate('/result_page')} />
      </div>
    </div>
  );
}

export default Searchbar;
