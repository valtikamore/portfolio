import container from '../../styles/Container.module.css'
import {Button} from "../../components/button/Button";
import classes from "./Contacts.module.css";
import {useState} from "react";


export const Contacts = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e) => {
        setValue(e.currentTarget.value)
    }
    return (
        <div className={classes.ContactsBlock}>
            <article className={`${container.container} ${classes.container} `}>
                <h2 className={classes.contactsBlock__title}>Contacts</h2>
                <form className={classes.form}>
                    <ul>
                        <li>
                            <label>First Name</label>
                            <input type="text" placeholder="Enter your first name here"/>
                        </li>
                        <li>
                            <label>Last Name</label>
                            <input type="text" placeholder="Enter your last name here"/>
                        </li>
                        <li>
                            <label>Email</label>
                            <input type="email" placeholder="Enter your email here"/>
                        </li>
                        <li>
                            <label>Message</label>
                            <textarea placeholder="Enter your message here" value={value}
                                      onChange={onChangeHandler}> </textarea>
                        </li>
                        <li>
                            <Button title={'Send'} class={classes.btn} type={'submit'}/>
                        </li>
                    </ul>

                </form>

            </article>
        </div>


    )
}