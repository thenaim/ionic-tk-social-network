import { createAnimation } from '@ionic/angular';

/**
 * Shake anumation
 */
export const shakeAnimation = (baseEl: any) => {
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
      { offset: 1, transform: 'translate(0, 0)' },
    ]);

  return squareA;
};
