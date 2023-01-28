import { useSelector } from 'react-redux';

const PrivateRoute = ({ component }) => {
	const {user} = useSelector((state)=> state);
	const {isAuth} = user.data 

	return isAuth ? component : null;
};

export default PrivateRoute;
