import View from './View';


const Controller = (props) => {
    const {date, time, teacher, input, list} = props;
    return (
        <View
            date={date}
            time={time}
            teacher={teacher}
            input={input}
            list={list}
        />
    );
}

export default Controller;

