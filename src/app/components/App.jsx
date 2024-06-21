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

    useEffect(() => {
        Aos.init({
          once: true,
        });
      }, []);
      

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