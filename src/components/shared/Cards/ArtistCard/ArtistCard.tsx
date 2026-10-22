import { useEffect, useState } from "react";
import style from "./style.module.css";

import ImageError from "@/assets/images/ImageError.png";
import SkeletonLoader from "../../SkeletonLoader";

interface ArtistCardProps {
  imgURL: string;
  name: string;
  size?: "small" | "medium";
  subtitle?: string;
  onClick?: () => void;
}

type ImageStatus = "loading" | "loaded" | "error";

const ArtistCard = ({
  name,
  imgURL,
  size = "small",
  subtitle = "Artista",
  onClick,
}: ArtistCardProps) => {
  const [status, setStatus] = useState<ImageStatus>("loading");

  const artistName = name.trim();

  useEffect(() => {
    setStatus("loading");
  }, [imgURL]);

  return (
    <article className={`${style.card} ${style[size]}`} onClick={onClick}>
      <div className={style.background}></div>
      <div className={style.frame} data-status={status}>
        {status !== "error" ? (
          <img
            key={imgURL}
            className={style.artistImg}
            src={imgURL}
            alt={`Artista ${artistName}`}
            loading="lazy"
            decoding="async"
            draggable={false}
            onLoad={() => setStatus("loaded")}
            onError={() => setStatus("error")}
          />
        ) : (
          <img
            src={ImageError}
            className={style.imageError}
            alt="Imagem do artista indisponível"
          />
        )}

        {status === "loading" && (
          <div className={style.skeletonOverlay}>
            <SkeletonLoader variant="circular" width="100%" height="100%" />
          </div>
        )}
      </div>

      <div className={style.artistDescr}>
        <h2 className={style.title} title={artistName}>
          {status === "loading" ? (
            <SkeletonLoader variant="text" width="100%" />
          ) : status === "loaded" ? (
            artistName
          ) : (
            <span className={style.skeletonTitle} />
          )}
        </h2>

        {subtitle && (
          <p className={style.subtitle}>
            {status === "loading" ? (
              <SkeletonLoader variant="text" width="55%" />
            ) : status === "loaded" ? (
              subtitle
            ) : (
              <span className={style.skeletonSubtitle} />
            )}
          </p>
        )}
      </div>
    </article>
  );
};

export default ArtistCard;
