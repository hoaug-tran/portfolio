import { Box, Button, Card, CardContent, Chip, Typography } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';

const Projects = () => {
  const { t } = useTranslation();

  const projectList = [
    {
      title: 'School Library Backend',
      type: 'Backend',
      description: t('projects.p2_desc'),
      repo: 'https://github.com/library-fullstack/library-backend',
      stack: ['ExpressJS', 'REST API', 'MySQL', 'Auth'],
    },
    {
      title: 'Movie Streaming Backend',
      type: 'Backend API',
      description: t('projects.p3_desc'),
      repo: 'https://github.com/hoaug-tran/movie-streaming-api',
      stack: ['Spring Boot', 'REST API', 'Database', 'JWT'],
    },
    {
      title: 'School Library Frontend',
      type: 'Frontend',
      description: t('projects.p1_desc'),
      repo: 'https://github.com/library-fullstack/library-frontend',
      stack: ['React', 'TypeScript', 'Material UI'],
    },
    {
      title: 'Movie Streaming Frontend',
      type: 'Frontend',
      description: t('projects.p4_desc'),
      repo: 'https://github.com/hoaug-tran/movie-streaming-web',
      stack: ['NextJS', 'SSR', 'PWA', 'MUI', 'Modern Web'],
    },
    {
      title: 'UNETI Schedule App',
      type: 'Desktop / Utility',
      description: t('projects.p5_desc'),
      repo: 'https://github.com/hoaug-tran/uneti-schedule-app',
      stack: ['Electron JS', 'Schedule', 'Student Tool'],
    },
    {
      title: 'Discord Learning Bot',
      type: 'Automation',
      description: t('projects.p6_desc'),
      repo: 'https://github.com/hoaug-tran/homework-discord-bot',
      stack: ['Node.js', 'discord.js', 'Automation'],
    },
  ];

  return (
    <Box id="projects" component="section" sx={{ py: { xs: 8, md: 12 } }}>
      <SectionHeader eyebrow="03 / Proof of work" title={t('projects.title')} description={t('projects.desc')} />

      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, gap: 2.4 }}>
        {projectList.map((project, index) => (
          <Card
            key={project.title}
            component={motion.article}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.42, delay: index * 0.04 }}
            sx={{ height: '100%' }}
          >
            <CardContent sx={{ p: { xs: 3, md: 3.4 }, height: '100%', display: 'flex', flexDirection: 'column' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 2, mb: 2 }}>
                <Chip label={project.type} size="small" sx={{ bgcolor: 'rgba(52, 211, 153, 0.10)', color: 'primary.main' }} />
                <ArrowUpRight size={18} />
              </Box>
              <Typography variant="h5" sx={{ mb: 1.2 }}>{project.title}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2.6, flexGrow: 1 }}>
                {project.description}
              </Typography>
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1, mb: 3 }}>
                {project.stack.map((item) => (
                  <Chip key={item} label={item} variant="outlined" size="small" sx={{ borderColor: 'divider', color: 'text.secondary' }} />
                ))}
              </Box>
              <Box>
                <Button id={`project-${index}-source`} variant="outlined" size="small" startIcon={<GitHubIcon fontSize="small" />} href={project.repo} target="_blank" rel="noreferrer">
                  {t('projects.btn_repo')}
                </Button>
              </Box>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Projects;
