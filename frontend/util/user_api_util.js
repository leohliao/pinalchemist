export const fetchSingleUser = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}`
  });
};

export const updateUser = (userId) => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/users/${userId}`
    data: { user }
  });
};
