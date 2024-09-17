import React from "react";
import ELearn from "../Component/E-Learning/index";
import Footer from "../Component/Footer";
import Headerr from "../Component/E-Learning/Headerr.jsx";
import ContactForm from "../Component/E-Learning/Contact.jsx";
import { Helmet } from "react-helmet";

const Elearning = () => {
  return (
    <div>
      <Helmet>
        <title>DSR Group of Company Website | E-Learning's</title>
      </Helmet>
      <Headerr />
      <ELearn />
      <section id="#contacts">
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
};

export default Elearning;
