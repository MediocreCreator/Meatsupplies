// Function to initialize stock quantities from local storage
function initializeStock() {
    const productIds = ['product1', 'product2', 'product3', 'product4', 'product5', 'product6']; // Add more product IDs as needed
    productIds.forEach(id => {
        const stockInput = document.getElementById(`${id}-stock`);
        const savedStock = localStorage.getItem(id);
        if (savedStock !== null) {
            stockInput.value = savedStock;
        }
    });
}

// Function to adjust stock and save to local storage
function adjustStock(productId, amount) {
    const stockInput = document.getElementById(`${productId}-stock`);
    let currentStock = parseInt(stockInput.value, 10);
    currentStock += amount;

    if (currentStock < 0) currentStock = 0; // Prevent negative stock

    stockInput.value = currentStock;
    localStorage.setItem(productId, currentStock); // Save to local storage
}

// Initialize stock on page load
document.addEventListener('DOMContentLoaded', initializeStock);
