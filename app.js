const products = [
    { id: 1, name: "Producto 1", price: 100, description: "Descripción 1", image: "https://dl.dropboxusercontent.comscl/fi/woy3wurd6bwxgonm27tk7/San-Cayetano.png?rlkey=ucgzjtd9fedgy0dsc2uo4yowo&st=2erpfhfp&dl=0" },
    { id: 2, name: "Producto 2", price: 200, description: "Descripción 2", image: "https://via.placeholder.com/150" },
    { id: 3, name: "Producto 3", price: 150, description: "Descripción 3", image: "https://via.placeholder.com/150" }
];

let cart = [];
let orderNumber = 1; // Inicializar número de orden en 1

// Función para reiniciar el número de orden a las 13:00 hs
function checkForOrderReset() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    
    // Reiniciar el contador si es exactamente las 13:00 hs
    if (currentHour === 13 && currentMinutes === 0) {
        orderNumber = 1; // Reiniciar número de orden a 1
        console.log('Número de orden reiniciado a 1.');
    }
}

// Ejecutar checkForOrderReset cada minuto para verificar la hora
setInterval(checkForOrderReset, 60000);

function displayProducts() {
    const productList = document.getElementById('product-list');
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('col-md-4', 'mb-4');
        productDiv.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text">Precio: $${product.price}</p>
                    <button class="btn btn-primary" onclick="addToCart(${product.id})">Agregar al carrito</button>
                </div>
            </div>
        `;
        productList.appendChild(productDiv);
    });
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    alert(`${product.name} ha sido agregado al carrito.`);
}

function viewCart() {
    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = ''; // Limpiar carrito
    cart.forEach(item => {
        const li = document.createElement('li');
        li.classList.add('list-group-item', 'd-flex', 'justify-content-between', 'align-items-center');
        li.innerHTML = `
            ${item.name} (x${item.quantity}) - $${item.price * item.quantity}
            <span>
                <button class="btn btn-sm btn-outline-secondary" onclick="increaseQuantity(${item.id})">+</button>
                <button class="btn btn-sm btn-outline-secondary" onclick="decreaseQuantity(${item.id})">-</button>
                <button class="btn btn-sm btn-outline-danger" onclick="removeFromCart(${item.id})">Eliminar</button>
            </span>
        `;
        cartItems.appendChild(li);
    });
    const cartModal = new bootstrap.Modal(document.getElementById('cartModal'));
    cartModal.show();
}

function increaseQuantity(productId) {
    const product = cart.find(item => item.id === productId);
    product.quantity += 1;
    viewCart();
}

function decreaseQuantity(productId) {
    const product = cart.find(item => item.id === productId);
    if (product.quantity > 1) {
        product.quantity -= 1;
    } else {
        removeFromCart(productId);
    }
    viewCart();
}

function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    viewCart();
}

function sendWhatsAppMessage() {
    if (cart.length === 0) {
        alert('No hay productos en el carrito.');
        return;
    }

    let message = 'Pedido de Mostachos:\n\n';
    let total = 0;

    cart.forEach(item => {
        message += `- ${item.name} (x${item.quantity}) - $${item.price * item.quantity}\n`;
        total += item.price * item.quantity;
    });

    message += `\nTotal del pedido: $${total}\n`;

    

    const isDelivery = document.getElementById('delivery-option').checked;
    if (isDelivery) {
        message += 'Con envío a domicilio. Por favor, envíe su ubicación.';
    }

    const whatsappURL = `https://api.whatsapp.com/send?phone=5493794214144&text=${encodeURIComponent(message)}`;

    window.open(whatsappURL, '_blank');
}

document.getElementById('cart-button').addEventListener('click', viewCart);
displayProducts();
