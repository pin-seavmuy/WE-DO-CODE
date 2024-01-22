const getProducts = async () => {
    const $tableBody = document.querySelector('tbody');
    const response = await fetch('https://dummyjson.com/products');
    const { product}
}