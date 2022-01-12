import axios from 'axios';
import { baseUrl } from '../utils/utils';

let i = 0;
// Get game history data using cursors.
export const getHistory = async (cursor, data = []) => {
	const response = await axios.get(`${baseUrl}/history${cursor ? `?cursor=${cursor}` : ''}`);
	const currentCursor = response.data.cursor.split('=')[1];
	i++;

	if (i === 5) // Get five pages of data.
		return data;

	data.push(...response.data.data);
	return getHistory(currentCursor, data);
};