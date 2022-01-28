import './component.css';
function People({setpeople}) {
  const {people, setPeople} = setpeople;
  
  return (
      <div className='people'>
        <p>Personas: 
          <button onClick={()=>setPeople((p)=>p-=1)}>-</button> 
          <input type="text" 
              value={people} 
              onChange={(e)=>{
                (e.target.value >= 0 && parseInt(e.target.value) !== 0) ? 
                setPeople(e.target.value) : setPeople(1);
              }} 
          />
          <button onClick={()=>setPeople((p)=>p+=1)}>+</button>
        </p>
      </div>);
}

export default People;