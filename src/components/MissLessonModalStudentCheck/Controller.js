import { useState } from 'react';
import { useDispatch } from 'react-redux';
import View from './View';
import { setAddStudent, setDelStudent } from '../../redux/slices/missLessonSlice';


const Controller = (props) => {
    const dispatch = useDispatch();
    const {student} = props;

    const [was, setWas] = useState(false);
    const click = () => {
        if (!was){
            dispatch(setAddStudent(student));
        }
        else{
            dispatch(setDelStudent(student));
        }
        setWas(!was);
    }

    return (
        <View
            was={was}
            click={click}
        />
    );
}

export default Controller;

