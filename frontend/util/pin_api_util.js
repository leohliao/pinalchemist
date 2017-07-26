export const fetchAllPins = () => {
  return $.ajax({
    method: "GET",
    url: "/api/pins"
  });
};
window.fetchAllPins = fetchAllPins;

export const fetchSinglePin = (id) => {
  return $.ajax ({
    method: "GET",
    url: `/api/pins/${id}`
  });
};
window.fetchSinglePin = fetchSinglePin;

export const createPin = (pin) => {
  return $.ajax ({
    method: "POST",
    url: "/api/pins/",
    data: { pin }
  });
};

export const updatePin = (pin) => {
  return $.ajax ({
    method: "PATCH",
    url: `/api/pins/${pin.id}`,
    data: { pin }
  });
};

export const deletePin = (id) => {
  return $.ajax ({
    method: "DELETE",
    url: `/api/pins/${id}`
  });
};
