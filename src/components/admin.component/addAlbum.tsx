import { Box, Grid, Typography } from '@mui/material';
import { CustomButton } from '../shared/customButton';
import { useState } from 'react';
import { CustomModal } from './customModal';
import { Input } from '../shared/input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { ReactImageDropzone } from './reactImageDropzone';
import { postAlbum } from '@/utils/album.api';
import { toast } from 'react-toastify';

interface AddAlbumProps {
  onPostSuccess: (bool: boolean) => void;
}

export const AddAlbum: React.FC<AddAlbumProps> = ({ onPostSuccess }) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset,
  } = useForm();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [imageFiles, setImageFiles] = useState<any[]>([]);

  const updateImageFiles = (newFiles: any[]) => {
    setImageFiles(newFiles);
  };

  const postImageAlbumHandler: SubmitHandler<FieldValues> = async (data) => {
    if (data.albumName === '') {
      toast.warning('Nazim albuma ne smije biti kraci od 3 karaktera!');
      return;
    } else if (data.participants === '') {
      toast.warning('Ime vlasnika albuma ne smije biti krace od 3 karaktera!');
      return;
    } else if (data.albumPassword <= 7) {
      toast.warning('Lozinka ne smije biti kraca od 8 karaktera!');
      return;
    } else if (imageFiles.length <= 0) {
      toast.warning('Morate postaviti bar jednu fotografiju');
      return;
    } else if (imageFiles.length >= 200) {
      toast.warning('Vaš paket podrzava maksimalno 200 fotografija po albumu');
      return;
    }

    const formData = new FormData();

    formData.append('albumName', data.albumName);
    formData.append('participants', data.participants);
    formData.append('albumPassword', data.albumPassword);

    imageFiles.forEach((image) => {
      formData.append('image', image);
    });
    const response: any = await postAlbum(formData);
    if (response?.statusCode === 201) {
      handleClearInputData();
      onPostSuccess(response);
      toast.success('Album Postavljen Uspješno');
    } else {
      toast.error(response?.error);
    }
  };

  const handleClearInputData = () => {
    setOpenModal(false);
    setImageFiles([]);
    reset();
  };

  return (
    <Box>
      <CustomButton
        text="Dodajte Album"
        variant="outlined"
        onClick={() => setOpenModal(true)}
      />
      <CustomModal
        label="Dodajte Album"
        open={openModal}
        onClose={handleClearInputData}
        maxWidth={900}
      >
        <Grid
          container
          spacing={3}
          sx={{ overflow: 'auto', maxHeight: '90vh' }}
          className="container"
        >
          <Grid item xs={12}>
            <Typography textAlign="start" color="primary.main">
              Informacije o Albumu:
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              label="Naziv Albuma"
              name="albumName"
              register={register}
              errors={errors}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              label="Ime Vlasnika Albuma (Korisnika)"
              name="participants"
              register={register}
              errors={errors}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography
              color="secondary.main"
              fontWeight="bold"
              fontSize={14}
              textAlign="start"
            >
              Napomena:
            </Typography>
            <Typography
              color="primary.light"
              fontWeight="bold"
              fontSize={12}
              textAlign="justify"
            >
              Postavite maksimalno sigurnu lozinku, taku djelite samo sa
              Vlasnikom albuma. Vaša odgovornost je ključna za očuvanje
              sigurnosti albuma.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Input
              label="Lozinka Albuma"
              name="albumPassword"
              register={register}
              errors={errors}
            />
          </Grid>

          <Grid item xs={12}>
            <Typography textAlign="start" color="primary.main">
              Dodajte Fotografije:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <ReactImageDropzone updateFiles={updateImageFiles} />
          </Grid>
          <Grid item xs={12} display="flex">
            <CustomButton
              text="Otkaži"
              variant="outlined"
              fullWidth
              onClick={handleClearInputData}
            />
            <Box ml={1.5} mr={1.5} />
            <CustomButton
              onClick={handleSubmit(postImageAlbumHandler)}
              text="Sačuvaj Promjene"
              fullWidth
              variant="outlined"
            />
          </Grid>
        </Grid>
      </CustomModal>
    </Box>
  );
};
