import { AddImage } from '@/components/admin.component/addImage';
import { CustomButton } from '@/components/shared/customButton';
import { Input } from '@/components/shared/input';
import { Box, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import { postUserData } from '@/utils/userData.api';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';

export default function Profile() {
  const { handleSubmit, register } = useForm();
  const data = useSelector((state: RootState) => state?.userData?.userData);
  const [selectedImageFile, setSelectedImageFile] = useState<null | File>(null);
  const router = useRouter();
  const handleImageChange = (file: File | null) => {
    setSelectedImageFile(file);
  };

  const postUserDataHandler: SubmitHandler<FieldValues> = async ({
    name,
    lastName,
    country,
    city,
    domesticNumber,
    iternationalCountry,
    iternationalNumber,
    facebookLink,
    instagramLink,
  }) => {
    const formData = new FormData();

    formData.append('name', name);
    formData.append('lastName', lastName);
    formData.append('country', country);
    formData.append('city', city);
    formData.append('domesticNumber', domesticNumber);
    formData.append('iternationalCountry', iternationalCountry);
    formData.append('iternationalNumber', iternationalNumber);
    formData.append('facebookLink', facebookLink);
    formData.append('instagramLink', instagramLink);
    if (selectedImageFile) {
      formData.append('image', selectedImageFile);
    }

    try {
      const response: any = await postUserData(formData);
      if (response?.status === 201) {
        toast.success(response?.message);
        router.push('/');
      } else {
        toast.warning(response?.message);
      }
    } catch (error) {
      throw error;
    }
  };
  return (
    <Box
      height="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Grid container maxWidth={1280} margin="auto" pb={5}>
        <Grid
          item
          xs={12}
          md={4}
          display="flex"
          flexDirection="column"
          alignItems="center"
          p={3}
        >
          <Typography
            mb={5}
            fontWeight="bold"
            fontSize={36}
            color="primary.light"
          >
            Uredite Profil
          </Typography>
          <AddImage
            htmlFor="image-picker"
            onImageChange={handleImageChange}
            image={data?.image}
          />
          <Box mt={1}>
            <Typography fontSize={20} fontWeight="bold" color="primary.main">
              Dodajte Profilnu Sliku
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} md={8} p={3}>
          <Grid container spacing={3} mt={8}>
            <Grid item xs={12}>
              <Typography fontWeight="bold" fontSize={20} color="primary.main">
                Informacije o vama:
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                label="Ime"
                name="name"
                register={register}
                defaultValue={data?.name}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                label="Prezime"
                name="lastName"
                register={register}
                defaultValue={data?.lastName}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Input
                label="Država (Inicijali)"
                name="country"
                register={register}
                defaultValue={data?.country}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Input
                label="Grad"
                name="city"
                register={register}
                defaultValue={data?.city}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Input
                label="Broj Telefona"
                name="domesticNumber"
                register={register}
                defaultValue={data?.domesticNumber}
              />
            </Grid>
            <Grid item xs={12} mt={3}>
              <Typography fontWeight="bold" fontSize={20} color="primary.main">
                Strani Kontakt:
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                label="Internacjonalna Država (Inicijali)"
                name="iternationalCountry"
                register={register}
                defaultValue={data?.iternationalCountry}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                label="Internacjonalni Broj Telefona"
                name="iternationalNumber"
                register={register}
                defaultValue={data?.iternationalNumber}
              />
            </Grid>
            <Grid item xs={12} mt={3}>
              <Typography fontWeight="bold" fontSize={20} color="primary.main">
                Društvene Mreže:
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                label="Facebook (link)"
                name="facebookLink"
                register={register}
                defaultValue={data?.facebookLink}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Input
                label="Instagram (link)"
                name="instagramLink"
                register={register}
                defaultValue={data?.instagramLink}
              />
            </Grid>
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          mt={2}
          display="flex"
          justifyContent={{ xs: 'center', md: 'end' }}
          p={3}
        >
          <CustomButton
            text="Saćuvaj Podatke"
            variant="outlined"
            onClick={handleSubmit(postUserDataHandler)}
          />
        </Grid>
      </Grid>
    </Box>
  );
}
