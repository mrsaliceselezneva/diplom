import View from "./View";

function Controller({changeSelectBlockType, blockType, select}) {
    return (
        <View 
            changeSelectBlockType={changeSelectBlockType}
            blockType={blockType}
            select={select}
        />
    );
}

export default Controller;
