export const normalizeText = (value) => {
    if (!value) return '';
    const val = value.replace(/[^а-яёА-ЯЁ]/u, '');
    if (val.length > 0) return val[0].toUpperCase() + val.slice(1).toLowerCase();
    return '';
}

export const normalizePhone = (value) => {
    if (!value) return '';
    let val;
    if (value.length === 1) val = value.replace(/[^\d]/g, '');
    else val = value.replace(/[^\d]/g, '').slice(1);
    if (val.length < 4) {
        return `+7 (${val}`;
    }
    if (val.length < 7) return `+7 (${val.slice(0, 3)}) ${val.slice(3)}`;
    return `+7 (${val.slice(0, 3)}) ${val.slice(3, 6)}-${val.slice(6, 10)}`;
}
