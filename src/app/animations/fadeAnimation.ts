import { animation, transition, animate, trigger } from '@angular/animations';

export const fadeAnimationMetadata = animation([
    transition(':enter, :leave', animate(2000))
])

export const fadeAnimation = trigger('fadeAnimation', [fadeAnimationMetadata])



