
//DOM

// let root = document.getElementById("root");

// let h1 = document.createElement("h1");

// h1.innerText = "hello from DOM"

// root.appendChild(h1);

// --------------------------------------------

// REACT

// let root = document.getElementById("root");

// // let h1 = React.createElement('h1' , null , "hello from React"); // {id:"sam" , class:"vohra"}
// let h1 = React.createElement('h1' , {id:"sam", class:"vohra"} , "hello from React"); // {id:"sam" , class:"vohra"}

// let rootEl = ReactDOM.createRoot(root)

// rootEl.render(h1)

// --------------------------------------------

// let root = document.getElementById("root");

// let divv = React.createElement('div', null, 
//     React.createElement("div", null, 
//         React.createElement("h1", null, "hello from div h1")
//     )
// );

// let rootEl = ReactDOM.createRoot(root)

// rootEl.render(divv)

// --------------------------------------------

// let root = document.getElementById("root");

// let divv = React.createElement('div', null, [
//     React.createElement('div', null, [
//         React.createElement('h1', null, "hello from h1.1"),
//         React.createElement('p', null, "hello from p1.1")
//     ]),
//     React.createElement('div', null, [
//         React.createElement('h1', null, "hello from h1.2"),
//         React.createElement('p', null, "hello from p1.2")
//     ])
// ]);


// let rootEl = ReactDOM.createRoot(root)

// rootEl.render(divv)

// --------------------------------------------

let root = document.getElementById("root");

let divv =  <div>
                <div>
                    <h1>hello 1</h1>
                    <p>para 1</p>
                </div>
                <div>
                    <h1>hello 2</h1>
                    <p>para 2</p>
                </div>
            </div>


let rootEl = ReactDOM.createRoot(root)

rootEl.render(divv)