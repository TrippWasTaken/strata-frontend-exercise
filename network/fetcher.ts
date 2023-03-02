import { ExtendedError } from '../types';

export const fetcher = async (url: string) => {
  const res = await fetch(url);

  if (res.ok === false) {
    const error: ExtendedError = new Error('Whoops something went wrong!');
    error.info = res.statusText;
    error.status = res.status;
    throw error;
  }

  return res.json();
};
