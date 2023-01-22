import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';

let obj = [{
  q:"Do I have to allow the use of cookes?",
  a:"Unicorn vinyl poutine brooklyn, next level direct trade iceland. Shaman copper mug church-key coloring book, whatever poutine normcore fixie cred kickstarter post-ironic street art."
  
},{
 q:"How do I change my My Page password?",
  a:"Coloring book forage photo booth gentrify lumbersexual. Migas chillwave poutine synth shoreditch, enamel pin thundercats fashion axe roof party polaroid chartreuse."
  
},{
  q:"What is BankID?",
  a:"Enamel pin fam sustainable woke whatever venmo. Authentic asymmetrical put a bird on it, lumbersexual activated charcoal kinfolk banjo cred pickled sartorial."
  
},{
  q:"Whose birth number can I use?",
  a:"Edison bulb direct trade gentrify beard lo-fi seitan sustainable roof party franzen occupy squid. Knausgaard cronut succulents, scenester readymade shabby chic lyft. Copper mug meh vegan gentrify."
  
},{
  q:"When do I recieve a password ordered by letter?",
  a:"Locavore franzen fashion axe live-edge neutra irony synth af tilde shabby chic man braid chillwave waistcoat copper mug messenger bag. Banjo snackwave blog, microdosing thundercats migas vaporware viral lo-fi seitan"
  
}];

function App(){

  let [q,setq] = useState(obj);
  let [sh,setsh] = useState([]);

  useEffect(()=>{

    let r = [];
    for(let x=0;x<obj.length;x++){

      r.push(false);

    }
    setsh(r);

  },[])
  


  if(q.length === 0){

    return <>
    <h1>Loading...</h1>
    </>
  }

  function showAns(i){

    let t = [];


    for(let x=0;x<obj.length;x++){

      if(x===i){
        t.push(!sh[x]);
      }else{
        t.push(sh[x]);
      }
    }


    setsh(t);

    

  }

  return <>
  <div className='whole'>
  <h2>Questions And Answers About Login</h2>
  {q.map((d,i)=>{

    return <div key = {i} className="inner">

      <h3>{d.q}</h3>
      <button type="button" className="btn" onClick={()=>{showAns(i)}}>{sh[i]?'-':'+'}</button>

      <div>{sh[i] && <h2>{d.a}</h2>}</div>

    </div>
  })}
  </div>
  </>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>

    <App />
    
  </React.StrictMode>
);
