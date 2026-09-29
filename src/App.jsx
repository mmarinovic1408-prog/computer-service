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

    <Box
    compomemt="main"
    id="pocetna"
    sx={{
      textAlign: "center",
      py: { xs: 8, md: 12 },
      px: 2,
      bgcolor: "primary.main",
      color: "white",
    }}
    >
     <Container maxWidth="md">
      <Typography
      variant="h1"
      component="h1"
      sx={{ fontSize: { xs: "2.5rem", md: "4rem" }, fontWeight: "bold"}}
      >
        Vaše računalo. Naša briga.
      </Typography>

      <Typography variant="h6# sx={{ mt: 2}}">
        Brz, pouzdan i profesionalan servis računala.
      </Typography>

      <Button variant="contained" color="secondary" href="#usluge" sx={{ mt:4}}>
        Pogledajte usluge
      </Button>
      </Container>
    </Box>

    <Box component="section" id="usluge" sx={{ px: 8}}>
      <Container>
        <Typography variant="h2" component="h2" textAlign="center" gutterBottom>
          Naše usuluge
        </Typography>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "repeat(3, 1fr)"},
            gap: 3,
            mt: 4,
          }}
          >
            {services.map((service) => (
              <Card key={service.title}>
                <CardMedia
                  component="img"
                  height="200"
                  image={service.image}
                  alt={service.title}
                />

              <CardContent>
                <Typography variant="h5" component="h3" gutterBottom>
                  {service.title}
                </Typography>

                <Typography color="text.secondary">
                  {service.text}
                </Typography>
              </CardContent>

              </Card>
            ))}
          </Box>
      </Container>
    </Box>

    <Box
      component="section"
      id="o-nama"
      sx={{ py: 8, bgcolor: "grey.100", textAlign: "center" }}
      >
        <Container maxWidth="md">
          <Typography variant="h2" component="h2">
            O nama
          </Typography>

          <Typography color="text.secondary" sx={{ mt: 2 }}>
            ComputerFix je izmišljeni servis računala koji korisnicima
             pruža pomoć pri popravku, nadogradnju i zaštiti računala.
          </Typography>
        </Container>
      </Box>

      <Box component="section" id="kontakt" sx={{ py: 8 }}>
        <Container maxWidth="sm">
          <Typography variant="h2" component="h2" textAlign="center">
            Kontakt
          </Typography>

          <Box
            component="from"
            sx={{ display: "grid", gap: 2, mt: 4}}
            onSubmit={(event) => event.preventDefault()}
            >
              <TextField label="Ime i prezime" required />
              <TextField label="E-mail" type="email" required />
              <TextField label="Poruka" multiline rows={4} required />
              <Button type="submit" variant="contained">
                Pošalji upit
              </Button>
            </Box>
        </Container>
      </Box>
    </>
  )
}

export default App;
