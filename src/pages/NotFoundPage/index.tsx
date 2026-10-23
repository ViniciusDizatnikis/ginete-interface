import styles from "./styles.module.css";
import GauchoError404 from "@/assets/images/GauchoError404.png";
import AcordeonError404 from "@/assets/images/AcordeonError404.png";
import CavaloError404 from "@/assets/images/CavaloError404.png";

import { Link } from "react-router-dom";

const NotFoundPage = () => {
  const images = [GauchoError404, AcordeonError404, CavaloError404];

  const randomImage = images[Math.floor(Math.random() * images.length)];

  return (
    <div className={styles.container}>
      <img
        src={randomImage}
        alt="Página não encontrada"
        className={styles.imageNotFound}
      />

      <h1>Mas Bah</h1>

      <p>Página não encontrada.</p>

      <Link to="/">Voltar ao início</Link>
    </div>
  );
};

export default NotFoundPage;
