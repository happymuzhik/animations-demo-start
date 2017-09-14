import { animation, transition, animate, trigger, style, state } from '@angular/animations';

const voidState = state('void', style({ opacity: 0 }));

export const fadeAnimationMetadata = transition(':enter, :leave', animate(1000));

export const fadeAnimation = trigger('fadeAnimation', [
    voidState,
    fadeAnimationMetadata
]);
