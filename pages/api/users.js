const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchUsers = async () => {
  const data = await fetch(`${BASE_URL}/users`).then((res) => res.json());

  return data;
};
