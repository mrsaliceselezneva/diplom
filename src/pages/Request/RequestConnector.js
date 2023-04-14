import ReuqestView from './RequestView';

function RequestConnector({data, active, setActive, setClear, ReuqestAdmin, ReuqestInstitution, styles, axios}) {
    function send() {
        axios.post(`${process.env.REACT_APP_API_URL}/request`, data).then(() => {
            // eslint-disable-next-line no-unused-expressions
            setClear;
        });
    }

    return (
        <ReuqestView 
            active={active}
            setActive={setActive}
            ReuqestAdmin={ReuqestAdmin}
            ReuqestInstitution={ReuqestInstitution}
            requestComp={(!active && ReuqestInstitution) || (active && ReuqestAdmin)}
            styles={styles}
            send={() => send()}
        />
    );
}

export default RequestConnector;
