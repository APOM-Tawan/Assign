import Card from "./Card";

function List() {
    const person = [ 
    {Name:"Tawan", job:"Singer", hobby: "Listen to music"},
    {Name:"Mark", job:"Accountant", hobby: "Play football"},
    {Name:"Jay", job:"Steward", hobby: "Play football"},
    {Name:"IT", job:"Programmer", hobby: "Play football"},
];
    return (
       <>
       {person.map((e) => {
        return <Card name={e.Name} job={e.job} hobby={e.hobby}></Card>
       }
       )}
       </>
    )
}
export default List;
