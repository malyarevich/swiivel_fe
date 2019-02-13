export const KEYS = [37, 39, 8, 110];
export const KEYS_CTRL = [67, 86];

export const verification = (e: any) => {
    const common = KEYS.indexOf(e.keyCode) !== -1;
    const ctrl = KEYS_CTRL.indexOf(e.keyCode) !== -1;

    if (common || (ctrl && e.ctrlKey)) {} else {
        if (!(/^[\d. ()+]+$/.test(e.key))) {
            e.preventDefault();
        }
    }
};
