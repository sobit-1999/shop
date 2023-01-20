import React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import Typography from "@mui/material/Typography";
import Icon1 from "../page/icons/contact1.png";
import Icon2 from "../page/icons/contact2.png";
import Icon3 from "../page/icons/contact3.png";

export default function Footer() {
  return (
    <Box
      sx={{
        mt: 3,
        color: "#fff",
        background: "rgb(26, 71, 63)",
        py: 3,
      }}
    >
      <Container
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          flexWrap: "wrap",
        }}
      >
        {footerCategory.map((item, i) => {
          return (
            <Box
              key={i}
              sx={{
                width: "100%",
                maxWidth: "210px",
                textAlign: "left",
                my: 2,
                mx: { xs: 2, md: 0 },
              }}
            >
              <Typography component="div" variant="h6" sx={{ mb: 2 }}>
                {item.categoryName}
              </Typography>
              {item.category.map((item2, i2) => {
                return (
                    <Box 
                    sx={{display:"flex",
                   alignItems: "center"
                }}
                    >
                       {item2.icon &&<img alt={item2.name} src={item2.icon} style={{marginRight: "15px", marginTop: "5px"}} width="25px"/>}
                  <Typography key={i2} gutterBottom component="div" variant="a">
                    {item2.name}
                  </Typography>
                    </Box>
                      
                );
              })}
            </Box>
          );
        })}
      </Container>
    </Box>
  );
}
const footerCategory = [
  {
    categoryName: "Company Info",
    category: [
      { name: "About Us", link: "/" },
      { name: "Carrier", link: "/" },
      { name: "We are hiring", link: "/" },
      { name: "Blog", link: "/" },
    ],
  },
  {
    categoryName: "Legal",
    category: [
      { name: "About Us", link: "/" },
      { name: "Carrier", link: "/" },
      { name: "We are hiring", link: "/" },
      { name: "Blog", link: "/" },
    ],
  },
  {
    categoryName: "Features",
    category: [
      { name: "Business Marketing", link: "/" },
      { name: "User Analytic", link: "/" },
      { name: "Live Chat", link: "/" },
      { name: "Unlimited Support", link: "/" },
    ],
  },
  {
    categoryName: "Resources",
    category: [
      { name: "IOS & Android", link: "/" },
      { name: "Watch a Demo", link: "/" },
      { name: "Customers", link: "/" },
      { name: "API", link: "/" },
    ],
  },
  {
    categoryName: "Get In Touch",
    category: [
      { icon: Icon1, name: "(480) 555-0103", link: "/" },
      { icon: Icon2, name: "debra.holt@example.com", link: "/" },
      { icon: Icon3, name: "We are hiring", link: "/" },
    ],
  },
];
