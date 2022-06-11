import React, { useState } from 'react';
import { CardGroup, Col, Container, Row } from 'react-bootstrap';
import SinglePackage from '../SinglePackage/SinglePackage';
import RangeSlider from 'react-bootstrap-range-slider';
import styles from './EmailSuite.module.css';

const emailPackages = [
    {
        packageTitle: 'Standard',
        price: '29',
        description: 'For organizations that need no-fuss HIPAA compliant email encryption',
        facilities: ['14 day free trial', 'Default encryption', 'HITRUST CSF certified']
    },
    {
        packageTitle: 'Plus',
        price: '59',
        description: 'For organizations that also need inbound email security protection',
        facilities: ['14 day free trial', 'All features of Standard', 'ExecProtect', 'Zero Trust Email'],
        packageType: 'Most Popular'
    },
    {
        packageTitle: 'Premium',
        price: '79',
        description: 'For organizations with advanced security and workflow automation needs',
        facilities: ['14 day free trial', 'All features of Standard & Plus', 'Email DLP', 'Email archiving', 'Workflow automation (optional add-on)']
    }

];

const EmailSuite = () => {
    const [value, setValue] = useState(0);

    return (
        <div className={styles.emailSuiteSection}>
            <Container>
                <div className='mx-auto pt-5 pb-4 text-center'>
                    <h1 className={styles.heading}>Choose the right plan for your organization</h1>
                    <h4 className={`py-2 ${styles.desc}`}>Free 14 day trial included with any Paubox Email Suite plan</h4>
                </div>
                <div className='mx-auto'>
                    <Row xs={3} md={3} lg={3}>
                        <Col >
                            <div className={`mx-auto py-3 text-center rounded-top text-white ${styles.pauboxEmail}`}>
                                <h5 className='mx-auto'>Paubox Email Suite</h5>
                            </div>
                        </Col>
                        <Col>
                            <div className={`mx-auto py-3 text-center rounded-top  ${styles.pauboxMarketing}`}>
                                <h5 className='mx-auto'>Paubox Marketing</h5>
                            </div>
                        </Col>
                        <Col>
                            <div className={`mx-auto py-3 text-center rounded-top  ${styles.pauboxApi}`}>
                                <h5 className='mx-auto'>Paubox Email API</h5>
                            </div>
                        </Col>
                    </Row>
                </div>
                <div className={`mx-auto text-center text-white p-4 ${styles.senderSection}`}>
                    <h2 className={styles.senderTitle}>How many senders do you have?</h2>
                    <p className=''>Find your cost below</p>
                    <div className={`py-3 ${styles.rangeSection}`}>
                        <RangeSlider
                            className={`${styles.slider}`}
                            value={value}
                            onChange={changeEvent => setValue(changeEvent.target.value)}
                        />
                    </div>
                </div>
                <div className='mx-auto pb-5'>
                    <CardGroup >
                        {
                            emailPackages?.map((singlePackage, p_id) => (<SinglePackage key={p_id} singlePackage={singlePackage} />))
                        }
                    </CardGroup>
                </div>
            </Container>

        </div>
    );
};

export default EmailSuite;