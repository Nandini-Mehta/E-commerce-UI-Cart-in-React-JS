import React from 'react'
import Categories from '../components/Categories';
import Announcement from '../components/Announcement';
import Navbar from '../components/Navbar';
import Slider from '../components/Slider';
import Products from '../components/Products';
import NewsLetter from '../components/NewsLetter';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
    <Announcement />
    <Navbar />
    <Slider />
    <Categories />
    <Products />
    <NewsLetter />
    <Footer />
    </>
  );
};
