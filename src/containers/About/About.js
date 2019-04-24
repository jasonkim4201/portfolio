//  list stuff about my self and area for pic
import React from "react";
import myPicture from "../../assets/images/pic.jpg";

const About = () => {
  return (
    <div className="about">
      <header>
        <h2 className="about__header">About me</h2>
        <br />
      </header>
      <img src={myPicture} alt="me" className="about__pic" />
      <div className="about__bio">

        <p>I am a full stack developer recently guaduated from Rutgers Coding Bootcamp and always looking for ways to create more content.  I started my journey in December not knowing what to expect except a curiosity in what it means to be able to code and now I have found something I enjoy.</p>
        <br />
        <p>Life is always about learning new things and with my new found set of skills I can now constantly learn about new applications and programs. These things I can create may serve a purpose or just even be for the sake of a new found hobby.</p>
        <br />
        <p>I also enjoy learning about finance and finanial topics when I can though I can't and won't claim to be a specialist in that area (yet). Doesn't stop me from trying to read and listen in on coorperate earnings reports. I find it interesting. Really!</p>
        <br />
        <p>I have a degree in International Politics from Penn State with minors in Asian Studies, History, and Global Securuty so those topics are also interesting to me and I might actually know a thing or two on these subjects if you need them!</p>
        <br />
        <p> If you are reading this, I would like to thank you for taking the time to do so. I hope you are impressed with what I can offer. If not, I hope one day I can work towards something that will impress you.</p>
      </div>
    </div>
  )
}

export default About;