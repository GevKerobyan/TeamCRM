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
import { Navbar, UserDrawer } from './layouts';
import { DraggabaleBoundsBox } from './components/chatMiniBox/styled';

import { Box } from '@mui/material/Box';
// =====> SOCKETS

import { io } from 'socket.io-client';


function App() {

	const { user, chat } = useSelector(state => state)
	const dispatch = useDispatch()
	const [chatOpen, setChatOpen] = useState(false)
	const [chatUsers, setChatUsers] = useState([])
	const [chatOwner, setChatOwner] = useState({})
  const [chatContacts, setChatContacts] = useState('')

	const refreshToken = localStorage.getItem('auth')


	// =====> SOCKET STATES

	const socket = io('http://localhost:3004');

	const [typing, setTyping] = useState(false);
	const [messages, setMessages] = useState([]);
	const [loading, setLoading] = useState(false);
	const [istyping, setIsTyping] = useState(false);
	const [newMessage, setNewMessage] = useState("");
	const [socketConnected, setSocketConnected] = useState(false);

	// =====> \\

	useEffect(()=> {
		socket.on('connect', () => {
			console.log('socket.id =====> ',socket.id); 
		});
		
		socket.on('disconnect', () => {
			console.log(socket.id); 
		});
	},[])

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
					<ChatMiniBox isOpen={chatOpen} setIsOpen={setChatOpen} chatOwner={chatOwner} chatContacts={chatContacts} />
				</DraggabaleBoundsBox>}

				{user.data.isAuth && <UserDrawer isOpen={chatOpen} setIsOpen={setChatOpen} chatOwner={chatOwner} setChatContacts={setChatContacts}/>}
				
					<Routes>
						<Route exact path='/' element={<Home />} />
						<Route path='/login' element={<Login />} />
						<Route path='/signup' element={<Signup />} />
						<Route path='/search/' element={<SearchResults />} />
						<Route path='/test' element={<TestDrawer />} />
						<Route path='/user/:id' element={<PrivateRoute component={<User
							isOpen={chatOpen} setIsOpen={setChatOpen} setChatUsers={setChatUsers} />} />} />
						
						<Route path='/company/:companyId' element={<PrivateRoute component={<Company />} />} />
						
						<Route path='/project/:projectId' element={<PrivateRoute component={<Project
							isOpen={chatOpen} setIsOpen={setChatOpen} setChatUsers={setChatUsers} />} />} />
						
						<Route path='/company/:companyId/members' element={<PrivateRoute component={<MembersList />} />} />
					</Routes>
				</div>
		</Router>
	);
}

export default App;
