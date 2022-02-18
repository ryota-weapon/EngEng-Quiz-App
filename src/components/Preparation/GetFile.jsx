import React from 'react'

function GetFile(props) {
    
    const convertFileToArray = (text)=>{
        const result = [];
        const rows = text.split("\r\n");
        const numberOfWords = 50;
        
        for (var i=0; i<numberOfWords; i++){
            var csList =  rows[i+1].split(",");
            result[i] = [];
            for (var j=0; j<csList.length; j++){
                if (csList[j][0] != "\"") result[i].push(csList[j])
                else{
                    var sentence = csList[j]; 
                    while (csList[j][csList[j].length-1] != "\""){
                        j += 1
                        sentence += "," + csList[j];
                    }
                    result[i].push(sentence.substring(1, sentence.length-1));
                }
            }
        }
        return result;
    }

    const readFile = (e) => {
        var file = e.target.files[0];
        var reader = new FileReader();
        reader.readAsText(file, "UTF-8");
        reader.onload = ()=> {
            var fileInfo = convertFileToArray(reader.result);    
            props.onLoadFunc(fileInfo);
        }
    }

    return (
    <div>
        <input 
            type="file" 
            onChange = {readFile}
        />
    </div>
  )
}

export default GetFile