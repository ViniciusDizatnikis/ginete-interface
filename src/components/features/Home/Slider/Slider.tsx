import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type PropsWithChildren,
} from "react";
import style from "./styles.module.css";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface SliderProps {
  title?: string;
  onSeeMore?: () => void;
  onSeeMoreLabel?: string;
  style?: CSSProperties;
}

const Slider = ({
  children,
  title,
  onSeeMore,
  onSeeMoreLabel,
  style : styleParam
}: PropsWithChildren<SliderProps>) => {
  const rootRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  // Define quais setas deverão aparecer
  const update = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;

    const { scrollLeft, scrollWidth, clientWidth } = track;
    const max = scrollWidth - clientWidth;

    setCanPrev(scrollLeft > 1);
    setCanNext(scrollLeft < max - 1);
  }, []);

  // move o Scroll do carrossel para a esquerda ou direita dependendo do botão clicado
  const scrollByPage = useCallback((direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: direction * track.clientWidth * 0.5 });
  }, []);

  // Observa mudanças no tamanho do carrossel e de seus elementos filhos
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const resize = new ResizeObserver(update);
    resize.observe(track);
    Array.from(track.children).forEach((child) => resize.observe(child));

    const mutation = new MutationObserver((records) => {
      records.forEach((record) =>
        record.addedNodes.forEach((node) => {
          if (node instanceof Element) resize.observe(node);
        }),
      );
      update();
    });
    mutation.observe(track, { childList: true });

    return () => {
      resize.disconnect();
      mutation.disconnect();
    };
  }, [update]);

  return (
    <section ref={rootRef} className={style.slider} style={styleParam}>
      {title && (
        <header className={style.header}>
          {title && <h2 className={style.title}>{title}</h2>}

          {onSeeMore && (
            <h3 className={style.seeMore} onClick={onSeeMore}>
              {onSeeMoreLabel ?? "Ver mais"}
            </h3>
          )}
        </header>
      )}

      <div className={style.viewport}>
        <button
          type="button"
          className={`${style.arrow} ${style.prev}`}
          onClick={() => scrollByPage(-1)}
          disabled={!canPrev}
          aria-label="Anterior"
        >
          <ChevronLeft />
        </button>

        <div
          ref={trackRef}
          className={style.track}
          data-fade-start={canPrev || undefined}
          data-fade-end={canNext || undefined}
          role="region"
          aria-roledescription="carrossel"
          aria-label={title ?? "Carrossel"}
          tabIndex={0}
          onScroll={update}
          onDragStart={(e) => e.preventDefault()}
        >
          {children}
        </div>

        <button
          type="button"
          className={`${style.arrow} ${style.next}`}
          onClick={() => scrollByPage(1)}
          disabled={!canNext}
          aria-label="Próximo"
        >
          <ChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Slider;
