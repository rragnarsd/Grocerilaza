import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import Navbar from 'components/navbar';
import { CartProvider } from "react-use-cart";
import FormDataContextProvider from "../context/FormContext";


export default function App({ Component, pageProps }) {

  return <FormDataContextProvider>
    <CartProvider id="products">
      <Navbar />
      <div className="container"> <Component {...pageProps} /></div>
    </CartProvider>
  </FormDataContextProvider>
}

