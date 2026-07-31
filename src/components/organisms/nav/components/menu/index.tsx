import { useEffect, useState } from "react";
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
  const [isMobile, setIsMobile] = useState(false);

  const nav = [
    {
      title: "About",
      id: "about",
      linkDesktop: "/about",
      linkMobile: "#",
      options: [
        {
          title: "We are Pathway",
          link: "/about",
          id: "1",
        },
        {
          title: "Mission & Vision",
          link: "/mission&vision",
          id: "2",
        },
        {
          title: "History",
          link: "/history",
          id: "3",
        },
        {
          title: "Employee Spotlight",
          link: "/employee-spotlight",
          id: "4",
        },
        {
          title: "Location",
          link: "/map",
          id: "5",
        },
      ],
    },
    {
      title: "Species",
      useLinkMobile: false,
      linkDesktop: "/species",
      linkMobile: "#",
      id: "species",
      options: [
        {
          title: "Overview",
          link: "/species",
          className: styles.option__for__mobile,
          id: "1",
        },
        {
          title: "Swine",
          link: "/species/swine",
          id: "2",
        },
        {
          title: "Poultry",
          link: "/species/poultry",
          id: "3",
        },
        {
          title: "Ruminant",
          link: "/species/ruminant",
          id: "4",
        },
        {
          title: "Aquaculture",
          link: "/species/aquaculture",
          id: "5",
        },
      ],
    },
    {
      title: "Product List",
      id: "productList",
      linkDesktop: "/products",
      linkMobile: "#",
      options: [
        {
          title: "Overview",
          link: "/products",
          className: styles.option__for__mobile,
          id: "1",
        },
        {
          title: "Accelerator Solutions",
          link: "/products/categories/accelerator-solutions",
          id: "2",
        },
        {
          title: "Gut Health Enhancers",
          link: "/products/categories/gut-health-enhancers",
          id: "3",
        },
        {
          title: "Functional Feed Additives",
          link: "/products/categories/functional-feed-additives",
          id: "4",
        },
      ],
    },
    {
      title: "BioMatrix",
      useLinkMobile: true,
      id: "bioMatrix",
      options: [],
      linkDesktop: "/bio-matrix",
      linkMobile: "/bio-matrix",
    },
    {
      title: "Contact Us",
      useLinkMobile: true,
      id: "contactUs",
      options: [],
      linkDesktop: "#contact-form",
      linkMobile: "#contact-form",
      onclick: () => setOpenMenu(false),
    },
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 900);
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleOptionsView = () => {
      if (!openMenu) {
        setOpenOptions("");
      }
    };

    handleOptionsView();
  }, [openMenu]);

  return (
    <ul
      className={`${styles.menu} ${openMenu ? styles.menu__active : ""}`}
      id="menu"
    >
      {nav.map((item) => (
        <li className={`${styles.dropdown} ${styles[item.id]}`} key={item.id}>
          <a
            href={isMobile ? item.linkMobile : item.linkDesktop}
            className={styles.dropdown__title}
            onClick={() => {
              if (item?.onclick) {
                item.onclick();
                return;
              }
              setOpenOptions(openOptions === item.id ? "" : item.id);
            }}
          >
            {item.title}
          </a>

          {item.options.length ? (
            <ul
              className={`${styles.dropdown__options} ${
                openOptions === item.id ? styles.dropdown__options__active : ""
              } ${styles[item.id]}__options`}
            >
              {item.options.map((option) => (
                <li key={option.id}>
                  <a href={option.link} className={option.className || ""}>
                    {option.title}
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            ""
          )}
        </li>
      ))}

      <Social />
    </ul>
  );
};

export default Menu;
