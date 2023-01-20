import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Icon1 from "./icons/service1.png";
import Icon2 from "./icons/service2.png";
import { CardContent } from "@mui/material";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Logo1 from "./icons/service-logo1.png";
import Logo2 from "./icons/service-logo2.png";
import Logo3 from "./icons/service-logo3.png";
import Logo4 from "./icons/service-logo4.png";
import Logo5 from "./icons/service-logo5.png";
import Logo6 from "./icons/service-logo6.png";
export default function Service() {
  return (
    <div>
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <Typography
          component="div"
          variant="h3"
          sx={{
            fontWeight: "700",
            mt: 7,
          }}
        >
          BUSINESS SERVICES
        </Typography>
        <Typography
          component="div"
          variant="p"
          sx={{
            mt: 1,
            mb: 4,
          }}
        >
          Problems trying to resolve the conflict between the two major realms
          of <br />
          Classical physics: Newtonian mechanics.
        </Typography>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12} md={7}>
          <CardContent sx={{ height: { xs: "300px", md: "450px" } }}>
            <iframe
              className="video-card"
              id="video"
              width="100%"
              src="https://www.youtube.com/embed/ZSQSrmJNnr0?t=4"
              frameBorder="0"
              allow="accelerometer, autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="Loading..."
              height="100%"
            />
          </CardContent>
        </Grid>

        <Grid item xs={12} md={5}>
          <Box sx={{ padding: { xs: "0", md: "60px 10%" } }}>
            <Typography
              component="div"
              variant="h3"
              sx={{
                fontWeight: "700",
              }}
            >
              Most trusted in our field
            </Typography>
            <Typography component="div" variant="p" sx={{ mt: 2 }}>
              Most calendars are designed for teams. Slate is designed for
              freelancers who want a simple way to plan their schedule.
            </Typography>
            {serviceCategory.map((item, i) => {
              return (
                <Box
                  key={i}
                  sx={{
                    mt: 3,
                    display: "flex",
                  }}
                >
                  <img
                    alt={item.name}
                    width="35px"
                    height="35px"
                    src={item.icon}
                  />
                  <Box sx={{ ml: 3 }}>
                    <Typography component="div" variant="h6">
                      {item.name}
                    </Typography>
                    <Typography component="div" variant="p">
                      {item.text}
                    </Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          flexWrap: "wrap-reverse",
          alignItems: "center",
          mt: 5,
        }}
      >
        {logos.map((item, i) => {
          return (
            <Box
              key={i}
              sx={{
                maxWidth: "300px",
                minWidth: "120px",
                my: 3,
                mx: { xs: "20%", md: 3 },
              }}
            >
              <img alt="logo" width="100%" src={item} />
            </Box>
          );
        })}
      </Box>
      <Box
        sx={{
          display: {xs:"block", md: "flex"},
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "rgb(26, 71, 63)",
          px: "10%",
          py: "20px",
          color: "#fff",
          borderRadius: 1,
        }}
      >
        <Typography component="div" variant="h6"
        sx={{maxWidth :"190px", fontWeight: "700"}}
        >
          Subscribe For Latest Newsletter
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <TextField
            sx={{
              height: "50px",

              border: "none",
              "& fieldset": { border: "none" },
              backgroundColor: "#fff"
            }}
            fullWidth
            placeholder="Your Email"
            id="fullWidth"
          />
          <Button
            variant="contained"
            color="success"
            sx={{
              height: "50px",
              textTransform: "none",
              backgroundColor: "rgb(255, 153, 0)",
              borderRadius: "0 2px 2px 0",
              ":hover": {
                backgroundColor: "rgb(255, 153, 0)",

              }
            }}
          >
            Subscribe
          </Button>
        </Box>
      </Box>
    </div>
  );
}

const serviceCategory = [
  {
    icon: Icon1,
    name: "the quick fox jumps over the lazy dog",
    text: "Things on a very small scale ...",
  },
  {
    icon: Icon2,
    name: "the quick fox jumps over the lazy  dog",
    text: "Things on a very small scale ...",
  },
];

const logos = [Logo1, Logo2, Logo3, Logo4, Logo5, Logo6];
