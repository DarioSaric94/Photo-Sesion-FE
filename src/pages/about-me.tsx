import { Container } from '@/components/layout/container';
import { Box, Grid, Typography } from '@mui/material';

export default function AboutMe() {
  return (
    <Container>
      <Box>
        <Typography fontWeight="bold" fontSize={14} color="primary.main">
          PAR RIJEČI O MENI
        </Typography>
        <Typography
          fontWeight="bold"
          lineHeight={0.8}
          fontSize={40}
          color="primary.light"
        >
          POZDRAV
        </Typography>
      </Box>
      <Grid container mt={3}>
        <Grid item xs={12} md={6} color="primary.main" pr={{ xs: 0, md: 2 }}>
          <Typography fontSize={14} textAlign="justify">
            Zovem se Luka Miškić. Još od malih nogu pokazivao sam ljubav prema
            kameri, fotografiji i uopšteno filmu kao umjetnosti. Svoju ljubav
            aktivno njegujem i nadograđujem od 2012. godine, kada sa kamerom
            prvi put stupam u bliži kontakt. Ljubav prema ovom poslu tjera me da
            se aktiviram kada god ljudima zatreba neko ko će neumorno pretvarati
            trenutak emocije u vječnu uspomenu. Bavim se fotografisanjem ili
            snimanjem vjenčanja, rođendana, krštenja ili drugih svečanih
            prilika.
          </Typography>
          <Typography mt={3} fontSize={14} textAlign="justify">
            Istina je da izgubljeno vrijeme više nikada vratiti se ne može,
            jedan dan proživjećemo samo jednom, a onda će nestati kao jutarnja
            magla. Jedino što nam ostaje jesu uspomene, i to one uspomene koje
            čuvamo duboko u nama. Kada nas nestane, ostaje žal za svim onim što
            proživjesmo i ne pretvorismo u vječno materijalno svjedočanstvo,
            spremno za put s koljena na koljeno. Baš takve su fotografije i
            videi koje mi pravimo, trajne, vječne, žive. I ono najbitnije, preko
            objektiva Foto Miškić na papir prenosimo Vaš osmijeh, suzu
            radosnicu, zagrljaj, poljubac, i mnoštvo drugih, iskrenih, pravih
            emocija.
          </Typography>
          <Typography mt={3} fontSize={14} textAlign="justify">
            Vaš jedini zadatak jeste da nam vjerujete i da nas pustite da budemo
            sporedni likovi u Vašoj maloj, uzbudljivoj, predstavi, te da je tako
            kroz fotografije i videe zauvjek spasimo od zaborava.
          </Typography>
          <Typography mt={3} fontSize={14} textAlign="justify">
            U naš trud, rad i kvalitet uvjerite se i sami slikama koje možete
            naći ovdje, kao i na našem instagram profilu ili facebook stranici.
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} mt={{ xs: 3, md: 0 }} pl={{ xs: 0, md: 2 }}>
          <img
            src="/images/djedmraz.jpg"
            width="100%"
            style={{
              aspectRatio: 1 / 1.1,
              objectFit: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </Grid>
      </Grid>
      <Box
        mt={10}
        mb={5}
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography fontWeight="bold" fontSize={14} color="primary.main">
          STUDIO
        </Typography>
        <Typography
          fontWeight="bold"
          lineHeight={0.8}
          fontSize={40}
          color="primary.light"
        >
          FOTO I VIDEO OPREMA
        </Typography>
        <Typography
          mt={3}
          textAlign="center"
          fontSize={14}
          color="primary.main"
          maxWidth={600}
        >
          Foto Miškić trenutno raspolaže sa najsavremenijom opremom kako za
          snimanje tako i za fotografsanje dogadjaja. Naše kamere dostizu 4K
          rezoluciju.
        </Typography>
      </Box>
      <Grid container spacing={4} mb={15}>
        <Grid item xs={12} md={4} lg={3}>
          <Box overflow="hidden">
            <img src="/images/djedmraz.jpg" className="image-portfolio" />
          </Box>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Box overflow="hidden">
            <img src="/images/djedmraz.jpg" className="image-portfolio" />
          </Box>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Box overflow="hidden">
            <img src="/images/djedmraz.jpg" className="image-portfolio" />
          </Box>
        </Grid>
        <Grid item xs={12} md={4} lg={3}>
          <Box overflow="hidden">
            <img src="/images/djedmraz.jpg" className="image-portfolio" />
          </Box>
        </Grid>
      </Grid>
      <Box
        mb={5}
        width="100%"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography fontWeight="bold" fontSize={14} color="primary.main">
          MNOGO TRUDA ULAŽEMO U SVAKU FOTOGRAFIJU
        </Typography>
        <Typography
          fontWeight="bold"
          lineHeight={0.8}
          fontSize={40}
          color="primary.light"
        >
          UREĐIVANJE FOTOGRAFIJA
        </Typography>
        <Typography
          mt={3}
          textAlign="center"
          fontSize={14}
          color="primary.main"
          maxWidth={600}
        >
          Svaku fotografiju obradimo softverski da dobije najbolji sjaj.
        </Typography>
      </Box>
      <Box width="100%" overflow="hidden" mb={20}>
        <img
          src="/images/djedmraz.jpg"
          width="100%"
          style={{
            aspectRatio: 1 / 0.7,
            objectFit: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </Box>
    </Container>
  );
}
