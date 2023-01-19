import React, { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import bgShop from "../images/bg-shop.jpg"
import bgGallery from "../images/bg-gallery.jpg"
// import { Box } from "@mui/system";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import axios from "axios";
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import StarBorderIcon from '@mui/icons-material/StarBorder';
// import "./styles.css";

function Item({ item }) {
  return (
    <div style={{ width: "100%", height: "100%" }}>{item.description}</div>
  );
}

export default function App() {


  // const options = {
  //   method: 'GET',
  //   url: 'https://axesso-axesso-amazon-data-service-v1.p.rapidapi.com/v2/amz/amazon-lookup-prices',
  //   params: {page: '1', domainCode: 'com', asin: 'B07QFC6LN6'},
  //   headers: {
  //     'X-RapidAPI-Key': 'ed187ecad7msh279101afa71fe96p13f24ajsn5fee75095755',
  //     'X-RapidAPI-Host': 'axesso-axesso-amazon-data-service-v1.p.rapidapi.com'
  //   }
  const options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'ed187ecad7msh279101afa71fe96p13f24ajsn5fee75095755',
      'X-RapidAPI-Host': 'axesso-axesso-amazon-data-service-v1.p.rapidapi.com'
    }
  };
  // };
  const [dates, setDates] = useState([{}])
  useEffect(() => {
    fetch('https://taobao-api.p.rapidapi.com/api?api=item_search&page_size=40&q=shoes', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));
  }, [])

console.log(dates);
  var items = [
    {img: bgShop,
      name: "Random Name #1",
      description: "1 - Probably the most random thing you have ever seen!"
    },
    {img: bgGallery,
      name: "Random Name #2",
      description: "2- Hello World!"
    }
  ];

  const [index, setIndex] = React.useState(0);

  const handleChange = (cur, prev) => {
    setIndex(cur);
    console.log(cur, prev);
  };

  return (
    <div>
      Headerbjsbcakuhcjnac
      catchc
      console.clear()carouselcc
      ccacdsd
      sdcascjch wehcw   jjhcbkuqwhce kque  qkued KWDH EUHE EHWBY  QD HBDQIEHDU4HD DBEDGYBEJDBHQD HEDHEKWDK  D UKGVVDY32KD 2DDUYYDDEB VRRTF
      
    </div>
  );
}
