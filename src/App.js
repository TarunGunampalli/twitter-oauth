import Login from './Login.js';
import Success from './Success.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

const App = () => (
	<BrowserRouter>
		<Routes>
			<Route path='/' element={<Login />} />
			<Route path='/success' element={<Success />} />
		</Routes>
	</BrowserRouter>
);

export default App;
