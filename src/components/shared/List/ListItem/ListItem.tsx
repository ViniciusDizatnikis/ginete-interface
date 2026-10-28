import { Play } from "lucide-react";
import styles from "./styles.module.css";

interface ListItemProps {
  index?: number;
  imgURL: string;
  name: string;
  artistName?: string;
  duration?: string;
  onClick?: () => void;
  onPlay?: () => void;
}

const ListItem = ({
  index,
  imgURL,
  name,
  artistName,
  duration,
  onClick,
  onPlay,
}: ListItemProps) => {
  return (
    <article className={styles.card}>
      {index !== undefined && (
        <div className={styles.divIndex}>
          <span>{index}</span>
          <Play className={styles.playButton} fill="currentColor" />
        </div>
      )}

      {imgURL && (
        <img src={imgURL} className={styles.img} draggable={false} alt={name} />
      )}

      <div className={styles.containerInfo}>
        <h2 className={styles.title} title={name}>
          <span>{name}</span>
        </h2>
        <p className={styles.artistName} title={artistName}>
          <span>{artistName}</span>
        </p>
      </div>
      <div className={styles.divDuration}>
        <p>{duration}</p>
      </div>
    </article>
  );
};

export default ListItem;
