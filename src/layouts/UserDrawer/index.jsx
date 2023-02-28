import { useSelector } from 'react-redux';

import { styled } from '@mui/material/styles';
import { DrawerProjectsContainer, DrawerSingleProjectBox, DrawerSingleProjectLogo, DrawerDingleProjectTitle, AddProjectBox } from './styled'

import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MessageOutlinedIcon from '@mui/icons-material/MessageOutlined';

import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ProjectIcon from '@mui/icons-material/FolderSpecialOutlined';
import Nologo from '@mui/icons-material/FitbitOutlined';
import { Avatar, List, ListItemAvatar } from '@mui/material';
import AddIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import ModalBox from '../modal';
import CreateProject from '../../components/createProject';
import { useState } from 'react';
import { NoProjectLogo } from '../../assets/Icons';
import { useNavigate } from 'react-router';

const drawerWidth = 200;

const openedMixin = (theme) => ({
	width: drawerWidth,
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen,
	}),
	overflowX: 'hidden',
});

const closedMixin = (theme) => ({
	transition: theme.transitions.create('width', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.enteringScreen,
	}),
	overflowX: 'hidden',
	width: `calc(${theme.spacing(7)} + 1px)`,
	[theme.breakpoints.up('sm')]: {
		width: `calc(${theme.spacing(8)} + 1px)`,
	},
});

const DrawerHeader = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 1),
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'flex-end',
	'& *, .css-3gcctd-MuiToolbar-root': {
		padding: '0 5px 0 0', color: 'white'
	}
}));

const Drawer = styled(MuiDrawer, {
	shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
	width: drawerWidth,
	flexShrink: 0,
	whiteSpace: 'nowrap',
	boxSizing: 'border-box',
	transition: 'all 1s ease-in-out',

	...(open && {
		...openedMixin(theme),
		'& .MuiDrawer-paper': openedMixin(theme),
	}),
	...(!open && {
		...closedMixin(theme),
		'& .MuiDrawer-paper': closedMixin(theme),
	}),

	'& .MuiPaper-root': {
		justifyContent: 'flex-start',
		height: '75vh',
		marginTop: '50vh',
		transform: 'translateY(-50%)',
		color: 'var(--main-bg)',
		background: 'var(--sidebar-BG)',
		borderTopRightRadius: '15px',
		borderBottomRightRadius: '15px',
		boxShadow: '14px 0px 40px 3px rgba(0,0,0,0.3)',
	},
}));


const UserDrawer = ({isOpen,  setIsOpen,  setChatUsers}) => {

	const { user, company, project } = useSelector(state => state)

	const navigate = useNavigate()

	const [open, setOpen] = useState(false);
	const [openProjects, setOpenProjects] = useState(false)

	const [modalOpen, setModalOpen] = useState(false)

	const Content = styled('div')(({ theme }) => ({
		backgroundColor: theme.palette.background.paper,
	}));

	const handleDrawerOpen = () => {
		setOpen(true);
	};

	const handleDrawerClose = () => {
		setOpenProjects(false)
		setOpen(false);
	};
	
	const handleProjectCLick = () => {
		setOpenProjects(!openProjects)
	}

	const handleAddProjectClick = () => {
		setModalOpen(true)
	}

	const handleExistingProjectClick = () => {
		navigate(`/project/${project.data.id}`)
	}

	const drawerMenu = [
		{ icon: <ProjectIcon fontSize='20' width='25px' />, name: 'Projects', title: 'See projects', click: handleProjectCLick },
	];

	const handleUserClick = (contact, e) => {
		e.preventDefault();
		setChatUsers(contact)
		setIsOpen(true)
	}

	return (
		<Box sx={{ display: 'flex' }}>
			<ModalBox component={<CreateProject setOpen={setModalOpen} />} open={modalOpen} setOpen={setModalOpen} />

			<CssBaseline />

			<Drawer variant='permanent' open={open}>
				<DrawerHeader disablePadding>
					<Toolbar sx={{
						display: 'flex', alignItems: 'center', justifyContent: 'flex-end', padding: '0 5px 0 0'
					}}>
						<IconButton
							onClick={handleDrawerClose}
							aria-label='close drawer'
							sx={{
								...(!open && { display: 'none' }),
							}}
						>
							<ChevronLeftIcon />
						</IconButton>
						<IconButton
							color='white'
							fill='white'
							aria-label='open drawer'
							onClick={handleDrawerOpen}
							edge='start'
							sx={{
								...(open && { display: 'none' }),
							}}
						>
							<MenuIcon />
						</IconButton>
					</Toolbar>
				</DrawerHeader>
				<Divider color='white' sx={{ margin: '0 10px 15px 10px' }} />

				<ListItem disablePadding sx={{ display: 'block' }}>
					<ListItemButton
						sx={{
							minHeight: 40,
							justifyContent: open ? 'initial' : 'center',
							px: 2.5,
						}}
						onClick={handleDrawerOpen}
					>
						<ListItemIcon
							sx={{
								minWidth: 0,
								mr: open ? 3 : 'auto',
								justifyContent: 'center',
								color: 'white',
								'svg': { width: '18px', height: '18px' }
							}}
						>
							<Nologo />
						</ListItemIcon>
						<ListItemText primary={company.data.name} sx={{ opacity: open ? 1 : 0, '*': { fontSize: '13px' } }} />
					</ListItemButton>
				</ListItem>

				{drawerMenu.map((item, index) => {
					return <ListItem key={index} disablePadding sx={{ display: 'block' }}>
						<ListItemButton
							sx={{
								minHeight: 40,
								justifyContent: open ? 'initial' : 'center',
								px: 2.5,
							}}
							onClick={item.click}
						>
							<ListItemIcon
								sx={{
									minWidth: 0,
									mr: open ? 3 : 'auto',
									justifyContent: 'center',
									color: 'white'
								}}
							>
								{item.icon}
							</ListItemIcon>
							<ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0, '*': { fontSize: '13px' } }} />
						</ListItemButton>
					</ListItem>

				})}
				<Divider color='white' sx={{ margin: '15px 10px 0 10px' }} />
				{openProjects && open
					? <div>
						<DrawerProjectsContainer>
							{user.data.projects ?
								<DrawerSingleProjectBox onClick={handleExistingProjectClick}>
									<DrawerSingleProjectLogo ><NoProjectLogo color='white'/></DrawerSingleProjectLogo>
									<DrawerDingleProjectTitle>{project.data.name}</DrawerDingleProjectTitle>
								</DrawerSingleProjectBox>
								: <AddProjectBox onClick={handleAddProjectClick}>
									<AddIcon sx={{ width: '18px', height: '18px' }} />
									<span>Add Project</span>
								</AddProjectBox>
							}
						</DrawerProjectsContainer>
						<Divider color='white' sx={{ margin: '0 10px' }} />
					</div>
					: null
				}

				<Content sx={{
					background: 'none',
					marginTop: '15px',
					msOverflowStyle: 'none',
					overflowX: 'hidden',
					...(!open && { display: 'none' }),
					'&::-webkit-scrollbar': { display: 'none' }
				}}>
					<List >
						{company.data.users.map((contact, index) => {
							if (contact._id !== user.data.id) {
								return <Box sx={{ padding: '0 10px' }} key={index} >
									<ListItem
										sx={{
											height: '30px',
											width: '100%',
											marginBottom: '10px',
											background: 'var(--popup-btn)',
											padding: '5px',
											borderRadius: '5px',
											cursor: 'pointer',
											display: 'flex',
											alignItems: 'center',
											justifyContent: 'flex-start',
										}}
										secondaryAction={
											<IconButton edge='end' aria-label='delete' sx={{ svg: { width: '15px', height: '15px' } }} >
												<MessageOutlinedIcon fontSize='small' />
											</IconButton>
										}
										onClick={e=>handleUserClick(contact, e)}
									>
										<ListItemAvatar>
											<Avatar sx={{ width: '20px', height: '20px' }}>
												<img src={contact.photo} alt='member' />
											</Avatar>
										</ListItemAvatar>
										<ListItemText primary={contact.firstname} sx={{
											span: {
												fontSize: '13px !important'
											}
										}} />
									</ListItem>
									<Divider variant='inset' />
								</Box>
							}
						})
						}
					</List>
				</Content>
			</Drawer>
		</Box >
	);
}

export default UserDrawer