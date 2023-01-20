import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import TextareaAutosize from '@mui/material/TextareaAutosize';
import Icon1 from "./icons/contact1.png";
import Icon2 from "./icons/contact2.png";
import Icon3 from "./icons/contact3.png";
export default function About() {
  return (
    <div>
      <Box
        sx={{
          textAlign: "center",
          pt: 7
        }}
      >
        <Typography
          component="div"
          variant="h3"
          sx={{
            fontWeight: "700",
          }}
        >
          CONTACT US{" "}
        </Typography>
        <Typography
          component="div"
          variant="p"
          sx={{
            mt: 1,
          }}
        >
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics{" "}
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          flexWrap: "wrap-reverse",
          mt: 3,
        }}
      >
        {contactCategory.map((item, i) => {
          return (
            <Box
              key={i}
              sx={{
                padding: "25px 30px",
                width: "100%",
                maxWidth: "280px",
                transition: "1s",
                cursor: "pointer",
                textAlign: "center",
                backgroundColor: i===1? "rgb(41, 27, 54)": "",
                color: i===1? "#fff": "black",
                my: 2,
                mx: { xs: 2, md: 0 },
              }}
            >
              <img alt="icon" width="60px" src={item} />
              <Typography
                component="div"
                variant="p"
                sx={{ mt: "10px", fontWeight: "700" }}
              >
                georgia.young@example.com
              </Typography>
              <Typography
                component="div"
                variant="p"
                sx={{ mt: "5px", mb: "7px", fontWeight: "700" }}
              >
                georgia.young@ple.com
              </Typography>
              <Typography component="div" variant="h6"
              sx={{my: 2, fontWeight: "700"}}
              >
                Get Support
              </Typography>         <Button
                  variant="outlined"
                  sx={{
                    textTransform: "none",
                    padding: "12px 24px",
                  }}
                >
                  Learn More
                </Button>
            </Box>
          );
        })}
      </Box>
      <Box textAlign="center" sx={{mt: 5}}>
      <TextField fullWidth label="Name*" id="fullWidth" />
      <TextField fullWidth label="Email" id="fullWidth" sx={{my: 3}}/>
      <TextField fullWidth label="Phone number" id="fullWidth" sx={{mb:3}}/>      
       <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Comment"
            style={{ 
              width: '98%', 
              minHeight: 100,
              fontSize:20,
              padding:10,
            }}
            />
      <TextField fullWidth label="How did you find us" id="fullWidth" sx={{my:3}}/>
      <Button
            variant="contained"
            color="success"
            sx={{
              height: "50px",
              px: 5,
              my: 3,
              textTransform: "none",
              backgroundColor: "rgb(255, 153, 0)",
              borderRadius: "5px",
              ":hover": {
                backgroundColor: "rgb(255, 153, 0)",

              }
            }}
          >
            Contact Us
          </Button>
      </Box>
    </div>
  );
}

const contactCategory = [Icon1, Icon2, Icon3];
