import { POST, GET, PATCH, DELETE, BASE_URL } from './fetch';

describe('API Functions', () => {
  const mockResponse = { message: 'Success' };

  beforeEach(() => {
    global.fetch = jest.fn().mockResolvedValue({
      json: async () => mockResponse,
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('POST', () => {
    it('should make a POST request with JSON data', async () => {
      const route = 'testRoute';
      const data = { key: 'value' };

      const response = await POST(route, data);

      expect(global.fetch).toHaveBeenCalledWith(
        `${BASE_URL}${route}`,
        expect.objectContaining({
          method: 'POST',
          headers: expect.objectContaining({
            'Content-Type': 'application/json',
            Authorization: expect.any(String),
          }),
          body: JSON.stringify(data),
        })
      );

      expect(response).toEqual(mockResponse);
    });
    it('should make a POST request with FormData', async () => {
      const route = 'testRoute';
      const formData = new FormData();
      formData.append('key', 'value');

      const response = await POST(route, formData);

      expect(global.fetch).toHaveBeenCalledWith(
        `${BASE_URL}${route}`,
        expect.objectContaining({
          method: 'POST',
          headers: expect.objectContaining({
            Authorization: expect.any(String),
          }),
          body: formData,
        })
      );
      expect(response).toEqual(mockResponse);
    });
  });

  describe('GET', () => {
    it('should make a GET request', async () => {
      const route = 'testRoute';

      const response = await GET(route);

      expect(global.fetch).toHaveBeenCalledWith(
        `${BASE_URL}${route}`,
        expect.objectContaining({
          method: 'GET',
          headers: expect.objectContaining({
            Authorization: expect.any(String),
          }),
        })
      );

      expect(response).toEqual(mockResponse);
    });
  });
  describe('DELETE', () => {
    it('should make a DELETE request with JSON data', async () => {
      const route = 'testRoute';
      const response = await DELETE(route);

      expect(global.fetch).toHaveBeenCalledWith(
        `${BASE_URL}${route}`,
        expect.objectContaining({
          method: 'DELETE',
          headers: expect.objectContaining({
            'Content-Type': 'application/json',
            Authorization: expect.any(String),
          }),
        })
      );

      expect(response).toEqual(mockResponse);
    });
  });

  describe('PATCH', () => {
    it('should make a PATCH request with JSON data', async () => {
      const route = 'testRoute';
      const data = { key: 'value' };

      const response = await PATCH(route, data);

      expect(global.fetch).toHaveBeenCalledWith(
        `${BASE_URL}${route}`,
        expect.objectContaining({
          method: 'PATCH',
          headers: expect.objectContaining({
            'Content-Type': 'application/json',
            Authorization: expect.any(String),
          }),
          body: JSON.stringify(data),
        })
      );

      expect(response).toEqual(mockResponse);
    });
    it('should make a PATCH request with FormData', async () => {
      const route = 'testRoute';
      const formData = new FormData();
      formData.append('key', 'value');

      const response = await PATCH(route, formData);

      expect(global.fetch).toHaveBeenCalledWith(
        `${BASE_URL}${route}`,
        expect.objectContaining({
          method: 'PATCH',
          headers: expect.objectContaining({
            Authorization: expect.any(String),
          }),
          body: formData,
        })
      );
      expect(response).toEqual(mockResponse);
    });
  });
});
