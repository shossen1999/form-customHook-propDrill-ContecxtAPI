import Cousin from "../Cousin/Cousin";


const Uncle = ({asset}) => {
    return (
        <div>
            <h2>Uncle</h2>
            <section className="flex">
            <Cousin name={'rafsan'} asset={asset}></Cousin>
            <Cousin name={'sajni'}></Cousin>
            </section>
        </div>
    );
};

export default Uncle;