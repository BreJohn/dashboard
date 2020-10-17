export const toggleCalendar = (hidden: boolean) => {
  let btnLabel: string;
  if (hidden) {
    btnLabel = 'Hide';
  } else {
    btnLabel = 'Show';
  }
  return { btnLabel, hidden: !hidden };
};
