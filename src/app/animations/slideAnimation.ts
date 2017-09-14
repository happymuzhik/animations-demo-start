import { animation, transition, animate, trigger, style, state } from '@angular/animations';

const startStyle = style({ transform: 'translateX(-10px)' });
const defaultStyle = style({ transform: 'translateX(0px)' });
const endStyle = style({ transform: 'translateX(-100%)' });

const slideRightStartState = state('void', startStyle);
const slideRightDefaultState = state('*', defaultStyle);

export const slideRightAnimationEnter = transition(':enter', animate(500));
export const slideRightAnimationLeave = transition(':leave', animate(500, endStyle));

export const slideRightAnimation = trigger('slideRightAnimation', [
    slideRightStartState,
    slideRightDefaultState,
    slideRightAnimationEnter,
    slideRightAnimationLeave
]);

