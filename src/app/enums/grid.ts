import { ClrDatagridStateInterface } from '@clr/angular';
import { snakeCase } from 'lodash';

export interface ListRefreshParams<T = any> {
    index: number;
    size?: number;
}

export const mapRefreshParams = (prms: ClrDatagridStateInterface): ListRefreshParams => ({
    index: prms.page ? prms.page.from / prms.page.size + 1 : 1,
    size: prms.page ? prms.page.size : undefined
});

export const trackByCol = (i, col) => {
    return col.id;
};

export const trackByRow = (i, row) => {
    return row.id;
};

export const trackByCell = (i) => {
    return i;
};

export const LightenDarkenColor = (col, amt) => {
    let usePound = false;

    if (col) {
        if (col[0] === '#') {
            col = col.slice(1);
            usePound = true;
        }

        const num = parseInt(col, 16);

        let r = (num >> 16) + amt;
        if (r > 255) {
            r = 255;
        } else if  (r < 0) {
            r = 0;
        }

        let b = ((num >> 8) & 0x00FF) + amt;
        if (b > 255) {
            b = 255;
        } else if  (b < 0) {
            b = 255;
        }

        let g = (num & 0x0000FF) + amt;
        if (g > 255) {
            g = 255;
        } else if (g < 0) {
            g = 0;
        }

        return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
    }
};

export const searchCtrl = (search, params) => {
    const {field, sortBy, value, page, size, mode} = params;

    search.page = page;
    search.limit = size;
    if (field) {
        search.sort = {
            field,
            order: sortBy
        };
    }

    switch (mode) {
        case 'select':
            search.conditions[field] = {
                'or' : value.map((i) => {
                    const {title} = i;
                    return snakeCase(title);
                })
            };
            break;
        case 'date':
            const {from} = value;
            if (from) {
                search.conditions[field] = value;
            }
            break;
        default:
            if (field) {
                search.search[field] = value;
            }
            break;
    }

    return search;
};

