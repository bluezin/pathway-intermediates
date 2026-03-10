import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";
import { navClose, navMenu } from "../../../../public/svg";
import { useEffect, useState } from "react";
import Menu from "./components/menu";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
    setScroll(false);
    window.scrollTo({ top: 0, behavior: "smooth" });

    if (!openMenu) {
      document.body.classList.add("scroll-hidden");
    } else {
      document.body.classList.remove("scroll-hidden");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 260);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={styles.nav}>
      <div
        className={`${styles.sub__nav} ${scroll ? styles.sub__nav__scroll : ""}`}
      >
        <Link href="/" className={styles.link__logo}>
          <Image src="/pwi_logo_25.png" alt="logo" width={262} height={57} />
        </Link>

        <button className={`${styles.open__menu}`} onClick={handleOpenMenu}>
          {!openMenu ? navMenu() : navClose()}
        </button>
      </div>

      <Menu setOpenMenu={setOpenMenu} openMenu={openMenu} />
    </nav>
  );
};

export default Nav;
