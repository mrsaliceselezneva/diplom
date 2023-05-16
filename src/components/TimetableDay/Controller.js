import sendRequest from 'api/utils';
import { useEffect, useState } from 'react';

import View from './View';


const Controller = (props) => {
    const {weekday, linkFilter} = props;

    const [listLesson, setListLesson] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getStudent = async (id) => {
        const list = [];
        await sendRequest(`/student?group=${id}`, 'get').then((data) => {
            data.forEach((student) => list.push(`${student.last_name} ${student.first_name}`));
        });
        return list;
        
    }

    useEffect(() => {
        setIsLoading(true);
        sendRequest('/lesson?teacher=13', 'get').then((data) => {
            const mas = [];
            data.forEach(async (lesson) => {
                if (lesson.weekday === weekday) {
                    mas.push(lesson);
                    mas[mas.length - 1].group = await getStudent(lesson.group_id);
                }
            });
            setListLesson(mas);
            setTimeout(() => {
                setIsLoading(false);
            }, [500]);
        });
    }, [linkFilter]);

    if (!isLoading){
        return (
            <View 
                listLesson={listLesson}
            />
        );
    }
    return null;
    
}

export default Controller;
