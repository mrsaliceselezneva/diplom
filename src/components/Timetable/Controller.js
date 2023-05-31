import View from './View';


const Controller = (props) => {
    const {weekdayList} = props;

    return (
        <View 
            weekdayList={weekdayList}
        />
    );
}

export default Controller;
