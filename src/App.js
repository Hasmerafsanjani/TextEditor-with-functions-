import { useState , useReducer, useRef} from 'react';
import './App.css';
import Navbar from './Components/Navbar';

 const initialState = {
  text:"",
  preview:""
 }

 const reducer = (state , action ) => {
   switch (action.type){
    case"SET_TEXT":
      return{...state, text: action.payload , preview:action.payload};
    case"makeUppercase":
       return{...state,preview:state.text.toUpperCase()};

    case"makeLowercase":
      return{...state,preview:state.text.toLowerCase()};

    case"clearText":
      return{...state,text:"" , preview:""};

    case"copyToClip":
         navigator.clipboard.writeText(state.preview)
      return state;

    case"removeSpace":
        const newText = state.text.replace(/\s+/g, ' ')
       return {...state,text:newText,preview:newText};
    default:
      return state;
   }
 }

function App() {

  const [wordCount, setWordCount] = useState(0);
  const [charCount, setCharCount] = useState(0);
  const [readingTime, setReadingTime] = useState(0);

  const [state,dispatch] = useReducer(reducer,initialState);
  const inputref = useRef(null);



    // const word = state.text.split(/\s+/).filter((word)=>word!=="").length
    //  const chatr = state.text.length;
    //  const readingTime = Math.ceil((state.text.split(/\s+/).filter((word)=>word!=="").length)/200);

  // const [inputValue, setInputValue] = useState('');


  // // Function to handle input changes
  // const InputChange = (event) => {
  //   const value = event.target.value;
  //   setInputValue(value);
  // };

  // // Function to convert input to uppercase on button click
  // const UpperConvertClick = () => {
  //   const uppercaseValue = inputValue.toUpperCase();
  //   setInputValue(uppercaseValue);
  // };
  // // onclick event function
  // onClick={UpperConvertClick}

  // // Function to convert input to lowercase on button click
  // const lowerConvertClick = () => {
  //   const lowercaseValue = inputValue.toLowerCase();
  //   setInputValue(lowercaseValue);
  // };
  //   // onclick event function
  //   onClick={lowerConvertClick}

  
  // // Function to convert removeExtraSpace 
  // const removeExtraSpace = () => {
  //   const trimspac = inputValue.trim();
  //   setInputValue(trimspac);
  // }
  // onClick={removeExtraSpace}



  // const 
 
  return (
    <div>
      <Navbar/>
      <div className='flex flex-col gap-2 m-auto'>
      <h1 className='md:text-3xl lg:text-4xl sm:text-2xl font-bold text-center pt-4'>Text Editor with  Word Counter, Charecter Counter, Remove Extra Space</h1>

      <textarea 
       cols={100}
       rows={5}
       ref={inputref }
       onChange={(e)=>dispatch({type:"SET_TEXT",payload:e.target.value})}
       value={state.text}
       placeholder='Write here'
       className='rounded-lg p-3 mx-auto resize-none bg-slate-300'
      ></textarea>


      <section className='flex justify-center'>

        <button onClick={()=>dispatch({type:"makeUppercase"})} className='p-1  bg-blue-500 m-1 rounded-xl px-3 font-bold text-white' >Make Uppercase</button>

        <button onClick={()=>dispatch({type:"makeLowercase"})}   className='p-1  bg-cyan-500 m-1 rounded-xl px-3 font-bold text-white' >Make Lowercase</button>

        <button onClick={()=>dispatch({type:"removeSpace"})}  className='p-1  bg-yellow-700 m-1 rounded-xl px-3 font-bold text-white' >Remove Extra Space</button>

        <button onClick={()=>dispatch({type:"clearText"})}  className='p-1  bg-red-500 m-1 rounded-xl px-3 font-bold text-white' >Clear Text</button>

        <button onClick={()=>dispatch({type:"copyToClip"})}  className='p-1  bg-green-500 m-1 rounded-xl px-3 font-bold text-white' >Copy To Clipboard</button>

      </section>
      <div className='flex justify-center text-white'>
        <div>
        <h2 className='font-bold md:text-3xl lg:text-3xl sm:text-2xl '>Text Summery </h2>
      <p>  Number of words : {state.text.length} </p>
    <p>  Number of charecters  : {state.text.split(/\s+/).filter((word)=>word!=="").length} </p>
    <p>  Reading Time : {readingTime} </p>
        </div>
      </div>
      <div className='flex justify-center flex-col items-center'>
        <p className='text-center font-bold text-3xl text-yellow-300'> Preview</p>
      <preview className="bg-cyan-600 h-44 p-2 rounded-xl w-[780px] text-xl "> {state.preview}
      </preview>
      </div>
    
      </div>
    </div>
  );
}

export default App;
