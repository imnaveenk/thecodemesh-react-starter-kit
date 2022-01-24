import React from "react";

const Home = () =>{
  return (
    <React.Fragment>
      <div className="flex flex-col text-center justify-center items-center h-70v">
      <div>Hello, from <b>TheCodeMesh</b>. Start your first integration <a className="text-blue-500 hover:text-blue-700" href="https://www.thecodemesh.com">here</a></div>
      <div>We have some samples create, explore <a className="text-blue-500 hover:text-blue-700" href="">here</a></div>
      <div>Reach us out for your queries       <a target="_blank" className="text-blue-500 hover:text-blue-700" href={"https://wa.me/919310586024/?text=Hi, I need assistance to setup integration."} title={"Contact us"}>here</a></div>
      </div>
    </React.Fragment>
  )};
;
export default Home;
