import {
  useCallback,
  useEffect,
  useRef,
  type CSSProperties,
  type PropsWithChildren,
} from "react";

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
  const containerRef = useRef<HTMLElement>(null);
  const itemsRef = useRef<HTMLDivElement>(null);

  const update = useCallback(() => {
    const container = itemsRef.current;
    if (!container) return;

    const items = Array.from(container.children) as HTMLElement[];

    items.forEach((item) => {
      item.hidden = false;
    });

    const availableWidth = container.clientWidth;
    const computedStyle = getComputedStyle(container);

    const gap = parseFloat(computedStyle.columnGap) || 0;

    let usedWidth = 0;

    items.forEach((item) => {
      const width = item.getBoundingClientRect().width;

      const requiredWidth = usedWidth === 0 ? width : width + gap;

      if (usedWidth + requiredWidth <= availableWidth) {
        usedWidth += requiredWidth;
      } else {
        item.hidden = true;
      }
    });
  }, []);

  useEffect(() => {
    const container = itemsRef.current;
    if (!container) return;

    const resizeObserver = new ResizeObserver(update);

    resizeObserver.observe(container);

    Array.from(container.children).forEach((item) => {
      resizeObserver.observe(item);
    });

    const mutationObserver = new MutationObserver(() => {
      Array.from(container.children).forEach((item) => {
        resizeObserver.observe(item);
      });

      update();
    });

    mutationObserver.observe(container, {
      childList: true,
    });

    update();

    return () => {
      resizeObserver.disconnect();
      mutationObserver.disconnect();
    };
  }, [update, children]);

  return (
    <section
      ref={containerRef}
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

      <div ref={itemsRef} className={styles.items}>
        {children}
      </div>
    </section>
  );
};

export default Presentation;
