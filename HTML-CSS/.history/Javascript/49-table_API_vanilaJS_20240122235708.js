const getProducts = async () => {
    const $tableBody = document.querySelector('tbody');
    const response = await fetch('https://dummyjson.com/products');
    const { products } = await response.json();
    let html = '';
    for (const product of products){
        html += `
        <tr>
            <td>
                <img src="${product.images[0]}"
                alt="${product.description}">
            </td>
            <td>${product.title}</td>
            <td>${product.price}</td>
        </tr>
        `; 
    }
    $tableBody.innerHTML = html;
};