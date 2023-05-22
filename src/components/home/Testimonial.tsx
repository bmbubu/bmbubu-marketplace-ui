import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export const Testimonial = () => {
  return (
    <section id="testimonials" className="testimonials">
      <div className="container" data-aos="fade-up">
        <header className="section-header">
          <h2>Testimonials</h2>
          <p>What they are saying about us</p>
        </header>
        <Swiper
          speed={600}
          loop={true}
          slidesPerView={"auto"}
          modules={[Pagination]}
          className="swiper-wrapper"
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            type: "bullets",
            el: ".swiper-pagination",
          }}
          breakpoints={{
            320: {
              slidesPerView: 1,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          <SwiperSlide className="swiper-slide">
            <div className="testimonial-item">
              <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p>
                We know our grandmother is in good hands when we're away on
                vacation, and we're grateful to have found such a kind,
                trustworthy person and a terrific product. Having automated
                those pesky tasks that kept me up at night, at a glance, I can
                see if the person you hired is doing their job or not - and they
                don't have to update you on it. <br />
                My Work Product has made it easy for us to relax and enjoy our
                time away.
              </p>
              <div className="profile mt-auto">
                <img
                  src="assets/images/testimonials/testimonials-2.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Sara Wilsson</h3>
                <h4>Buyer</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="testimonial-item">
              <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p>
                Have you ever had an idea at work only to have someone else
                receive credit for it? Finally, I could work and get credit
                without my boss or anyone else getting in the way. No more
                feeling like my work is going unnoticed.
              </p>
              <div className="profile mt-auto">
                <img
                  src="assets/images/testimonials/testimonials-3.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Jena Karlis</h3>
                <h4>Seller</h4>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide">
            <div className="testimonial-item">
              <div className="stars">
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
                <i className="bi bi-star-fill"></i>
              </div>
              <p>
                I have a few different revenue streams in one platform, which
                reduces financial anxiety when one of my businesses is slow. And
                the platform makes managing my clients and gigs efficient.
              </p>
              <div className="profile mt-auto">
                <img
                  src="assets/images/testimonials/testimonials-4.jpg"
                  className="testimonial-img"
                  alt=""
                />
                <h3>Matt Brandon</h3>
                <h4>Seller</h4>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
        <div className="swiper-pagination"></div>
      </div>
    </section>
  );
};
