import { Box, Typography } from '@mui/material';
import { Braces } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <Box
      component="footer"
      sx={{
        py: 4,
        textAlign: 'center',
        borderTop: '1px solid',
        borderColor: 'divider',
        bgcolor: 'background.paper',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 1,
        position: 'relative',
        zIndex: 1,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, color: 'text.secondary' }}>
        <Braces size={14} />
        <Typography variant="caption" sx={{ fontWeight: 800 }}>
          {t('footer.sys')}
        </Typography>
      </Box>
      <Typography variant="caption" color="text.secondary">
        {t('footer.desc', { year: new Date().getFullYear() })}
      </Typography>
    </Box>
  );
};

export default Footer;
