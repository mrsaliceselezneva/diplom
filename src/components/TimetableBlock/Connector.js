import Controller from './Controller';


const Connector = (props) => {
    const {date, time, teacher, input, list} = props;
    return (
        <Controller
            date={date}
            time={time}
            teacher={teacher}
            input={input}
            list={list}
        />
    );
}

export default Connector;
