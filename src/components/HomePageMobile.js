import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import styles from './homePage.module.css';

const HomePageMobile = () => {

    const { register, handleSubmit, watch, reset, onChange, formState: { errors } } = useForm({ mode: 'onChange', shouldUseNativeValidation: true, reValidateMode: 'onChange', });

    const navigate = useNavigate();

    const onSubmit = (data) => {
        localStorage.setItem('data', JSON.stringify(data))
        alert('Thankyou \n Data Submitted Successfully')
        // reset();
    }
    const handleOnlyNumber = (event) => {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    }
    const handleNavigate = () => {
        navigate('/viewDetails')
    }

    return (
        <div className={styles.mainContainer}>
            <div className={styles.viewTable}>
                <button onClick={() => handleNavigate()}>View Table</button>
            </div>
            <div className={styles.main}>

                <div className={styles.rectangleForm}>
                    <p className={styles.enter}>Please Enter Your Details </p>
                    <div className={styles.formContainer}>

                        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>

                            <div className={styles.formGroup}>
                                <label htmlFor="name">name</label>
                                <input type="text" name="name" className={styles.inputBox} placeholder="your name"  {...register("name")} />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="email">e-mail id</label>
                                <input type="text" name="email" className={styles.inputBox} placeholder="e-mail id"  {...register("email")} />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="phone number">phone number*</label>
                                <input type="tel" name="phoneNumber" onKeyPress={(event) => { handleOnlyNumber(event) }} className={`${styles.inputBox} ${errors.phone ? styles.isInValid : ''}`} placeholder="phone number*" {...register("phone", { required: true, minLength: 10, maxLength: 10, pattern: /^[0-9]+$/ })} />
                            </div>

                            <div className={styles.formGroup}>
                                <label htmlFor="pincode">pincode</label>
                                <input type="tel" name="pincode" onKeyPress={(event) => { handleOnlyNumber(event) }} className={styles.inputBox} placeholder="6 digit pincode" {...register("pincode", { minLength: 6, maxLength: 6, pattern: /^(\d{4}|\d{6})$/ })} />
                            </div>

                            <div className={styles.saveButton} >
                                <button type="submit">Save</button>
                            </div>

                        </form>
                    </div>

                </div>

            </div>

        </div >
    )
}

export default HomePageMobile;