import { useState, forwardRef } from 'react';
import View from "./View";

const Controller = forwardRef((props, ref) => {
    const { title, type, placeholder, onChange } = props;
    const [on, setOn] = useState(false);

    const setOff = () => setOn(!on);

    return (
        <View 
            title={title}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            on={on}
            setOff={setOff}
            ref={ref}
        />
    )
})

export default Controller;