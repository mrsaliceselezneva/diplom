import { FiCheckSquare, FiSquare } from 'react-icons/fi';

import View from './View';


function Controller({ id, keys, val, inst }) {

    const whichSquare = (k, v) => {
        if (v === true)
            return <FiCheckSquare />;
        if (v === false)
            return <FiSquare />;

        if (k === 'institution_id') {
            return inst[k];
        }
        return `${v}`;
    }


    return (
        <View
            id={id}
            keys={keys}
            val={val}
            whichSquare={whichSquare}
        />
    );
}

export default Controller;
