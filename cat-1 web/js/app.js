let cart = [];

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    alert(`${productName} has been added to your cart.`);
    updateCart();
}

function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPrice = document.getElementById('total-price');
    
    if (cartItems && totalPrice) {
        cartItems.innerHTML = cart.map(item => `<p>${item.name} - $${item.price}</p>`).join('');
        const total = cart.reduce((sum, item) => sum + item.price, 0);
        totalPrice.innerText = total.toFixed(2);
    }
}

function checkout() {
    if (cart.length > 0) {
        alert('Thank you for your purchase!');
        cart = [];
        updateCart();
    } else {
        alert('Your cart is empty.');
    }
}
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const formMessage = document.getElementById('formMessage');

    // Simple Validation: Check if fields are filled
    if (name === '' || email === '' || phone === '') {
        formMessage.textContent = 'All fields are required.';
        return false;
    }

    // Check if the phone number is 10 digits
    if (!/^\d{10}$/.test(phone)) {
        formMessage.textContent = 'Phone number must be 10 digits.';
        return false;
    }

    formMessage.textContent = 'Form submitted successfully!';
    formMessage.style.color = 'green';

    // Perform further actions like saving the data or sending it to the server

    return false; // Prevent actual form submission for demonstration purposes
}
