import { forwardRef } from 'react';
import View from './View';

const Controller = forwardRef((props, ref) => {
    const { title, type, placeholder, onChange } = props;
    return (
        <View 
            title={title}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            ref={ref}
        />
        );
})

export default Controller;
