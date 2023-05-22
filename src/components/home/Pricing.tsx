export const Pricing = () => {
  return (
    <section id="pricing" className="pricing bg-light">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Pricing</h2>
          <p>Check our Pricing</p>
        </header>

        <div className="row gy-4" data-aos="fade-left">
          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="100"
          >
            <div className="box">
              <h3 style={{ color: "#07d5c0" }}>Free</h3>
              <div className="price">
                <sup>$</sup>0<span> / mo</span>
              </div>
              <ul>
                <li>Package Inclusion 1</li>
                <li>Package Inclusion 2</li>
                <li className="na">Package Inclusion 3</li>
                <li className="na">Package Inclusion 4</li>
                <li className="na">Package Inclusion 5</li>
              </ul>
              <a href="#" className="btn-buy">
                Buy Now
              </a>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="200"
          >
            <div className="box">
              <h3 style={{ color: "#65c600" }}>Pro</h3>
              <div className="price">
                <sup>$</sup>4.99<span> / mo</span>
              </div>
              <ul>
                <li>Package Inclusion 1</li>
                <li>Package Inclusion 2</li>
                <li>Package Inclusion 3</li>
                <li className="na">Package Inclusion 4</li>
                <li className="na">Package Inclusion 5</li>
              </ul>
              <a href="#" className="btn-buy">
                Buy Now
              </a>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <div className="box">
              <span className="featured">Featured</span>
              <h3 style={{ color: "#ff901c" }}>Premium</h3>
              <div className="price">
                <sup>$</sup>7.99<span> / mo</span>
              </div>
              <ul>
                <li>Package Inclusion 1</li>
                <li>Package Inclusion 2</li>
                <li>Package Inclusion 3</li>
                <li>Package Inclusion 4</li>
                <li className="na">Package Inclusion 5</li>
              </ul>
              <a href="#" className="btn-buy">
                Buy Now
              </a>
            </div>
          </div>

          <div
            className="col-lg-3 col-md-6"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className="box">
              <h3 style={{ color: "#ff0071" }}>Teams</h3>
              <div className="price">
                <sup>$</sup>29.99<span> / mo</span>
              </div>
              <ul>
                <li>Package Inclusion 1</li>
                <li>Package Inclusion 2</li>
                <li>Package Inclusion 3</li>
                <li>Package Inclusion 4</li>
                <li>Package Inclusion 5</li>
              </ul>
              <a href="#" className="btn-buy">
                Buy Now
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
