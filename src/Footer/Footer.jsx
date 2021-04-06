
import container from '../styles/Container.module.css'
import classes from './footer.module.css'

export const Footer = (props) => {
    return (
        <div className={classes.footerBlock}>
            <footer className={`${container.container} ${classes.container}`}>
                <h2 className={classes.footerBlock__title}>Valentine Kal'chevski</h2>
                <ul className={classes.footerBlock__items}>
                    <li>CopyRight</li>
                    <li>CopyRight</li>
                    <li>CopyRight</li>
                    <li>CopyRight</li>
                </ul>
                <small>&copy; 2021  all rights reserved.</small>
            </footer>
        </div>

    )
}