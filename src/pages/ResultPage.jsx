import Button from "../components/Button";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer'
import Searchbar from "../components/Searchbar";
import sunEnergy from '../assets/1stsunergy.png';
import ES2 from '../assets/2es.png';
import energy3D from '../assets/3d_energy.png';
import solar3G from '../assets/3gsolar.png'
import Card from "../components/Card";
import final from '../assets/image.png';
import mapPinIcon from '../assets/mapPin.svg';
import phoneIcon from '../assets/phoneIcon.svg'
import globeIcon from '../assets/globeIcon.svg';
import searchIcon from '../assets/searchIcon.svg';
import popularIcon from '../assets/popularIcon.svg'

function ResultPage(){
    const firstCards = [
        {
            image: sunEnergy,
            title: 'First Sunenergy LLC',
            description: 'Monocrystalline, Polycrystalline Power Range(Wp): 175-290'
        },{
            image: ES2,
            title: '2ES',
            description: 'Monocrystalline, Polycrystalline, BIPV Power Range(Wp): 135-150'
        },{
            image: energy3D,
            title: '3D Energy',
            description: 'Distributor'
        },{
            image: solar3G,
            title: '3G-Solar GmbH',
            description: 'Monocrystalline, Polycrystalline Power Range(Wp): 155-300'
        },{
            image: energy3D,
            title: '3D Energy',
            description: 'Distributor'
        },{
            image: sunEnergy,
            title: 'First Sunenergy LLC',
            description: 'Monocrystalline, Polycrystalline Power Range(Wp): 175-290'
        },{
            image: solar3G,
            title: '3G-Solar GmbH',
            description: 'Monocrystalline, Polycrystalline Power Range(Wp): 155-300'
        },{
            image: ES2,
            title: '2ES',
            description: 'Monocrystalline, Polycrystalline, BIPV Power Range(Wp): 135-150'
        }
    ];

    const secondCards = [
        {
            image: sunEnergy,
            title: 'First Sunenergy LLC',
            description: 'Monocrystalline, Polycrystalline Power Range(Wp): 175-290'
        },{
            image: energy3D,
            title: '3D Energy',
            description: 'Distributor'
        },{
            image: ES2,
            title: '2ES',
            description: 'Monocrystalline, Polycrystalline, BIPV Power Range(Wp): 135-150'
        },{
            image: solar3G,
            title: '3G-Solar GmbH',
            description: 'Monocrystalline, Polycrystalline Power Range(Wp): 155-300'
        },{
            image: sunEnergy,
            title: 'First Sunenergy LLC',
            description: 'Monocrystalline, Polycrystalline Power Range(Wp): 175-290'
        },{
            image: ES2,
            title: '2ES',
            description: 'Monocrystalline, Polycrystalline, BIPV Power Range(Wp): 135-150'
        },{
            image: energy3D,
            title: '3D Energy',
            description: 'Distributor'
        },{
            image: solar3G,
            title: '3G-Solar GmbH',
            description: 'Monocrystalline, Polycrystalline Power Range(Wp): 155-300'
        }
    ];

    return <div className="text-[#4E5562] flex flex-col min-h-screen">
        <Navbar />
        <Searchbar />
        <div className="container mx-auto px-4 md:px-8 mt-10">
            <div className="flex flex-wrap items-center justify-between gap-4">
                <div>Showing 116 results</div>
                <div className="flex flex-wrap gap-4">
                    <div className="w-full sm:w-auto flex border border-[#CAD0D9] rounded-3xl p-2 pl-3 pr-2 items-center">
                        <div className="ml-2">
                            <img src={searchIcon} alt="search" />
                        </div>
                        <input
                            id="default-search"
                            className="w-full sm:w-auto ml-3 border-none focus:outline-none"
                            placeholder="Search by keywords"
                            required
                        />
                    </div>
                    <div className="w-full sm:w-auto flex items-center gap-2 border border-[#CAD0D9] rounded-3xl p-2">
                        <div className="ml-4">
                            <img src={mapPinIcon} alt="map icon" />
                        </div>
                        <select className="bg-transparent focus:outline-none pr-10">
                            <option value="">City</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="Andora">Andora</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                        </select>
                    </div>
                    <div className="w-full sm:w-auto flex items-center gap-2 border border-[#CAD0D9] rounded-3xl p-2">
                        <div className="ml-4">
                            <img src={popularIcon} alt="popular icon" />
                        </div>
                        <select className="bg-transparent focus:outline-none pr-10">
                            <option value="">Popular</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="Andora">Andora</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                        </select>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-7">
                {firstCards.map((card, index) => (
                    <div key={index} className="w-full">
                        <Card
                            image={card.image}
                            title={card.title}
                            description={card.description}
                        />
                    </div>
                ))}
            </div>

            <div className="flex flex-col md:flex-row border border-[#CAD0D9] bg-white rounded-lg my-6 h-80">
                <div className="grid grid-cols-1 md:grid-cols-2 md:w-1/2 p-6">
                    <div className="flex flex-col w-full md:w-5/6">
                        <img
                            src={sunEnergy}
                            alt="Sun Energy Logo"
                            className="w-full h-auto"
                        />
                        <div className="space-y-3 mt-4">
                            <div className="flex items-center space-x-2">
                                <img src={mapPinIcon} alt="Map Pin Icon" className="w-5 h-5" />
                                <span>Houston, TX</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <img src={phoneIcon} alt="Phone Icon" className="w-5 h-5" />
                                <span>+1 7135 130 423</span>
                            </div>
                            <div className="flex items-center space-x-2">
                                <img src={globeIcon} alt="Globe Icon" className="w-5 h-5" />
                                <a
                                    href="http://www.firstsunergy.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:underline"
                                >
                                    Website
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center space-y-3">
                        <h3 className="text-[#4E5562] text-2xl">Highly reputable</h3>
                        <p className="text-2xl text-[#4E5562]">
                            <span className="text-2xl font-bold text-[#111827]">
                                clean energy
                            </span>{" "}
                            products
                        </p>
                        <p className="text-[#4E5562] text-2xl">& services provider</p>
                        <p className="text-2xl text-[#4E5562]">
                            and{" "}
                            <span className="text-2xl font-bold text-[#111827]">
                                global distributor
                            </span>
                        </p>
                    </div>
                </div>

                <div className="md:w-1/2 flex justify-end">
                    <img
                        src={final}
                        alt="Family and Solar Panel"
                        className="object-cover max-w-full max-h-full rounded-r-lg"
                    />
                </div>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                {secondCards.map((card, index) => (
                    <div key={index} className="w-full">
                        <Card
                            image={card.image}
                            title={card.title}
                            description={card.description}
                        />
                    </div>
                ))}
            </div>
        </div>
        <Footer />
    </div>
}

export default ResultPage;