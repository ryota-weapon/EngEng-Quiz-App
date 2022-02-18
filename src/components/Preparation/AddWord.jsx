import { resolvePath } from "react-router-dom";
import {db} from "../../firebase.js";


const idOfLevel1 = "zcgruUpCVHWy3LBkgRO2";
const fileName = ".../public/NGSL_copy_to50.xlsx";



const AddWord = (props)=>{

    const addWordToDB = (words)=>{
        //words[i]
        //word: 0
        //meaning1: 4
        //meaning2: 5
        //meaning3: 6
        //example1: 7
        //example2: 8
        //example3: 9
        //linkOfSound: 10
        //phoneticSymbol: 11
        console.log("add " + words.length + " words")
        
        for (var i=0; i< words.length; i++){
        // for (var i=0; i< 2; i++){  //to test
            var info = words[i];
            const data = {
                category_id: idOfLevel1,
                chapter: Math.floor(i/5)+1 ,  //5個ずつ区切る

                word: info[0],
                meaning1: info[4],
                example1: info[7],
                meaning2: info[5],
                example2: info[8],
                meaning3: info[6],
                example13: info[9],
                linkOfSound: info[10],
                phoneticSymbol: info[11]
            };
            db.collection("problems").add(data);
        }
    };

    return (
        <div>
            <button onClick={()=>addWordToDB(props.wordInfo)}>
                Press to call function
            </button>
        </div>
    )
};


export default AddWord