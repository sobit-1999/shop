import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Icon1 from "./icons/advice-cover1.png";
import Icon2 from "./icons/advice-cover2.png";
import Icon3 from "./icons/advice-cover3.png";
import Icon4 from "./icons/advice-cover4.png";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

export default function Advice() {
  return (
    <div>
      <Box
        sx={{
          textAlign: "center",
          mt: 5,
        }}
      >
        <Typography
          component="div"
          variant="h3"
          sx={{
            fontWeight: "700",
          }}
        >
          ADVICE
        </Typography>
        <Typography
          component="div"
          variant="p"
          sx={{
            mt: 1,
          }}
        >
          Problems trying to resolve the conflict between <br />
          the two major realms of Classical physics: Newtonian mechanics
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: { xs: "center", md: "space-between" },
          flexWrap: "wrap",
          mt: 3,
          alignItems: "center",
        }}
      >
        {adviceCategory.map((item, i) => {
          return (
            <Card
              key={i}
              sx={{
                maxWidth: "250px",
                m: 2,
                width: "100%",
                boxShadow: 0,
                ":hover ": {
                  boxShadow: 3,
                },
              }}
            >
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.text}
                </Typography>
              </CardContent>
              <CardMedia
                component="img"
                height="140"
                image={item.icon}
                alt="green iguana"
              />
            </Card>
          );
        })}
      </Box>
    </div>
  );
}

const adviceCategory = [
  {
    icon: Icon1,
    name: "A single source of truth",
    text: "3Newton thought that light was made up of particles, but then it",
  },
  {
    icon: Icon2,
    name: "Fastest way to organize",
    text: "“Quantum mechanics” is the description of the behaviour of matter",
  },
  {
    icon: Icon3,
    name: "Fastest way to take action",
    text: "They describe a universe consisting of bodies moving",
  },
  {
    icon: Icon4,
    name: "Work better together",
    text: "They finally obtained a consistent description of the behaviour ",
  },
];
