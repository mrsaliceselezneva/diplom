import Controller from "./Controller";

function Connector({changeSelectBlockType, blockType, select}) {
    return (
        <Controller
            changeSelectBlockType={changeSelectBlockType}
            blockType={blockType}
            select={select}
        />
    );
}

export default Connector;
