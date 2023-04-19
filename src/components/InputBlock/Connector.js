import { forwardRef } from 'react';
import Controller from './Controller';

const Connector = forwardRef((props, ref) => {
    const { title, type, placeholder, onChange } = props;
    return (
        <Controller 
            title={title}
            type={type}
            placeholder={placeholder}
            onChange={onChange}
            ref={ref}
        />
        );
})

export default Connector;
