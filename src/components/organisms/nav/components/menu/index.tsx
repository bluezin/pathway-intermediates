import { useState } from "react";
import Social from "../social";
import styles from "./index.module.css";

const Menu = ({
  openMenu,
  setOpenMenu,
}: {
  openMenu: boolean;
  setOpenMenu: (prop: boolean) => void;
}) => {
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
          link: "/species/poultry",
          id: "2",
        },
        {
          title: "Ruminant",
          link: "/species/ruminant",
          id: "3",
        },
        {
          title: "Aquaculture",
          link: "/species/aquaculture",
          id: "4",
        },
      ],
    },
    {
      title: "Product List",
      id: "productList",
      options: [
        {
          title: "Accelerator Solutions",
          link: "/products/categories/accelerator-solutions",
          id: "1",
        },
        {
          title: "Gut Health Enhancers",
          link: "/products/categories/gut-health-enhancers",
          id: "2",
        },
        {
          title: "Functional Feed Additives",
          link: "/products/categories/functional-feed-additives",
          id: "3",
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

  return (
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

      <Social />
    </ul>
  );
};

export default Menu;
