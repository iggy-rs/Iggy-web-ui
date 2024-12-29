import type { Decoder } from '../types';

export const jsonDecoder: Decoder = {
  name: 'json',
  decode: (payload: string) => {
    try {
      const decoded = JSON.parse(payload);
      return JSON.stringify(decoded, null, 2);
    } catch {
      return null;
    }
  }
};
