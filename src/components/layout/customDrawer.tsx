import { Avatar, Box, Drawer, Typography } from '@mui/material';
import { HoverAnimatedText } from '../shared/hoverAnimatedText';
import { useRouter } from 'next/router';
import { ContactInfo } from '../contact/contactInfo';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

interface CustomDrawerProps {
  openDrawer: boolean;
  onClose: (bool: boolean) => void;
}

export const CustomDrawer: React.FC<CustomDrawerProps> = ({
  openDrawer,
  onClose,
}) => {
  const data = useSelector((state: RootState) => state?.userData?.userData);

  const router = useRouter();
  return (
    <Drawer
      anchor="right"
      open={openDrawer}
      onClose={() => onClose(false)}
      PaperProps={{
        sx: {
          width: '100%',
          maxWidth: 430,
          background: 'transparent',
          boxShadow: 0,
        },
      }}
    >
      <Box width="100%" borderColor="white" height="100%" display="flex">
        <Box width={45} height="100%" onClick={() => onClose(false)}>
          <Typography
            mt={11}
            fontWeight="bold"
            whiteSpace="nowrap"
            color="primary.main"
            sx={{
              cursor: 'pointer',
              transition: 'color 0.3s ease-in-out',
              '&:hover': {
                color: 'primary.light',
              },
              transform: 'rotate(-90deg)',
            }}
          >
            <Typography component="span" mr={3}>
              X
            </Typography>
            ZATVORI
          </Typography>
        </Box>
        <Box
          width="100%"
          height={{ xs: '120%', md: '100%' }}
          bgcolor="primary.contrastText"
          color="primary.main"
          p={5}
        >
          <Box display="flex" alignItems="center" mb={4}>
            <Avatar
              sx={{ width: 150, height: 150, fontSize: 60 }}
              src={data?.image}
              alt={data?.email}
            />
            <Typography
              ml={2}
              textTransform="uppercase"
              fontWeight="bold"
              textAlign="center"
              variant="h5"
              color="primary.light"
            >
              {data?.name || data?.lastName
                ? `${data?.name} ${data?.lastName}`
                : 'Korisnik'}
            </Typography>
          </Box>
          <Box mb={10}>
            <Typography lineHeight={1.8} fontSize={15} mb={5}>
              Foto Miškić je studio za foto i video produkciju, specijalizovan
              za vjenčanja i druge svečane prilike!
            </Typography>
            <HoverAnimatedText
              text="POGLEDAJ VIŠE"
              onClick={() => {
                router.push('/about-me');
                onClose(false);
              }}
            />
          </Box>
          <ContactInfo />
          <Box mt={5} mb={5}>
            <HoverAnimatedText
              text="KONTAKT"
              onClick={() => {
                router.push('/contact');
                onClose(false);
              }}
            />
          </Box>
        </Box>
      </Box>
    </Drawer>
  );
};
