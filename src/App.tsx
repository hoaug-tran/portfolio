import { Box, Container } from '@mui/material';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <Box
      sx={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        overflow: 'hidden',
        bgcolor: 'background.default',
        '&::before': {
          content: '"[SECURITY MONITOR]\\A IDS     suspicious payload blocked\\A WAF     rule: SQLi attempt denied\\A TLS     certificate chain verified\\A AUTH    MFA challenge passed\\A HASH    sha256: 9f2c7a...e41d\\A PORT    22/tcp filtered"',
          whiteSpace: 'pre',
          position: 'fixed',
          right: { xs: -120, md: 56 },
          top: { xs: 96, md: 132 },
          pointerEvents: 'none',
          zIndex: 0,
          maxWidth: 520,
          fontFamily: '"JetBrains Mono", "Cascadia Code", Consolas, monospace',
          fontSize: { xs: 10, md: 12 },
          lineHeight: 2,
          letterSpacing: '0.03em',
          color: 'text.secondary',
          opacity: (theme) => (theme.palette.mode === 'dark' ? 0.13 : 0.12),
          transform: 'rotate(-2deg)',
        },
        '&::after': {
          content: '""',
          position: 'fixed',
          inset: 0,
          pointerEvents: 'none',
          zIndex: 0,
          opacity: (theme) => (theme.palette.mode === 'dark' ? 0.22 : 0.16),
          backgroundImage: (theme) =>
            `linear-gradient(120deg, transparent 0 58%, ${theme.palette.mode === 'dark' ? 'rgba(52, 211, 153, 0.045)' : 'rgba(4, 120, 87, 0.04)'} 59% 59.5%, transparent 60%), linear-gradient(to bottom, transparent 0 7px, ${theme.palette.mode === 'dark' ? 'rgba(52, 211, 153, 0.018)' : 'rgba(4, 120, 87, 0.012)'} 8px, transparent 9px)`,
          backgroundSize: '360px 360px, 100% 9px',
          maskImage: 'linear-gradient(115deg, black, transparent 72%)',
        },
      }}
    >
      <Header />
      <Box component="main" sx={{ flexGrow: 1, position: 'relative', zIndex: 1 }}>
        <Container maxWidth="lg" sx={{ px: { xs: 2.5, sm: 3, md: 4 } }}>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}

export default App;
