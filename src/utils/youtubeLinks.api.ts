import { GET, POST } from './fetch';
import { toast } from 'react-toastify';
import { LoginUserRo, ResponseObj } from './types';
const YOUTUBE_LINKS = 'youtube-links/';

export interface PostYoutubeLinksProps {
  youtubeLink1?: string;
  youtubeLink2?: string;
  youtubeLink3?: string;
  albumId?: any;
}

export const postYoutubeLinks = async (
  data: PostYoutubeLinksProps
): Promise<LoginUserRo | undefined> => {
  try {
    return await POST(YOUTUBE_LINKS, data);
  } catch (error) {
    toast.error('Something went wrong');
  }
};

export const getYoutubeLinks = async (): Promise<LoginUserRo | undefined> => {
  try {
    return await GET(YOUTUBE_LINKS);
  } catch (error) {}
};
