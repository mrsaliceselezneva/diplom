import axios from 'axios';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import ListBlock from 'components/ListBlock/ListBlock';
import styles from './AdminList.module.scss';



const dict = {
    'id': 'id',
    'last_name': 'фамилия',
    'first_name': 'имя',
    'patronymic': 'отчество',
    'email': 'почта',
    'institution_id': 'организация',
    'is_admin': 'администратор',
    'is_teacher': 'учитель',
    'is_superuser': 'суперпользователь',

    'name': 'название',
    'address': 'адрес',

    'type': 'тип',
    'multitasking': 'дистант'
}

function AdminList() {
    const { linkFilter } = useSelector((state) => state.sidebarReducer);

    const [list, setList] = useState([]);
    const [keys, setKeys] = useState([]);

    useEffect(() => {
        axios
            .get(`${process.env.REACT_APP_API_URL}/${linkFilter}`)
            .then((response) => {
                setList(response.data);
                const mas = [];
                // eslint-disable-next-line no-restricted-syntax
                for (const [key] of Object.entries(response.data[0])) {
                    mas.push(key);
                }
                setKeys(mas);
            })
            .catch((error) => {
                setList([]);
                setKeys([]);
                console.log(error);
            });
    }, [linkFilter]);

    return (
        <div className={styles.wrapper}>
            <div className={styles.wrapper__institution}>
                <div className={styles.wrapper__institution__title}>
                    {keys.slice(0, 4).map((key) =>
                        <div key={key} className={styles.wrapper__institution__title__block}>
                            {dict[key]}
                        </div>
                    )}
                </div>
                <div className={styles.wrapper__institution__list}>
                    {list.map((val, id) =>
                        <ListBlock id={id} key={val.id} keys={keys} val={val} />
                    )}
                </div>
            </div>
        </div>
    );
}

export default AdminList;
