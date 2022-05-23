import React from 'react';
import './Mypage.css';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

const currencies = [
  {
    value: 'USD',
    label: '초급',
  },
  {
    value: 'EUR',
    label: '중급',
  },
  {
    value: 'BTC',
    label: '고급',
  },
  {
    value: 'JPY',
    label: '마스터',
  },
];

const skill = [
  {
    value: 'USD',
    label: '프론트엔드',
  },
  {
    value: 'EUR',
    label: '백엔드',
  },
  {
    value: 'BTC',
    label: '디자인',
  },
  {
    value: 'JPY',
    label: '기획',
  },
];

function Header(){
  return (
  <header>
    <h1>Mypage</h1>
  </header>
  );
}

function Nav(){
  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    
  return(
    <nav className="nav">
      <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
        <Tab icon={<PersonPinIcon />} label="개인정보" />
        <Tab icon={<FavoriteIcon />} label="프로젝트" />
      </Tabs>
    </nav>
  );
}

function Profile(){
  return(
    <info className="info">
      <Stack direction="row" spacing={2}>
      <Avatar alt="Remy Sharp"
       src="../img/github.png"
       sx={{ width: 200, height: 200 }}
        />
    </Stack>
    </info>
  );
}

function Name(){
  return(
    <div className="info">
      <div className="name">
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField id="outlined-basic" label="성(First Name)" variant="outlined" />
        <TextField id="outlined-basic" label="이름(Last Name)" variant="outlined" />
        </Box>
        </div>
      
    </div>
    
  );
}

function Email(){
  return(
    <div className="info">
      <div className="name">
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '52ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField fullWidth label="이메일(E-mail)" id="fullWidth" />
        </Box>
        </div>
      
    </div>
    
  );
}

function Job(){
  const [currency, setCurrency] = React.useState('EUR');

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  return(
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={currency}
          onChange={handleChange}
          helperText="Please select your skillset"
        >
          {skill.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          id="outlined-select-currency-native"
          select
          label="레벨"
          value={currency}
          onChange={handleChange}
          SelectProps={{
            native: true,
          }}
          helperText="Please select your currency"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </div>
    </Box>
  );
}


export default function App() {
  return (
    <div>
      <Header></Header>
      <Nav></Nav>
      <Profile></Profile>
      <Name></Name>
      <Email></Email>
      <Job></Job>
      
    </div>
  );

}