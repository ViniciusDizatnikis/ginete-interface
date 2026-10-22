import { useState } from "react";
import style from "./style.module.css";

import ImageError from "@/assets/images/ImageError.png";

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
  const [prevURL, setPrevURL] = useState(imgURL);

  const artistName = name.trim();

  if (imgURL !== prevURL) {
    setPrevURL(imgURL);
    setStatus("loading");
  }

  return (
    <article
      className={`${style.card} ${style[size]}`}
      onClick={onClick ?? undefined}
    >
      <div className={style.frame} data-status={status}>
        {status === "error" ? (
          <img src={ImageError} className={style.imageError} />
        ) : (
          <img
            className={style.artistImg}
            src={imgURL}
            alt={`Artista ${artistName}`}
            loading="lazy"
            decoding="async"
            draggable={false}
            onLoad={() => setStatus("loaded")}
            onError={() => setStatus("error")}
          />
        )}
      </div>

      <div className={style.artistDescr}>
        <h2 className={style.title} title={artistName}>
          {status === "loaded" ? (
            artistName
          ) : (
            <span className={style.skeletonTitle} />
          )}
        </h2>

        {subtitle && (
          <p className={style.subtitle}>
            {status === "loaded" ? (
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
