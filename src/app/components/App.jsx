import React from "react";
import Navigation from "./Navigation";
import Intro from "./Intro";
import About from "./About";
import Skills from "./Skills";
import Education from "./Education";
import Project from "./Projects";
import Footer from "./Footer";
import Contact from "./Contact";
import Certification from "./Certification";
import Blogspost from "./Blogspost";
import { useEffect } from "react";
import Aos from "aos";


function App(){

    // useEffect(() => {
    //   Aos.init({
    //     offset: 120,  // offset (in px) from the original trigger point
    //     delay: 0,     // values from 0 to 3000, with step 50ms
    //     duration: 400, // values from 0 to 3000, with step 50ms
    //     easing: 'ease', // default easing for AOS animations
    //     once: true,    // whether animation should happen only once - while scrolling down
    //     mirror: false, // whether elements should animate out while scrolling past them
    //     anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation
    // });
    
    //   }, []);
      

return(
<div>

<Navigation />
<Intro />
<About />
<Skills />
<Education />
<Project />
<Certification />
<Blogspost/>
<Contact />
<Footer />

</div>

) ;


}

export default App ;