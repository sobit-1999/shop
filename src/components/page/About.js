import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Icon1 from "./icons/about-icon1.png";
import Icon2 from "./icons/about-icon2.png";
import Icon3 from "./icons/about-icon3.png";
import Icon4 from "./icons/about-icon4.png";
export default function About() {
  return (
    <div>
      <Box
        sx={{
          textAlign: "center",
          mt:5
        }}
      >
        <Typography
          component="div"
          variant="h3"
          sx={{
            fontWeight: "700",
          }}
        >
          ABOUt Us
        </Typography>
        <Typography
          component="div"
          variant="p"
          sx={{
            mt: 1,
          }}
        >
          Problems trying to resolve the conflict between
          <br /> the two major realms of Classical physics: Newtonian mechanics
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          flexWrap: "wrap",
          mt: 3,
        }}
      >
        {aboutCategory.map((item, i) => {
          return (
            <Box
              key={i}
              sx={{
                padding: "25px 30px",
                width: "100%",
                maxWidth: "210px",
                transition: "1s",
                cursor: "pointer",
                textAlign: "center",
                ":hover": {
                  boxShadow: 4,
                },
                my: 2,
                mx: { xs: 2, md: 0 },
              }}
            >
              <img alt={item.name} width="40px" src={item.icon} />
              <Typography
                component="div"
                variant="h5"
                sx={{ mt: "10px", mb: "7px", fontWeight: "700" }}
              >
                {item.number}
              </Typography>
              <Typography component="div" variant="p">
                {item.name}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </div>
  );
}

const aboutCategory = [
  {
    icon: Icon1,
    name: "CASES DONE",
    number: "3K",
  },
  {
    icon: Icon2,
    name: "HAPPY CUSTOMERS",
    number: "45",
  },
  {
    icon: Icon3,
    name: "AWARD WINNING",
    number: "12+",
  },
  {
    icon: Icon4,
    name: "CASES DONE",
    number: "1.5K",
  },
];
