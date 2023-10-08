import { GET, POST } from './fetch';
import { toast } from 'react-toastify';
import { ResponseRo, YoutubeLinksRo } from './types';
export const YOUTUBE_LINKS_URL = 'youtube-links/';

export interface PostYoutubeLinksProps {
  youtubeLink1?: string;
  youtubeLink2?: string;
  youtubeLink3?: string;
  albumId?: number;
}

export const postYoutubeLinks = async (
  data: PostYoutubeLinksProps
): Promise<ResponseRo | undefined> => {
  try {
    return await POST(YOUTUBE_LINKS_URL, data);
  } catch (error) {
    toast.error('Something went wrong');
  }
};

export const getYoutubeLinks = async (): Promise<
  YoutubeLinksRo | undefined
> => {
  try {
    return await GET(YOUTUBE_LINKS_URL);
  } catch (error) {}
};
