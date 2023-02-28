import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { companyGet } from './redux/slices/company/companyAsyncs';
import { userGetInitial } from './redux/slices/user/userAsyncs';
import PrivateRoute from './PrivateRoute';

import { Navbar } from './layouts';
import { TestDrawer, Company, Home, Login, Signup, User, MembersList, SearchResults, Project } from './pages';
import { projectGet } from './redux/slices/project/projectAsyncs';
import { ChatMiniBox } from './components';

function App() {
	const { user, company, project } = useSelector(state => state)
	const dispatch = useDispatch()
	const refreshToken = localStorage.getItem('auth')

	const [chatOpen, setChatOpen] = useState(false)
	const [chatUsers, setChatUsers] = useState([])

	useEffect(() => {
		if (refreshToken) {
			dispatch(userGetInitial())
		}
	}, [])

	useEffect(() => {
		if (user.data.company?._id) {
			const companyId = user.data.company._id
			dispatch(companyGet({ companyId }))
			const projectId = user.data?.projects
			dispatch(companyGet({ companyId }))
		}
	}, [user])

	useEffect(() => {
		console.log('consoling: user in APP  :::', user)
		console.log('consoling: company in APP  :::', company)
		console.log('consoling: project in APP :::', project)
	}, [user, company, project])


	
	return (
		<Router>
			<div className='app'>
				<Navbar />
				{chatOpen && user.data.isAuth && <ChatMiniBox isOpen={chatOpen} setIsOpen={setChatOpen} chatUsers={chatUsers} />}
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
