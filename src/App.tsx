import Header from "./components/Header/header";
import Main from "./components/Main/main";
import styles from './App.module.scss'

export default function App(){


    return<div className={styles.MainContainer}><Header/><Main/></div>
}