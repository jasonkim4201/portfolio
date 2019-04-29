// THIS IS THE HOME INTRO PAGE

// Now I can either try going the route of placing a big picture for prettiness sake or add some custom css. Picture background seems like a cool idea to grab attention to anyone who wanders into this page hopefully
import React from "react";
// Internet Explorer 6-11
const isIE = /*@cc_on!@*/false || !!document.documentMode;
// Edge 20+
const isEdge = !isIE && !!window.StyleMedia;

if (isEdge) {
	alert("Woah there! Seems like you are using Internet Explorer or Edge. That's great and all but this site works best on Chrome or Firefox and I put in a lot of effort into making this site with custom CSS which Edge and IE still has not implemented yet. For best user experience please come back in Chrome or Firefox.\n https://www.youtube.com/watch?v=aYmOqPFyJPw"); //honestly how I feel about ie and edge
}

if (isIE) {
  alert("Are...you using Internet Explorer in 2019? Why are you the way that you are? Honestly, every time I try to do something fun or exciting, you make it not that way. I hate so much about the things that you choose to be.");
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