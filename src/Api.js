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

  getAccident() {
    return fetch(`${process.env.REACT_APP_BASE_URL}/v1/accident`);
  },

  getStatistic(token) {
    return fetch(`${process.env.REACT_APP_BASE_URL}/v1/statistic`, {
      headers: {
        authorization: `Bearer ${token}`,
      },
    });
  },
};

export default API;
