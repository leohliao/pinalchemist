// export const fetchAllBoards = () => {
//   return $.ajax ({
//     method: 'GET',
//     url: `/api/boards`,
//   })
// }

export const fetchSingleBoard = (id) => {
  return $.ajax ({
    method: 'GET',
    url: `/api/boards/${id}`
  });
};

export const createBoard = (board) => {
  return $.ajax ({
    method: 'POST',
    url: '/api/boards',
    data: { board }
  });
};

export const deleteBoard = (id) => {
  return $.ajax ({
    method: 'DELETE',
    url: `/api/boards/${id}`
  });
};
