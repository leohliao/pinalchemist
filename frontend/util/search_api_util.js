export const fetchSearch = search => {
  return $.ajax({
    method: 'GET',
    url: 'api/searchs',
    data: { search }
  });
}; //end fetchSearch
