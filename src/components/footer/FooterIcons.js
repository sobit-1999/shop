import React from "react";
import Box from "@mui/material/Box";
import { Container } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Icon1 from "../page/icons/icon1.png";
import Icon2 from "../page/icons/icon2.png";
import Icon3 from "../page/icons/icon3.png";
import Icon4 from "../page/icons/icon4.png";
import { textAlign } from "@mui/system";

export default function FooterIcons() {
  return (
    <Container>
      {" "}
      <Box
        sx={{
          display: { xs: "block", md: "flex" },
          justifyContent: "space-between",
          alignItems: "center",
          py: "17px",
          color: "#000",
          borderRadius: 1,
        }}
      >
        <Typography component="div" variant="p" 

        sx={{ fontWeight: "600", textAlign: {xs: "center", md: "left"} }}>
          Made With Love By Figmaland All Right Reserved
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {icons.map((item, i) => {
            return (
              <IconButton>
                <img key={i} alt="icon" src={item} style={{ margin: "3px" }} />
              </IconButton>
            );
          })}
        </Box>
      </Box>
    </Container>
  );
}
const icons = [Icon1, Icon2, Icon3, Icon4];
