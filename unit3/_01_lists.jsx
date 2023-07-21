//-------------- Lists -------------- //

/*

Lists are mainly used for diplaying menus in a website, for example, the navbar menu. In regular javscript, we can use arrays for creating lists. We can create lists in React in a similar manner as we do in regualr JavaScript.

*/

const numbers = [1, 2, 3, 4, 5];

const updateNumbers = () => numbers.map((number) => {
    return <li>{number + 1}</li>;
})

//the list is finally returned to updateNumbers in form of unordered list

/*

output ->


. 2
. 3
. 4
. 5
. 6

*/

//Rendering lists inside components

/*
Consider the example of a Navigation Menu. In any website any navigation menu will not be harg coded. This item is fetched from the database and then displayed as lists in the browser. So form the component's point of view, we can say that we will pass a list to component using props and then use this component to render list to DOM.

We can update the above code in which we directly rendered the list to now a component that will accept an array as props and returns an unordered list.
*/

function Navmenu(props){
    const list  = props.menuitems;

    const updatedList = list.map((listItems) => {
        return <li>{listItems}</li>
    })

    return <ul>{updatedList}</ul>
}

const menuItems = [1,2,3,4,5];

ReactDOM.render(
    <Navmenu menuItems={menuItems} />,
    document.getElementById('root')
)

