export const measurementConverter = (value: number) => {
  const feet = Math.trunc(value * 3.28084)
  const restFeet = value - feet / 3.28084
  const inch = Math.ceil((restFeet * 100) / 2.54)

  return `${feet}' ${String(inch).padStart(2, '0')}"`
}
