export const login = (username) => {
    localStorage.setItem("user", JSON.stringify ({username}));
};

export const logout = () => {
    localStorage.removeItem("user");
};

export const getCurrentUSer = () => {
    const user = localStorage.getItem("user");
    return user ? JSON.parse(user) : null;
};

export const isAuthenticated = () => {
    return !! localStorage.getItem("user");
};