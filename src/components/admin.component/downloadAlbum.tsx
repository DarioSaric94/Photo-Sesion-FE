import { useState } from 'react';
import { CustomButton } from '../shared/customButton';
import { CustomModal } from './customModal';
import { FILE_URL, getImageFile } from '@/utils/imageFile.api';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { Input } from '../shared/input';
import { Box } from '@mui/material';
import { AlbumSesion } from '@/utils/types';
import { toast } from 'react-toastify';
import { baseURL } from '@/utils/fetch';

interface DownloadAlbumProps {
  albumData: AlbumSesion | null;
}

export const DownloadAlbum: React.FC<DownloadAlbumProps> = ({ albumData }) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const { handleSubmit, register } = useForm();

  const handleDownloadAlbum: SubmitHandler<FieldValues> = async ({
    albumPassword,
  }) => {
    if (albumData?.albumPath) {
      const response = await getImageFile({
        albumPath: albumData?.albumPath,
        albumPassword,
        albumId: albumData?.id,
      });

      if (response?.statusCode === 200) {
        setOpenModal(false);
        window.open(
          `${baseURL}${FILE_URL}${response?.url}?sessionToken=${response?.sessionToken}&albumId=${albumData?.id}`,
          '_blank'
        );
      } else {
        toast.warning(response?.message);
      }
    } else {
      console.error('Album ne postoji');
    }
  };
  return (
    <>
      <CustomButton
        text="Download Album"
        variant="outlined"
        onClick={() => setOpenModal(true)}
      />
      <CustomModal
        label="Lozinka Albuma"
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Input
          label="Unesite Lozinku Albuma"
          name="albumPassword"
          register={register}
        />
        <Box display="flex" mt={3}>
          <CustomButton
            text="Otkaži"
            variant="outlined"
            fullWidth
            onClick={() => setOpenModal(false)}
          />
          <Box ml={1} mr={1} />
          <CustomButton
            fullWidth
            variant="contained"
            text="Download"
            onClick={handleSubmit(handleDownloadAlbum)}
          />
        </Box>
      </CustomModal>
    </>
  );
};
