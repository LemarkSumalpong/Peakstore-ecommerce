export const login = (username, password) => {
    localStorage.setItem("user", JSON.stringify ({username, password}));
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