import { Component, createSignal, onCleanup } from 'solid-js';
import styles from './Home.module.css';
import SocialLink from './SocialLink';
import codebergLogo from './codeberg.svg';
import githubLogo from './github.svg';
import flyLogo from './fly.ico';
import Icon from './Icon';

const Home: Component = () => {
  const [maxWidth, setMaxWidth] = createSignal(700);

  const resize = () => {
    const element = document.getElementById("paragraph");
    if (element != undefined)
      setMaxWidth(element.clientWidth);
  }

  window.addEventListener('resize', resize);
  onCleanup(() => window.removeEventListener('resize', resize));

  return (
    <div class={styles.Home}>
      <div class={styles.paragraph} id="paragraph">
        <h3>Hi, I'm Mia!</h3>
        <p>I'm currently working on my website, which is hosted on <Icon src={flyLogo} /> Fly</p>
        <p>You can find me on:</p>
      </div>
      <div class={styles.links} style={`max-width: ${maxWidth()}px`}>
        <SocialLink name={"Codeberg"} icon={codebergLogo} url={"https://codeberg.org/squili"} />
        <SocialLink name={"GitHub"} icon={githubLogo} url={"https://github.com/squili"} />
      </div>
    </div>
  );
};

export default Home;
