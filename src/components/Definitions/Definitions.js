import React from 'react';
import './Definitions.css'

const box =({word,category,Meanings,LightMode})=>{
    
        return (
            <div className="meanings">
                {word && Meanings[0] && category==="en" && (<audio src={Meanings[0].phonetics[0] && Meanings[0].phonetics[0].audio} controls style={{width:"100%"}}></audio>)}
            { word === "" ? (<span className="subTitle">Start by typing a word</span>) :
            ( 
                Meanings.map((mean)=>(
                    mean.meanings.map((item)=>(
                        item.definitions.map((def)=>(
                            <div className="singleMeaning" style={{backgroundColor:LightMode? "#282c34" :"white",color:LightMode? "white" :"black"}}>
                                <b>{def.definition}</b>
                                <hr style={{backgroundColor:"black",width: '100%'}}></hr>
                                {def.example && (<span><b>Example :</b>{def.example}</span>)}
                                {def.synonyms && (<span><b>Synonym :</b> {def.synonyms.map ((s)=>`${s},`)}</span>)}
                            </div>
                        )
                    )
                    ))
               ) ))}
            </div>
        );
   
}

export default box;