import AdminAddButton from 'components/AdminAddButton';
import AddTeacher from 'components/AddTeacher';
import AddClassroom from 'components/AddClassroom';
import AddCall from 'components/AddCall';
import AddGroup from 'components/AddGroup';
import AddStudent from 'components/AddStudent';
import AddLesson from 'components/AddLesson';

import View from './View';


const Controller = (props) => {
    const {activeButton, setActiveButton, selectFilter} = props;

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
        if (selectFilter === 'занятия')
            return (
                <div onClick={() => setActiveButton(true)}>
                    <AdminAddButton
                        title='добавить занятие'
                    />
                </div>
            )
        return null;
    }

    function whichAdd(){
        if (activeButton){
            if (selectFilter === 'учителя')
                return <AddTeacher />;
            if (selectFilter === 'кабинеты')
                return <AddClassroom />;
            if (selectFilter === 'звонки')
                return <AddCall />;
            if (selectFilter === 'группы')
                return <AddGroup />;
            if (selectFilter === 'ученики')
                return <AddStudent />;
            if (selectFilter === 'занятия')
                return <AddLesson />;
        }
        return null;
    }

    const hideAdd = () => setActiveButton(false);

    return (
        <View 
            activeButton={activeButton}
            setActiveButton={setActiveButton}
            selectButton={selectButton()}
            whichAdd={whichAdd()}
            hideAdd={hideAdd}
        />
    );
}

export default Controller;
