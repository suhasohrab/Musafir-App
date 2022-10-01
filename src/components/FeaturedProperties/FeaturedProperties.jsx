import "./FeaturedProperties.css";
const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/square200/343512032.webp?k=9bbcca8fafe314ff1b60a924fce9e83bfb5f964b8a120343b7946b42441b17ac&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Hotel One </span>
        <span className="fpCity">Murree</span>
        <span className="fpPrice">Starting from Rs.10,000</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://t-cf.bstatic.com/xdata/images/hotel/square200/326882721.webp?k=005589b2743371440d65ee0e460ae6280aeed8ce3daf8e8e80ae450dd4f595df&o="
          alt=""
          className="fpImg"
        />
        <span className="fpName">Arish Luxury Suites</span>
        <span className="fpCity">Skardu</span>
        <span className="fpPrice">Starting from Rs.8000</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/232902339.jpg?k=3947def526b8af0429568b44f9716e79667d640842c48de5e66fd2a8b776accd&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Luxus Hunza</span>
        <span className="fpCity">Hunza</span>
        <span className="fpPrice">Starting from 15,000</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://cf.bstatic.com/xdata/images/hotel/max1280x900/322658536.jpg?k=3fffe63a365fd0ccdc59210188e55188cdb7448b9ec1ddb71b0843172138ec07&o=&hp=1"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Madina Hotel</span>
        <span className="fpCity">Gilgit</span>
        <span className="fpPrice">Starting from 5,000</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;