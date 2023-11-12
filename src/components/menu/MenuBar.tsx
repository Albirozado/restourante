
import Link from "next/link";
import styles from "../ui/menuStyles.module.css"
import { useRouter } from "next/router";

const MenuBar = () => {

  const router = useRouter();

  return (
    <ul>
      <li className={router.pathname == "/" ? `${styles.active}` : ""}>
        <Link href="/">home</Link>
      </li>
      <li className={router.pathname == "/about" ? `${styles.active}` : ""}>
        <Link href="/about">about</Link>
      </li>
    </ul>
  );
};

export default MenuBar

