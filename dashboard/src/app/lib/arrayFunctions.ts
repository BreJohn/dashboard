export const moveItemInPlace = (
  array: any[],
  prevIndex: number,
  currIndex: number
) => {
  const draggedItem = { ...array[prevIndex] };
  const replacedItem = { ...array[currIndex] };
  array[currIndex] = draggedItem;
  array[prevIndex] = replacedItem;
  return array;
};
