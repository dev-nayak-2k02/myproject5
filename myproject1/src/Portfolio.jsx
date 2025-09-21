import About from "./About";
import HeaderFunction from "./Header";
import Skill from "./Skills";

export default function Portfolio({name,para,abt,list1,list2,list3}){
    return(
        <>
            <h1>Name = {name}</h1>
            <p>tag = {para}</p>
            <h2>Desc = {abt}</h2>
            <ul>
                <li>{list1}</li>
                <li>{list2}</li>
                <li>{list3}</li>
            </ul>
        </>
    );
}