import { forwardRef } from 'react';
import InputTextBlock from 'components/InputBlock';

const View = forwardRef((props, ref) => {
    const {
        changeLastname,
        changeName,
        changePatronymic,
        changeEmail,
        changePhone,
        changePassword
    } = props;

    return (
        <>
            <InputTextBlock
                title="фамилия"
                type="text"
                placeholder="Фамилия"
                ref={ref.lastnameRef}
                onChange={changeLastname}
            />

            <InputTextBlock
                title="имя"
                type="text"
                placeholder="Имя"
                ref={ref.nameRef}
                onChange={changeName}
            />

            <InputTextBlock
                title="отчество"
                type="text"
                placeholder="Отчество"
                ref={ref.patronymicRef}
                onChange={changePatronymic}
            />

            <InputTextBlock
                title="email"
                type="text"
                placeholder="email"
                ref={ref.emailRef}
                onChange={changeEmail}
            />

            <InputTextBlock
                title="телефон"
                type="text"
                placeholder="Телефон"
                ref={ref.phoneRef}
                onChange={changePhone}
            />

            <InputTextBlock
                title="пароль"
                type="password"
                placeholder="Пароль"
                ref={ref.passwordRef}
                onChange={changePassword}
            />
        </>
    );
})

export default View;
