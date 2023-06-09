import NavBar from "@/components/navbar";
import { store } from "@/context/store/store";
import "@/styles/global.css";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <NavBar />
      <Component {...pageProps} />
    </Provider>
  );
}
