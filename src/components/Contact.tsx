import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import { Mail, Send } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';

const Contact = () => {
  const { t } = useTranslation();

  return (
    <Box id="contact" component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <SectionHeader eyebrow="04 / Contact" title={t('contact.title')} description={t('contact.desc')} />

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '0.8fr 1.2fr' }, gap: 3, alignItems: 'stretch' }}>
        <Card>
          <CardContent sx={{ p: { xs: 3, md: 4 }, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant="h5" sx={{ mb: 1.5 }}>{t('contact.cardTitle')}</Typography>
              <Typography variant="body2" color="text.secondary">{t('contact.cardText')}</Typography>
            </Box>
            <Box sx={{ display: 'grid', gap: 1.4, mt: 4 }}>
              <Button id="contact-email" href="mailto:hi@trkhoang.com" variant="outlined" startIcon={<Mail size={18} />} sx={{ justifyContent: 'flex-start' }}>
                hi@trkhoang.com
              </Button>
              <Button id="contact-github" href="https://github.com/hoaug-tran" target="_blank" rel="noreferrer" variant="outlined" startIcon={<GitHubIcon fontSize="small" />} sx={{ justifyContent: 'flex-start' }}>
                github.com/hoaug-tran
              </Button>
              <Button id="contact-facebook" href="https://www.facebook.com/hoaugtr/" target="_blank" rel="noreferrer" variant="outlined" startIcon={<FacebookIcon fontSize="small" />} sx={{ justifyContent: 'flex-start' }}>
                facebook.com/hoaugtr
              </Button>
              <Button id="contact-x" href="https://x.com/hoaugtran" target="_blank" rel="noreferrer" variant="outlined" startIcon={<XIcon fontSize="small" />} sx={{ justifyContent: 'flex-start' }}>
                x.com/hoaugtran
              </Button>
            </Box>
          </CardContent>
        </Card>

        <Card>
          <CardContent sx={{ p: { xs: 3, md: 4 } }}>
            <Box component="form" action="https://formspree.io/f/mdklqojz" method="POST" sx={{ display: 'grid', gap: 2.2 }}>
              <TextField id="contact-name" fullWidth label={t('contact.name')} name="name" variant="outlined" required />
              <TextField id="contact-email-field" fullWidth label={t('contact.email')} name="email" type="email" variant="outlined" required />
              <TextField id="contact-message" fullWidth label={t('contact.message')} name="message" multiline rows={5} variant="outlined" required />
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 1 }}>
                <Button id="contact-submit" type="submit" variant="contained" endIcon={<Send size={16} />}>
                  {t('contact.send')}
                </Button>
              </Box>
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default Contact;
