import React, { createContext, useState } from "react";
import Father from "./Father";

export const RingContext = createContext("gold");
export const MoneyContext = createContext(0);
const Grandpa = () => {
  const [money, setMoney] = useState(0);
  return (
    <div className="text-center my-12 mx-52 p-5 border-4 border-red-600">
      <MoneyContext.Provider value={[money, setMoney]}>
      <RingContext.Provider value="golden ring">
        <h1 className="font-bold text-2xl">Grandpa</h1>
        <p>Has money: {money}</p>
        <Father></Father>
      </RingContext.Provider>
      </MoneyContext.Provider>
    </div>
  );
};

export default Grandpa;
