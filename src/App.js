
import './App.css';
import Simpsons from "./components/simpsons/Simpsons";
import Character from "./components/character/Character";




function App() {
    return (
        <div>
            <h1>SIMPSONS</h1>
            <Simpsons/>


            <hr/>

            <Character
                id = {1}
                name={"Rick Sanchez"}
                status={"Alive"}
                species={"Human"}
                gender={"Male"}
                image={"https://rickandmortyapi.com/api/character/avatar/1.jpeg"}
            />

            <Character
                id={6}
                name={"Abadango Cluster Princess"}
                status={"Alive"}
                species={"Alien"}
                gender={"Female"}
                image={"https://rickandmortyapi.com/api/character/avatar/6.jpeg"}
            />

            <Character
                id={7}
                name={"Abradolf Lincler"}
                status={"unknown"}
                species={"Human"}
                gender={"Male"}
                image={"https://rickandmortyapi.com/api/character/avatar/7.jpeg"}
            />

            <Character
                id={8}
                name={"Adjudicator Rick"}
                status={"Dead"}
                species={"Human"}
                gender={"Male"}
                image={"https://rickandmortyapi.com/api/character/avatar/8.jpeg"}
            />

            <Character
                id={9}
                name={"Agency Director"}
                status={"Dead"}
                species={"Human"}
                gender={"Male"}
                image={"https://rickandmortyapi.com/api/character/avatar/9.jpeg"}
            />

            <Character
                id={10}
                name={"Alan Rails"}
                status={ "Dead"}
                species={ "Human"}
                gender={ "Male"}
                image={ "https://rickandmortyapi.com/api/character/avatar/10.jpeg"}
            />

        </div>
    );
}

export default App;