import axios from 'axios';

export const getImagesByQuery = async (query, page) => {
  const response = await axios.get('https://pixabay.com/api/', {
    params: {
      key: '42394158-5c4cd21eee44163ae27aefe31',
      q: query,
      page,
      per_page: 15,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
    },
  });

  return response.data;
};
