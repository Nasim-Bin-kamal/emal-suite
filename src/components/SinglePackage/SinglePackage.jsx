import React from 'react';
import { Card, Button } from 'react-bootstrap';
import styles from './SinglePackage.module.css';
import { HiCheck } from "react-icons/hi";


const SinglePackage = () => {
    return (
        <Card className={`p-4 mx-auto mb-4 ${styles.card}`}>
            <div className={`py-3 px-3 d-flex justify-content-center align-items-center flex-column ${styles.packageHeader}`}>
                <span className={styles.popular}>MOST POPULAR</span>
                <h2 className={`py-3 ${styles.title}`}>Standard</h2>
                <h1 className={`${styles.pricing}`}><sup>$</sup><span className='mx-1'>29</span><sub>/mo</sub></h1>
                <p className='fw-bolder'>Billed Annually</p>
                <small className='fw-bold '><i>1-10 senders</i></small>
            </div>
            <div className={styles.packageContent}>
                <p className='my-3 '>For organizations that need no-fuss HIPAA compliant email encryption</p>
                <p className='fw-bolder'>Includes:</p>
                <p><HiCheck className={`fs-5 me-2  ${styles.checkmark}`} /><span className={styles.includeItem}>14 day free trial</span></p>
                <p><HiCheck className={`fs-5 me-2  ${styles.checkmark}`} /><span className={styles.includeItem}>Default encryption</span></p>
                <p><HiCheck className={`fs-5 me-2  ${styles.checkmark}`} /><span className={styles.includeItem}>HITRUST CSF certified</span> </p>
            </div>
            <div>
                <Button className={`mt-4 mx-auto w-100 ${styles.button}`}>Get Started</Button>
            </div>
        </Card>

    );
};

export default SinglePackage;