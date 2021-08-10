import axios from "axios";
import { Container } from '@material-ui/core';
import './App.css';
import { useEffect, useState } from "react";
import Header from "./components/Header/Header";
import Definitions from "./components/Definitions/Definitions"
import { withStyles } from '@material-ui/core/styles';
import { grey } from '@material-ui/core/colors';
import Switch from '@material-ui/core/Switch';

function App() {
  const[Meanings,setMeanings]=useState([]);
  const[word,setWord]=useState("");
  const[category,setCategory]=useState("en");
  const[LightMode,setLightmode]=useState();

const DarkMode= withStyles({
  switchBase: {
    color: grey[300],
    '&$checked': {
      color: grey[500],
    },
    '&$checked + $track': {
      backgroundColor: grey[500],
    },
  },
  checked: {},
  track: {},
})(Switch);

  useEffect(()=>{
    async function dictapi(){
      try{
        const data= await axios.get(`https://api.dictionaryapi.dev/api/v2/entries/${category}/${word}`);
        setMeanings(data.data);
        
        }
        catch(error){
          console.log(error);
        }
    }
  dictapi()
  },[word,category]);
  return (
    <div className="App" style={{backgroundColor:LightMode ? "#fff" : "#282c34",height:"100vh",width:"100%",color: LightMode ? "black" : "white"}}>
      <Container maxWidth='md' style={{display:"flex",flexDirection:"column",height:"100vh",justifyContent:"space-evenly"}}>
        <div style={{position:"absolute",top:0 , paddingTop:10,right:15}}>
          <span>{LightMode ? "Dark" : "Light"}Mode</span>
        <DarkMode onChange={()=>setLightmode(!LightMode)} checked={LightMode}></DarkMode>
        </div>
      <Header category={category} setCategory={setCategory} word={word} setWord={setWord} LightMode={LightMode}> </Header>
     { Meanings && (<Definitions word={word} category={category} Meanings={Meanings} LightMode={LightMode}> </Definitions>)}
      </Container>
    </div>
  );
}

export default App;
