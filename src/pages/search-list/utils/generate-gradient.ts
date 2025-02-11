const generateGradient = (hexDoubleCode: string) => {
  const fromColor = `#${hexDoubleCode.slice(0, 6)}`;
  const toColor = `#${hexDoubleCode.slice(6)}`;
  const degree = hexDoubleCode.charCodeAt(0) % 360;

  return `linear-gradient(${degree}deg , ${fromColor} , ${toColor})`; // CSS Linear Gradient
};

export default generateGradient;
