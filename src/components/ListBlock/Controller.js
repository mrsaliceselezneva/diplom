import View from './View';


const Controller = (props) => {
    const { id, keys, val, inst, getCurrentSquare } = props;
    return (
        <View
            id={id}
            keys={keys}
            val={val}
            inst={inst}
            getCurrentSquare={getCurrentSquare}
        />
    );
}

export default Controller;
