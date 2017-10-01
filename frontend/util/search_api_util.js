export const fetchSearch = search => {
  return $.ajax({
    method: 'GET',
    url: 'api/searches',
    data: { search }
  });
}; //end fetchSearch
