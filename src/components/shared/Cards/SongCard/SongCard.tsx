import { useEffect, useState } from "react";
import styles from "./styles.module.css";
import SkeletonLoader from "../../SkeletonLoader";
import ImageError from "@/assets/images/ImageError.png";
import { Play } from "lucide-react";

interface SongcardProps {
  imgURL: string;
  name: string;
  size?: number;
  adaptative?: boolean;
  subtitle?: string;
  onClick?: () => void;
  onPlay?: () => void;
}

type ImageStatus = "loading" | "loaded" | "error";

const SongCard = ({
  imgURL,
  name,
  size,
  subtitle,
  adaptative,
  onClick,
  onPlay,
}: SongcardProps) => {
  const [status, setStatus] = useState<ImageStatus>("loading");

  const songName = name.trim();

  useEffect(() => {
    setStatus("loading");
  }, [imgURL]);

  return (
    <article
      className={styles.card}
      style={{
        maxWidth: adaptative ? "none" : size,
        minWidth: size,
      }}
      onClick={onClick}
    >
      <div className={styles.background}></div>
      <div className={styles.frame} data-status={status}>
        {status !== "error" ? (
          <img
            key={imgURL}
            className={styles.songImg}
            src={imgURL}
            alt={`${songName}`}
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
            alt="Imagem da música indisponível"
          />
        )}

        {status === "loading" && (
          <div className={styles.skeletonOverlay}>
            <SkeletonLoader
              width="100%"
              height="100%"
              style={{ borderRadius: "4px" }}
            />
          </div>
        )}

        <button
          aria-label={`Tocar ${songName}`}
          className={styles.playButton}
          onClick={(e) => {
            e.stopPropagation();
            onPlay?.();
          }}
        >
          <Play fill="currentColor" aria-hidden="true" />
        </button>
      </div>

      <div className={styles.artistDescr}>
        <h2 className={styles.title} title={songName}>
          {status === "loading" ? (
            <SkeletonLoader variant="text" width="100%" />
          ) : (
            songName
          )}
        </h2>

        {subtitle && (
          <p className={styles.subtitle}>
            {status === "loading" ? (
              <SkeletonLoader variant="text" width="70%" />
            ) : (
              subtitle
            )}
          </p>
        )}
      </div>
    </article>
  );
};

export default SongCard;
