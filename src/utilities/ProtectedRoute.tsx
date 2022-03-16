import { Navigate, useLocation } from 'react-router-dom';
import { useAppSelector } from '../store/hooks';

type Props = {
    children: React.ReactChild;
}

const ProtectedRoute = ({children}: Props) => {
    const location = useLocation();
    const { isLogged } = useAppSelector(state => state.auth);

    return(
        <>
            {isLogged
            ? children 
            : <Navigate
                to='/login' 
                replace
                state={{ path: location.pathname }}
             />}
        </>
    )
};

export default ProtectedRoute