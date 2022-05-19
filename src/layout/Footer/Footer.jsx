import classes from './footer.module.scss'
import { Links } from "../../components/Contacts/links";

export const Footer = () => {
    return (
        <div className={classes.footerBlock}>
            <footer className={` ${classes.container}`}>
                <h2 className={classes.footerBlock__title}>Valentine Kal'chevski</h2>
                <Links/>
                <small>&copy; 2021  all rights reserved.</small>
            </footer>
        </div>

    )
}
