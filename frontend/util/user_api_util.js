export const fetchUserBoards = (userId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/users/${userId}/boards`
  });
};
