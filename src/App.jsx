import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Navbar } from './layouts';
import NavbarMaterial from './layouts/navbarMaterial';
import { Company, Home, Login, Signup, User, UserEdit } from './pages';
import PrivateRoute from './PrivateRoute';
import { userGetInitial } from './redux/slices/user/userAsyncs';

function App() {
	const {user} = useSelector(state => state)
	const dispatch = useDispatch()
	const token = sessionStorage.getItem('accessToken')

	
	useEffect(()=> {
		console.log('consoling: token :::', token )
		if(token) {
			dispatch(userGetInitial())
		}
	},[])

useEffect(()=> {
	console.log('consoling: user in APP  :::', user )
}, [user])

	return (
		<Router>
			<div className='app'>
				{/* <Navbar /> */}
				<NavbarMaterial />
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/company/:companyName' element={<PrivateRoute component={<Company />} />} />
					<Route path='/user/:id' element={<PrivateRoute component={<User />} />} />
					<Route path='/profile/:id/edit' element={<PrivateRoute component={<UserEdit />} />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
