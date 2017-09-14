import { animation, transition, animate, trigger, style, state } from '@angular/animations';

const slideRightVoidState = state('void', style({ transform: 'translateX(-20px)' }));
const defaultState = state('*', style({ transform: 'translateX(0px)' }));

export const slideRightAnimationMetadata = transition(':enter, :leave', animate(500));

export const slideRightAnimation = trigger('slideRightAnimation', [
    slideRightVoidState,
    defaultState,
    slideRightAnimationMetadata
]);

