import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from './SinglePackage.module.css';
import { HiCheck } from "react-icons/hi";


const SinglePackage = ({ singlePackage }) => {
    const { packageTitle, price, description, facilities, packageType } = singlePackage || {};
    return (
        <Card className={`p-4 mx-auto mb-4 ${styles.card}`}>
            <div className={`py-3 px-3 d-flex justify-content-center align-items-center flex-column ${styles.packageHeader}`}>
                {
                    packageType && (<span className={styles.popular}>{packageType}</span>)
                }
                <h2 className={`pb-3 pt-5 ${styles.title}`}>{packageTitle}</h2>
                <h1 className={`${styles.pricing}`}><sup>$</sup><span className='mx-1'>{price}</span><sub>/mo</sub></h1>
                <p className='fw-bolder'>Billed Annually</p>
                <small className='fw-bold '><i>1-10 senders</i></small>
            </div>
            <div className={styles.packageContent}>
                <p className='my-3 '>{description}</p>
                <p className='fw-bolder'>Includes:</p>
                {
                    facilities.map((facility, f_id) => (<p><HiCheck className={`fs-5 me-2  ${styles.checkmark}`} /><span className={styles.includeItem}>{facility}</span></p>))
                }
                {/* <p><HiCheck className={`fs-5 me-2  ${styles.checkmark}`} /><span className={styles.includeItem}>14 day free trial</span></p>
                <p><HiCheck className={`fs-5 me-2  ${styles.checkmark}`} /><span className={styles.includeItem}>Default encryption</span></p>
                <p><HiCheck className={`fs-5 me-2  ${styles.checkmark}`} /><span className={styles.includeItem}>HITRUST CSF certified</span> </p> */}
            </div>
            <div>
                <Button className={`mt-4 mx-auto w-100 ${styles.button}`}>Get Started</Button>
            </div>
        </Card>

    );
};

export default SinglePackage;