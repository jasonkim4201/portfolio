//  list stuff about my self and area for pic
import React from "react";
import myPicture from "../../assets/images/pic.jpg";

const About = () => {
  return (
    <section className="about">
      <div className="container about__container">
        <header>
          <h2 className="about__header">About me</h2>
          <br />
        </header>
        <div className="about__info">
          <img src={myPicture} alt="me" className="about__info--pic" />
          <div className="about__info--bio">

            <p>I am a full stack developer recently guaduated from Rutgers Coding Bootcamp and always looking for ways to create more content.  I started my journey in December not knowing what to expect except a curiosity in what it means to be able to code and now I have found something I enjoy.</p>
            <br />
            <p>Life is always about learning new things and with my new found set of skills I can now constantly learn about new applications and programs. These things I can create may serve a purpose or just even be for the sake of a new found hobby.</p>
            <br />
            <p>I have a degree in International Politics from Penn State with minors in Asian Studies, History, and Global Securuty so those topics are also interesting to me and I might actually know a thing or two on these subjects if you need them!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;