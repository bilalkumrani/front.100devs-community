import variables from "../scss/_variables.module.scss";

export const buttonStyle = {
  width: `50%`,
  height: 50,
  marginTop: 2,
  fontSize: 18,
  borderRadius: 10,
  backgroundColor: variables.primary,
  "&:hover": {
    backgroundColor: variables.primary,
  },
};

export const loginButtonStyle = {
  width: 200,
  height: 50,
  marginTop: 2,
  fontSize: 18,
  borderRadius: 10,
  backgroundColor: variables.primary,
  "&:hover": {
    backgroundColor: variables.primary,
  },
};
