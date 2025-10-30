# 🔴 Red Cronchi - Pedidos a Domicilio

Aplicación web moderna y exclusiva para pedidos de chicharrones al barril con diseño rojo apetitoso, gradientes, iconos y funcionalidad completa.

## 🎯 Características

- ✨ **Diseño Exclusivo**: Rojo vibrante con gradientes y sombras profesionales
- 🛒 **Carrito Funcional**: Agregar/quitar productos y toppings en tiempo real
- 📱 **Responsivo**: Funciona perfectamente en móviles, tablets y escritorio
- 🎨 **Iconos y Emojis**: Visualización atractiva de productos
- 📋 **Formulario Completo**: Datos del cliente y método de pago
- 💬 **Integración WhatsApp**: Envío automático de pedidos a WhatsApp
- 💾 **Almacenamiento Local**: El carrito se guarda en el navegador

## 📦 Productos Disponibles

### Chicharrones al Barril
- **120 gramos** - $12.000
- **170 gramos** - $16.000
- **350 gramos** - $28.000

### Complementos & Bebidas
- Cabeza de Gato Sencillo - $3.000
- Cabeza de Gato Especial - $4.500
- Arepita Dulce de la Abuela - $2.500
- Torreja de Queso - $3.500
- Café con Leche (Deslactosada) - $2.000
- Chocolate - $2.500
- Bollo Sinuano - $2.000
- Jugo de Naranja - $1.500

## 🚀 Instalación

### Opción 1: Servidor Local (Python)
```bash
cd red-cronchi-web
python3 -m http.server 8000
```
Luego abre `http://localhost:8000` en tu navegador.

### Opción 2: Servidor Local (Node.js)
```bash
cd red-cronchi-web
npx http-server
```

### Opción 3: Desplegar en línea
Sube los archivos a cualquier hosting web (GitHub Pages, Netlify, Vercel, etc.)

## ⚙️ Configuración

### Cambiar el número de WhatsApp

Abre el archivo `script.js` y busca esta línea (aproximadamente línea 280):

```javascript
const whatsappNumber = '573001234567'; // Reemplaza con tu número
```

**Reemplaza `573001234567` con tu número de WhatsApp:**
- Formato: Código de país + número sin espacios ni caracteres especiales
- Ejemplo para Colombia: `573001234567` (57 = código país, 3001234567 = número)

### Cambiar el logo

En `index.html`, busca la sección del logo y reemplaza el icono:

```html
<div class="logo-placeholder">
    <i class="fas fa-utensils"></i>
</div>
```

Puedes usar:
- Iconos de Font Awesome (https://fontawesome.com)
- Una imagen: `<img src="tu-logo.png" alt="Logo">`

### Personalizar colores

En `styles.css`, modifica las variables CSS al inicio:

```css
:root {
    --primary-red: #DC143C;      /* Rojo principal */
    --dark-red: #B91C1C;         /* Rojo oscuro */
    --light-red: #FF6B6B;        /* Rojo claro */
    --accent-red: #E63946;       /* Rojo acento */
    --gold: #FFD700;             /* Dorado */
}
```

### Agregar/Modificar productos

En `script.js`, modifica el array `products`:

```javascript
const products = [
    {
        id: 1,
        name: 'Nombre del Producto',
        weight: 'Peso/Tamaño',
        price: 12000,
        description: 'Descripción',
        icon: '🥓'
    }
];
```

### Agregar/Modificar toppings

En `script.js`, modifica el array `toppings`:

```javascript
const toppings = [
    {
        id: 101,
        name: 'Nombre del Topping',
        price: 3000,
        icon: '🍖'
    }
];
```

### Cambiar costo de domicilio

En `script.js`, busca esta línea:

```javascript
const DELIVERY_COST = 3000; // Cambiar este valor
```

## 📁 Estructura de Archivos

```
red-cronchi-web/
├── index.html          # Estructura HTML
├── styles.css          # Estilos y diseño
├── script.js           # Funcionalidad JavaScript
├── README.md           # Este archivo
└── .gitignore          # Archivos a ignorar en Git
```

## 🎨 Personalización Avanzada

### Cambiar tipografía

En `styles.css`, modifica:

```css
body {
    font-family: 'Tu Fuente', sans-serif;
}
```

### Agregar animaciones

Todos los elementos tienen transiciones suaves. Puedes agregar más en `styles.css`.

### Cambiar estructura del formulario

Edita el formulario en `index.html` (sección `checkoutForm`) y actualiza `script.js` para capturar los nuevos campos.

## 📱 Compatibilidad

- ✅ Chrome, Firefox, Safari, Edge
- ✅ iOS Safari
- ✅ Android Chrome
- ✅ Tablets
- ✅ Escritorio

## 🔐 Seguridad

- El carrito se almacena localmente en el navegador
- Los datos se envían directamente a WhatsApp
- No se almacenan datos en servidores externos
- Todos los datos son encriptados en tránsito a WhatsApp

## 📞 Soporte

Si necesitas ayuda para personalizar la web, puedes:

1. Revisar los comentarios en el código
2. Modificar los valores en las variables CSS
3. Cambiar los datos en los arrays de JavaScript

## 📝 Licencia

Libre para usar y modificar para tu negocio.

---

**Hecho con ❤️ para Red Cronchi**

*Última actualización: Octubre 2024*

