import React from 'react';
import ReactDOM from 'react-dom/client';
import "./index.css";
function Header(){
  return <h1 style={{color:'orange',fontsize:'48px',textTransform:'uppercase'}}>Myu's Pizza Co</h1>;
}

function Pizza(){
  return(
    <div className='container'>
      <img src="/pizzas/spinaci.jpg" alt="Spinaci Pizza"></img>
      <h3>Name:"Pizza Spinaci"</h3>
      <p>Ingredients:"Tomato,mozarella,spinach, and ricotta cheese"</p>
      <p>Price:10</p>
      
    </div>
  )
}

function Menu(){
  return(
    <div className='menu'>
      <Pizza/>
      <Pizza/>
    </div>
  )
}

function Footer() {
  const currentHour = new Date().getHours();
  const isOpen = currentHour >= 10 && currentHour < 22;

  return (
    <footer className='footer'>
      {isOpen ? "We're currently open." : "Sorry we're closed."}
    </footer>
  );
}


function App(){
  return(
    <div>
      <Header/>
      <Menu/>
      <Footer/>
      </div>
  );  
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
