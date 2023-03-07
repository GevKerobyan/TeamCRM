// =====> HOOKS
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

// =====> FUNCTIONS
import { companyGet } from './redux/slices/company/companyAsyncs';
import { userGetInitial } from './redux/slices/user/userAsyncs';
import PrivateRoute from './PrivateRoute';

// =====> COMPONENTS
import { TestDrawer, Company, Home, Login, Signup, User, MembersList, SearchResults, Project } from './pages';
import { ChatMiniBox } from './components';
import { Navbar } from './layouts';
import { DraggabaleBoundsBox } from './components/chatMiniBox/styled';


function App() {

	const { user } = useSelector(state => state)
	const dispatch = useDispatch()

	const [chatOpen, setChatOpen] = useState(false)
	const [chatUsers, setChatUsers] = useState([])

	const refreshToken = localStorage.getItem('auth')

	useEffect(() => {
		if (refreshToken) {
			dispatch(userGetInitial())
		}
	}, [])

	useEffect(() => {
		if (user.data.company?._id) {
			const companyId = user.data.company._id
			dispatch(companyGet({ companyId }))
		}
	}, [user])

	return (
		<Router>
			<div className='app'>
				<Navbar />
				{chatOpen && user.data.isAuth && <DraggabaleBoundsBox>
					<ChatMiniBox isOpen={chatOpen} setIsOpen={setChatOpen} chatUsers={chatUsers} />
				</DraggabaleBoundsBox>
				}
				<Routes>
					<Route exact path='/' element={<Home />} />
					<Route path='/login' element={<Login />} />
					<Route path='/signup' element={<Signup />} />
					<Route path='/search/' element={<SearchResults />} />

					<Route path='/test' element={<TestDrawer />} />
					<Route path='/user/:id' element={<PrivateRoute component={<User isOpen={chatOpen}
						setIsOpen={setChatOpen}
						setChatUsers={setChatUsers} />} />} />
					<Route path='/company/:companyId' element={<PrivateRoute component={<Company />} />} />
					<Route path='/project/:projectId' element={<PrivateRoute component={<Project isOpen={chatOpen}
						setIsOpen={setChatOpen}
						setChatUsers={setChatUsers} />} />} />
					<Route path='/company/:companyId/members' element={<PrivateRoute component={<MembersList />} />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
