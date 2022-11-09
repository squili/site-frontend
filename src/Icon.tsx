import { Component } from "solid-js";
import styles from "./Icon.module.css";

type Props = {
    src: string,
};

const Icon: Component<Props> = (props: Props) => {
    return <img src={props.src} class={styles.icon}></img>;
}

export default Icon;
