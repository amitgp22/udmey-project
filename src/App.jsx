import { useState } from "react";
import Card from "./Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <h1 className="text-3xl font-bold text-center mt-4 text-green-500">My Profile</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
 <Card imgSrc={"girl.jpg"} name={"Amit Kumar"} title={"Software Engineer"}/>
   <Card imgSrc={"vicky.jpeg"} name={"Amit Kumar"} title={"Software Engineer"}/>
     <Card imgSrc={"img.jpg"} name={"Amit Kumar"} title={"Software Engineer"}/>
            <Card imgSrc={"vicky.jpeg"} name={"Amit Kumar"} title={"Software Engineer"}/>

       <Card imgSrc={"girl.jpg"} name={"Amit Kumar"} title={"Software Engineer"}/>
     <Card imgSrc={"img.jpg"} name={"Amit Kumar"} title={"Software Engineer"}/>
       <Card imgSrc={"vicky.jpeg"} name={"Amit Kumar"} title={"Software Engineer"}/>
       <Card imgSrc={"girl.jpg"} name={"Amit Kumar"} title={"Software Engineer"}/>
     <Card imgSrc={"vicky.jpeg"} name={"Amit Kumar"} title={"Software Engineer"}/>
       <Card imgSrc={"girl.jpg"} name={"Amit Kumar"} title={"Software Engineer"}/>
     <Card imgSrc={"img.jpg"} name={"Amit Kumar"} title={"Software Engineer"}/>
       <Card imgSrc={"girl.jpg"} name={"Amit Kumar"} title={"Software Engineer"}/>
     <Card imgSrc={"img.jpg"} name={"Amit Kumar"} title={"Software Engineer"}/>
    </div>
 

    </>
  );
}

export default App;
