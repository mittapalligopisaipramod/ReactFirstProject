import {useState} from 'react';
let array=[
  {id:1,question:'tell about react?',answer:'react is an library to develop a frontend application'},
  {id:2,question:'about props?',answer:'it allows parameters'},
  {id:3,question:'about state?',answer:'it is an handles state/functional components'}
];
// export default function App(){
//   let [state,setState]=useState(null);
//   function fun(id){
//     setState(id!==state?id:null);
//   }
//   return(
//     <>
//     <div>
//       {array.map((e)=>(<div onClick={()=>fun(e.id)}>{<p className={e.id===state?'red':''}>{e.id===state?e.answer:e.question}</p>}</div>))}
//     </div>
//     </>
//   )
// 
export default function App(){
  function fun(id){
    // alert(id);
    setUnique(id);
    if(unique2===false){
      setUnique2(true);
    }
    else{
      setUnique2(false);
    }
    //alert(unique);

  }
  let [unique,setUnique]=useState(null);
  let [unique2,setUnique2]=useState(false);
  return(
    <>
    <html>
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous"/>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ho+j7jyWK8fNQe+A12Hb8AhRq26LrZ/JpcUGGOn+Y7RsweNrtN/tE3MoK7ZeZDyx" crossorigin="anonymous"></script>
        <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js" integrity="sha384-9/reFTGAW83EW2RDu2S0VKaIzap3H66lZH81PoYlFhbGU+6BZp6G7niu735Sk7lN" crossorigin="anonymous"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/js/bootstrap.min.js" integrity="sha384-w1Q4orYjBQndcko6MimVbzY0tgp4pWB4lZ7lr30WKz0vr/aWKhXdBNmNb5D92v7s" crossorigin="anonymous"></script>
      </head>
      <body>
      <div class='container'>
        <div class='row'>
            {array.map((e)=>(
              <div className={`car col-4 ${unique===e.id && unique2?'red':'grey'}`} onClick={()=>fun(e.id)}> <p> {unique===e.id && unique2?e.answer:e.question} </p></div>
            ))};
          </div>
      </div>
      </body>
      </html>
    </>
  )
}