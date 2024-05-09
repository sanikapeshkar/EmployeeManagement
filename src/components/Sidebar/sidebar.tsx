import styles from './sidebar.module.scss'


export default function Sidebar(props:SidebarProps){


    return<div className={styles.Sidebar}>

   { props.data.map((item:Data)=>{
        return <div className={styles.ItemEach}  onClick={()=>props.handleClick(item.id)}>{item.name}</div>
    } )}
    </div>
}