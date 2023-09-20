import { Container } from '@/components/layout/container';
import { ListImageItem } from '@/components/shared/listImageItem';
import { YoutubeVideo } from '@/components/portfolio.component/youtubeVideo';
import { Box, Grid } from '@mui/material';
import { AddYoutubeLink } from '@/components/admin.component/addYoutubeLink';
import { useSelector } from 'react-redux';
import { RootState } from '@/store/store';
import { useEffect, useState } from 'react';
import { getYoutubeLinks } from '@/utils/youtubeLinks.api';
import { YoutubeLinksData } from '@/utils/types';
import { getAlbums } from '@/utils/album.api';

export default function Portfolio() {
  const admin = useSelector((state: RootState) => state?.auth?.userData?.role);
  const [youtubeLinksData, setYoutubeLinksData] =
    useState<YoutubeLinksData | null>(null);
  const [albumsData, setAlbumsData] = useState<any>([]);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    const handleGetYoutubeLinks = async () => {
      const response: any = await getYoutubeLinks();
      setYoutubeLinksData(response?.youtubeLinks);
      setAlbumsData(response);
    };
    handleGetYoutubeLinks();
  }, [isSuccess]);

  return (
    <Container>
      {admin === 1 && (
        <AddYoutubeLink
          albumsData={albumsData?.albumsData}
          data={youtubeLinksData}
          onPostSuccessChange={setIsSuccess}
        />
      )}
      {youtubeLinksData?.youtubeLink1 && (
        <YoutubeVideo src={youtubeLinksData?.youtubeLink1} />
      )}
      {youtubeLinksData?.youtubeLink2 && (
        <YoutubeVideo src={youtubeLinksData?.youtubeLink2} />
      )}
      {youtubeLinksData?.youtubeLink3 && (
        <YoutubeVideo src={youtubeLinksData?.youtubeLink3} />
      )}
      <Grid container spacing={3} mb={20} mt={0}>
        {albumsData?.album?.images?.map(
          (image: { id: number; image: string }) => {
            return <ListImageItem key={image?.id} src={image?.image} />;
          }
        )}
      </Grid>
    </Container>
  );
}
