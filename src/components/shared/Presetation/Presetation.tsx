import { type CSSProperties, type PropsWithChildren } from "react";

import styles from "./styles.module.css";

interface PresentationProps {
  title?: string;
  minColumnWidth: number;
  rows?: number;
  onSeeMore?: () => void;
  onSeeMoreLabel?: string;
  style?: CSSProperties;
}

const Presentation = ({
  title,
  onSeeMore,
  onSeeMoreLabel,
  children,
  minColumnWidth,
  rows = 1,
  style: styleParam,
}: PropsWithChildren<PresentationProps>) => {
  return (
    <section
      className={styles.presentation}
      style={
        {
          ...styleParam,
          "--min-column-width": `${minColumnWidth}px`,
          "--row-count": rows,
        } as CSSProperties
      }
    >
      {(title || onSeeMore) && (
        <header className={styles.header}>
          {title && <h2 className={styles.title}>{title}</h2>}

          {onSeeMore && (
            <button
              type="button"
              className={styles.seeMore}
              onClick={onSeeMore}
            >
              {onSeeMoreLabel ?? "Ver mais"}
            </button>
          )}
        </header>
      )}

      <div className={styles.items}>{children}</div>
    </section>
  );
};

export default Presentation;
