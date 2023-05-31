import { useState } from 'react';
import View from './View';


const Controller = (props) => {
    const { id, showKeys, keys, val, inst, getCurrentSquare } = props;
    const [showModal, setShowModal] = useState(false);
    const [showModalDel, setShowModalDel] = useState(false);

    return (
        <View
            id={id}
            showKeys={showKeys}
            keys={keys}
            val={val}
            inst={inst}
            showModal={showModal}
            showModalDel={showModalDel}
            onOpen={() => setShowModal(true)}
            onClose={() => setShowModal(false)}
            onOpenDel={() => setShowModalDel(true)}
            onCloseDel={() => setShowModalDel(false)}
            getCurrentSquare={getCurrentSquare}
        />
    );
}

export default Controller;
