import { Component } from "solid-js";
import styles from './SocialLink.module.css';

type Props = {
    name: string,
    icon: string,
    url: string,
};

const SocialLink: Component<Props> = (props: Props) => {
    return (
        <a draggable={false} href={props.url} target={"_blank"} class={styles.link}>
            <div class={styles.SocialLink}>
                <img draggable={false} src={props.icon} class={styles.icon}>{props.icon}</img>
                <div class={styles.label}>{props.name}</div>
            </div>
        </a>
    );
}

export default SocialLink;
