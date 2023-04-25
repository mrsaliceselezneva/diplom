import { FiCheckSquare, FiSquare } from 'react-icons/fi';

const getCurrentSquare = (inst, k, v) => {
    if (v === true)
        return <FiCheckSquare />;
    if (v === false)
        return <FiSquare />;

    if (k === 'institution_id') {
        return inst[k];
    }
    return `${v}`;
}

export default getCurrentSquare;