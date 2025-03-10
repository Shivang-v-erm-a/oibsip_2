import React from 'react'

const Testimonial = () => {
  return (
    <div id='testimonial'>
      <h2>Testimonial</h2>

      <section>
        <TestimonialCard
          name={"Nakesh"}
          feedback={"Best portfolio I've seen !"}
        />

        <TestimonialCard
          name={"Pranshu"}
          feedback={
            "It's undoubtedly amazing !"
          }
        />

        <TestimonialCard
          name={"Shobhit"}
          feedback={"Nice animations, keep it up!"}
        />
      </section>
    </div>
  )
}

const TestimonialCard = ({ name, feedback }) => (
  <article>
    <img
      src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
      alt="User"
    />
    <h4>{name}</h4>
    <p>{feedback}</p>
  </article>
);

export default Testimonial