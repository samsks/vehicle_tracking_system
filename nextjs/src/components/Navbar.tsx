import { AppBar, IconButton, Toolbar, Typography } from "@mui/material";
import DriverIcon from "@mui/icons-material/DriveEta";
export const Navbar = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" color="inherit" aria-label="menu">
          <DriverIcon />
        </IconButton>
        <Typography variant="h6">
          Sistema de Rastreabilidade de Veículos
        </Typography>
      </Toolbar>
    </AppBar>
  );
};
