import './index.css';
import { anime } from 'react-anime';

// // ｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨


const Blob = ({id}) => {

    const rnd = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1) + min);
    }
  
    const rndBorderRadius = () => 
    [...Array(4).keys()].map(() => rnd(10, 100) + "%").join(" ") +
    " / " +
    [...Array(4).keys()].map(() => rnd(10, 100) + "%").join(" ");


    const palette = ["#6C9AF3", "#BCC578", "#F69BC8", "#E6CF77", "#B396E2", "#010614"]
    const s = rnd(1,2)
    const color = palette[rnd(0, palette.length-1)];

    let blobstyle = {
        width: "300px",
        height: "300px",
        top: rnd(-20,100)+"%",
        left: rnd(0,100)+"%",
        transform: 'scale('+s+')',
        backgroundColor: color,
        opacity: ".5",
        position: "absolute",
        borderRadius: rndBorderRadius()
    }

    const first = (id) => {

        anime({
            targets: ".blob-"+id,
            translateX: rnd(-200,200),
            translateY: rnd(-200,200),
            scale: rnd(1.5, 2),
            duration: 500,
            easing: 'easeInOutQuad',
            complete: () => mov(id)
        })
    }

    const mov = (id) => {



        anime({
            targets: ".blob-"+id,
            translateX: rnd(-200,200),
            translateY: rnd(-200,200),
            scale: rnd(1.5, 2),
            duration: 20000,
            easing: 'easeInOutQuad',
            complete: () => mov(id)
        })
    }

    first(id)
    // mov(id);

    return (
        <div 
            className={"blob blob-"+id}
            style={blobstyle}
        ></div>   
    );
}
 
export default Blob;