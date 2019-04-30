// THIS IS THE HOME INTRO PAGE

// Now I can either try going the route of placing a big picture for prettiness sake or add some custom css. Picture background seems like a cool idea to grab attention to anyone who wanders into this page hopefully
import React from "react";
// Internet Explorer 6-11
const isIE = /*@cc_on!@*/false || !!document.documentMode;
// Edge 20+
const isEdge = !isIE && !!window.StyleMedia;

if (isEdge || isIE) {
	alert("Woah there! Seems like you are using Internet Explorer or Edge. That's great and all but this site works best on Chrome or Firefox and I put in a lot of effort into making this site with custom CSS which Edge and IE still has not implemented yet. For best user experience please come back in Chrome or Firefox. It would totally be a shame for you not to be able to view these recent CSS features!"); // ie is cancer why is it still thing in 2019
}

const Home = (props) => (
  
  <section className="home">
    <div>
    <h1 className="home__header u-margin-bottom-small">Jason Kim</h1>
    <div className="home__description">Coding began as a simple curiosity and now it has become a passion I enjoy doing</div>
    </div>
    
  </section>
);

export default Home;