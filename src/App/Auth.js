export const login = (username, password) => {
  const user = {
    username,
    password,
    email: `${username}@gmail.com`, // add email here
  };
  localStorage.setItem("user", JSON.stringify(user));
};


export const logout = () => {
    localStorage.removeItem("user");
};

export const getCurrentUSer = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
};

export const isAuthenticated = () => {
    return !! getCurrentUSer();
};