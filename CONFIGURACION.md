# ⚙️ Guía Rápida de Configuración

## 1️⃣ CAMBIAR NÚMERO DE WHATSAPP (IMPORTANTE)

Abre `script.js` y busca la línea 280 aproximadamente:

```javascript
const whatsappNumber = '573001234567'; // Reemplaza con tu número
```

**Cambia el número:**
- Para Colombia: `57` + tu número sin el 0 inicial
  - Ejemplo: `3001234567` → `573001234567`
- Para otros países: `código_país` + número
  - México: `52` + número
  - España: `34` + número

## 2️⃣ CAMBIAR LOGO

En `index.html`, busca:

```html
<div class="logo-placeholder">
    <i class="fas fa-utensils"></i>
</div>
```

Reemplaza con:
- Otro icono: `<i class="fas fa-NOMBRE"></i>` (ver https://fontawesome.com)
- Tu imagen: `<img src="logo.png" alt="Red Cronchi">`

## 3️⃣ CAMBIAR COLORES

En `styles.css`, al inicio:

```css
:root {
    --primary-red: #DC143C;      /* Rojo principal */
    --dark-red: #B91C1C;         /* Rojo oscuro */
    --light-red: #FF6B6B;        /* Rojo claro */
    --accent-red: #E63946;       /* Rojo acento */
}
```

## 4️⃣ AGREGAR/EDITAR PRODUCTOS

En `script.js`, busca `const products = [`:

```javascript
{
    id: 1,
    name: 'Chicharrón al Barril',
    weight: '120 gramos',
    price: 12000,
    description: 'Crujiente y jugoso',
    icon: '🥓'
}
```

## 5️⃣ AGREGAR/EDITAR TOPPINGS

En `script.js`, busca `const toppings = [`:

```javascript
{
    id: 101,
    name: 'Cabeza de Gato',
    price: 3000,
    icon: '🍖'
}
```

## 6️⃣ CAMBIAR COSTO DE DOMICILIO

En `script.js`, busca:

```javascript
const DELIVERY_COST = 3000; // Cambiar este valor
```

## 7️⃣ CAMBIAR NOMBRE DEL NEGOCIO

En `index.html`, busca:

```html
<h1 class="brand-name">Red Cronchi</h1>
```

En `styles.css`, busca `.brand-name` para cambiar el tamaño/estilo.

---

**Después de hacer cambios, actualiza el navegador (F5 o Ctrl+R) para ver los cambios.**
