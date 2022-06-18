import React from 'react';
import Father from '../Father/Father';
import Uncle from '../Uncle/Uncle';
import Aunt from '../Aunt/Aunt';
import './Grandpa.css';
import { useState } from 'react';
import { createContext } from 'react';

/* ---------------------------------------------------------------------------------
------------------ notes on context api (different steps) ------------------
1. call createContext with a different value
2. set a variable of the context (e.g. RingContext)\
3. MUST export the context to use in other places
4. Wrap your child content using RingContext.Provider
5. Provide a value
6. To consume the Context from Child Component
  i) useContext hook
  ii) pass the Context name
7. MUST take notes
--------------------------------------------------------------------------------- */

// Let's use Context API as prop drilling is cumbersome!
// create & export Context API (export na krle use krte parbo NAA)
export const RingContext = createContext('diamond');
// here, 'diamond' is default value


const Grandpa = () => {
  const [house, setHouse] = useState(30);

  const [ornament, currency] = ['Diamond Ring', 'Bitcoin'];

  const handleBuyHouse = () => {
    const newHouse = house + 15;
    setHouse(newHouse);
  }

  return (
    // let's set the context now
    // *** amra jeita shob jaygay provide krte chai, setai Context Provider er vitore rakhbo; ekhn Grandpa theke father hoye, then amr thorugh te special k prop drilling er maddhome kisu pathano khub e difficult; tai Grandpa theke sobai jno easily sbkisu paay tai daddu (Grandpa) k Context Provider er vitore rakhlam
    // <RingContext.Provider value={[ornament, currency]}>
    <RingContext.Provider value={[house, setHouse]}>
      {/* several values pathaite chaile array akare pathaite hbe */}
      <div className='grandpa'>
        <h4>Grandpa</h4>
        <button onClick={handleBuyHouse}>Buy House</button>
        <h5>House: { house }</h5>
        <div>
          <Father house={house} />
          <Uncle house={house} />
          <Aunt house={house} />
        </div>
      </div>
    </RingContext.Provider>
  );
};

export default Grandpa;