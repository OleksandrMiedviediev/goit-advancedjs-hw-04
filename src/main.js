import axios from 'axios';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import './css/common.css';
import { getImagesByQuery } from './js/pixabay-api';
import {
	clearGallery,
	createGallery,
	hideLoader,
	showLoader,
} from './js/render-functions';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
	event.preventDefault();

	const query = event.currentTarget.elements['search-text'].value.trim();

	if (!query) {
		iziToast.warning({
			title: 'Warning',
			message: 'Please enter a search query.',
		});
		return;
	}

	clearGallery();
	showLoader();

	getImagesByQuery(query)
		.then(data => {
			if (!data.hits.length) {
				iziToast.info({
					message:
						'Sorry, there are no images matching your search query. Please try again!',
				});
				return;
			}

			createGallery(data.hits);
		})
		.catch(error => {
			if (axios.isCancel(error)) {
				return;
			}

			iziToast.error({
				title: 'Error',
				message: 'Something went wrong. Please try again later.',
			});
		})
		.finally(() => {
			hideLoader();
		});
});

