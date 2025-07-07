import CircularText from "../components/circular-text/circular-text";
import styles from "../main-page/main-page.module.css";

function LoadingScreen() {
  return (
    <>
      <div className={styles.container}>
        <CircularText
          text="LOADING*4*YOU*"
          onHover="speedUp"
          spinDuration={10}
          className="custom-class"
        />
      </div>
    </>
  );
}

export default LoadingScreen;
