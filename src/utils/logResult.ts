type Results = {
  title: string
  partOne?: number
  partTwo?: number
}
export default function logResults({ title, partOne, partTwo }: Results) {
  console.group('Advent of code')
  console.log(`\n${title}`)
  if (partOne) console.log(`part 1 result is: ${partOne}`)
  if (partTwo) console.log(`part 2 result is: ${partTwo}`)
  console.groupEnd()
}
