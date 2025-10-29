import React from 'react'

const ServiceSection = () => {
  return (
    <section className='grid-section'>

      <div className="grid-block text">
        <h2>Transform your brand</h2>
        <p>
          We are a full-service creative agency specializing in helping brands
          grow fast. Engage your clients through compelling visuals that do
          most of the marketing for you.
        </p>
        <a href="#contact" className="learn-more yellow">Learn more</a>
      </div>

      <div className="grid-block image transform-image"></div>
      <div className="grid-block image stand-out-image"></div>

      <div className="grid-block text">
        <h2>Stand out to the right audience</h2>
        <p>
          Using a collaborative formula of designers, researchers, and
          strategists, we’ll build and extend your brand in digital places.
        </p>
        <a href="#contact" className="learn-more red">Learn more</a>
      </div>

      <div className="grid-block image-text graphic-design">
        <div className="overlay-text">
          <h2>Graphic Design</h2>
          <p>
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients’ attention.
          </p>
        </div>
      </div>

      <div className="grid-block image-text photography">
        <div className="overlay-text">
          <h2>Photography</h2>
          <p>
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your business image.
          </p>
        </div>
      </div>
    </section>
  )
}

export default ServiceSection