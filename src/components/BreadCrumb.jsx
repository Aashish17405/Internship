import arrow from '../assets/arrow.svg';

function BreadCrumb({ path }) {
  return (
    <div className="flex flex-wrap items-center gap-2 text-sm ml-4 sm:ml-10 md:ml-14">
      <div className="flex items-center gap-2">
        <span>Home</span>
        <img src={arrow} alt="arrow" className="w-4 h-4" />
      </div>
      <div className="flex items-center gap-2">
        <span>Panels</span>
        <img src={arrow} alt="arrow" className="w-4 h-4" />
      </div>
      <div className="text-gray-400 truncate max-w-full sm:max-w-xs md:max-w-md">
        {path}
      </div>
    </div>
  );
}

export default BreadCrumb;
