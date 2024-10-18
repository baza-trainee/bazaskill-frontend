export function dateChecker(timestamp: Date) {
  const parsedDate: Date = new Date(timestamp);

  const currentDate: Date = new Date();

  const timeDifference: number = Math.abs(
    currentDate.getTime() - parsedDate.getTime(),
  );

  const hoursDifference: number
    = timeDifference / (1000 * 60 * 60);

  return hoursDifference < 48;
}
