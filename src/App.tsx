import { AppRoutes } from "./routes/AppRoutes";
import { ProductProvider } from "./contexts/ProductContext";
import { SidebarProvider } from "./contexts/SidebarContext";
import { CartProvider } from "./contexts/CartContext";

export function App() {
  return (
    <SidebarProvider>
      <CartProvider>
        <ProductProvider>
          <AppRoutes />
        </ProductProvider>
      </CartProvider>
    </SidebarProvider>
  );
}
