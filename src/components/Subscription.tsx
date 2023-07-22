const Subscription = () => {
  return (
    <section className="subscription flex-center" id="services">
      <h3 className="subscription__title" data-aos="flip-down">
        Get offers straight <br /> to your inbox
      </h3>
      <p>Sigh up for the Sushiman newsletter</p>
      <div className="subscription__form" data-aos="fade-up">
        <input type="text" placeholder="Enter your email address" />
        <button>Get Started</button>
      </div>
    </section>
  );
};

export default Subscription;
