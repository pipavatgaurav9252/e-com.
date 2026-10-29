
async function deta() {
    let response = await fetch('https://fakestoreapi.com/products');
    response = await response.json();
    return response;
    
}

