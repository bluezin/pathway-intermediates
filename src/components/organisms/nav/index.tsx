/* eslint-disable @next/next/no-img-element */
import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";
import { navClose, navMenu } from "../../../../public/svg";
import { useState } from "react";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const [openOptions, setOpenOptions] = useState("");

  const nav = [
    {
      title: "About",
      id: "about",
      options: [
        {
          title: "Mission & Vision",
          link: "/mission&vision",
          id: "1",
        },
        {
          title: "History",
          link: "/history",
          id: "2",
        },
        {
          title: "Employee Spotlight",
          link: "/employee-spotlight",
          id: "3",
        },
      ],
    },
    {
      title: "Species",
      id: "species",
      options: [
        {
          title: "Swine",
          link: "/species/swine",
          id: "1",
        },
        {
          title: "Poultry",
          link: "#",
          id: "2",
        },
        {
          title: "Ruminant",
          link: "#",
          id: "3",
        },
        {
          title: "Aquaculture",
          link: "#",
          id: "4",
        },
      ],
    },
    {
      title: "Product List",
      id: "productList",
      options: [
        {
          title: "Lipidol Prime",
          link: "#",
          id: "1",
        },
        {
          title: "Lipidol Protect",
          link: "#",
          id: "2",
        },
      ],
    },
    {
      title: "Contact Us",
      id: "contactUs",
      options: [],
      link: "#contact-form",
      onclick: () => setOpenMenu(false),
    },
  ];

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);

    if (!openMenu) {
      document.body.classList.add("scroll-hidden");
    } else {
      document.body.classList.remove("scroll-hidden");
    }
  };

  return (
    <nav className={styles.nav}>
      <div className={styles.sub__nav}>
        <Link href="/" className={styles.link__logo}>
          <Image src="/pwi_logo_25.png" alt="logo" width={262} height={57} />
        </Link>

        <button className={`${styles.open__menu}`} onClick={handleOpenMenu}>
          {!openMenu ? navMenu() : navClose()}
        </button>
      </div>

      <ul
        className={`${styles.menu} ${openMenu ? styles.menu__active : ""}`}
        id="menu"
      >
        {nav.map((item) => (
          <li className={`${styles.dropdown} ${styles[item.id]}`} key={item.id}>
            <a
              {...(item.link && { href: item.link })}
              className={styles.dropdown__title}
              onClick={() => {
                if (item?.onclick) {
                  item.onclick();
                  return;
                }
                setOpenOptions(item.id);
              }}
            >
              {item.title}
            </a>

            <ul
              className={`${styles.dropdown__options} ${
                openOptions === item.id ? styles.dropdown__options__active : ""
              } ${styles[item.id]}__options`}
            >
              {item.options.map((option) => (
                <li key={option.id}>
                  <a href={option.link}>{option.title}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}

        <li className={styles.menu__social}>
          <p className={styles.divider}></p>

          <ul>
            <li>
              <Link
                href={"https://www.facebook.com/Pathway.Intermediates.global/"}
              >
                <img src="/facebook.webp" alt="facebook" />
              </Link>
              Facebook
            </li>

            <li>
              <Link
                href={"https://www.linkedin.com/company/pathway-intermediates/"}
              >
                <img src="/linkedin.webp" alt="linkedin" />
              </Link>
              Linkedin
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
