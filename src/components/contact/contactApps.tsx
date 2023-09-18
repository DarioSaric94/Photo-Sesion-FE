import { UserInfo } from '@/utils/types';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

interface ContactAppsProps {
  data: UserInfo;
  icon: React.ReactElement;
}

export const ContactApps: React.FC<ContactAppsProps> = ({ data, icon }) => {
  const router = useRouter();
  return (
    <Box display="flex" alignItems="center" mt={1.5}>
      <Box>
        {React.cloneElement(icon, {
          sx: {
            borderRadius: '50%',
            border: 2,
            p: 0.6,
            fontSize: 20,
          },
        })}
      </Box>
      {data?.facebookLink && (
        <Typography
          ml={1.5}
          mb={0.4}
          fontSize={14}
          sx={{
            '&:hover': {
              color: 'primary.light',
            },
            cursor: 'pointer',
            transition: 'ease-in-out 200ms',
          }}
          onClick={() => router.push(`${data?.facebookLink}`)}
        >
          Facebook
        </Typography>
      )}
      {data?.instagramLink && (
        <Typography
          ml={1.5}
          mb={0.4}
          fontSize={14}
          sx={{
            '&:hover': {
              color: 'primary.light',
            },
            cursor: 'pointer',
            transition: 'ease-in-out 200ms',
          }}
          onClick={() => router.push(`${data?.instagramLink}`)}
        >
          Instagram
        </Typography>
      )}
    </Box>
  );
};
