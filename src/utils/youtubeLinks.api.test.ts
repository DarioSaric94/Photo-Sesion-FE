import {
  YOUTUBE_LINKS_URL,
  postYoutubeLinks,
  getYoutubeLinks,
  PostYoutubeLinksProps,
} from './youtubeLinks.api';
import { toast } from 'react-toastify';
import * as fetchModule from './fetch';
import { ResponseObj, YoutubeLinksRo } from './types';

jest.mock('./fetch');
jest.mock('react-toastify');

describe('postYoutubeLinks', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const responseMock: ResponseObj = {
    statusCode: 201,
    message: 'message',
  };
  const data: PostYoutubeLinksProps = {
    youtubeLink1: 'youtubeLink1',
    youtubeLink2: 'youtubeLink2',
    youtubeLink3: 'youtubeLink3',
    albumId: 1,
  };
  const postMock = jest.spyOn(fetchModule, 'POST');

  it('should call POST with correct url and data', async () => {
    postMock.mockResolvedValue(responseMock);

    await postYoutubeLinks(data);

    expect(postMock).toHaveBeenCalledWith(YOUTUBE_LINKS_URL, data);
  });

  it('should return the response on successful POST', async () => {
    postMock.mockResolvedValue(responseMock);

    const result = await postYoutubeLinks(data);

    expect(result).toEqual(responseMock);
  });

  it('should handle errors and displat toast message', async () => {
    const errorResponse = new Error('Network error');
    postMock.mockRejectedValue(errorResponse);

    await postYoutubeLinks(data);

    expect(toast.error).toHaveBeenCalledWith('Something went wrong');
  });
});

describe('getYoutubeLinks', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  const responseMock: YoutubeLinksRo = {
    album: {
      id: 1,
      albumName: 'albumName',
      participants: 'participants',
      albumPath: 'albumPath',
      images: [],
    },
    albumsData: [],
    youtubeLinks: {
      id: 1,
      albumId: 2,
      userId: 1,
    },
  };

  const getMock = jest.spyOn(fetchModule, 'GET');

  it('should call POST with correct url and data', async () => {
    getMock.mockResolvedValue(responseMock);

    await getYoutubeLinks();

    expect(getMock).toHaveBeenCalledWith(YOUTUBE_LINKS_URL);
  });

  it('should return the response on successful POST', async () => {
    getMock.mockResolvedValue(responseMock);

    const result = await getYoutubeLinks();

    expect(result).toEqual(responseMock);
  });
});
