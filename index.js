

async function deta() {
    let response = await fetch("https://fakestoreapi.com/products");
    let result = await response.json();
    return result;
}

async function show() {
    let result = await deta();

    let data = result.map((product) => {
        return `


            <div class="card">
            
        <img src="${product.image}" alt="${product.title}">
            <h3>${product.title}</h3>
            <p class="description">${product.description}</p>
             <p class ="price">Price: $${product.price}</p>

             <div class ="btn">

             <button class="ab">Add to cart</button>
            <button class="bb">Buy Now</button>
             </div>
            


             
             
             
             
        </div>


`;
    });

    document.getElementById("root").innerHTML = data.join("");
}

show();



function btn() {
    document.getElementById("nav-links").classList.toggle("show");
}
