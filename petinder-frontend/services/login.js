const API_TOKEN = "XXXXXXX-XXXXXXXX";

const login = (formData) => {
  return new Promise((resolver, reject) => {
    return resolver(API_TOKEN);
  });
};

export default { login };
