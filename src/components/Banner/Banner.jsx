import "./banner.scss";

const Banner = () => {
  return (
    <div className="banner-container">
      {/* Left big banner */}
      <div className="banner-left">
        <div className="banner-content">
          <h2>BIG SALE!</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi voluptates similique odit!</p>
          <button>Buy Now</button>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQc_sO6nvK0L0nGX5nnPZCZ6CqVWlz5voB0g&s"
          alt=""
          className="banner-image"
          style={{transform: "rotate(10deg)"}}
        />
      </div>

      {/* Right small banners */}
      <div className="banner-right">
        <div className="banner-card orange">
          <h2>
            Get up to <span>20%</span> <br />OFF on bulk orders 
          </h2>
        </div>

        <div className="banner-card blue">
        <div className="blue-content">
          
          <h4>Cursive writting notebooks</h4>
          <button>Shop now</button>
        </div>
          <img
            src="https://i.pinimg.com/1200x/20/96/07/209607a7971c00195fcc4eed09a97a58.jpg"
            alt=""
            className="banner-mini-image"
          />
        </div>
      </div>
    </div>
  );
};

export default Banner;
