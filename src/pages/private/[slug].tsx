import { DownloadAlbum } from '@/components/admin.component/downloadAlbum';
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
          <Grid
            item
            xs={12}
            display="flex"
            flexDirection="column"
            alignItems="center"
          >
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
            <Box mt={3} />
            <DownloadAlbum albumData={albumData} />
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
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import PrivateAlbum from './PrivateAlbum';
import * as redux from 'react-redux';
import * as albumApi from '../../utils/album.api';

// Mock useSelector
jest.mock('react-redux', () => ({
  useSelector: jest.fn(),
}));

// Mock useRouter
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: { slug: 'mockAlbumId' }, // Mock router query
  }),
}));

// Mock the getAlbumById and getAlbumByIdByAdmin functions
jest.mock('../../utils/album.api', () => ({
  getAlbumById: jest.fn(),
  getAlbumByIdByAdmin: jest.fn(),
}));

// Mock the toast function from react-toastify
jest.mock('react-toastify', () => ({
  toast: {
    success: jest.fn(),
    warning: jest.fn(),
  },
}));

describe('PrivateAlbum Component', () => {
  const useSelectorMock = jest.spyOn(redux, 'useSelector');
  const getAlbumByIdMock = jest.spyOn(albumApi, 'getAlbumById');
  const getAlbumByIdByAdminMock = jest.spyOn(albumApi, 'getAlbumByIdByAdmin');

  beforeEach(() => {
    useSelectorMock.mockReturnValue(1); // Mock isAdmin as an admin user
  });

  it('renders without crashing', () => {
    render(<PrivateAlbum />);
    // You can add more specific assertions here as needed
  });

  it('displays album information for admin users', async () => {
    const mockAlbumData = {
      albumName: 'Test Album',
      participants: 'Test Participants',
      albumPassword: 'TestPassword123',
      images: [{ id: 1, image: 'image-url' }],
      trailerVideo: 'trailer-url',
      mainVideo: 'main-url',
    };

    getAlbumByIdByAdminMock.mockResolvedValueOnce({ statusCode: 200, album: mockAlbumData });

    render(<PrivateAlbum />);

    // Wait for album information to load
    await waitFor(() => {
      expect(screen.getByText('Test Album')).toBeInTheDocument();
      expect(screen.getByText('Test Participants')).toBeInTheDocument();
      expect(screen.getByText('Lozinka: TestPassword123')).toBeInTheDocument();
      expect(screen.getByText('Zaključano')).toBeInTheDocument(); // Expect the "Zaključano" message
    });

    // You can add more specific assertions for images and videos if needed
  });

  it('handles album unlocking for non-admin users', async () => {
    const mockAlbumData = {
      statusCode: 200,
      album: {
        albumName: 'Test Album',
        participants: 'Test Participants',
        images: [{ id: 1, image: 'image-url' }],
        trailerVideo: 'trailer-url',
        mainVideo: 'main-url',
      },
    };

    getAlbumByIdMock.mockResolvedValueOnce(mockAlbumData);

    render(<PrivateAlbum />);

    // Wait for the password input field to appear
    await waitFor(() => {
      expect(screen.getByLabelText('Lozinka Albuma')).toBeInTheDocument();
    });

    // Simulate entering a password and unlocking the album
    const passwordInput = screen.getByLabelText('Lozinka Albuma');
    fireEvent.change(passwordInput, { target: { value: 'TestPassword123' } });

    const submitButton = screen.getByText('Potvrdi');
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.getByText('Test Album')).toBeInTheDocument();
    });

    await waitFor(() => {
      expect(screen.getByText('Test Participants')).toBeInTheDocument();
    })

    expect(screen.queryByText('Zaključano')).not.toBeInTheDocument();
  });
});
