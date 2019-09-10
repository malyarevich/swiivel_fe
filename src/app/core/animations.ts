import { animate, group, state, style, transition, trigger } from '@angular/animations';

export function fadeInFromVoid() {
    return trigger('fadeInFromVoid', [
        transition(':enter', [
            style({
                opacity: '0',
                transform: 'translateY(60px)'
            }),
            animate('500ms')
        ])
    ]);
}

export function fadeInFromRight() {
    return trigger('fadeInFromRight', [
        transition(':enter', [
            style({
                opacity: '0',
                transform: 'translateX(60px)'
            }),
            animate('500ms')
        ])
    ]);
}

export function fadeInOutVoid() {
    return trigger('fadeInOut', [
        state(
            'close',
            style({
                display: 'none',
                opacity: 0
            })
        ),
        state(
            'open',
            style({
                display: 'block',
                opacity: 1
            })
        ),
        transition('open => close', animate('300ms')),
        transition('close => open', animate('300ms'))
    ]);
}

export function slideInOutVoid() {
    return trigger('slideInOut', [
        state('in', style({ height: '*', opacity: 0 })),
        transition(':leave', [
            style({ height: '*', opacity: 1 }),

            group([animate(0, style({ height: 0 })), animate('100ms ease-in-out', style({ opacity: '0' }))])
        ]),
        transition(':enter', [
            style({ height: '0', opacity: 0 }),

            group([animate(0, style({ height: '*' })), animate('400ms ease-in-out', style({ opacity: '1' }))])
        ])
    ]);
}
