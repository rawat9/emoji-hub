import { Emoji } from '../types/Emoji';
import { request } from '../utils';

async function fetchByCategory(category: string) {
  const response = await request<Emoji[]>(`https://emojihub.yurace.pro/api/category/${category}`, {
    method: 'GET',
  });

  if (!response) {
    throw new Error('Unable to fetch the data');
  }

  return response;
}

export default fetchByCategory;
