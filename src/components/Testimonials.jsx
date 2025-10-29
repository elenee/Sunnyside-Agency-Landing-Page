import React from 'react'

const Testimonial = () => {

const clients = [
  {
    img: "/Sunnyside-Agency-Landing-Page/images/image-emily.jpg",
    text: "...",
    name: "Emily R.",
    position: "Marketing Director",
  },
  {
    img: "/Sunnyside-Agency-Landing-Page/images/image-thomas.jpg",
    text: "...",
    name: "Thomas S.",
    position: "Chief Operating Officer",
  },
  {
    img: "/Sunnyside-Agency-Landing-Page/images/image-jennie.jpg",
    text: "...",
    name: "Jennie F.",
    position: "Business Owner",
  },
];


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