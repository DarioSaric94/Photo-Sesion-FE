import { UserData } from '@/utils/types';
import { Box, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import React from 'react';

interface ContactAppsProps {
  data: UserData;
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
      {data?.socialNetworks?.facebookLink && (
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
          onClick={() => router.push(`${data?.socialNetworks?.facebookLink}`)}
        >
          Facebook
        </Typography>
      )}
      {data?.socialNetworks?.instagramLink && (
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
          onClick={() => router.push(`${data?.socialNetworks?.instagramLink}`)}
        >
          Instagram
        </Typography>
      )}
      {data?.socialNetworks?.viberLink && (
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
          onClick={() => router.push(`${data?.socialNetworks?.viberLink}`)}
        >
          Viber
        </Typography>
      )}
    </Box>
  );
};
