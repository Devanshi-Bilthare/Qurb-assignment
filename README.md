
# Product Cart Application

A simple e-commerce style React application featuring product listings, filtering, cart management, and promotional offers.

---

## 🛠️ Setup Instructions

1. **Clone the repository or download the ZIP file:**

   ```bash
   git clone <your-public-repo-link>
   ```

2. **Navigate into the project directory:**

   ```bash
   cd <project-folder-name>
   ```

3. **Install dependencies:**

   ```bash
   npm install
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

Open your browser and go to `http://localhost:5173/` to see the app in action.

---

## 📘 Implementation Flow & Functionalities

### Home Page

- Displays a list of products with the following details:
  - **Name**
  - **Image**
  - **Type**
  - **Description** (Note: Description is truncated due to UI constraints.)
  - **Price**
  - **Availability**  
    - Shows **"Available"** if product quantity is 10 or more  
    - Otherwise, shows the exact count available  
  - **Rating**
  - **Add to Cart** button  

- **Category Filters**  
  - A list of categories is displayed at the top  
  - Toggling categories filters products accordingly  

- **Search Functionality**  
  - Search bar filters products based on matching **name** or **type**

---

### Checkout Page

- Shows all items added to the cart
- Features include:
  - Increase or decrease quantity per item  
    - Quantity cannot exceed the product’s available stock  
  - Remove individual items from the cart  
  - Empty the entire cart with a single action  

---

### Promotional Offers

- **Free items are added automatically when certain conditions are met:**
  - Buy **6 or more Cokes**, get **1 Coke free**
  - Buy **3 or more Corrisonte**, get **1 Coffee free**
- Free items are managed in a separate `freeItems` array so the original cart remains unchanged
- Free items are only added if sufficient stock is available (product quantity check)

---

### State Management & Persistence

- The **React Context API** manages the global cart state for easy access and updates across components
- Cart data is saved in **Local Storage** so the cart persists after page reloads or navigation, ensuring the cart is never lost

---

### Responsiveness

- The application is designed to be **fully responsive**, working well on all screen sizes.

---

### Development Approach

- Started with creating the Home page and fetching the product list
- Implemented filtering by categories and search
- Added cart functionality with add, remove, update quantity features
- Implemented offer logic at checkout without modifying the original cart items
- Used Context API for global cart state and Local Storage for persistence  
- Addressed UI constraints by truncating descriptions on the home page.

---

## Technologies Used

- React.js  
- React Context API  
- Local Storage  

---

