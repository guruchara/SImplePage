import React from "react"
import styles from './table.module.css'

const TableView = () => {

    let columnArr = ['sr No.', 'Name', 'Email', 'Pincode', 'PhoneNumber']

    let count = 1;
    const localData = JSON.parse(localStorage.getItem('data'))

    let dataArr = [];
    dataArr.push(localData)

    return (

        <div className={styles.mainContainer}>

            <p className={styles.details} >Details </p>

            <table>
                <tr>
                    {columnArr && columnArr.map((item, index) => (
                        < th >{item}</th>
                    ))
                    }
                </tr>

                {dataArr.map((item, index) => (
                    <tr>
                        <>
                            <td key={index}>{count++}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.pincode}</td>
                            <td>{item.phone}</td>
                            <br></br>
                        </>
                    </tr>
                ))}
            </table>

        </div >
    )
}

export default TableView;