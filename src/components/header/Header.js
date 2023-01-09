import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { ButtonGroup, Select } from "@mui/material";
import { Search, Shop2Outlined } from "@mui/icons-material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import LocalGroceryStoreOutlinedIcon from "@mui/icons-material/LocalGroceryStoreOutlined";

export default function ButtonAppBar() {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [valueRuEnUz, setValueRuEnUz] = React.useState("Ru")
  const [valueEn, setValueEn] = React.useState("En")
  const [valueUz, setValueUz] = React.useState("Uz")
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setValueRuEnUz(event.target.value)
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (e) => {
    console.log(e.target.value);
    setAnchorEl(null);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        color=""
        sx={{
          padding: "15px 10%",
        }}
      >
        <Toolbar>
          <Box textAlign="left">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              Call us: (+99899) 9994827
            </Typography>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              info@demolink.org
            </Typography>
          </Box>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Logo
          </Typography>
          <ButtonGroup variant="text" aria-label="text button group">
            <IconButton>
              <Search />
            </IconButton>
            <IconButton>
              <LocalGroceryStoreOutlinedIcon />
            </IconButton>
            <div>
              <IconButton
                id="demo-positioned-button"
                aria-controls={open ? "demo-positioned-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
                sx={{
                  background: "red",
                  color: "aliceblue",
                  ":hover": {
                    background: "red",
                  },
                }}
              >
                {valueRuEnUz}
              </IconButton>
              <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "left",
                }}
              >
                <MenuItem  value={10} onClick={handleClose}>Uz</MenuItem>
                <MenuItem value={20} onClick={handleClose}>Ru</MenuItem>
                <MenuItem  value={30}onClick={handleClose}>En</MenuItem>
              
          </Menu>
            </div>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
