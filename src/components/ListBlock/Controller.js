import { useState } from 'react';
import View from './View';


const Controller = (props) => {
    const { id, showKeys, keys, val, inst, getCurrentSquare } = props;
    const [showModal, setShowModal] = useState(false);
    return (
        <View
            id={id}
            showKeys={showKeys}
            keys={keys}
            val={val}
            inst={inst}
            showModal={showModal}
            onOpen={() => setShowModal(true)}
            onClose={() => setShowModal(false)}
            getCurrentSquare={getCurrentSquare}
        />
    );
}

export default Controller;
