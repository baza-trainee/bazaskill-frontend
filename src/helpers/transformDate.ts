export function transformDate(input: any): string {
    // Parse month and year from the input string
    const [monthStr, yearStr] = input.split(".");
    const month = parseInt(monthStr) - 1; // Months are 0-based in JavaScript Date (0 = January)
    const year = parseInt(yearStr);

    // Create the date as the parsed year with the specified month and day (September 13, XXYY at 00:00:00 GMT)
    const specificDate = new Date(Date.UTC(year, month, 13, 0, 0, 0));

    // Format to match the desired output
    return specificDate.toUTCString();
}
