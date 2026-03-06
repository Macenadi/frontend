async function fetchProductData() {
   try {
       // The 'await' keyword pauses execution until the fetch Promise resolves
       const response = await fetch("data/products.json");
       if (!response.ok) {
          // If response has an error status code, log a message
          // This handles cases like 404 (not found), 500 (server error), etc.
          console.log(`Network response was not ok - Status: ${response.status} ${response.statusText}`);
          return; // Stop executing the function if there was an error
        }
        else {
          // For successful responses, convert the response object to a parsed JavaScript object
          const data = await response.json();
          // Output the parsed user data object to the console
          console.log(data);
          displayProducts(data);
        }
    } // End try block
    catch (error) {
        // Catch network errors, JSON parsing errors, or any other exceptions
        console.error(`Error fetching product data: ${error}`);
    }
}

fetchProductData();



// Function to handle the DOM output
function displayProducts(productsArray) {
    const container = document.getElementById("products-container");
    let htmlOutput = "";

    // Loop through each product in the array
    productsArray.forEach(product => {
        // Build the HTML string using compound assignment operator and template literals
        htmlOutput += `
            <p><b>${product.name}</b>  Price: $${product.price}  In Available?: ${product.inStock}</p>
        `;
    });

    // Output the final HTML to the page
    container.innerHTML = htmlOutput;
}



