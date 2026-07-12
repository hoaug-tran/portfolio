import { AppBar, Toolbar, IconButton, Box, Button, Typography } from '@mui/material';
import { Moon, Sun, Braces } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useThemeContext } from '../theme/ThemeContextProvider';

const Header = () => {
  const { mode, toggleTheme } = useThemeContext();
  const { t, i18n } = useTranslation();

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'vi' : 'en');
  };

  const navItems = [
    { label: t('nav.about'), id: 'about' },
    { label: t('nav.skills'), id: 'skills' },
    { label: t('nav.projects'), id: 'projects' },
    { label: t('nav.contact'), id: 'contact' },
  ];

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        borderBottom: '1px solid',
        borderColor: 'divider',
        bgcolor: mode === 'dark' ? 'rgba(9, 9, 11, 0.78)' : 'rgba(248, 250, 252, 0.82)',
        backdropFilter: 'blur(14px)',
        color: 'text.primary',
        backgroundImage: 'none',
        zIndex: 10,
      }}
    >
      <Toolbar sx={{ justifyContent: 'space-between', maxWidth: 1240, width: '100%', mx: 'auto', minHeight: '68px !important', px: { xs: 2.5, md: 4 } }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.4 }}>
          <Box
            sx={{
              width: 34,
              height: 34,
              borderRadius: '50%',
              border: '1px solid',
              borderColor: 'divider',
              display: 'grid',
              placeItems: 'center',
              color: 'primary.main',
              bgcolor: mode === 'dark' ? 'rgba(52, 211, 153, 0.08)' : 'rgba(4, 120, 87, 0.06)',
            }}
          >
            <Braces size={17} />
          </Box>
          <Box>
            <Typography variant="body2" sx={{ fontWeight: 800, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              Trần Kính Hoàng
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ display: { xs: 'none', sm: 'block' }, lineHeight: 1.1 }}>
              Backend & Security
            </Typography>
          </Box>
        </Box>

        <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 0.5, p: 0.5, border: '1px solid', borderColor: 'divider', borderRadius: 999 }}>
          {navItems.map((item) => (
            <Button
              key={item.id}
              id={`nav-${item.id}`}
              onClick={() => handleScroll(item.id)}
              sx={{
                color: 'text.secondary',
                px: 1.8,
                py: 0.7,
                minWidth: 0,
                '&:hover': {
                  color: 'text.primary',
                  bgcolor: mode === 'dark' ? 'rgba(255,255,255,0.06)' : 'rgba(15,23,42,0.05)',
                },
              }}
            >
              {item.label}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Button id="toggle-language" onClick={toggleLanguage} variant="text" sx={{ minWidth: 54, px: 1.2, color: 'text.secondary' }}>
            {i18n.language === 'en' ? 'EN' : 'VI'}
          </Button>
          <IconButton id="toggle-theme" onClick={toggleTheme} size="small" sx={{ color: 'text.secondary' }}>
            {mode === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
