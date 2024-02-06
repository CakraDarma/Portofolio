import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import Cursor from './components/ui/Cursor.tsx';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<App />
		<Cursor />
	</React.StrictMode>
);
