const extractProductInfo = () => {
    const productName = document.querySelector('h1.product-name')?.innerText || 'N/A';
    const productPrice = document.querySelector('.price')?.innerText || 'N/A';
    const productImageUrl = document.querySelector('.product-image img')?.src || '';

    return { productName, productPrice, productImageUrl };
};

// Listen for messages from popup.js
chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.action === "getProductInfo") {
        const productInfo = extractProductInfo();
        sendResponse(productInfo);
    }
});
