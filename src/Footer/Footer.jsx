
import container from '../styles/Container.module.scss'
import classes from './footer.module.scss'
import {Links} from "../components/contacts/links";

export const Footer = (props) => {
    return (
        <div className={classes.footerBlock}>
            <footer className={`${container.container} ${classes.container}`}>
                <h2 className={classes.footerBlock__title}>Valentine Kal'chevski</h2>
                <Links contacts={props.contacts}/>
                <small>&copy; 2021  all rights reserved.</small>
            </footer>
        </div>

    )
}