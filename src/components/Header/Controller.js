import { useDispatch } from 'react-redux';
import View from './View';


const Controller = (props) => {
    const {institutionInfo, personalInfo, setLogout, refreshToken} = props;

    const dispatch = useDispatch();
    
    const logOut = () => dispatch(setLogout());

    return (
        <View 
            institutionInfo={institutionInfo}
            personalInfo={personalInfo}
            dispatch={dispatch}
            setLogout={setLogout}
            refreshToken={refreshToken}
            logOut={logOut}
        />
    );
}

export default Controller;
