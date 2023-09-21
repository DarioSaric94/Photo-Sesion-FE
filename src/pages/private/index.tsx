import { AddAlbum } from '@/components/admin.component/addAlbum';
import { CustomModal } from '@/components/admin.component/customModal';
import { Container } from '@/components/layout/container';
import { ListItem } from '@/components/private.components/listItem';
import { CustomButton } from '@/components/shared/customButton';
import { Input } from '@/components/shared/input';
import { RootState } from '@/store/store';
import { deleteAlbum, getAlbums } from '@/utils/album.api';
import { AlbumSesion } from '@/utils/types';
import { Box, Grid, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export default function Private() {
  const isAdmin = useSelector(
    (state: RootState) => state?.auth?.userData?.role
  );
  const { handleSubmit, register, reset } = useForm();
  const [albumsData, setAlbumsData] = useState<AlbumSesion[]>([]);
  const [isSuccess, setIsSuccess] = useState(false);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [selectedAlbum, setSelectedAlbum] = useState<AlbumSesion | undefined>(
    undefined
  );
  useEffect(() => {
    const getAlbumsData = async () => {
      const response: any = await getAlbums();
      setAlbumsData(response);
    };
    getAlbumsData();
  }, [isSuccess]);

  const handleDelete = (album: AlbumSesion) => {
    setSelectedAlbum(album);
    setOpenModal(true);
  };

  const deleteAlbumHandler: SubmitHandler<FieldValues> = async ({
    password,
  }) => {
    const response: any = await deleteAlbum({
      albumId: selectedAlbum?.id,
      password,
    });
    if (response?.statusCode === 204) {
      toast.success('Album uspješno obrisan');
      reset();
      setOpenModal(false);
      setIsSuccess(true);
    } else {
      toast.error(response?.message);
    }
  };

  return (
    <Container>
      {isAdmin === 1 && (
        <Box mb={5}>
          <AddAlbum onPostSuccess={setIsSuccess} />
        </Box>
      )}
      <Grid container spacing={4} mb={20}>
        {albumsData?.map((album: AlbumSesion) => {
          return (
            <ListItem key={album?.id} album={album} onDelete={handleDelete} />
          );
        })}
      </Grid>
      <CustomModal
        label={`Obrišite "${selectedAlbum?.participants}"`}
        open={openModal}
        onClose={() => setOpenModal(false)}
      >
        <Typography color="error.main" fontWeight="bold" mb={2}>
          Da li ste sigurni da želite da obrišete album "
          {selectedAlbum?.participants}"
        </Typography>
        <Input
          label="Unesite Lozinku"
          type="password"
          name="password"
          register={register}
        />
        <Box mt={3} display="flex">
          <CustomButton
            fullWidth
            variant="outlined"
            text="Otkaži"
            onClick={() => setOpenModal(false)}
          />
          <Box ml={1} mr={1} />
          <CustomButton
            fullWidth
            variant="outlined"
            text="Obriši"
            onClick={handleSubmit(deleteAlbumHandler)}
          />
        </Box>
      </CustomModal>
    </Container>
  );
}
