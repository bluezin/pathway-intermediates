import { useEffect, useRef, useState } from "react";
import styles from "./index.module.css";
import Image from "next/image";

const SelectField = ({
  id,
  label,
  onChange,
  onBlur,
  messageError,
}: {
  id: string;
  label: string;
  onBlur?: (props: unknown) => void;
  onChange: (prop: string) => void;
  messageError?: string;
}) => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select Subject");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleChangeOption = (option: string) => {
    setSelectedOption(option);
    setShowOptions(false);
    onChange(option);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setShowOptions(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div style={{ position: "relative" }}>
      <p className={styles.label}>{label}</p>

      <div className={styles.container__input}>
        <input
          id={id}
          value={selectedOption}
          onClick={() => {
            setShowOptions(true);
          }}
          className={styles.input}
          readOnly
          onBlur={onBlur}
        />

        <button
          onClick={() => {
            setShowOptions(true);
          }}
        >
          <Image src="/down-arrow.svg" alt="down-arrow" width={20} height={20} />
        </button>
      </div>

      {showOptions && (
        <div className={styles.container__options} ref={dropdownRef}>
          <button onClick={() => handleChangeOption("Select Subject")}>
            Select Subject
          </button>
          <button onClick={() => handleChangeOption("Products")}>
            Products
          </button>
          <button onClick={() => handleChangeOption("Distributor")}>
            Distributor
          </button>
          <button onClick={() => handleChangeOption("Recruit")}>Recruit</button>
          <button onClick={() => handleChangeOption("Others")}>Others</button>
        </div>
      )}

      {messageError && (
        <strong className={styles.messageError}>{messageError}</strong>
      )}
    </div>
  );
};

export default SelectField;
