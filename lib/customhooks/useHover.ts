import { useState } from 'react';

// this is when interaction with the component is with mouse hover, and its specific to when mouse is over and when its not.

export const useHover = () => {
  const [hovering, setHover] = useState(false);
  const onMouseOver = () => setHover(true);
  const onMouseOut = () => setHover(false);

  //your component receives helper methods from useHover: onMouseOver() onMouseOut()
  //and state: hovering
  return { hovering, onMouseOver, onMouseOut };
};
