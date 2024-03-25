import { useContext } from "react";
import { AssetContext } from "../Grandpa/Grandpa";


const Special = ({asset}) => {
    //  useContext use for receiving the value from the Provider tower
    const gift = useContext(AssetContext);
    return (
        <div>
            <h2>Special</h2>
            <p> has a {asset}</p>
            <p>also has a {gift}</p>
            
            
        </div>
    );
};

export default Special;