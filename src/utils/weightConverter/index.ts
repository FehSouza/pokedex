export const weightConverter = (value: number) => {
  const pounds = value * 2.20462
  const poundsFormatted = String(pounds.toFixed(2)).replace('.', ',')

  return `${poundsFormatted} lbs`
}
