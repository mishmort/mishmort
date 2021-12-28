import {
    Globe,
    Knowledge, 
    Spinny, 
    Mish, 
    Game, 
    SpinText, 
    Graph, 
    Pins,
    Canvas} from "./Stats"



/* ｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨｡･:*:･ﾟ★💕｡･:*:･ﾟ☆✨ */

const Home = ({reloadtimer}) => {
    
    return ( <div className="home">

        <div className="allstats">

                <Globe reloadtimer={reloadtimer}/>
                <Knowledge reloadtimer={reloadtimer}/>
                <Spinny reloadtimer={reloadtimer}/>

                <Canvas reloadtimer={reloadtimer}/>
                <Mish reloadtimer={reloadtimer}/>
                <Game reloadtimer={reloadtimer}/>
                
                <SpinText reloadtimer={reloadtimer}/>
                <Graph reloadtimer={reloadtimer}/>
                <Pins reloadtimer={reloadtimer}/>

        </div>

    </div> );
}
 
export default Home;