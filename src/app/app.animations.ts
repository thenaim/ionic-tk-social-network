
import { createAnimation } from '@ionic/angular';

/**
 * Music modal anumation
 */
export const MusicModalEnterAnimation = (baseEl: any) => {
    const backdropAnimation = createAnimation()
        .addElement(baseEl.querySelector('ion-backdrop')!)
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = createAnimation()
        .addElement(baseEl.querySelector('.modal-wrapper')!)
        .keyframes([
            { offset: 0, opacity: '0', transform: 'translateY(100vh)' },
            { offset: 1, opacity: '0.99', transform: 'translateY(0vh)' }
        ]);

    return createAnimation()
        .addElement(baseEl)
        .easing('cubic-bezier(0.32,0.72,0,1)')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

export const MusicModalLeaveAnimation = (baseEl: any) => {
    const backdropAnimation = createAnimation()
        .addElement(baseEl.querySelector('ion-backdrop')!)
        .fromTo('opacity', 'var(--backdrop-opacity)', 0.0);

    const wrapperAnimation = createAnimation()
        .addElement(baseEl.querySelectorAll('.modal-wrapper, .modal-shadow')!)
        .beforeStyles({ opacity: 1 })
        .fromTo('transform', 'translateY(0vh)', 'translateY(100vh)')
        .keyframes([
            { offset: 0, transform: 'translateY(0vh)' },
            { offset: 1, transform: 'translateY(100vh)' }
        ]);

    return createAnimation()
        .addElement(baseEl)
        .easing('cubic-bezier(0.32,0.72,0,1)')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * Story modal anumation
 */
export const StoryModalEnterAnimation = (baseEl: any) => {
    const backdropAnimation = createAnimation()
        .addElement(baseEl.querySelector('ion-backdrop')!)
        .fromTo('opacity', '0.01', 'var(--backdrop-opacity)');

    const wrapperAnimation = createAnimation()
        .addElement(baseEl.querySelector('.modal-wrapper')!)
        .keyframes([
            { offset: 0, opacity: '0', transform: 'scale(0)' },
            { offset: 1, opacity: '0.99', transform: 'scale(1)' }
        ]);

    return createAnimation()
        .addElement(baseEl)
        .easing('ease-out')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

export const StoryModalLeaveAnimation = (baseEl: any) => {
    const backdropAnimation = createAnimation()
        .addElement(baseEl.querySelector('ion-backdrop')!)
        .fromTo('opacity', 'var(--backdrop-opacity)', 0.0);

    const wrapperAnimation = createAnimation()
        .addElement(baseEl.querySelectorAll('.modal-wrapper, .modal-shadow')!)
        .beforeStyles({ opacity: 1 })
        .fromTo('transform', 'translateY(0vh)', 'translateY(100vh)')
        .fromTo('borderRadius', '0 0 0 0', '30px 30px 0 0')
        .keyframes([
            { offset: 0, transform: 'translateY(0vh)', borderRadius: '0px' },
            { offset: 0.1, borderRadius: '10px' },
            { offset: 1, transform: 'translateY(100vh)', borderRadius: '30px 30px 0 0' }
        ]);

    return createAnimation()
        .addElement(baseEl)
        .easing('cubic-bezier(0.32,0.72,0,1)')
        .duration(500)
        .addAnimation([backdropAnimation, wrapperAnimation]);
};

/**
 * Shake anumation
 */
export const ShakeAnimation = (baseEl: any) => {
    const squareA = createAnimation()
        .addElement(baseEl)
        .easing('ease-out')
        .duration(800)
        .keyframes([
            { offset: 0, transform: 'translate(0, 0)' },
            { offset: 0.1, transform: 'translate(-25px, 0)' },
            { offset: 0.2, transform: 'translate(25px, 0)' },
            { offset: 0.3, transform: 'translate(-20px, 0)' },
            { offset: 0.4, transform: 'translate(20px, 0)' },
            { offset: 0.5, transform: 'translate(-10px, 0)' },
            { offset: 0.6, transform: 'translate(10px, 0)' },
            { offset: 0.7, transform: 'translate(-5px, 0)' },
            { offset: 0.8, transform: 'translate(5px, 0)' },
            { offset: 1, transform: 'translate(0, 0)' }
        ]);

    return squareA;
};
