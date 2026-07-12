import { Box, Typography, Button, Chip } from '@mui/material';
import { ArrowDownRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const Hero = () => {
  const { t } = useTranslation();

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Box
      id="home"
      component="section"
      sx={{
        minHeight: { xs: 'auto', md: '100vh' },
        pt: { xs: 14, md: 18 },
        pb: { xs: 8, md: 12 },
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '1fr 0.72fr' },
        gap: { xs: 5, md: 8 },
        alignItems: 'center',
      }}
    >
      <Box component={motion.div} initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45 }}>
        <Typography variant="overline" color="primary.main" sx={{ fontWeight: 900, letterSpacing: '0.12em' }}>
          {t('hero.badge')}
        </Typography>
        <Typography variant="h1" component="h1" sx={{ mt: 1.6, fontSize: { xs: '3.2rem', sm: '4.6rem', md: '6rem' }, maxWidth: 760 }}>
          {t('hero.title')}
        </Typography>
        <Typography variant="h6" color="text.secondary" sx={{ mt: 3, maxWidth: 560, fontWeight: 450, lineHeight: 1.55 }}>
          {t('hero.subtitle')}
        </Typography>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mt: 3.4 }}>
          {[
            t('hero.stack.java'),
            t('hero.stack.spring'),
            t('hero.stack.express'),
            t('hero.stack.dotnet'),
            t('hero.stack.mysql'),
            t('hero.stack.linux'),
          ].map((item) => (
            <Chip key={item} label={item} variant="outlined" sx={{ borderColor: 'divider', color: 'text.secondary' }} />
          ))}
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 4.5 }}>
          <Button id="hero-view-projects" variant="contained" endIcon={<ArrowDownRight size={18} />} onClick={() => scrollTo('projects')}>
            {t('hero.ctaProjects')}
          </Button>
          <Button id="hero-contact" variant="outlined" onClick={() => scrollTo('contact')}>
            {t('hero.ctaContact')}
          </Button>
        </Box>
      </Box>

      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.08 }}
        sx={{
          border: '1px solid',
          borderColor: 'divider',
          borderRadius: 2,
          p: { xs: 2, sm: 2.5 },
          bgcolor: 'background.paper',
        }}
      >
        <Box
          component="img"
          src="/avatar-n.webp"
          alt="Custom avatar of Hoang Tran"
          sx={{
            width: '100%',
            aspectRatio: '1 / 1',
            maxHeight: 360,
            borderRadius: 1.5,
            objectFit: 'cover',
            border: '1px solid',
            borderColor: 'divider',
          }}
        />
        <Box sx={{ pt: 2.2 }}>
          <Typography variant="h5" sx={{ mb: 0.5 }}>
            Trần Kính Hoàng
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {t('hero.avatarCaption')}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Hero;
