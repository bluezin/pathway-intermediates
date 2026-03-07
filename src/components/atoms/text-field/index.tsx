import styles from "./index.module.css";

const TextField = ({
  defaultValue,
  id,
  onChange,
  onBlur,
  label,
  messageError,
}: {
  defaultValue?: string;
  id: string;
  onChange: (props: unknown) => void;
  onBlur?: (props: unknown) => void;
  label: string;
  messageError?: string;
}) => {
  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        <p style={{ paddingBottom: "10px", paddingTop: "10px" }}>{label}</p>

        <input
          defaultValue={defaultValue}
          className={styles.input}
          id={id}
          onChange={onChange}
          onBlur={onBlur}
        />
      </label>

      {messageError && (
        <strong className={styles.messageError}>{messageError}</strong>
      )}
    </div>
  );
};

export default TextField;
