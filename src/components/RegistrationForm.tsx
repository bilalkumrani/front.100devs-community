import * as React from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
} from "@mui/material";
// scss
import main from "./scss/main.module.scss";


import { buttonStyle } from "../global/styleVar";

// icons
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import { useNavigate } from "react-router-dom";



const RegistrationForm = () => {
  const [password, setPassword] = React.useState("");
  const [isShowPwd, setIsShowPwd] = React.useState(false);
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const [isShowConfirmPwd, setIsShowConfirmPwd] = React.useState(false);
  const [data, setData] = React.useState({
    firstName:"", lastName:"", email:"",
  })
  const navigate = useNavigate();
  const handleChange = (event: any) =>{
    const {name, value} = event.target;
    setData((state: any)=>{
      return {
        ...state,
        [name]:value
      }
    })
  }

  const handleSubmit = async (): Promise<void> =>{
    const {firstName, lastName, email, } = data;

    const response = await fetch(`${process.env.REACT_APP_API_URL}/register`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json;charset=UTF-8',
    },
    body: JSON.stringify( {
      firstName, lastName, email , password,
     }),
  })
  response.json().then(res =>{ navigate("/login")}).catch(err => console.log(err))

  }


  const passwordHandler = (event: any) => setPassword(event.target.value);
  const confirmPasswordHandler = (event: any) =>
    setConfirmPassword(event.target.value);
  const handleClickShowPassword = () => setIsShowPwd(!isShowPwd);
  const handleMouseDownPassword = (event: any) => event.preventDefault();
  const handleClickShowConfirmPassword = () =>
    setIsShowConfirmPwd(!isShowConfirmPwd);
  const handleMouseDownConfirmPassword = (event: any) => event.preventDefault();

  return (
    
    <div className={main.formBox}>

      <div className={main.row}>
        <TextField
          id="outlined-basic"
          sx={{ width: 290 }}
          label="First Name"
          variant="outlined"
          name="firstName"
          onChange={handleChange}
          required
        />
        <TextField
          sx={{ width: 290 }}
          id="outlined-basic"
          label="Last Name"
          variant="outlined"
          name="lastName"
          onChange={handleChange}
          required
        />
      </div>
      <div >
        <TextField style={{width: 610, marginBottom: 10}}
          id="outlined-basic"
          sx={{ width: 290 }}
          label="Email"
          variant="outlined"
          name="email"
          onChange={handleChange}
          required
        />
      </div>
      <div className={main.row}>
        <FormControl required sx={{ width: 290 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={isShowPwd ? "text" : "password"}
            value={password}
            onChange={passwordHandler}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {isShowPwd ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>
        <FormControl required sx={{ width: 290 }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Confirm Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={isShowConfirmPwd ? "text" : "password"}
            value={confirmPassword}
            onChange={confirmPasswordHandler}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowConfirmPassword}
                  onMouseDown={handleMouseDownConfirmPassword}
                  edge="end"
                >
                  {isShowConfirmPwd ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
            label="Confirm Password"
          />
        </FormControl>
      </div>
      <div style={{display:"flex", justifyContent:"center"}}>
      <Button onClick={handleSubmit} variant="contained" sx={buttonStyle} fullWidth>
        Register Account
      </Button>
      </div>
    </div>
    
  );
};

export default RegistrationForm;
