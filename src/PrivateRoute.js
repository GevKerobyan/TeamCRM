import { useSelector } from 'react-redux';
import { Navigate } from 'react-router';
import { Home } from './pages';

const PrivateRoute = ({ component }) => {
	const { user } = useSelector((state) => state);
	const { isAuth } = user.data;

		return isAuth ? component : <Navigate to='/'/> ;
	
};

export default PrivateRoute;
