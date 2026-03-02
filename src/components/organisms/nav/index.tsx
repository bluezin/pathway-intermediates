import Image from "next/image";
import styles from "./index.module.css";
import Link from "next/link";

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
        link: "#",
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
    link: "#",
  },
];

const Nav = () => {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <Image src="/pwi_logo_25.png" alt="logo" width={262} height={57} />
      </Link>

      <ul className={styles.menu}>
        {nav.map((item) => (
          <li className={`${styles.dropdown} ${styles[item.id]}`} key={item.id}>
            <a
              {...(item.link && { href: item.link })}
              className={styles.dropdown__title}
            >
              {item.title}
            </a>

            <ul
              className={`${styles.dropdown__options} ${styles[item.id]}__options`}
            >
              {item.options.map((option) => (
                <li key={option.id}>
                  <a href={option.link}>{option.title}</a>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
