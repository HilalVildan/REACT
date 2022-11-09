import React from "react";
import axios from "axios";
import { HomeImg, ImgDiv, MainContainer } from "./HomeStyles";
import homeSvg from "../../assets/home.svg";
import { useState } from "react";
import Header from "../../components/header/Header";
import RecipeCard from "./RecipeCard"
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";

const APP_ID = "4e9f05eb";

const APP_KEY = "9b904d703fa0d46a88ce1ac63f29f498";

const Home = () => {
  const [query, setQuery] = useState("");
  const [ögün, setOgün] = useState("Breakfast");
  const [yemekler, setYemekler] = useState();

  // query=yazdığımız sorgu kelimesi, mealType=breakfast vs
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${ögün}`;

  const getData = async () => {
    const veri = await axios.get(url);
    //  console.log(veri.data.hits);
    setYemekler(veri.data.hits);
  };

  // console.log(yemekler);

  return (
    <div>
      <Navbar />
      <Header setOgün={setOgün} setQuery={setQuery} getData={getData} />

      {yemekler ? (
        <MainContainer>
          {yemekler.map((i, index) => (
            <RecipeCard key={index} i={i.recipe} />
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />
        </ImgDiv>
      )}

      <Footer />
    </div>
  );
};

export default Home;
