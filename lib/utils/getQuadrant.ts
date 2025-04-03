import { Position } from './position';

export enum Quadrant {
  TL = 'top-left',
  BL = 'bottom-left',
  TR = 'top-right',
  BR = 'bottom-right',
}

const viewportWidth = window.innerWidth;
const viewportHeight = window.innerHeight;

//returns whether element is on LEFT or RIGHT of container (*containerToCheckAgainst)a
export const getHorizontalQuadrant = (element: HTMLElement, layoutContainer: HTMLElement | undefined) => {
  //use window dimensions...
  const rect = element.getBoundingClientRect();
  const triggerCenter = rect.left + rect.width / 2;
  const roundedTriggerCenter = Math.round(triggerCenter);

  if (layoutContainer === undefined) {
    if (roundedTriggerCenter === Math.round(viewportWidth)) {
      return Position.CENTER;
    } else if (triggerCenter < viewportWidth / 2) {
      return Position.LEFT;
    } else {
      return Position.RIGHT;
    }
  }

  //use layoutContainer dimensions...
  else {
    const rect = layoutContainer.getBoundingClientRect();

    const layoutContainerCenter = rect.left + rect.width / 2;
    const roundedLayoutContainerCenter = Math.round(layoutContainerCenter);
    console.log('roundedTriggerCenter: ', roundedTriggerCenter);
    console.log('roundedLayoutContainerCenter: ', roundedLayoutContainerCenter);

    if (roundedTriggerCenter === roundedLayoutContainerCenter) {
      console.log('CENTER');
    } else {
      if (Math.round(triggerCenter) < Math.round(layoutContainerCenter)) {
        console.log('LEFT');
        return Position.LEFT;
      } else {
        console.log('RIGHT');
        return Position.RIGHT;
      }
    }
  }
  return Position.CENTER;
};

//usage:
// const quad = getQuadrantWithRespectToViewport(buttonRef.current as HTMLElement);
// if (quad) {
//   console.log('quad: ', quad);
// }

export const getQuadrantWithRespectToViewport = (element: HTMLElement) => {
  try {
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    if (centerX < viewportWidth / 2) {
      if (centerY < viewportHeight / 2) {
        return Quadrant.TL;
      } else {
        return Quadrant.BL;
      }
    } else {
      if (centerY < viewportHeight / 2) {
        return Quadrant.TR;
      } else {
        return Quadrant.BR;
      }
    }
  } catch (error: any) {
    console.error('Error: ' + error.message);
    return null;
  }
};
