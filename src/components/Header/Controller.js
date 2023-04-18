import View from './View';


function Controller({institutionInfo, personalInfo, dispatch, setLogout, refreshToken}) {

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
