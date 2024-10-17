const products = [
    { id: 1, name: "Hamburguesa Comun", price: 1500, description: "Pan,mayonesa, lechuga, tomate, carne, queso, jamon (opcional a pedir: Salsa de ajo, salsa criolla)", category: "Hamburguesas" },
    { id: 2, name: "Hamburguesa Especial", price: 2000, description: "Pan, mayonesa, lechuga, tomate, carne, queso,huevo, jamon (opcional a pedir: Salsa de ajo, salsa criolla)", category: "Hamburguesas" },
    { id: 3, name: "Hamburguesa Super", price: 2500, description: "Pan, mayonesa, lechuga, tomate, carne x2, queso x2, morron,huevo, jamon, mostaza (opcional a pedir: Salsa de ajo, salsa criolla)", category: "Hamburguesas" },
    { id: 4, name: "Pizza Comun", price: 3200, description: "Salsa, queso, trozo de jamon, aceituna", category: "Pizzas" },
    { id: 5, name: "Pizza Especial", price: 400, description: "Salsa, queso, jamon, aceituna, huevo", category: "Pizzas" },
    { id: 6, name: "Pizza Super", price: 4500, description: "Salsa, jamon, queso, huevo, morron, aceituna", category: "Pizzas" },
    { id: 7, name: "Pizza Mozarella", price: 4000, description: "Pizza con mozzarella", category: "Pizzas" },
    { id: 8, name: "Pizza Calaresa", price: 4200, description: "Pizza con salame", category: "Pizzas" },
    { id: 9, name: "Pizza a Caballo", price: 4500, description: "Pizza con huevo frito", category: "Pizzas" },
    { id: 10, name: "Pizza Napolitana", price: 4500, description: "Pizza con Jamon, tomate, huevo, aceituna", category: "Pizzas" },
    { id: 11, name: "Pizzanesa con papas", price: 12000, description: "Pizza rellena con tomate, milanesa, queso, cubierta con salsa, huevos fritos, papas fritas ", category: "Pizzas" },
    { id: 12, name: "Salchipizza", price: 4000, description: "Pizza con salchichas y huevo", category: "Pizzas" },
    { id: 13, name: "Pizza Cuatro quesos", price: 4500, description: "Salsa, queso cremoso, mozarella, parmesano, roquefort", category: "Pizzas" },
    { id: 14, name: "Sándwich de milanesa", price: 5000, description: "Sándwich con lechuga, tomate, milanesa, huevo, jamon y queso", category: "Varios" },
    { id: 15, name: "1/2 Sándwich de milanesa", price: 3000, description: "Medio Sándwich con lechuga, tomate, milanesa, huevo, jamon y queso", category: "Varios" },
    { id: 16, name: "Figazza", price: 5000, description: "Pan, lechuga, tomate, carne, huevo, queso, jamon, recubierto con mozarella", category: "Varios" },
    { id: 17, name: "Lomito", price: 5000, description: "Pan, lechuga, tomate, lomito, queso, huevo, jamon, recubierto con mozarella", category: "Varios" },
    { id: 18, name: "Hamburpizza", price: 9000, description: "Pizza rellena de tomate, carne, queso, huevo,tapa, salsa, queso, jamon, huevo y aceituna", category: "Varios" },
    { id: 19, name: "1/2 Hamburpizza", price: 5000, description: "Media pizza con base de hamburguesa", category: "Varios" },
    { id: 20, name: "Milanesa c/papas", price: 4100, description: "Milanesa con papas fritas", category: "Varios" },
    { id: 21, name: "Milanesa Napolitana c/papas", price: 4500, description: "Milanesa con salsa, jamon, queso y papas", category: "Varios" },
    { id: 22, name: "Milanesa a Caballo c/papas", price: 45000, description: "Milanesa con huevo frito y papas", category: "Varios" },
    { id: 23, name: "Tarta de jamón y queso", price: 7000, description: "Tarta con jamón y queso", category: "Varios" },
    { id: 24, name: "Empanadas (Jamón y queso - Carne)", price: 5500, description: "Empanadas de jamón y queso o carne", category: "Varios" },
    { id: 25, name: "1/2 Empanadas (Jamón y queso - Carne)", price: 3000, description: "Media docena de empanadas", category: "Varios" },
    { id: 26, name: "Porción de papas", price: 2500, description: "Porción de papas fritas", category: "Varios" },
    { id: 27, name: "Porción de papas c/cheddar", price: 3800, description: "Papas fritas con cheddar", category: "Varios" },
    { id: 28, name: "Pancho", price: 1500, description: "Pancho con mayonesa, kétchup, mostaza", category: "Varios" },
    { id: 29, name: "Carlito simple", price: 2000, description: "Pan miga, queso y jamon", category: "Varios" },
    { id: 30, name: "Carlito Triple", price: 3000, description: "Pan miga, lechuga, tomate, huevo, pan, jamon y queso", category: "Varios" },
    { id: 31, name: "3 Hambuguesas Comunes", price: 4000, description: "3 Hambuguesas Comunes", category: "Promociones" },
    { id: 32, name: "3 Hamburguesas Especiales", price: 5000, description: "3 Hamburguesas Especiales", category: "Promociones" },
    { id: 33, name: "2 Pizzas Comunes", price: 6000, description: "2 Pizzas Comunes", category: "Promociones" },
    { id: 34, name: "2 Pizzas Especiales", price: 7000, description: "Carlito triple", category: "Promociones" },
    { id: 35, name: "1 Hamburguesa Especial + 1 porcion de papas", price: 4000, description: "1 Hamburguesa Especial + 1 porcion de papas", category: "Lunes a Jueves" },
    { id: 36, name: "1 Pizza Mozarella + 1/2 docena de Empanadas", price: 6500, description: "1 Pizza Mozarella + 1/2 docena de Empanadas", category: "Lunes a Jueves" },
    { id: 37, name: "3 Hamburguesas Especiales + Pizza Especial", price: 6500, description: "3 Hamburguesas Especiales + Pizza Especial", category: "Lunes a Jueves" },
    { id: 38, name: "1 Sándwich + 1 Pizza Especial", price: 8000, description: "1 Sándwich + 1 Pizza Especial", category: "Lunes a Jueves" },
    { id: 39, name: "1 Figazza + 1 Porción de Papas", price: 7000, description: "1 Figazza + 1 Porción de Papas", category: "Lunes a Jueves" },
    { id: 40, name: "1 Sándwich + 1 Porcion de papas", price: 6500, description: "1 Sándwich + 1 Porcion de papas", category: "Lunes a Jueves" },

];

let cart = [];
let orderNumber = 1;

// Función para reiniciar el número de orden a las 13:00 hs
function checkForOrderReset() {
    const now = new Date();
    const currentHour = now.getHours();
    const currentMinutes = now.getMinutes();
    
    if (currentHour === 13 && currentMinutes === 0) {
        orderNumber = 1;
    }
}

setInterval(checkForOrderReset, 60000);

function displayProducts(productsToDisplay) {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';  // Limpiar el contenedor de productos

    productsToDisplay.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.classList.add('col-md-4', 'mb-4');
        productDiv.innerHTML = `
            <div class="card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}" style="max-height: 150px; object-fit: contain;">
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

// Mostrar todos los productos al cargar la página
displayProducts(products);

// Función para filtrar productos por categoría
function filterByCategory(category) {
    if (category === 'All') {
        displayProducts(products);
    } else {
        const filteredProducts = products.filter(product => product.category === category);
        displayProducts(filteredProducts);
    }
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

    let message = 'Pedido:\n\n';
    let total = 0;

    cart.forEach(item => {
        message += `- ${item.name} (x${item.quantity}) - $${item.price * item.quantity}\n`;
        total += item.price * item.quantity;
    });

    message += `\nTotal del pedido: $${total}\n`;

    message += `Número de orden: ${orderNumber}\n`;
 
    orderNumber += 1;
    

    const deliveryOption = document.getElementById('delivery-option');
    if (deliveryOption.checked) {
        message += 'Con envío a domicilio. Por favor, envíe su ubicación.\n';
    } else {
        message += 'Sin envío a domicilio.\n';
    }

    orderNumber++; // Incrementar el número de orden
    const whatsappUrl = `https://wa.me/5493794214144?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
}
