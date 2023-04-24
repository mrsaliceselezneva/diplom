import { forwardRef } from 'react';
import Controller from './Controller';

const Connector = forwardRef((props, ref) => {
    const { title, onChange, mas } = props;
    return (
        <Controller 
            title={title}
            onChange={onChange}
            mas={mas}
            ref={ref}
        />
        );
})

export default Connector;
