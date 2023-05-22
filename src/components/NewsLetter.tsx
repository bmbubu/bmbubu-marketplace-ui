export const NewsLetter = () => {
  return (
    <div className="footer-newsletter">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-12 text-center">
            <h4>Our Newsletter</h4>
            <p>Subscribe to receive the best business insights Your Email</p>
          </div>
          <div className="col-lg-6">
            <form action="" method="post">
              <input type="email" name="email" />
              <input type="submit" value="Subscribe" />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
