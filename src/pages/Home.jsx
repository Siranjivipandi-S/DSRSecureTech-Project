import React from "react";
import HomeComponents from "../Component/Home";
import FeatureComponent from "../Component/Features";
import ExcluBenf from "../Component/Features/ExcluBenf";
import ClientReview from "../Component/Features/ClientReview";
import ServiceGrid from "../Component/Services/index";
import ExploreComp from "../Component/Services/ExploreComp";
import ContactForm from "../Component/Home/contact.jsx";
import Footer from "../Component/Footer";
import Header from "../Component/Home/Header";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>DSR Group of Company Website | Home</title>
      </Helmet>
      <Header />
      <HomeComponents />
      <section id="features">
        <FeatureComponent />
      </section>
      <ExcluBenf />
      <ClientReview />
      <section id="services">
        <ServiceGrid />
      </section>
      <ExploreComp />
      <section id="contact">
        <ContactForm />
      </section>
      <Footer />
    </div>
  );
};

export default Home;
