# react_shopping_cart
Using React and Typescript to build small project for shopping cart


to declare an object type in ts for use in React

type NameOfTheObject = {
    key: type definition like number, string , bool .. etc
}


to use this type we use <NameOfTheObject>

now , what if we have a function that return a promise. This works when we have a async/await

```js
async function fetchData(): Promise<NameOfTheObject> {
    return await (await fetch("url")).json 
}

```
in this project, we are gonna use the React Query lib
it helps to fetch, synchronize , update and cache our remote data
It has a lot of hooks


useQuery() is function used to register your data fetching code into React-Query lib
it takes an arbitrary key and an async function

```js
import {useQuery} from "react-query"

function Comp(){
    // {data, isLoading , error} are built in the hook 
    // imagine if we dont use this lib , this would take 3 useState
    
    const {data, isLoading , error} = useQuery("key name" , async fun)
}
```
