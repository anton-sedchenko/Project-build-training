export const npc = () => {
  const arr = ['Rock', 'Paper', 'Scissors'];
  let npcChoice = Math.floor(Math.random() * Math.floor(3));

  return arr[npcChoice];
}
