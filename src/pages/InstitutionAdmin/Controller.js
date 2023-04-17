import AdminAddButton from 'components/AdminAddButton/AdminAddButton';

import View from './View';


function Controller({activeButton, setActiveButton, selectFilter}) {

    function selectButton() {
        if (selectFilter === 'учителя')
            return (
                <div onClick={() => setActiveButton(true)}>
                    <AdminAddButton
                        title='добавить учителя'
                    />
                </div>
            )
        if (selectFilter === 'кабинеты')
            return (
                <div onClick={() => setActiveButton(true)}>
                    <AdminAddButton
                        title='добавить кабинет'
                    />
                </div>
            )
        if (selectFilter === 'звонки')
            return (
                <div onClick={() => setActiveButton(true)}>
                    <AdminAddButton
                        title='добавить звонок'
                    />
                </div>
            )
        if (selectFilter === 'ученики')
            return (
                <div onClick={() => setActiveButton(true)}>
                    <AdminAddButton
                        title='добавить ученика'
                    />
                </div>
            )
        if (selectFilter === 'группы')
            return (
                <div onClick={() => setActiveButton(true)}>
                    <AdminAddButton
                        title='добавить группу'
                    />
                </div>
            )
    }

    return (
        <View 
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            selectButton={selectButton()}
        />
    );
}

export default Controller;
