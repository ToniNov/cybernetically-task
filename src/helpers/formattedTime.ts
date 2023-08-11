export const formattedTime = (timestamp: number): string => {
  const date = new Date(timestamp);

  const options: Intl.DateTimeFormatOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
    day: 'numeric',
    month: 'numeric',
    year: 'numeric',
  };

  return date.toLocaleString('en-US', options);
};
