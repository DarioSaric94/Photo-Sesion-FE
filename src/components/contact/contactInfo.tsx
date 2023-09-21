import { Box, Typography } from '@mui/material';
import { InfoIcon } from './infoIcon';
import { ContactApps } from './contactApps';
import FmdGoodOutlinedIcon from '@mui/icons-material/FmdGoodOutlined';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LanOutlinedIcon from '@mui/icons-material/LanOutlined';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export const ContactInfo = () => {
  const data = useSelector((state: RootState) => state?.userData?.userData);
  return (
    <Box color="primary.main">
      <Typography fontWeight="bold" fontSize={12}>
        KONTAKT I DRUŠTVENE MREŽE
      </Typography>
      <Typography fontWeight="bold" fontSize={22} color="primary.light">
        PRONAĐITE NAS
      </Typography>
      {data?.country && (
        <InfoIcon
          text={`${data?.city}, ${data?.country}`}
          icon={<FmdGoodOutlinedIcon />}
        />
      )}
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
      {data?.email && (
        <InfoIcon text={data?.email} icon={<EmailOutlinedIcon />} />
      )}
      {data?.facebookLink || data?.instagramLink ? (
        <ContactApps data={data} icon={<LanOutlinedIcon />} />
      ) : null}
    </Box>
  );
};
