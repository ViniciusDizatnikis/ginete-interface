import { useEffect, useState } from "react";
import styles from "./styles.module.css";

import ImageError from "@/assets/images/ImageError.png";
import SkeletonLoader from "../../SkeletonLoader";

interface ArtistCardProps {
  imgURL: string;
  name: string;
  size?: number;
  subtitle?: string;
  onClick?: () => void;
}

type ImageStatus = "loading" | "loaded" | "error";

const ArtistCard = ({
  name,
  imgURL,
  size = 120,
  subtitle = "Artista",
  onClick,
}: ArtistCardProps) => {
  const [status, setStatus] = useState<ImageStatus>("loading");

  const artistName = name.trim();

  useEffect(() => {
    setStatus("loading");
  }, [imgURL]);

  return (
    <article className={styles.card} style={{ width: size }} onClick={onClick}>
      <div className={styles.background}></div>
      <div className={styles.frame} data-status={status}>
        {status !== "error" ? (
          <img
            key={imgURL}
            className={styles.artistImg}
            src={imgURL}
            alt={`Artista ${artistName}`}
            loading="lazy"
            decoding="async"
            draggable={false}
            onLoad={() =>
              setTimeout(() => {
                setStatus("loaded");
              })
            }
            onError={() => setStatus("error")}
          />
        ) : (
          <img
            src={ImageError}
            className={styles.imageError}
            alt="Imagem do artista indisponível"
          />
        )}

        {status === "loading" && (
          <div className={styles.skeletonOverlay}>
            <SkeletonLoader variant="circular" width="100%" height="100%" />
          </div>
        )}
      </div>

      <div className={styles.artistDescr}>
        <h2 className={styles.title} title={artistName}>
          {status === "loading" ? (
            <SkeletonLoader variant="text" width="100%" />
          ) : (
            artistName
          )}
        </h2>

        {subtitle && (
          <p className={styles.subtitle}>
            {status === "loading" ? (
              <SkeletonLoader variant="text" width="55%" />
            ) : (
              subtitle
            )}
          </p>
        )}
      </div>
    </article>
  );
};

export default ArtistCard;
