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
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import Footer from '../Footer';
import Button from '@mui/material/Button';


<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>

const currencies = [
  {
    value: 'a',
    label: '초급',
  },
  {
    value: 'b',
    label: '중급',
  },
  {
    value: 'c',
    label: '고급',
  },
  {
    value: 'e',
    label: '쌉고수',
  },
];

const skill = [
  {
    value: 'a',
    label: '안드로이드',
  },
  {
    value: 'b',
    label: 'IOS',
  },
  {
    value: 'c',
    label: '디자인',
  },
  {
    value: 'e',
    label: '기획',
  },
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const names = [
  'C++',
  'JAVA',
  'JavaScript',
  'TypeScript',
  'React',
  'Spring',
  'Kotlin',
  'Mysql',
  'Nextjs',
  'Nodejs',
  'php',
  'python',
  'Swift',
  'Vue',
];


function Header(){
  return (
  <header>
    <h1>Mypage</h1>
  </header>
  );
}

function Nav(){
  
  // const [convertI,setConvertI] = React.useState(true);
  // const [convertP, setConvertP] = React.useState(false);
  // const onClickI = () =>{
  //   setConvertI(true);
  //   setConvertP(false);
  // };
  // const onClickP = () =>{
  //   setConvertI(false);
  //   setConvertP(true);
  // };

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
    
  return(
    <nav className="nav">
      
      {/* {convertI ? <div>hello</div>:<div>hellllllo</div>} */}
      <Tabs value={value} onChange={handleChange} aria-label="icon label tabs example">
        <Tab icon={<PersonPinIcon />} label="개인정보" />
        <Tab icon={<FavoriteIcon />} label="프로젝트" Link to="/Mypagelsit" />
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
      <div className="info">
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
    <div className='info'>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField id="outlined-basic" label="직무(ex.Front-end)" variant="outlined" />
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
    </div>
  );
}

function Selfintro(){
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return(
    <div className='info'>
      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 1, width: '80ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          
          <TextField
            id="outlined-multiline-static"
            label="자기소개"
            multiline
            rows={5}
            defaultValue="자신을 어필할 수 있는 자기소개를 입력해주세요."
          />
        </div>
        
      </Box>
    </div>
  );
}

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function MultipleSelectChip() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div className='info'>
      <FormControl sx={{ m: 1, width: 700 }}>
        <InputLabel id="demo-multiple-chip-label">기술(복수선택 가능)</InputLabel>
        <Select
          labelId="demo-multiple-chip-label"
          id="demo-multiple-chip"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
          renderValue={(selected) => (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
              {selected.map((value) => (
                <Chip key={value} label={value} />
              ))}
            </Box>
          )}
          MenuProps={MenuProps}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
        <div className="info">
        <Box
        component="form"
        sx={{
          '& > :not(style)': { m: 1, width: '79ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <TextField fullWidth label="포트폴리오(url)" id="fullWidth" />
        </Box>
        </div>

        <div className='btn'>
        <Button variant="outlined">수정하기</Button>
        </div>
        
      </FormControl>
    </div>
    
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
      <Selfintro></Selfintro>
      <MultipleSelectChip></MultipleSelectChip>
      <Footer></Footer>
    </div>
  );

}