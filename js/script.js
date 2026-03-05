/**
 * Sharma Furniture - Main JavaScript
 * Optimized for performance with lazy loading and efficient rendering
 */

// ===== PRODUCT DATA =====
const products = [
    { id: 1, name: "Luxury Fabric 3-Seater Sofa", price: 29999, category: "Sofa Sets", img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&auto=format", desc: "Comfortable modern sofa perfect for living rooms." },
    { id: 2, name: "Premium Leather Recliner Chair", price: 18500, category: "Recliner Chairs", img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&auto=format", desc: "Adjustable recliner chair designed for relaxation." },
    { id: 3, name: "Solid Wood King Size Bed", price: 34999, category: "Beds & Bed Frames", img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=500&auto=format", desc: "Elegant wooden king size bed with strong frame." },
    { id: 4, name: "Orthopedic Comfort Mattress", price: 12999, category: "Mattresses", img: "https://images.unsplash.com/photo-1631049035182-249067d7618e?w=500&auto=format", desc: "Soft and supportive mattress for healthy sleep." },
    { id: 5, name: "Modern 6-Seater Dining Table Set", price: 26500, category: "Dining Tables & Dining Sets", img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=500&auto=format", desc: "Stylish dining set perfect for family meals." },
    { id: 6, name: "Sliding Door Wooden Wardrobe", price: 22999, category: "Wardrobes & Almirahs", img: "https://images.unsplash.com/photo-1618220179428-22790b461013?w=500&auto=format", desc: "Spacious wardrobe with smooth sliding doors." },
    { id: 7, name: "Elegant Dressing Table with Mirror", price: 9800, category: "Dressing Tables", img: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?w=500&auto=format", desc: "Wooden dressing table with mirror and drawers." },
    { id: 8, name: "Contemporary TV Unit Cabinet", price: 13499, category: "TV Units / TV Cabinets", img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?w=500&auto=format", desc: "Modern TV unit with storage shelves." },
    { id: 9, name: "Modular Kitchen Cabinet System", price: 68000, category: "Modular Kitchen Cabinets", img: "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?w=500&auto=format", desc: "Smart modular kitchen cabinets for modern homes." },
    { id: 10, name: "Modern Wooden Coffee Table", price: 6499, category: "Center Tables / Coffee Tables", img: "https://images.unsplash.com/photo-1533090161767-e6ffed986c88?w=500&auto=format", desc: "Stylish coffee table ideal for living rooms." },
    { id: 11, name: "Stainless Steel Kitchen Trolley", price: 7999, category: "Kitchen Trolleys", img: "https://images.unsplash.com/photo-1600489000022-c2086d79f9d4?w=500&auto=format", desc: "Multi-purpose kitchen trolley for easy storage." },
    { id: 12, name: "Wooden Crockery Display Cabinet", price: 14999, category: "Crockery Cabinets", img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=500&auto=format", desc: "Elegant cabinet for displaying crockery sets." },
    { id: 13, name: "Minimalist Side Table", price: 3999, category: "Side Tables", img: "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=500&auto=format", desc: "Compact side table for bedroom or living room." },
    { id: 14, name: "Multi-Layer Wooden Shoe Rack", price: 4499, category: "Shoe Racks", img: "https://images.unsplash.com/photo-1600180758890-6c5d1f0c2b8d?w=500&auto=format", desc: "Space-saving shoe rack for organized storage." },
    { id: 15, name: "Wooden Bookshelf Storage Rack", price: 8200, category: "Bookshelves / Book Racks", img: "https://images.unsplash.com/photo-1588580000645-4562a6d2c839?w=500&auto=format", desc: "Stylish bookshelf for books and décor." },
    { id: 16, name: "Study Table with Storage Drawers", price: 8999, category: "Study Tables & Chairs", img: "https://images.unsplash.com/photo-1582582494700-7b2f7f4c9a3c?w=500&auto=format", desc: "Practical study table for students and work." },
    { id: 17, name: "Wooden Office Work Desk", price: 11500, category: "Office Tables & Chairs", img: "https://images.unsplash.com/photo-1593642532871-8b12e02d091c?w=500&auto=format", desc: "Durable office desk suitable for home office." },
    { id: 18, name: "Compact Computer Table", price: 6999, category: "Computer Tables", img: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500&auto=format", desc: "Space-efficient table designed for computers." },
    { id: 19, name: "Modern Wall Mounted Shelves", price: 2999, category: "Wall Shelves", img: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?w=500&auto=format", desc: "Decorative wall shelves for books and décor." },
    { id: 20, name: "Outdoor Patio Furniture Set", price: 21000, category: "Outdoor Furniture", img: "https://images.unsplash.com/photo-1600210492493-0946911123ea?w=500&auto=format", desc: "Comfortable outdoor furniture set for garden spaces." }
];

// ===== GLOBAL VARIABLES =====
let cart = [];
let currentFilterCat = 'all';
let currentSearch = '';
let isInitialLoad = true;

// ===== DOM ELEMENTS =====
const grid = document.getElementById('productGrid');
const searchInput = document.getElementById('searchInput');
const categoryBtns = document.querySelectorAll('.cat-btn');
const cartCountSpan = document.getElementById('cartCount');
const cartItemsContainer = document.getElementById('cartItemsContainer');
const grandTotalSpan = document.getElementById('grandTotal');
const cartOverlay = document.getElementById('cartOverlay');
const cartDrawer = document.getElementById('cartDrawer');
const cartButton = document.getElementById('cartButton');
const cartIconHeader = document.getElementById('cartIconHeader');
const closeCartBtn = document.getElementById('closeCartBtn');
const placeOrderBtn = document.getElementById('placeOrderBtn');
const checkoutModal = document.getElementById('checkoutModal');
const orderForm = document.getElementById('orderForm');
const orderSummaryDiv = document.getElementById('orderSummaryText');
const orderSuccessDiv = document.getElementById('orderSuccess');
const waButton = document.getElementById('waButton');

// ===== INITIALIZE =====
document.addEventListener('DOMContentLoaded', function() {
    // Load cart from localStorage
    loadCart();
    
    // Render products with requestAnimationFrame for performance
    requestAnimationFrame(() => {
        renderProducts();
    });
    
    // Update cart UI
    updateCartUI();
    
    // Setup event listeners
    setupEventListeners();
    
    // Add intersection observer for lazy loading
    setupLazyLoading();
});

// ===== PERFORMANCE OPTIMIZATION =====
function setupLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
}

// ===== CART FUNCTIONS =====
function loadCart() {
    try {
        const savedCart = localStorage.getItem('sharmaCart');
        if (savedCart) {
            cart = JSON.parse(savedCart);
        }
    } catch (e) {
        console.error('Error loading cart:', e);
        cart = [];
    }
}

function saveCart() {
    try {
        localStorage.setItem('sharmaCart', JSON.stringify(cart));
        updateCartUI();
    } catch (e) {
        console.error('Error saving cart:', e);
    }
}

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (!product) return;
    
    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            id: product.id,
            name: product.name,
            price: product.price,
            img: product.img,
            quantity: 1
        });
    }
    
    saveCart();
    showNotification('Product added to cart!');
    
    // Subtle animation on cart icon
    cartCountSpan.style.transform = 'scale(1.3)';
    setTimeout(() => {
        cartCountSpan.style.transform = 'scale(1)';
    }, 200);
}

function removeFromCart(index) {
    cart.splice(index, 1);
    saveCart();
}

function updateQuantity(index, operation) {
    if (operation === 'inc') {
        cart[index].quantity += 1;
    } else if (operation === 'dec') {
        cart[index].quantity -= 1;
        if (cart[index].quantity < 1) {
            cart.splice(index, 1);
        }
    }
    saveCart();
}

function calculateGrandTotal() {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
}

// ===== RENDERING FUNCTIONS =====
function renderProducts() {
    const filtered = products.filter(product => {
        const matchesCategory = currentFilterCat === 'all' || product.category === currentFilterCat;
        const searchTerm = currentSearch.toLowerCase();
        const matchesSearch = searchTerm === '' || 
            product.name.toLowerCase().includes(searchTerm) || 
            product.category.toLowerCase().includes(searchTerm);
        
        return matchesCategory && matchesSearch;
    });
    
    // Use DocumentFragment for better performance
    const fragment = document.createDocumentFragment();
    const tempDiv = document.createElement('div');
    
    tempDiv.innerHTML = filtered.map(product => `
        <div class="product-card" data-id="${product.id}">
            <img src="${product.img}" alt="${product.name}" loading="lazy" class="card-img">
            <div class="card-content">
                <div class="card-title">${product.name}</div>
                <div class="card-desc">${product.desc}</div>
                <div class="price-row">
                    <span class="price">₹${product.price.toLocaleString()}</span>
                    <button class="add-to-cart" data-id="${product.id}">
                        <i class="fas fa-plus"></i> Add
                    </button>
                </div>
            </div>
        </div>
    `).join('');
    
    while (tempDiv.firstChild) {
        fragment.appendChild(tempDiv.firstChild);
    }
    
    grid.innerHTML = '';
    grid.appendChild(fragment);
    
    // Add event listeners efficiently
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', (e) => {
            e.stopPropagation();
            const productId = parseInt(button.dataset.id);
            addToCart(productId);
        });
    });
}

function updateCartUI() {
    // Update cart count with animation
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountSpan.textContent = totalItems;
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="empty-cart"><i class="fas fa-shopping-bag"></i><p>Your cart is empty</p></div>';
        grandTotalSpan.textContent = '₹0';
        return;
    }
    
    let html = '';
    let grandTotal = 0;
    
    cart.forEach((item, index) => {
        const subtotal = item.price * item.quantity;
        grandTotal += subtotal;
        
        html += `
            <div class="cart-item" data-index="${index}">
                <img src="${item.img}" alt="${item.name}" class="cart-item-img" loading="lazy">
                <div class="cart-item-details">
                    <div class="cart-item-title">${item.name}</div>
                    <div class="cart-item-price">₹${item.price.toLocaleString()} x ${item.quantity}</div>
                    <div class="item-subtotal">₹${subtotal.toLocaleString()}</div>
                    <div class="item-actions">
                        <button class="qty-btn" data-index="${index}" data-op="inc">+</button>
                        <button class="qty-btn" data-index="${index}" data-op="dec">-</button>
                        <i class="fas fa-trash remove-item" data-index="${index}"></i>
                    </div>
                </div>
            </div>
        `;
    });
    
    cartItemsContainer.innerHTML = html;
    grandTotalSpan.textContent = `₹${grandTotal.toLocaleString()}`;
    
    // Add event listeners
    document.querySelectorAll('.qty-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const index = parseInt(btn.dataset.index);
            const op = btn.dataset.op;
            updateQuantity(index, op);
        });
    });
    
    document.querySelectorAll('.remove-item').forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.stopPropagation();
            const index = parseInt(btn.dataset.index);
            removeFromCart(index);
        });
    });
}

// ===== CART DRAWER FUNCTIONS =====
function openCartDrawer() {
    cartDrawer.classList.add('open');
    cartOverlay.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeCartDrawer() {
    cartDrawer.classList.remove('open');
    cartOverlay.classList.remove('show');
    document.body.style.overflow = '';
}

// ===== CHECKOUT FUNCTIONS =====
function openCheckoutModal() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    const summary = generateOrderSummary();
    orderSummaryDiv.textContent = summary;
    
    orderSuccessDiv.style.display = 'none';
    orderForm.style.display = 'block';
    
    checkoutModal.classList.add('show-modal');
}

function closeCheckoutModal() {
    checkoutModal.classList.remove('show-modal');
    orderForm.reset();
}

function generateOrderSummary() {
    let summary = '🛍️ ORDER SUMMARY\n\n';
    let grandTotal = 0;
    
    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        grandTotal += subtotal;
        summary += `${item.name}\n  Qty: ${item.quantity} × ₹${item.price.toLocaleString()} = ₹${subtotal.toLocaleString()}\n\n`;
    });
    
    summary += `━━━━━━━━━━━━━━━━━━\n`;
    summary += `GRAND TOTAL: ₹${grandTotal.toLocaleString()}`;
    return summary;
}

function generateFullOrderSummary(name, phone, address, instructions) {
    let summary = `CUSTOMER DETAILS:\n`;
    summary += `Name: ${name}\n`;
    summary += `Phone: ${phone}\n`;
    summary += `Address: ${address}\n`;
    summary += `Instructions: ${instructions || 'None'}\n\n`;
    summary += `ORDER ITEMS:\n`;
    summary += `━━━━━━━━━━━━━━━━━━\n`;
    
    let grandTotal = 0;
    
    cart.forEach(item => {
        const subtotal = item.price * item.quantity;
        grandTotal += subtotal;
        summary += `${item.name}\n`;
        summary += `  ${item.quantity} x ₹${item.price.toLocaleString()} = ₹${subtotal.toLocaleString()}\n\n`;
    });
    
    summary += `━━━━━━━━━━━━━━━━━━\n`;
    summary += `GRAND TOTAL: ₹${grandTotal.toLocaleString()}`;
    
    return summary;
}

function submitOrder(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const instructions = document.getElementById('instructions').value.trim();
    
    if (!name || !phone || !address) {
        showNotification('Please fill in all required fields');
        return;
    }
    
    const orderDetails = generateFullOrderSummary(name, phone, address, instructions);
    
    const formData = new FormData();
    formData.append('name', name);
    formData.append('phone', phone);
    formData.append('address', address);
    formData.append('instructions', instructions || 'None');
    formData.append('order', orderDetails);
    
    // Show loading state
    const submitBtn = document.querySelector('.submit-order');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    fetch('https://formspree.io/f/mlgprglk', {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    })
    .then(response => {
        if (response.ok) {
            cart = [];
            saveCart();
            
            orderForm.style.display = 'none';
            orderSuccessDiv.style.display = 'block';
            closeCartDrawer();
        } else {
            throw new Error('Failed to send');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        showNotification('Failed to send order. Please try again.');
    })
    .finally(() => {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
}

// ===== HELPER FUNCTIONS =====
function showNotification(message) {
    // Create toast notification
    const toast = document.createElement('div');
    toast.className = 'toast-notification';
    toast.textContent = message;
    toast.style.cssText = `
        position: fixed;
        bottom: 100px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--navy);
        color: white;
        padding: 12px 25px;
        border-radius: 50px;
        box-shadow: 0 5px 20px rgba(0,0,0,0.2);
        z-index: 1000;
        animation: slideUp 0.3s ease;
    `;
    
    document.body.appendChild(toast);
    
    setTimeout(() => {
        toast.style.animation = 'slideDown 0.3s ease';
        setTimeout(() => {
            document.body.removeChild(toast);
        }, 300);
    }, 2000);
}

// ===== EVENT LISTENERS =====
function setupEventListeners() {
    // Search input with debounce for performance
    let searchTimeout;
    searchInput.addEventListener('input', (e) => {
        clearTimeout(searchTimeout);
        searchTimeout = setTimeout(() => {
            currentSearch = e.target.value;
            renderProducts();
        }, 300);
    });
    
    // Category buttons
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentFilterCat = btn.dataset.cat;
            renderProducts();
        });
    });
    
    // Cart buttons
    cartButton.addEventListener('click', openCartDrawer);
    cartIconHeader.addEventListener('click', openCartDrawer);
    closeCartBtn.addEventListener('click', closeCartDrawer);
    cartOverlay.addEventListener('click', closeCartDrawer);
    
    // WhatsApp button
    waButton.addEventListener('click', () => {
        const message = encodeURIComponent('Hello, I want to ask about furniture from Sharma Furniture and Modular Kitchen.');
        window.open(`https://wa.me/918630042048?text=${message}`, '_blank');
    });
    
    // Place order button
    placeOrderBtn.addEventListener('click', openCheckoutModal);
    
    // Order form submission
    orderForm.addEventListener('submit', submitOrder);
    
    // Close modal when clicking outside
    checkoutModal.addEventListener('click', (e) => {
        if (e.target === checkoutModal) {
            closeCheckoutModal();
        }
    });
    
    // Handle escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeCartDrawer();
            closeCheckoutModal();
        }
    });
    
    // Add smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Add CSS animations for notifications
const style = document.createElement('style');
style.textContent = `
    @keyframes slideUp {
        from {
            opacity: 0;
            transform: translate(-50%, 20px);
        }
        to {
            opacity: 1;
            transform: translate(-50%, 0);
        }
    }
    
    @keyframes slideDown {
        from {
            opacity: 1;
            transform: translate(-50%, 0);
        }
        to {
            opacity: 0;
            transform: translate(-50%, 20px);
        }
    }
    
    .empty-cart {
        text-align: center;
        padding: 40px 20px;
        color: #999;
    }
    
    .empty-cart i {
        font-size: 3rem;
        margin-bottom: 15px;
        color: #ddd;
    }
`;
document.head.appendChild(style);