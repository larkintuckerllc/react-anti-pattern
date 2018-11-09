module.exports = {
  parser: "babel-eslint",
  env: {
    browser: true,
  },
  extends: "airbnb",
  "rules": {
    "strict": 0,
    "react/prefer-stateless-function": [1, { ignorePureComponents: true }]
  },
};
