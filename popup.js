document.addEventListener("DOMContentLoaded", () => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
        chrome.tabs.sendMessage(tabs[0].id, { action: "getProductInfo" }, (response) => {
            if (response) {
                document.getElementById("product-name").innerText = response.productName;
                document.getElementById("product-price").innerText = response.productPrice;
                document.getElementById("product-image").src = response.productImageUrl;
            } else {
                document.getElementById("product-name").innerText = "No product information found.";
                document.getElementById("product-price").innerText = "";
            }
        });
    });
});
