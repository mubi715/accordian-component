import { useState } from "react";
import "./App.css";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus."
  },
  {
    title: "How long do I have to return my chair?",
    text:
      "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus."
  },
  {
    title: "Do you ship to countries outside the EU?",
    text:
      "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!"
  }
];

export default function App() {
  return (
    <div>
      <Accordion data={faqs}/>
    </div>
  );
}

function Accordion({data}) {
  const[curNum,curOpen]=useState(1);
  return <div className="accordion">
    {data.map((el,i)=><AccordianItems curNum={curNum} onCurOpen={curOpen} title={el.title} num={i} key={i}>{el.text}</AccordianItems>)}
     
    </div>;
}
function AccordianItems({num,title,text,curNum,onCurOpen,children}){
  const isOpen=num===curNum;
  //const[isOpen,setOpen]=useState(false);
  function handleTougle(){
    onCurOpen(isOpen? null:num)
    //setOpen((isOpen)=>!isOpen)
  }
  return(
    <div className={`item ${isOpen?"open":""}`} onClick={handleTougle}>
      <p className="number">{num<9 ?`0${num+1}`:num+1}</p>
      <p className="text">{title}</p>
      <p className="icon">{isOpen?"-":"+"}</p>
     { isOpen&&<div className="content-box">{children}</div>}
    </div>
  )
}