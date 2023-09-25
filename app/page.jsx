"use client"
import GeoLocationBtn from "@components/Statix";
import MainHero from "@components/MainHero";

const Home = () => (
  <section className='w-full flex-center flex-col'>
    <h1 className='head_text text-center'>
      <span className='orange_gradient text-center'>PETRONIX</span>
      <br className='min-md:hidden' />
    </h1>
    <p className='desc text-center mb-10'>
    Get analytics about crowd density at your nearest Fuel Stations.
    </p>
    <GeoLocationBtn />
    <MainHero />
  </section>
);

export default Home;
