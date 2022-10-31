import React from 'react'
import Header from '../components/header/header';
import Category from '../components/categories/categories';
import Banner from "../components/categories/banner";
import Slide from '../components/categories/slide';
const Home = () => {
  return (
    <div>
        <Header/>
        <Category/>
        <Banner/>
        <Slide/>
        <Slide/>
        <Slide/>
    </div>
  )
}

export default Home