export const signup = (user) => {
    return $.ajax({
        method: "POST",
        url: "/api/users",
        data: user
    });
};

export const login = (user) => {
    return $.ajax({
        method: "POST",
        url: "/api/session",
        data: user
    });
};

export const logout = (user) => {
  console.log("ajax logout");
  debugger;
    return $.ajax({
        method: "DELETE",
        url: "/api/session"
    });
};
