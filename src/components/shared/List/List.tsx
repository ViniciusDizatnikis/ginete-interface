import {
  Children,
  type KeyboardEvent,
  type PropsWithChildren,
  type ReactElement,
} from "react";
import styles from "./styles.module.css";
import type ListItem from "./ListItem/ListItem";

interface ListProps {
  children: ReactElement<typeof ListItem> | ReactElement<typeof ListItem>[];
}

const List = ({ children }: PropsWithChildren<ListProps>) => {
  return <section>{children}</section>;
};

export default List;
