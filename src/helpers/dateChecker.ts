export const dateChecker = (timestamp: Date) => {
  const parsedDate: Date = new Date(timestamp);

  const currentDate: Date = new Date();

  const timeDifference: number = Math.abs(
    currentDate.getTime() - parsedDate.getTime()
  );

  const hoursDifference: number =
    timeDifference / (1000 * 60 * 60);

  return hoursDifference < 48;
};

// // Example usage:
// const timestamp: string = "2024-03-14T06:50:45.484Z";
// const within48Hours: boolean = dateChecker(timestamp);

// if (within48Hours) {
//     console.log("The timestamp is within 48 hours of the current timestamp.");
// } else {
//     console.log("The timestamp is NOT within 48 hours of the current timestamp.");
// }
// };
