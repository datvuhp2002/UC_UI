import Header from "./header";
import Footer from "./footer";
import NavLink from "./navlink";
import styles from "./Layout.module.scss";
export const metadata = {
  title: "Dang ky the",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div lang="en">
      <div>
        <Header />
        <NavLink />
        <div className={`${styles.wrapper_body}`}>
          <div
            className={`${styles.body} py-5 container d-flex align-items-center justify-content-center`}
          >
            {children}
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
