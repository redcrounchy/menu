// Datos de productos
const products = [
    {
        id: 1,
        name: 'Chicharrón al Barril',
        weight: '100 gramos',
        price: 12000,
        description: 'Crujiente y jugoso, perfecto para probar',
        icon: '🥓',
        image: 'chicharron-100g.jpeg'
    },
    {
        id: 2,
        name: 'Chicharrón al Barril',
        weight: '150 gramos',
        price: 16000,
        description: 'La opción más popular, ideal para compartir',
        icon: '🥓',
        image: 'chicharron-150g.jpeg'
    },
    {
        id: 3,
        name: 'Chicharrón al Barril',
        weight: '170 gramos',
        price: 18000,
        description: 'La experiencia completa, para verdaderos amantes',
        icon: '🥓',
        image: 'chicharron-170g.jpeg'
    },
    {
        id: 4,
        name: 'Bondiola al Barril',
        weight: '100 gramos',
        price: 13000,
        description: 'Tierna y jugosa, el sabor perfecto',
        icon: '🥩',
        image: 'bondiola.jpeg'
    },
    {
        id: 5,
        name: 'Bondiola al Barril',
        weight: '150 gramos',
        price: 17000,
        description: 'La mejor opción para disfrutar',
        icon: '🥩',
        image: 'bondiola.jpeg'
    },
    {
        id: 6,
        name: 'Bondiola al Barril',
        weight: '170 gramos',
        price: 19000,
        description: 'La experiencia completa de bondiola',
        icon: '🥩',
        image: 'bondiola.jpeg'
    }
];

// Datos de toppings
const toppings = [
    {
        id: 101,
        name: 'Cabeza de Gato Sencillo',
        price: 3500,
        icon: '🍖',
        image: 'cabeza-gato-sencillo.jpg'
    },
    {
        id: 102,
        name: 'Cabeza de Gato Especial',
        price: 5000,
        icon: '🍗',
        image: 'cabeza-gato-especial.jpg'
    },
    {
        id: 103,
        name: 'Arepita Dulce de la Abuela',
        price: 3500,
        icon: '🥞',
        image: 'arepita-dulce.jpg'
    },
    {
        id: 104,
        name: 'Torreja de Queso',
        price: 3500,
        icon: '🧀',
        image: 'torreja-queso.png'
    },
    {
        id: 105,
        name: 'Café con Leche (Deslactosada)',
        price: 4000,
        icon: '☕',
        image: 'cafe-leche.png'
    },
    {
        id: 106,
        name: 'Chocolate',
        price: 4000,
        icon: '🍫',
        image: 'chocolate.png'
    },
    {
        id: 107,
        name: 'Bollo Sinuano',
        price: 3000,
        icon: '🥐',
        image: 'bollo-sinuano.jpeg'
    },
    {
        id: 108,
        name: 'Jugo de Naranja',
        price: 6000,
        icon: '🧃',
        image: 'jugo-naranja.png'
    },
    {
        id: 109,
        name: 'Chorizo Artesanal',
        price: 5000,
        icon: '🌭',
        image: 'chorizo.jpg'
    },
    {
        id: 110,
        name: 'Arepita Dulce de la Abuela Rellena de Queso',
        price: 5000,
        icon: '🥞',
        image: 'arepita-dulce.jpg'
    }
];

// Carrito
let cart = [];
const DELIVERY_COST = 5000;

// DOM Elements
const productsGrid = document.getElementById('productsGrid');
const toppingsGrid = document.getElementById('toppingsGrid');
const cartBtn = document.getElementById('cartBtn');
const cartModal = document.getElementById('cartModal');
const checkoutModal = document.getElementById('checkoutModal');
const closeCartBtn = document.getElementById('closeCartBtn');
const closeCheckoutBtn = document.getElementById('closeCheckoutBtn');
const checkoutBtn = document.getElementById('checkoutBtn');
const checkoutForm = document.getElementById('checkoutForm');
const cartCount = document.getElementById('cartCount');
const cartItems = document.getElementById('cartItems');
const subtotal = document.getElementById('subtotal');
const total = document.getElementById('total');

// Inicializar
document.addEventListener('DOMContentLoaded', () => {
    renderProducts();
    renderToppings();
    setupEventListeners();
    loadCartFromStorage();
});

// Renderizar productos principales
function renderProducts() {
    productsGrid.innerHTML = products.map(product => `
        <div class="product-card">
            <div class="product-image">
                ${product.image ? `<img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover; border-radius: 8px;">` : product.icon}
            </div>
            <div class="product-info">
                <div class="product-name">${product.name}</div>
                <div class="product-weight">${product.weight}</div>
                <div class="product-description">${product.description}</div>
                <div class="product-price">$${product.price.toLocaleString('es-CO')}</div>
                <div class="quantity-control">
                    <button type="button" class="qty-minus" data-id="${product.id}">−</button>
                    <input type="number" class="qty-input" data-id="${product.id}" value="1" min="1" readonly>
                    <button type="button" class="qty-plus" data-id="${product.id}">+</button>
                </div>
                <button class="add-to-cart-btn" data-id="${product.id}" data-type="product">
                    <i class="fas fa-shopping-cart"></i> Agregar al Carrito
                </button>
            </div>
        </div>
    `).join('');

    // Event listeners para cantidad
    document.querySelectorAll('.qty-minus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const input = document.querySelector(`.qty-input[data-id="${btn.dataset.id}"]`);
            if (input.value > 1) input.value = parseInt(input.value) - 1;
        });
    });

    document.querySelectorAll('.qty-plus').forEach(btn => {
        btn.addEventListener('click', (e) => {
            const input = document.querySelector(`.qty-input[data-id="${btn.dataset.id}"]`);
            input.value = parseInt(input.value) + 1;
        });
    });

    // Event listeners para agregar al carrito
    document.querySelectorAll('.add-to-cart-btn[data-type="product"]').forEach(btn => {
        btn.addEventListener('click', () => {
            const productId = parseInt(btn.dataset.id);
            const quantity = parseInt(document.querySelector(`.qty-input[data-id="${productId}"]`).value);
            addToCart(productId, quantity, 'product');
            
            // Feedback visual
            btn.innerHTML = '<i class="fas fa-check"></i> ¡Agregado!';
            btn.style.background = 'linear-gradient(135deg, #28a745 0%, #20c997 100%)';
            setTimeout(() => {
                btn.innerHTML = '<i class="fas fa-shopping-cart"></i> Agregar al Carrito';
                btn.style.background = '';
            }, 1500);
        });
    });
}

// Renderizar toppings
function renderToppings() {
    toppingsGrid.innerHTML = toppings.map(topping => `
        <div class="topping-card">
            ${topping.image ? `<div class="topping-image-circle"><img src="${topping.image}" alt="${topping.name}" class="topping-image"></div>` : `<span class="topping-icon">${topping.icon}</span>`}
            <div class="topping-name">${topping.name}</div>
            <div class="topping-price">$${topping.price.toLocaleString('es-CO')}</div>
            <div class="topping-quantity">
                <button type="button" class="topping-minus" data-id="${topping.id}">−</button>
                <input type="number" class="topping-qty-input" data-id="${topping.id}" value="0" min="0" readonly>
                <button type="button" class="topping-plus" data-id="${topping.id}">+</button>
            </div>
        </div>
    `).join('');

    // Event listeners para toppings
    document.querySelectorAll('.topping-minus').forEach(btn => {
        btn.addEventListener('click', () => {
            const input = document.querySelector(`.topping-qty-input[data-id="${btn.dataset.id}"]`);
            if (input.value > 0) {
                input.value = parseInt(input.value) - 1;
                updateToppingCart(parseInt(btn.dataset.id), parseInt(input.value));
            }
        });
    });

    document.querySelectorAll('.topping-plus').forEach(btn => {
        btn.addEventListener('click', () => {
            const input = document.querySelector(`.topping-qty-input[data-id="${btn.dataset.id}"]`);
            input.value = parseInt(input.value) + 1;
            updateToppingCart(parseInt(btn.dataset.id), parseInt(input.value));
        });
    });
}

// Agregar al carrito
function addToCart(itemId, quantity, type) {
    const item = type === 'product' 
        ? products.find(p => p.id === itemId)
        : toppings.find(t => t.id === itemId);

    if (!item) return;

    const cartItem = {
        id: itemId,
        name: item.name,
        price: item.price,
        quantity: quantity,
        type: type,
        weight: item.weight || ''
    };

    const existingItem = cart.find(c => c.id === itemId && c.type === type);
    
    if (existingItem) {
        existingItem.quantity += quantity;
    } else {
        cart.push(cartItem);
    }

    saveCartToStorage();
    updateCartUI();
}

// Actualizar carrito de toppings
function updateToppingCart(toppingId, quantity) {
    const topping = toppings.find(t => t.id === toppingId);
    const existingItem = cart.find(c => c.id === toppingId && c.type === 'topping');

    if (quantity === 0) {
        if (existingItem) {
            cart = cart.filter(c => !(c.id === toppingId && c.type === 'topping'));
        }
    } else {
        if (existingItem) {
            existingItem.quantity = quantity;
        } else {
            cart.push({
                id: toppingId,
                name: topping.name,
                price: topping.price,
                quantity: quantity,
                type: 'topping'
            });
        }
    }

    saveCartToStorage();
    updateCartUI();
}

// Actualizar UI del carrito
function updateCartUI() {
    updateCartCount();
    updateCartItems();
    updateCartSummary();
}

// Actualizar contador del carrito
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
}

// Actualizar items del carrito
function updateCartItems() {
    if (cart.length === 0) {
        cartItems.innerHTML = `
            <div class="empty-cart">
                <i class="fas fa-shopping-cart"></i>
                <p>Tu carrito está vacío</p>
            </div>
        `;
        return;
    }

    cartItems.innerHTML = cart.map((item, index) => `
        <div class="cart-item">
            <div class="cart-item-info">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-details">
                    Cantidad: ${item.quantity} ${item.weight ? `(${item.weight})` : ''}
                </div>
            </div>
            <div class="cart-item-price">$${(item.price * item.quantity).toLocaleString('es-CO')}</div>
            <button class="remove-item-btn" data-index="${index}">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    document.querySelectorAll('.remove-item-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.dataset.index);
            cart.splice(index, 1);
            saveCartToStorage();
            updateCartUI();
        });
    });
}

// Actualizar resumen del carrito
function updateCartSummary() {
    const subtotalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalAmount = subtotalAmount + DELIVERY_COST;

    subtotal.textContent = `$${subtotalAmount.toLocaleString('es-CO')}`;
    total.textContent = `$${totalAmount.toLocaleString('es-CO')}`;
}

// Guardar carrito en localStorage
function saveCartToStorage() {
    localStorage.setItem('redCronchiCart', JSON.stringify(cart));
}

// Cargar carrito desde localStorage
function loadCartFromStorage() {
    const saved = localStorage.getItem('redCronchiCart');
    if (saved) {
        cart = JSON.parse(saved);
        updateCartUI();
    }
}

// Setup event listeners
function setupEventListeners() {
    // Abrir carrito
    cartBtn.addEventListener('click', () => {
        cartModal.classList.add('active');
    });

    // Cerrar carrito
    closeCartBtn.addEventListener('click', () => {
        cartModal.classList.remove('active');
    });

    // Cerrar checkout
    closeCheckoutBtn.addEventListener('click', () => {
        checkoutModal.classList.remove('active');
    });

    // Ir a checkout
    checkoutBtn.addEventListener('click', () => {
        if (cart.length === 0) {
            alert('Tu carrito está vacío');
            return;
        }
        cartModal.classList.remove('active');
        checkoutModal.classList.add('active');
    });

    // Enviar formulario
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();
        submitOrder();
    });

    // Cerrar modales al hacer click fuera
    window.addEventListener('click', (e) => {
        if (e.target === cartModal) {
            cartModal.classList.remove('active');
        }
        if (e.target === checkoutModal) {
            checkoutModal.classList.remove('active');
        }
    });
}

// Enviar pedido a WhatsApp
function submitOrder() {
    const docType = document.getElementById('docType').value;
    const docNumber = document.getElementById('docNumber').value;
    const fullName = document.getElementById('fullName').value;
    const address = document.getElementById('address').value;
    const phone = document.getElementById('phone').value;
    const paymentMethod = document.getElementById('paymentMethod').value;

    if (!docType || !docNumber || !fullName || !address || !phone || !paymentMethod) {
        alert('Por favor completa todos los campos');
        return;
    }

    // Construir mensaje
    let message = `*PEDIDO RED CRONCHI*\n\n`;
    message += `*Datos del Cliente:*\n`;
    message += `Tipo de Documento: ${docType}\n`;
    message += `Número: ${docNumber}\n`;
    message += `Nombre: ${fullName}\n`;
    message += `Dirección: ${address}\n`;
    message += `Teléfono: ${phone}\n`;
    message += `Método de Pago: ${paymentMethod}\n\n`;

    message += `*Pedido:*\n`;
    cart.forEach(item => {
        message += `• ${item.name} ${item.weight ? `(${item.weight})` : ''}\n`;
        message += `  Cantidad: ${item.quantity}\n`;
        message += `  Subtotal: $${(item.price * item.quantity).toLocaleString('es-CO')}\n\n`;
    });

    const subtotalAmount = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalAmount = subtotalAmount + DELIVERY_COST;

    message += `*Resumen:*\n`;
    message += `Subtotal: $${subtotalAmount.toLocaleString('es-CO')}\n`;
    message += `Domicilio: $${DELIVERY_COST.toLocaleString('es-CO')}\n`;
    message += `*Total: $${totalAmount.toLocaleString('es-CO')}*\n\n`;
    message += `Gracias por tu pedido 🙏`;

    // Codificar mensaje
    const encodedMessage = encodeURIComponent(message);

    // Número de WhatsApp (reemplaza con el número real)
    // Formato: código de país + número sin espacios ni caracteres especiales
    const whatsappNumber = '573128724329'; // Reemplaza con tu número

    // Crear enlace de WhatsApp
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Abrir WhatsApp
    window.open(whatsappLink, '_blank');

    // Limpiar carrito y formulario
    cart = [];
    saveCartToStorage();
    updateCartUI();
    checkoutForm.reset();
    checkoutModal.classList.remove('active');

    alert('¡Pedido enviado a WhatsApp! Pronto nos pondremos en contacto contigo.');
}

