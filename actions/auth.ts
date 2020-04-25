export const fetchToken = async (
  _email: string,
  _password: string
): Promise<string> => {
  // TODO
  return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ikp1bGlhbiIsImVtYWlsIjoic29tZWVtYWlsQGV4YW1wbGUuY29tIn0.i9MT28ezVo9skeDj1BgxCQdDTK0p4ggFjNcdj2grMdI";
};

export const getTokenFromLocalStorage = (): string => {
  return localStorage.getItem("token") || "";
};

export const setTokenToLocalStorage = (token: string) => {
  localStorage.setItem("token", token);
};
