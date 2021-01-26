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
