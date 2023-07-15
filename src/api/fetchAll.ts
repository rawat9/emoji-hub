import { Emoji } from '../types/Emoji';
import { request } from '../utils';

async function fetchAll() {
  const response = await request<Emoji[]>('https://emojihub.yurace.pro/api/all', {
    method: 'GET',
  });

  if (!response) {
    throw new Error('Unable to fetch the data');
  }

  return response;
}

export default fetchAll;
