const token = localStorage.getItem('token');

const API = {
  createAccident(postValues) {
    return fetch(`${process.env.REACT_APP_BASE_URL}/v1/accident`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postValues),
    });
  },

  uploadPhoto(formData) {
    return fetch(`${process.env.REACT_APP_BASE_URL}/v1/upload`, {
      method: 'POST',
      body: formData,
    });
  },

  getLogin(inputValue) {
    return fetch(`${process.env.REACT_APP_BASE_URL}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(inputValue),
    });
  },

  //   getRegistration(obj) {
  //     return fetch(`${process.env.REACT_APP_BASE_URL}/register`, {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json',
  //       },
  //       body: JSON.stringify(obj),
  //     });
  //   },

  getAccident() {
    return fetch(`${process.env.REACT_APP_BASE_URL}/v1/accident`);
  },

  deleteAccident(id) {
    return fetch(`${process.env.REACT_APP_BASE_URL}/v1/accident/${id}`, {
      method: 'DELETE',
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
};

export default API;
