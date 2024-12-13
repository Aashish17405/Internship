import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Title from '../components/Title';
import Searchbar from '../components/Searchbar';
import bookmarkIcon from '../assets/bookmarkIcon.svg';

function Home() {
  return (
    <div className='font-inter text-[#4E5562] flex flex-col min-h-screen'>
      <Navbar />
      <div className="flex justify-center items-center mt-20">
        <h3 className="text-xl text-center">ELSO Solar Business Directory</h3>
      </div>

      <div className='flex justify-center items-center my-8'>
        <Title title="Trusted by Millions" />
      </div>

      <div className="flex gap-4 mb-16 flex-wrap justify-center items-center text-center">
        <div>• Verified Listings</div>
        <div>• Global Reach</div>
        <div>• Ease of Use</div>
      </div>

      <Searchbar/>

      <div className="overflow-x-auto mx-64">
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 mt-12 text-center text-[#9CA3AF]">
          <div>
            <p>Installers</p>
            <div className="flex justify-center items-center">
              <img
                src={bookmarkIcon}
                alt='bookmark'
                />
              <p className="ml-1">66.4K</p>
            </div>
          </div>
          <div>
            <p>Panels</p>
            <div className="flex justify-center items-center">
              <img
                src={bookmarkIcon}
                alt='bookmark'
                />
              <p className="ml-1">105.4K</p>
            </div>
          </div>
          <div>
            <p>Components</p>
            <div className="flex justify-center items-center">
              <img
                src={bookmarkIcon}
                alt='bookmark'
                />
              <p className="ml-1">741.4K</p>
            </div>
          </div>
          <div>
            <p>Materials</p>
            <div className="flex justify-center items-center">
              <img
                src={bookmarkIcon}
                alt='bookmark'
                />
              <p className="ml-1">78.4K</p>
            </div>
          </div>
          <div>
            <p>Equipments</p>
            <div className="flex justify-center items-center">
              <img
                src={bookmarkIcon}
                alt='bookmark'
                />
              <p className="ml-1">150.3K</p>
            </div>
          </div>
          <div>
            <p>Sellers</p>
            <div className="flex justify-center items-center">
              <img
                src={bookmarkIcon}
                alt='bookmark'
                />
              <p className="ml-1">66.4K</p>
            </div>
          </div>
          <div>
            <p>Manufacturers</p>
            <div className="flex justify-center items-center">
              <img
                src={bookmarkIcon}
                alt='bookmark'
                />
              <p className="ml-1">55.2K</p>
            </div>
          </div>
          <div>
            <p>Softwares</p>
            <div className="flex justify-center items-center">
              <img
                src={bookmarkIcon}
                alt='bookmark'
                />
              <p className="ml-1">65.8K</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
