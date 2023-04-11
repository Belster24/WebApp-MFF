

function About({counter, onDecrement}) {


  return (
    <div className='something'>
     
      <p>Counter value: {counter}</p>
      <button className="btn btn-danger" onClick={onDecrement}>Decrement</button>
    </div>
  );
}
  
  export default About;
  