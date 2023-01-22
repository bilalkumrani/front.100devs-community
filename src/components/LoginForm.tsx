import * as React from "react";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Box,
} from "@mui/material";

// icons
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

// scss
import main from "./scss/main.module.scss";
import { loginButtonStyle } from "../global/styleVar";

interface ILoginFormProps {}

const LoginForm: React.FunctionComponent<ILoginFormProps> = (props) => {
  const [password, setPassword] = React.useState("");
  const [isShowPwd, setIsShowPwd] = React.useState(false);
  const [email,setEmail] = React.useState(false);
  const [chk,setChk] = React.useState(false);


  //handlers
  const passwordHandler = (event: any) => setPassword(event.target.value);
  const emailHandler = (event: any) => setEmail(event.target.value);

  const handleClickShowPassword = () => setIsShowPwd(!isShowPwd);
  const handleMouseDownPassword = (event: any) => event.preventDefault();

  const formFieldWidth = 330;


  const handleSubmit = async (): Promise<void> =>{
    

    try {
      
          const response = await window.fetch(`${process.env.API_URL}/login`, {
          
          method: 'POST',
          headers: {
            'content-type': 'application/json;charset=UTF-8',
          },
          body: JSON.stringify({
            email,
            password
          }),
        })

        response.json().then(res =>{ 
          console.log(res)
          if(chk){
            localStorage.setItem('token',res.token)
          }
          
          window.location.href = res.url;
        
        })

    } catch (error) {
          console.log(error)
    }

  }


  return (
    <div className={main.formBox}>
      <div className={main["row-item-center"]}>
        <TextField
          id="outlined-basic"
          sx={{ width: formFieldWidth }}
          label="Email"
          onChange={emailHandler}
          variant="outlined"
          required
        />
      </div>
      <div className={main["row-item-center"]}>
        <FormControl required sx={{ width: formFieldWidth }} variant="outlined">
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
      </div>

      <div className={main["row-item-center"]}>

       <div style={{display:"flex", justifyContent:"center"}}>
       
          <Button variant="contained" size="large" sx={loginButtonStyle} onClick={handleSubmit}>
            Log In
          </Button>
        
       </div>

      </div>
{/* 
      <div className={main["row-item-center"]}>

              <input type="checkbox" id="rememberMe" name="rememberMe" checked={chk} onChange={()=>{

              setChk(check=>{
                check=!chk
                console.log(check)
                return check
              })

              }}/>

              <InputLabel htmlFor="outlined-adornment-password">
                  Remember Me
                </InputLabel> 

      </div> */}

     
      
    </div>
  );
};

export default LoginForm;
