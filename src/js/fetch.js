export function fetchPikchers(name) {
  const url = 'https://pixabay.com/api/';
  const key = '31801380-6d92922f2c4e09c36cd0b60c6';
  const filter = '?fields=name,photo,horizontal,true';
  return fetch(`${url}${key} ${name}${filter}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }

    return response.json();
  });
}