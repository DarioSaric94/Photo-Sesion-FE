const baseURL = 'http://localhost:3000/';

const getHeaders = () => {
  const token = localStorage.getItem('ACCESS_TOKEN') || null;
  return {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + token,
  };
};

export const POST = async (
  route: string,
  formData: any | undefined = undefined
) => {
  const headers = getHeaders();
  try {
    const response = await fetch(baseURL + route, {
      method: 'POST',
      headers,
      body: JSON.stringify(formData),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
};

export const GET = async (route: string) => {
  const headers = getHeaders();
  try {
    const response = await fetch(baseURL + route, {
      method: 'GET',
      headers,
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
};

export const PATCH = async (route: string, formData: any | null = null) => {
  const headers = getHeaders();
  try {
    const response = await fetch(baseURL + route, {
      method: 'PATCH',
      headers,
      body: JSON.stringify(formData),
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
};

export const DELETE = async (route: string) => {
  const headers = getHeaders();
  try {
    const response = await fetch(baseURL + route, {
      method: 'DELETE',
      headers,
    });
    const json = await response.json();
    return json;
  } catch (error) {
    throw error;
  }
};
