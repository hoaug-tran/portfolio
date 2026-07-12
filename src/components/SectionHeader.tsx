import React from 'react';
import { Box, Typography } from '@mui/material';
import { motion } from 'framer-motion';

interface SectionHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

const SectionHeader: React.FC<SectionHeaderProps> = ({ eyebrow, title, description }) => {
  return (
    <Box
      component={motion.div}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.45 }}
      transition={{ duration: 0.45, ease: 'easeOut' }}
      sx={{ mb: 5, maxWidth: 760 }}
    >
      <Typography
        variant="overline"
        sx={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: 1,
          mb: 1.25,
          color: 'primary.main',
          fontWeight: 800,
          letterSpacing: '0.14em',
        }}
      >
        <Box sx={{ width: 28, height: 1, bgcolor: 'primary.main' }} />
        {eyebrow}
      </Typography>
      <Typography variant="h3" component="h2" sx={{ mb: description ? 1.5 : 0 }}>
        {title}
      </Typography>
      {description && (
        <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 680 }}>
          {description}
        </Typography>
      )}
    </Box>
  );
};

export default SectionHeader;
