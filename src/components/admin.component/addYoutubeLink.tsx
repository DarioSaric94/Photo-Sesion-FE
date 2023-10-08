import { Box, Grid, Typography } from '@mui/material';
import { CustomButton } from '../shared/customButton';
import { useState } from 'react';
import { CustomModal } from './customModal';
import { Input } from '../shared/input';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { AlbumSelect } from './albumSelect';
import { postYoutubeLinks } from '@/utils/youtubeLinks.api';
import { toast } from 'react-toastify';
import { AlbumData, YoutubeLinks } from '@/utils/types';

interface AddYoutubeLinkProps {
  onPostSuccessChange: (bool: boolean) => void;
  data: YoutubeLinks | null;
  albumData?: AlbumData[];
}

export const AddYoutubeLink: React.FC<AddYoutubeLinkProps> = ({
  onPostSuccessChange,
  data,
  albumData,
}) => {
  const { handleSubmit, register } = useForm();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [album, setAlbum] = useState<string | number>(data?.id || '');

  const saveChangesHandler: SubmitHandler<FieldValues> = async (data) => {
    const response: any = await postYoutubeLinks({
      ...data,
      albumId: Number(album),
    });
    if (response?.status === 201) {
      toast.success('Podatci Uspješno Promjenjeni');
      onPostSuccessChange(response?.data);
      setOpenModal(false);
    } else {
      toast.error(response?.error);
    }
  };

  return (
    <Box data-testid="youtube-link-test">
      <CustomButton
        text="Add Youtube Links"
        variant="outlined"
        onClick={() => setOpenModal(true)}
      />
      <CustomModal
        label="Edit Links and Album"
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography textAlign="start" color="primary.main">
              Dodaj/Promjeni Youtube Linkove:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Youtube link 1"
              name="youtubeLink1"
              defaultValue={data?.youtubeLink1}
              register={register}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Youtube link 2"
              name="youtubeLink2"
              register={register}
              defaultValue={data?.youtubeLink2}
            />
          </Grid>
          <Grid item xs={12}>
            <Input
              label="Youtube link 3"
              name="youtubeLink3"
              register={register}
              defaultValue={data?.youtubeLink3}
            />
          </Grid>
          <Grid item xs={12}>
            <Typography textAlign="start" color="primary.main">
              Izaberi Album za Prikaz:
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <AlbumSelect
              label="Izaberite Album"
              value={data?.albumId}
              onChange={setAlbum}
              albumData={albumData}
            />
          </Grid>
          <Grid item xs={12} display="flex">
            <CustomButton
              text="Otkaži"
              variant="outlined"
              fullWidth
              onClick={() => setOpenModal(false)}
            />
            <Box ml={1} mr={1} />
            <CustomButton
              onClick={handleSubmit(saveChangesHandler)}
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
