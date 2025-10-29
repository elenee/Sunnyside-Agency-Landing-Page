import React from 'react'

const Testimonial = () => {

  const clients = [
    {
      img: "/Sunnyside-Agency-Landing-Page/images/image-emily.jpg",
      text: "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      name: "Emily R.", position: "Marketing Director",
    },
    {
      img: "/Sunnyside-Agency-Landing-Page/images/image-thomas.jpg",
      text: "Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.",
      name: "Thomas S.",
      position: "Chief Operating Officer",
    },
    {
      img: "/Sunnyside-Agency-Landing-Page/images/image-jennie.jpg",
      text: "Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      name: "Jennie F.",
      position: "Business Owner",
    },

  ]

  return (
    <section className="testimonials">

      <h2>Client Testimonials</h2>

      <div className="testimonials-container">
        {clients.map((client, index) => (
          <div className="testimonial-card" key={index}>
            <img src={client.img} alt={client.name} className='client-img' />
            <p className="testimonial-text">{client.text}</p>
            <div className="client-info">
              <h3 className="client-name">{client.name}</h3>
              <p className="client-position">{client.position}</p>
            </div>
          </div>
        ))}
      </div>

    </section>
  )
}

export default Testimonial