import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import "./LandingImageList.css";

const LandingImageList = () => {
  return (
    <Box
      sx={{ overflowY: "scroll" }}
      className="no-scrollbar flex items-center justify-center mt-10"
    >
      <ImageList className="w-[600px] h-[500px]" cols={3} rowHeight={2}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={item.img}
              alt={item.title}
              loading="lazy"
              className="no-scrollbar object-contain object-center transition-all duration-300 filter grayscale hover:grayscale-0"
            />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>
  );
};

const itemData = [
  {
    img: "/assets/siteImages/taj-mahal.jpg",
    title: "Taj Mahal",
  },
  {
    img: "/assets/siteImages/gateway-of-india.jpg",
    title: "Gateway of India",
  },
  {
    img: "/assets/siteImages/lotus-temple.jpg",
    title: "Lotus Temple",
  },
  {
    img: "/assets/siteImages/india-gate.jpg",
    title: "India Gate",
  },
  {
    img: "/assets/siteImages/taj-mahal.jpg",
    title: "Taj Mahal",
  },
  {
    img: "/assets/siteImages/gateway-of-india.jpg",
    title: "Gateway of India",
  },
  {
    img: "/assets/siteImages/lotus-temple.jpg",
    title: "Lotus Temple",
  },
  {
    img: "/assets/siteImages/india-gate.jpg",
    title: "India Gate",
  },
  {
    img: "/assets/siteImages/taj-mahal.jpg",
    title: "Taj Mahal",
  },
  {
    img: "/assets/siteImages/gateway-of-india.jpg",
    title: "Gateway of India",
  },
  {
    img: "/assets/siteImages/lotus-temple.jpg",
    title: "Lotus Temple",
  },
  {
    img: "/assets/siteImages/india-gate.jpg",
    title: "India Gate",
  },
];

export default LandingImageList;
