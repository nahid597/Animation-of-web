
import { trigger, transition, style, animate, state, animation, keyframes, useAnimation } from '@angular/animations';

export let fadeAnimation = animation([
    style({ backgroundColor: 'orange' }),
    animate('{{duration}} {{easing}}')
], {
    params: ({
        duration: '2000ms',
        easing: 'ease-out'
    } )
});

export let bounceLeftOutAnimation = animation(
    animate('1.0s ease-out' , keyframes([
        style({
            offset: 0.2,
            opacity: 1,
            transform: 'translateX(20px)',
        }),

        style({
            offset: 1,
            opacity: 0,
            transform: 'translateX(-100%)',
        }),

    ]))
);


export let fade = trigger('fade', [

    state('void', style({ opacity: 0 })),

    transition(':enter', [    // void => *, * => void
       useAnimation(fadeAnimation),
    ]),

]);
