import axios from 'axios';

export const getImagesByQuery = (query) => {
  return axios
    .get('https://pixabay.com/api/', {
      params: {
        key: '42394158-5c4cd21eee44163ae27aefe31',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
};