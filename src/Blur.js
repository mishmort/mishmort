

import Blob from "./Blob";

const Blur = () => {

    const rnd = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    return ( 
    <div className="blur">
        {[...Array(10).keys()].map((id) => {
            const x = rnd(0, 100);
            const y = rnd(0, 100);
            return <Blob  id={id} x={x} y={y}></Blob>
        })}
    </div>
    );
}
 
export default Blur;