import Button from "./Button";
import countryIcon from '../assets/countryIcon.svg';
import searchIcon from '../assets/searchIcon.svg';

function Searchbar() {
  return (
    <div className="flex flex-wrap items-center gap-4 border border-gray-300 shadow-md py-3 px-4 rounded-full text-[#6B7280] w-11/12 sm:w-8/12 lg:w-5/12 mx-auto">
      <div className="flex items-center gap-2 flex-grow">
        <img
          src={countryIcon}
          alt="country icon"
          className="w-5 h-5"
        />
        <select className="bg-transparent focus:outline-none text-base w-full">
          <option value="">Country</option>
          <option value="Afghanistan">Afghanistan</option>
          <option value="Albania">Albania</option>
          <option value="Algeria">Algeria</option>
          <option value="Andora">Andora</option>
          <option value="Argentina">Argentina</option>
          <option value="Armenia">Armenia</option>
        </select>
      </div>

      <span className="hidden sm:inline h-6 border-l border-gray-300"></span>

      <div className="flex items-center gap-2 flex-grow">
        <img
          src={searchIcon}
          alt="search icon"
          className="w-5 h-5"
        />
        <select className="bg-transparent focus:outline-none text-base w-full">
          <option value="">What are you looking for?</option>
          <option value="Installer">Installer</option>
          <option value="Panels">Panels</option>
          <option value="Components">Components</option>
          <option value="Material">Material</option>
          <option value="Equipment">Equipment</option>
          <option value="Manufacturers">Manufacturers</option>
        </select>
      </div>

      <div className="mt-2 sm:mt-0">
        <Button btnContent={"Search"} />
      </div>
    </div>
  );
}

export default Searchbar;
