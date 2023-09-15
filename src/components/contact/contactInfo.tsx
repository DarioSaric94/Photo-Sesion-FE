import { Box, Typography } from '@mui/material';
import { InfoIcon } from './infoIcon';
import { ContactApps } from './contactApps';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LanOutlinedIcon from '@mui/icons-material/LanOutlined';

export const ContactInfo = () => {
  const data = {
    id: 2,
    createdAt: 'date',
    token: 'asdasd',
    role: 1,
    city: 'Brčko',
    country: 'BiH',
    domesticNumber: '065/264-898',
    iternationalCountry: 'EU',
    iternationalNumber: '099/5961-079',
    email: 'info@fotomiskic.com',
    socialNetworks: {
      facebookLink: 'Face',
      instagramLink: 'asdasd',
      viberLink: '',
    },
  };
  return (
    <Box>
      <Typography fontWeight="bold" fontSize={12}>
        KONTAKT I DRUŠTVENE MREŽE
      </Typography>
      <Typography fontWeight="bold" fontSize={22} color="primary.light">
        PRONAĐITE NAS
      </Typography>
      <InfoIcon
        text={`${data?.city}, ${data?.country}`}
        icon={<FmdGoodOutlinedIcon />}
      />
      {data?.domesticNumber && (
        <InfoIcon
          text={`${data?.country}, ${data?.domesticNumber}`}
          icon={<LocalPhoneOutlinedIcon />}
        />
      )}
      {data?.iternationalNumber && (
        <InfoIcon
          text={`${data?.iternationalCountry}, ${data?.iternationalNumber}`}
          icon={<LocalPhoneOutlinedIcon />}
        />
      )}
      <InfoIcon text={data?.email} icon={<EmailOutlinedIcon />} />
      <ContactApps data={data} icon={<LanOutlinedIcon />} />
    </Box>
  );
};
