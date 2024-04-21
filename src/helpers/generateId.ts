export function generateRandomId(specialization: {
  id: number;
  title: string;
}) {
  const firstCharacter = specialization.title
    .charAt(0)
    .toLowerCase();
  const idLength = 4;
  let id = '';

  for (let i = 0; i < idLength; i++) {
    const randomIndex = Math.floor(Math.random() * 26);
    id += String.fromCharCode(97 + randomIndex);
  }

  return `${specialization.id}${firstCharacter.toUpperCase()}${id}`;
}
