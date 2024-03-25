import { createContext, useState } from "react";
import Aunty from "../Aunty/Aunty";
import Dad from "../Dad/Dad";
import Uncle from "../Uncle/Uncle";
import './Grandpa.css'

// creating context 
export const AssetContext = createContext('gold');
export const MoneyContext = createContext(1000);


const Grandpa = () => {
    const asset = 'diamond';
    const [money, setMoney] = useState(1000);

    return (
        <div className="grandpa ">
            <h2>Grandpa</h2>
            <p>Net Money : {money}</p>
            {/* Adding provider for the context with a value , TOWER SETTING -> will receive all the signal*/}
            <MoneyContext.Provider value={[money, setMoney]}>
                <AssetContext.Provider value="gold">
                    <section className="flex">
                        <Dad asset={asset}></Dad>
                        <Uncle asset={asset}></Uncle>
                        <Aunty></Aunty>
                    </section>
                </AssetContext.Provider>
            </MoneyContext.Provider>

        </div>
    );
};

export default Grandpa;


/**
 * 1.Create context and Export it
 *  2.Add provider for the context with a value
 * 
 */