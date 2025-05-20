// auxiliar
function Cup({ guest }){
    return <h2>Tea cup for guest #{guest}</h2>
  }
  
  export function TeaSet(){
    let cups = [];
  
    for(let i = 1; i <= 5; i++){
      cups.push(<Cup key={i} guest={i}/>)
    }
    
    return(
      cups
    );
  }
  
  export function Recipe({drinkes, guest}){
    return (
      <>
        <ul>
          <li>Boil {drinkes} cups of water</li>
          <li>Add {drinkes} spoons of tea and {0.5 * drinkes} spoons of spice</li>
          <li>Add {0.5 * drinkes} cups of milk to boil and sugar to taste;</li>
        </ul>
      </> 
    );
  }