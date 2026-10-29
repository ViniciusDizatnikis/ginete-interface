import {
  Children,
  cloneElement,
  isValidElement,
  useState,
  type MouseEvent,
  type PropsWithChildren,
  type ReactElement,
} from "react";

import type ListItem from "./ListItem/ListItem";
import styles from "./styles.module.css";

interface ListProps {
  children: ReactElement<typeof ListItem> | ReactElement<typeof ListItem>[];
}

const List = ({ children }: PropsWithChildren<ListProps>) => {
  const [selectedIndexes, setSelectedIndexes] = useState<number[]>([]);
  const [lastIndex, setLastIndex] = useState<number | null>(null);

  const items = Children.map(children, (child, index) => {
    if (
      !isValidElement<{
        selected: boolean;
        hasSelectedAbove: boolean;
        hasSelectedBelow: boolean;
        onCardClick: (event: MouseEvent) => void;
      }>(child)
    ) {
      return child;
    }

    const hasSelectedAbove = selectedIndexes.includes(index - 1);
    const hasSelectedBelow = selectedIndexes.includes(index + 1);

    return cloneElement(child, {
      selected: selectedIndexes.includes(index),
      hasSelectedAbove,
      hasSelectedBelow,
      onCardClick: (event) => {
        if (event.ctrlKey) {
          setSelectedIndexes((previous) => {
            if (previous.includes(index)) {
              setLastIndex(null);
              return previous.filter((itemIndex) => itemIndex !== index);
            } else {
              setLastIndex(index);
              return [...previous, index];
            }
          });
        } else if (event.shiftKey) {
          if (selectedIndexes.length > 0) {
            const anchor = lastIndex ?? index;

            const start = Math.min(anchor, index);
            const end = Math.max(anchor, index);

            const range: number[] = [...selectedIndexes];

            for (let i = start; i <= end; i++) {
              if (!range.includes(i)) {
                range.push(i);
              }
            }

            setSelectedIndexes(range.sort((a, b) => a - b));
          } else {
            const range = Array.from({ length: index + 1 }, (_, i) => 0 + i);
            setSelectedIndexes(range);
          }

          setLastIndex(index);
        } else {
          setSelectedIndexes([index]);
          setLastIndex(index);
        }
      },
    });
  });

  return <section className={styles.list}>{items}</section>;
};

export default List;
