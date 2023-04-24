import { useDispatch } from 'react-redux';
import View from './View';


function Controller({institutionInfo, personalInfo, setLogout, refreshToken}) {
    const dispatch = useDispatch();

    return (
        <View 
            institutionInfo={institutionInfo}
            personalInfo={personalInfo}
            dispatch={dispatch}
            setLogout={setLogout}
            refreshToken={refreshToken}
        />
    );
}

export default Controller;
