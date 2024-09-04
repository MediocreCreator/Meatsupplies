function showStock(productId) {
    const stockInfo = document.getElementById(`${productId}-stock`);
    if (stockInfo.style.display === 'none' || stockInfo.style.display === '') {
        stockInfo.style.display = 'block';
    } else {
        stockInfo.style.display = 'none';
    }
}
