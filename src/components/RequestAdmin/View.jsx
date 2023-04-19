import { forwardRef } from 'react';
import InputTextBlock from 'components/InputBlock';

const View = forwardRef((props, ref) => {
    const {
        dispatch,
        setAdminLastName,
        setAdminName,
        setAdminPatronymic,
        setAdminEmail,
        setAdminPhone,
        setAdminPassword,
        normalizeText,
        normalizePhone
    } = props;

    return (
        <>
            <InputTextBlock
                title="фамилия"
                type="text"
                placeholder="Фамилия"
                ref={ref.lastnameRef}
                onChange={() => {
                    ref.lastnameRef.current.value = normalizeText(ref.lastnameRef.current.value);
                    dispatch(setAdminLastName(ref.lastnameRef.current.value));
                }}
            />

            <InputTextBlock
                title="имя"
                type="text"
                placeholder="Имя"
                ref={ref.nameRef}
                onChange={() => {
                    ref.nameRef.current.value = normalizeText(ref.nameRef.current.value);
                    dispatch(setAdminName(ref.nameRef.current.value));
                }}
            />

            <InputTextBlock
                title="отчество"
                type="text"
                placeholder="Отчество"
                ref={ref.patronymicRef}
                onChange={() => {
                    ref.patronymicRef.current.value = normalizeText(ref.patronymicRef.current.value);
                    dispatch(setAdminPatronymic(ref.patronymicRef.current.value));
                }}
            />

            <InputTextBlock
                title="email"
                type="text"
                placeholder="email"
                ref={ref.emailRef}
                onChange={() => dispatch(setAdminEmail(ref.emailRef.current.value))}
            />

            <InputTextBlock
                title="телефон"
                type="text"
                placeholder="Телефон"
                ref={ref.phoneRef}
                onChange={() => {
                    ref.phoneRef.current.value = normalizePhone(ref.phoneRef.current.value);
                    dispatch(setAdminPhone(ref.phoneRef.current.value));
                }}
            />

            <InputTextBlock
                title="пароль"
                type="password"
                placeholder="Пароль"
                ref={ref.passwordRef}
                onChange={() => {
                    dispatch(setAdminPassword(ref.passwordRef.current.value));
                }}
            />
        </>
    );
})

export default View;
