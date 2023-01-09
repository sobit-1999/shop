import React from "react";
import Carousel from "react-material-ui-carousel";
import bgShop from "../images/bg-shop.jpg"
import bgGallery from "../images/bg-gallery.jpg"
// import { Box } from "@mui/system";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
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
      <Carousel
        index={index}
        onChange={handleChange}
        interval={4000}
        animation="fade"
        indicators={false}
        stopAutoPlayOnHover={false}
        // swipe
        className="my-carousel"
        // strictIndexing
        // autoPlay
        // stopAutoPlayOnHover	
        // interval
        // indicators
        // navButtonsAlwaysVisible
        // navButtonsAlwaysInvisible	
        // cycleNavigation	
        // fullHeightHover	
      >
        {items.map((item, i) => (
 
        <ImageList
      sx={{
        width: "100%",
        // height: 550,
        // Promote the list into its own layer in Chrome. This costs memory, but helps keeping high FPS.
        // transform: 'translateZ(0)',

      }}
      cols={1}
    //   gap={1}
    >
            <img
            //   {...srcset(item.img, 250, 200, rows, cols)}
              alt={item.title}
              loading="lazy"
              src={item.img}
            //   height="450"
              width="100%"

            />
            <ImageListItemBar
            //   sx={{
            //     background:
            //       'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
            //       'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
            //   }}
              title={item.title}
              position="top"
              actionIcon={
                <IconButton
                  sx={{ color: 'white' }}
                  aria-label={`star ${item.title}`}
                >
                  <StarBorderIcon />
                </IconButton>
              }
              actionPosition="left"
            />
    </ImageList>))}
      </Carousel>
      {items.map((item, i) => (
        <button
          onClick={() => setIndex(i)}
          style={{ background: i === index ? "#ccc" : "#fff" }}
        >
          {i}
        </button>
      ))}
    </div>
  );
}
