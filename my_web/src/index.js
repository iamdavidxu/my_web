import React from 'react';
import ReactDOM from 'react-dom/client';
import './style.css';
import App from './App';

import { initializeApp } from 'firebase/app';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyBPSDhSjjM9YT7BXGuviovDXR05w4UUwDA',
	authDomain: 'myweb-fbf4f.firebaseapp.com',
	projectId: 'myweb-fbf4f',
	storageBucket: 'myweb-fbf4f.appspot.com',
	messagingSenderId: '848465524521',
	appId: '1:848465524521:web:70e40b333c699b7c3ba938',
	measurementId: 'G-3JZRX095PB',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
