import { forwardRef } from 'react';
import View from './View';

const Controller = forwardRef((props, ref) => {
    const { title, onChange, mas } = props;
    return (
        <View 
            title={title}
            onChange={onChange}
            mas={mas}
            ref={ref}
        />
        );
})

export default Controller;
