import {Button} from "../../../../components/Button/Button";
import classes from "./Contacts.module.scss";
import {useState} from "react";
import {Title} from "../../../../components/SectionTitle/Title";
import {FormInfoItem} from "./formItem/formInfoItem";
import {config} from "./config";

export const Contacts = () => {
    const [value, setValue] = useState('')
    const onChangeHandler = (e) => {
        setValue(e.currentTarget.value)
    }
    return (
        <div className={classes.ContactsBlock} id={'contacts'}>
            <article className={` ${classes.container}`}>
                    <Title>
                        Contacts
                    </Title>
                <section className={classes.form__block}>
                    <div className={classes.formInfo__block}>
                        {config.formInfoItems.map((el,index) => <FormInfoItem
                            key={el + index} image={el.image}
                            imgAlt={el.imgAlt}
                            description={el.description}
                        />)}
                    </div>
                    <form className={classes.form}>
                        <ul>
                            <li>

                                <input type="text" placeholder="Your Name"/>
                            </li>
                            <li>

                                <input type="text" placeholder="Your second name"/>
                            </li>
                            <li>

                                <input type="email" placeholder="Your email"/>
                            </li>
                        </ul>
                        <div>
                             <textarea placeholder="Enter your message here" value={value}
                                       onChange={onChangeHandler}> </textarea>
                            <Button title={'Send'} type={'submit'}/>
                        </div>

                    </form>
                </section>

            </article>
        </div>


    )
}
