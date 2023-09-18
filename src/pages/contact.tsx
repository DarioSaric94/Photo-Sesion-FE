import { ContactInfo } from '@/components/contact/contactInfo';
import { Container } from '@/components/layout/container';
import { CustomButton } from '@/components/shared/customButton';
import { Input } from '@/components/shared/input';
import { Box, Grid } from '@mui/material';
import { useForm } from 'react-hook-form';

export default function Contact() {
  const { handleSubmit, register } = useForm();

  return (
    <Container>
      <Grid item xs={12} lg={4}>
        <ContactInfo />
      </Grid>
      <Grid item xs={12} lg={8} mb={20} sx={{ mt: { xs: 5, lg: 0 } }}>
        <Box
          display="flex"
          sx={{ flexDirection: { xs: 'column', lg: 'row' } }}
          mb={2}
        >
          <Input label="Vaše Ime!" register={register} name="customerName" />
          <Box m={1} />
          <Input label="Vaše Email!" register={register} name="customerEmail" />
          <Box m={1} />
          <Input
            label="Vaše Telefon!"
            register={register}
            name="customerPhone"
          />
        </Box>
        <Input
          label="Vaša Poruka!"
          multiline
          rows={7}
          register={register}
          name="customerMessage"
        />
        <Box
          display="flex"
          sx={{ justifyContent: { xs: 'center', lg: 'end' } }}
          mt={2}
        >
          <CustomButton text="POŠALJI" variant="outlined" onClick={() => {}} />
        </Box>
      </Grid>
    </Container>
  );
}
