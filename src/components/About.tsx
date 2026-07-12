import { Box, Card, CardContent, Chip, Typography } from '@mui/material';
import { BriefcaseBusiness, CalendarDays, GraduationCap, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import SectionHeader from './SectionHeader';

const About = () => {
  const { t } = useTranslation();

  const experienceMeta = [
    { icon: <CalendarDays size={17} />, label: t('about.time'), value: t('about.timeValue') },
    { icon: <MapPin size={17} />, label: t('about.unit'), value: t('about.unitValue') },
  ];

  const educationMeta = [
    [t('about.major'), t('about.majorValue')],
    [t('about.school'), t('about.schoolValue')],
    [t('about.track'), t('about.trackValue')],
  ];

  const stack = ['ASP .NET', 'MSSQL', 'Redis'];

  return (
    <Box id="about" component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <SectionHeader eyebrow={t('about.eyebrow')} title={t('about.title')} description={t('about.desc')} />

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', lg: '1fr 1fr' }, gap: 2.4 }}>
        <Card
          component={motion.article}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.42 }}
          sx={{ height: '100%' }}
        >
          <CardContent sx={{ p: { xs: 3, md: 3.4 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, mb: 2.2 }}>
              <Chip label={t('about.experience')} size="small" sx={{ bgcolor: 'rgba(52, 211, 153, 0.10)', color: 'primary.main' }} />
              <BriefcaseBusiness size={18} />
            </Box>

            <Typography variant="h5" component="h3" sx={{ mb: 1.2 }}>
              {t('about.jobTitle')}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2.6, lineHeight: 1.8, flexGrow: 1 }}>
              {t('about.jobDesc')}
            </Typography>

            <Box sx={{ display: 'grid', gap: 1.2, mb: 2.6 }}>
              {experienceMeta.map((item) => (
                <Box key={item.label} sx={{ display: 'grid', gridTemplateColumns: '24px 150px 1fr', gap: 1.2, alignItems: 'center', py: 1.2, borderTop: '1px solid', borderColor: 'divider' }}>
                  <Box sx={{ color: 'text.secondary', display: 'flex' }}>{item.icon}</Box>
                  <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {item.label}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 800 }}>
                    {item.value}
                  </Typography>
                </Box>
              ))}
            </Box>

            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
              {stack.map((item) => (
                <Chip key={item} label={item} variant="outlined" size="small" sx={{ borderColor: 'divider', color: 'text.secondary' }} />
              ))}
            </Box>
          </CardContent>
        </Card>

        <Card
          component={motion.article}
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.42, delay: 0.04 }}
          sx={{ height: '100%' }}
        >
          <CardContent sx={{ p: { xs: 3, md: 3.4 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, mb: 2.2 }}>
              <Chip label={t('about.education')} size="small" sx={{ bgcolor: 'rgba(52, 211, 153, 0.10)', color: 'primary.main' }} />
              <GraduationCap size={18} />
            </Box>

            <Typography variant="h5" component="h3" sx={{ mb: 1.2 }}>
              {t('about.student')}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 2.6, lineHeight: 1.8, flexGrow: 1 }}>
              {t('about.eduDesc')}
            </Typography>

            <Box sx={{ display: 'grid', gap: 1.2 }}>
              {educationMeta.map(([label, value]) => (
                <Box key={label} sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '120px 1fr' }, gap: 1.2, py: 1.2, borderTop: '1px solid', borderColor: 'divider' }}>
                  <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                    {label}
                  </Typography>
                  <Typography variant="body2" sx={{ fontWeight: 800 }}>
                    {value}
                  </Typography>
                </Box>
              ))}
            </Box>
          </CardContent>
        </Card>
      </Box>
    </Box>
  );
};

export default About;
