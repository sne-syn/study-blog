import React from 'react'

const EmailSubscribe = () => {
  return (
    <section className="call-to-action">
    <div className="container">
      <header>
        <h2 className="section-title">Inbox</h2>
        <p className="section-subtitle">Knowledge letters</p>
      </header>
      <img className="newsletter-img" src="img/newsletter.svg" alt="floating items" />
      <form action="" method="post" className="newsletter">
        <div>
          <label for="name">Name</label>
          <input placeholder="Your Name" type="text" id="name" name="name" />
        </div>
        <div>
          <label for="email">Email</label>
          <input placeholder="example@domain.com" type="email" name="email" id="email" />
        </div>
        <button className="btn" type="submit">Subscribe</button>
      </form>
    </div>
  </section>
  )
}

export default EmailSubscribe;
