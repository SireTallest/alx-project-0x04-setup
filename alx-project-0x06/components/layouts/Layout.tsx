// import { ReactNode } from "react";
import Footer from "./Footer";
import Header from "./Header";
import { Provider } from "react-redux";

import { LayoutProps } from "@/interface";
import store from "@/store/store";
const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Provider store={store}>
        <Header />
        <main>{children}</main>
        <Footer />
      </Provider>
    </>
  );
};

export default Layout;
