import BreadCrumb from "../components/BreadCrumb";
import Navbar from "../components/Navbar";
import Searchbar from "../components/Searchbar";
import OverviewTitle from "../components/OverviewTitle";
import map from "../assets/map.png";
import logo from "../assets/1stsunergy.png";
import Review from "../components/Review";
import SuggestedCard from "../components/SuggestedCards";
import addReviewIcon from '../assets/addReview.svg';
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import starIcon from '../assets/starIcon.svg';
import solar3g from '../assets/3gsolar.png'
import es2 from '../assets/2es.png';
import energy3D from '../assets/3d_energy.png'

function OverviewPage() {
  const filters = [
    { label: "All", count: null, active: true },
    { label: "Only positive", count: 46, active: false },
    { label: "Only negative", count: 2, active: false },
  ];

  const reviews = [
    {
      name: "Randy W.",
      date: "November 19, 2024",
      rating: 5,
      review:
        "Sunergy made it super smooth and easy to get solar. We had need of a large system to sustain a lot of computing, EV usage, and heatpump, so ended up drafting out a 12.75kW array. Their representative John Parlator kept in close contact through the whole process.",
      likes: 6,
      dislikes: 0,
    },
    {
      name: "John Parlatore",
      date: "November 10, 2024",
      rating: 5,
      review:
        "John Parlatore was great to work with, from start to finish. He was prompt with getting back to me in a timely and every step was handled with professionalism. I would recommend Sunergy to anyone who is thinking of getting solar panels. They look great and will save us tens of thousands.",
      likes: 13,
      dislikes: 2,
    },
  ];

  const nearbyBusinesses = [
    {
      logo: solar3g,
      name: "3G-Solar GmbH",
    },
    {
      logo: es2,
      name: "2ES",
    },
    {
      logo: energy3D,
      name: "3D Energy",
    },
  ];
  return (
    <div>
      <Navbar />
      <Searchbar />
      <div className="py-5 ml-20 mr-24">
        <BreadCrumb path={"First Sunenergy LLC"} />

        <div>
          <OverviewTitle
            logo={logo}
            name="First Sunenergy LLC"
            rating={4.9}
            reviewCount={48}
            location="Houston, TX"
            phone="+1 7135 130 423"
            website="http://www.firstsunergy.com/"
            description={`First Sunergy LLC is a highly reputable clean energy products & services provider and global distributor with top expertise in the supply-demand chains of US-China, such as solar panels/wafers/cells, ingots, solar grade silica sand, wind turbines & inverters etc. It also provides full consulting & installation, PPA negotiation & financing services on solar-wind projects for farm/ranches, residents and businesses.
Our company provides specialized advice, guidance and negotiation for the purchase of solar/wind systems. The company provides solar and wind electric products with very competitive pricing, the best quality and long term reliability for a variety of green energy applications. We create long term relationships with our commercial and residential customers based on our commitment of trust, value and integrity.`}
            mapImage={map}
          />
        </div>

        <div className="p-6 mx-auto max-w-7xl">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-semibold">Reviews</h2>
                <div className="flex items-center gap-2">
                  <img src={starIcon} className="w-5 h-5 text-orange-400 fill-orange-400" />
                  <span className="font-medium">4.8</span>
                  <span className="text-gray-500">(127)</span>
                </div>
              </div>

              <div className="flex items-center gap-4 mb-8">
                {filters.map((filter, index) => (
                  <button
                    key={index}
                    className={`px-4 py-2 rounded-full ${
                      filter.active
                        ? "border-2 border-gray-900"
                        : "border border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {filter.label}
                    {filter.count !== null && ` (${filter.count})`}
                  </button>
                ))}
                <button className="flex items-center gap-2 ml-auto text-red-500 hover:text-red-600">
                  <img src={addReviewIcon} alt="add review"/>
                </button>
              </div>

              <div className="mb-8 space-y-6">
                {reviews.map((review, index) => (
                  <Review key={index} {...review} />
                ))}
              </div>

              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, "...", 26].map((page, index) => (
                  <button
                    key={index}
                    className={`w-8 h-8 flex items-center justify-center rounded-full ${
                      page === 1 ? "bg-gray-100" : "hover:bg-gray-50"
                    }`}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h2 className="mb-6 text-2xl font-semibold">
                Nearby similar business
              </h2>
              <div className="space-y-4">
                {nearbyBusinesses.map((business, index) => (
                  <SuggestedCard key={index} {...business} />
                ))}
              </div>
            </div>
          </div>
        </div>

        <ContactForm />
      </div>
      <Footer/>
    </div>
  );
}

export default OverviewPage;
