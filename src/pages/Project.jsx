import React from "react";
import Header from "../Component/Project/Header.jsx";
import ProjectComp from "../Component/Project/Project";

import ContactForm from "../Component/Project/contact.jsx";
import Footer from "../Component/Footer";

const Project = () => {
  return (
    <div>
      <Helmet>
        <title>DSR Group of Company Website | Project</title>
      </Helmet>
      <Header />
      <ProjectComp />
      <section id="Contacts">
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
};

export default Project;
