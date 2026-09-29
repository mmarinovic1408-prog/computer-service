import {
  AppBar,
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Container,
  TextField,
  Toolbar,
  Typography,
} from "@mui/material"

const services = [
  {
    title: "Popravak računala",
    image: "/images/repair.jpg",
    text:"Dijagnostika i popravak hardverskih i softverskih problema.",
  },
  {
    title: "Nadogradnja računala",
    image: "/images/upgrade.jpg",
    text:"Ugradnja RAM-a, SSD-a i drugih komonenti za bolje performanse.",
  },
  {
    title: "Računalna sigurnost",
    image: "/images/security.jpg",
    text:"Zaštita računala od virusa, zlonamjernog softvera i drugih prijetnji.",
  },
];

function App() {
  return (
    <>
    <AppBar component="header" position="static">
      <Toolbar sx={{ justifyContent: "space-between", flexWrap: "wrap"}}>
        <Typography variant = "h6" component="a" href="#pocetna"
        sx={{color: "inherit", textDecoration: "none", fontWeight: "bold"}}>
          ComputerFix
        </Typography>

        <Box component="nav">
          <Button color="inherit" href="#pocetna">Početna</Button>
          <Button color="inherit" href="#usluge">Usluge</Button>
          <Button color="inherit" href="#o-nama">O nama</Button>
          <Button color="inherit" href="#kontakt">Kontakt</Button>
        </Box>
      </Toolbar>
    </AppBar>
    </>
  )
}

export default App;
