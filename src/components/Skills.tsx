import { Box, Card, CardContent, Chip, Typography } from '@mui/material';
import { Code2, Database, GitBranch, ShieldCheck } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const Skills = () => {
  const { t } = useTranslation();

  const groups = [
    {
      icon: <Code2 size={20} />,
      step: '01',
      title: t('skills.backend'),
      role: t('skills.backendRole'),
      stack: ['Java', 'Spring Boot', 'C#', '.NET', 'Node.js', 'Python', 'REST API'],
    },
    {
      icon: <Database size={20} />,
      step: '02',
      title: t('skills.data'),
      role: t('skills.dataRole'),
      stack: ['MySQL', 'Redis', 'Docker', 'Git', 'Linux'],
    },
    {
      icon: <ShieldCheck size={20} />,
      step: '03',
      title: t('skills.security'),
      role: t('skills.securityRole'),
      stack: ['Network', 'Cryptography', 'Authentication', 'Secure API', 'Linux Hardening'],
    },
    {
      icon: <GitBranch size={20} />,
      step: '04',
      title: t('skills.frontend'),
      role: t('skills.frontendRole'),
      stack: ['TypeScript', 'React', 'Next.js', 'MUI'],
    },
  ];

  return (
    <Box id="skills" component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <SectionHeader eyebrow="02 / Capability flow" title={t('skills.title')} description={t('skills.desc')} />

      <Box sx={{ position: 'relative', display: 'grid', gap: 2.2 }}>
        <Box
          sx={{
            position: 'absolute',
            left: { xs: 25, md: 31 },
            top: 30,
            bottom: 30,
            width: 1,
            bgcolor: 'divider',
            display: { xs: 'block', md: 'none' },
          }}
        />
        {groups.map((group, index) => (
          <Card
            key={group.title}
            component={motion.div}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.42, delay: index * 0.05 }}
            sx={{ overflow: 'visible' }}
          >
            <CardContent sx={{ p: { xs: 2.5, md: 3 }, display: 'grid', gridTemplateColumns: { xs: '54px 1fr', md: '76px 1fr 1.1fr' }, gap: { xs: 2, md: 3 }, alignItems: 'center' }}>
              <Box sx={{ position: 'relative' }}>
                <Box sx={{ width: { xs: 52, md: 62 }, height: { xs: 52, md: 62 }, borderRadius: '50%', border: '1px solid', borderColor: 'divider', display: 'grid', placeItems: 'center', color: 'primary.main', bgcolor: 'background.paper' }}>
                  {group.icon}
                </Box>
                <Typography variant="caption" sx={{ position: 'absolute', right: -4, bottom: -4, px: 0.8, py: 0.2, borderRadius: 999, bgcolor: 'primary.main', color: 'background.default', fontWeight: 900 }}>
                  {group.step}
                </Typography>
              </Box>

              <Box>
                <Typography variant="h5" sx={{ mb: 0.7 }}>{group.title}</Typography>
                <Typography variant="body2" color="text.secondary">{group.role}</Typography>
              </Box>

              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, gridColumn: { xs: '2 / -1', md: 'auto' } }}>
                {group.stack.map((skill) => (
                  <Chip key={skill} label={skill} variant="outlined" size="small" sx={{ borderColor: 'divider', color: 'text.secondary' }} />
                ))}
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Skills;
