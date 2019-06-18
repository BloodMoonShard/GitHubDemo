export const camelToSnake = (string) => {
  const upperChars = string.match(/([A-Z])/g);
  if (!upperChars) {
    return string;
  }

  let str = string.toString();
  for (let i = 0, n = upperChars.length; i < n; i++) {
    str = str.replace(new RegExp(upperChars[i]), '-' + upperChars[i].toLowerCase());
  }

  if (str.slice(0, 1) === '-') {
    str = str.slice(1);
  }
  return str;
};
