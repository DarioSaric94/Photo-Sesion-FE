export const baseURL = 'http://localhost:3000/';

const getHeaders = (isFormData = false) => {
  const token = localStorage.getItem('ACCESS_TOKEN') || null;
  const headers: Record<string, string> = {
    Accept: 'application/json',
    Authorization: 'Bearer ' + token,
  };
  if (!isFormData) {
    headers['Content-Type'] = 'application/json';
  }

  return headers;
};

const performRequest = async (
  method: string,
  route: string,
  data: BodyInit | null | undefined
) => {
  const isFormData = data instanceof FormData;
  const headers = getHeaders(isFormData);

  try {
    const response = await fetch(baseURL + route, {
      method,
      headers,
      body: isFormData ? data : JSON.stringify(data),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
};

export const POST = async (route: string, data: any = undefined) => {
  return performRequest('POST', route, data);
};

export const GET = async (route: string) => {
  return performRequest('GET', route, undefined);
};

export const PATCH = async (route: string, data = undefined) => {
  return performRequest('PATCH', route, data);
};

export const DELETE = async (route: string) => {
  return performRequest('DELETE', route, undefined);
};
