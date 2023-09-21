import { YoutubeVideo } from '@/components/portfolio.component/youtubeVideo';
import { CustomButton } from '@/components/shared/customButton';
import { Input } from '@/components/shared/input';
import { ListImageItem } from '@/components/shared/listImageItem';
import { RootState } from '@/store/store';
import { getAlbumById, getAlbumByIdByAdmin } from '@/utils/album.api';
import { AlbumSesion } from '@/utils/types';
import { Box, Grid, Typography } from '@mui/material';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

export default function PrivateAlbum() {
  const isAdmin = useSelector(
    (state: RootState) => state?.auth?.userData?.role
  );
  const router = useRouter();
  const id = router?.query?.slug as string;
  const { handleSubmit, register } = useForm();
  const [lockedAlbum, setLockedAlbum] = useState<boolean>(false);
  const [albumData, setAlbumData] = useState<AlbumSesion | null>(null);

  const handleGetAlbum: SubmitHandler<FieldValues> = async ({ password }) => {
    const response = await getAlbumById({ id, password });
    if (response?.statusCode === 200) {
      toast.success('Album je otključan');
      setLockedAlbum(true);
      setAlbumData(response?.album);
    } else {
      toast.warning(response?.message);
    }
  };

  useEffect(() => {
    const fetchAlbumData = async () => {
      if (isAdmin === 1) {
        if (!id) return;
        const response: any = await getAlbumByIdByAdmin(id);
        if (response?.statusCode === 200) setAlbumData(response?.album);
        else toast.warning(response?.message);
      } else {
        handleGetAlbum;
      }
    };
    fetchAlbumData();
  }, [id]);

  return (
    <Grid
      minHeight="100vh"
      container
      maxWidth={1280}
      margin="auto"
      pb={5}
      p={3}
      pt={20}
    >
      {lockedAlbum || isAdmin === 1 ? (
        <>
          <Grid item xs={12}>
            <Typography
              fontWeight="bold"
              fontSize={36}
              color="primary.light"
              width="100%"
              textAlign="center"
            >
              {albumData?.participants}
            </Typography>
            <Typography
              fontWeight="bold"
              fontSize={24}
              color="primary.main"
              width="100%"
              textAlign="center"
            >
              {albumData?.albumName}
            </Typography>
            {isAdmin === 1 && (
              <Typography
                fontWeight="bold"
                fontSize={14}
                color="primary.main"
                width="100%"
                textAlign="center"
              >
                Lozinka: {albumData?.albumPassword}
              </Typography>
            )}
          </Grid>
          <Grid container spacing={4} mt={3}>
            {albumData?.images?.map((image: any) => {
              return <ListImageItem key={image?.id} src={image?.image} />;
            })}
          </Grid>

          {albumData?.trailerVideo && (
            <YoutubeVideo src={albumData?.trailerVideo} />
          )}
          {albumData?.mainVideo && <YoutubeVideo src={albumData?.mainVideo} />}
        </>
      ) : (
        <Grid item xs={12} display="flex" justifyContent="center">
          <Box maxWidth={300} width="100%" p={3}>
            <Typography
              mb={3}
              fontWeight="bold"
              fontSize={36}
              color="secondary.main"
              width="100%"
              textAlign="center"
            >
              Zaključano
            </Typography>
            <Input
              label="Lozinka Albuma"
              type="password"
              name="password"
              register={register}
            />
            <Box display="flex" mt={3}>
              <CustomButton
                text="Potvrdi"
                fullWidth
                variant="contained"
                onClick={handleSubmit(handleGetAlbum)}
              />
              <Box ml={1} mr={1} />
              <CustomButton
                text="Nazad"
                fullWidth
                variant="text"
                onClick={() => router.push('/private')}
              />
            </Box>
          </Box>
        </Grid>
      )}
    </Grid>
  );
}
