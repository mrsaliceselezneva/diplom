import View from './View';


function Controller({ id, keys, val, inst, whichSquare }) {

    


    return (
        <View
            id={id}
            keys={keys}
            val={val}
            inst={inst}
            whichSquare={whichSquare}
        />
    );
}

export default Controller;
