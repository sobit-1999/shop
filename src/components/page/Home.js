import React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Icon1 from "./icons/Vector1.png";
import Icon2 from "./icons/Vector2.png";
import Icon3 from "./icons/Vector3.png";
import imgHome from "./icons/cover.png";


const styles = {
  paperContainer: {
    backgroundImage: `url(${imgHome})`,
    width: "100%",
    backgroundColor: "rgba(0, 20, 0, 0.99)",
    height: "500px",
    backgroundRepeat: "no-repeat",
    
  },
};
export default function Home() {
  return (
    <Box  style={styles.paperContainer} position="relative">
      <Box position="absolute" sx={{ flexGrow: 1, py: 10 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box>
              <Typography
                component="div"
                variant="h3"
                sx={{
                  fontWeight: "700",
                  mb: 5,
                  maxWidth: "400px",
                }}
              >
                EMPOWER YOUR BUSINESS
              </Typography>

              <Typography
                component="div"
                variant="h5"
                maxWidth="390px"
                color="rgb(63, 63, 63)"
              >
                We know how large objects will act, but things on a small scale.
              </Typography>

              <Stack direction="row" spacing={2} sx={{ mt: 5 }}>
                <Button
                  variant="contained"
                  color="success"
                  sx={{
                    borderRadius: 100,
                    textTransform: "none",
                    padding: "12px 24px",
                    backgroundColor: "rgb(255, 153, 0)",
                  }}
                >
                  Get Quote Now
                </Button>
                <Button
                  variant="outlined"
                  // color="error"
                  sx={{
                    textTransform: "none",
                    borderRadius: 100,
                    padding: "12px 24px",
                  }}
                >
                  Learn More
                </Button>
              </Stack>
            </Box>
          </Grid>
          <Grid item xs={6}>
          </Grid>
          <Grid item xs={12}>
            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "space-between" },
                flexWrap: "wrap",
              }}
            >
              {homeCategory.map((item, i) => {
                return (
                  <Box
                    key={i}
                    sx={{
                      display: "block",
                      boxShadow: 3,
                      padding: "25px 30px",
                      width: "100%",
                      maxWidth: "300px",
                      transition: "2s",
                      cursor: "pointer",
                      backgroundColor: "#fff",
                      ":hover": {
                      backgroundColor: "rgb(88, 173, 209)",
                      color: "#fff",
                      },
                      my: 2,
                    }}
                  >
                    <img alt={item.name} width="40px" src={item.icon} />
                    <Typography component="div" variant="h5" sx={{ mt: "10px", mb: "7px" }}>
                      {item.name}
                    </Typography>
                    <Typography
                      component="div"
                      variant="p"
                    >
                      {item.text}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
}

const homeCategory = [
  {
    icon: Icon1,
    name: "Digital Marketing",
    text: "We focus on ergonomics and meeting you where you work.",
  },
  {
    icon: Icon2,
    name: "National top 50 firms",
    text: "Just type what's on your mind and we'll get you there.",
  },
  {
    icon: Icon3,
    name: "Digital Marketing",
    text: "the quick fox jumps over the lazy dog",
  },
];
