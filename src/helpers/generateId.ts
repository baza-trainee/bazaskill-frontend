export function generateRandomId(specialization: {
  id: number;
  title: string;
}) {
  const idLength = 5;
  let id = '';

  for (let i = 0; i < idLength; i++) {
    const randomDigit = Math.floor(Math.random() * 10); // Generates random digit (0-9)
    id += randomDigit;
  }

  return `${specialization.id}${id}`;
}
