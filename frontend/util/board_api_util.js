export const fetchAllBoards = () => {
  return $.ajax ({
    method: 'GET',
    url: '/api/boards'
  });
};
window.fetchAllBoards = fetchAllBoards;

export const fetchSingleBoard = (id) => {
  return $.ajax ({
    method: 'GET',
    url: `/api/boards/${id}`
  });
};
window.fetchSingleBoard = fetchSingleBoard;

export const createBoard = (board) => {
  return $.ajax ({
    method: 'POST',
    url: '/api/boards',
    data: { board }
  });
};
window.createBoard = createBoard;

export const deleteBoard = (id) => {
  return $.ajax ({
    method: 'DELETE',
    url: `/api/boards/${id}`
  });
};
window.deleteBoard = deleteBoard;
