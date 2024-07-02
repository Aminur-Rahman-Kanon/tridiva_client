import React, { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from 'react-router-dom';
import styles from './contact.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faSpinner } from "@fortawesome/free-solid-svg-icons";
import bg from '../../Assets/quote/quote_bg.jpg';
import { servicesMsg } from '../../Data/data';
import Modal from '../../Components/Modal/modal';

const Contact = () => {
    //destructuring query params as queryId
    const { queryId }  = useParams();
    const navigate = useNavigate();

    //declaring local variables
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [service, setService] = useState('');
    const [attachment, setAttachment] = useState(null);
    const [spinner, setSpinner] = useState(false);
    const [modal, setModal] = useState(false);
    const [status, setStatus] = useState('');
    const [btnDisable, setBtnDisable] = useState(true);

    //hooks to handles the query params in relation with setting servcices value automatically
    useEffect(() => {
      if (queryId){
        const desiredService = servicesMsg[queryId];
        setService(desiredService);
      }
    }, [queryId]);

    useEffect(() => {
      if (name && address && phone && service){
        setBtnDisable(false);
      }
      else {
        setBtnDisable(true);
      }
    }, [name, address, phone, service])

    const querySubmitHandler = async (e) => {
      e.preventDefault();
      const formData = new FormData();
      
      if (attachment){
        formData.append('attachment', attachment);
      }

      const data = JSON.stringify({ name, address, phone, service });

      formData.append('data', data);

      setSpinner(true);
      await fetch('https://tridiva-server.onrender.com/service', {
        method: 'POST',
        body: formData
      }).then(res => res.json()).then(result => {
        setSpinner(false);
        if (result.status === 'success'){
          setStatus('success');
          setModal(true);
        }
      })
      .catch(err => {
        setSpinner(false);
        setStatus('failed');
        setModal(true);
      });
    }

    let statusMsg;

    if (status === 'success'){
      statusMsg = <div className={styles.statusContainer}>
        <h2 className={styles.headerBlack}>Your request has been sent.</h2>
        <span className={styles.textBlack}>We will get back to you ASAP.</span>
        <button className={styles.statusBtn} onClick={() => window.location.reload()}>Thank You</button>
      </div>
    }
    else if (status === 'failed'){
      statusMsg = <div className={styles.statusContainer}>
        <h2 className={styles.headerBlack}>Something went wrong.</h2>
        <span className={styles.textBlack}>Please try again.</span>
        <button className={styles.statusBtn} onClick={() => {
          setStatus('');
          setModal(false);
        }}>OK</button>
      </div>
    }

    return (
        <>
        <Modal modal={modal}>
          {statusMsg}
        </Modal>
        <div className={styles.container}>
            <div className={styles.quoteContainer}>
                <div className={styles.wrapper}>
                    <span className={styles.cornerTop}></span>
                    <span className={styles.cornerBottom}></span>
                    <div className={styles.bgWrapper}>
                        <div className={styles.bgImgContainer}>
                            <img src={bg} alt='tridiva it' className={styles.bgImg}/>
                        </div>
                        <div className={styles.formContainer}>
                            <h2 className={styles.headingWhiteLarge}>get a quote</h2>
                            <form className={styles.formWrapper}>
                                <div className={styles.inputContainer}>
                                    <input type='text'
                                           placeholder="Full name"
                                           required
                                           className={styles.input}
                                           onChange={ (e) => setName(e.target.value) }/>
                                </div>
                                <div className={styles.inputContainer}>
                                    <input type='email'
                                           placeholder="Email address"
                                           required
                                           className={styles.input}
                                           onChange={ (e) => setAddress(e.target.value) }/>
                                </div>
                                <div className={styles.inputContainer}>
                                    <input type='number'
                                           required
                                           placeholder="Phone number"
                                           className={styles.input}
                                           onChange={ (e) => setPhone(e.target.value) }/>
                                </div>
                                <div className={styles.textareaContainer}>
                                    <textarea rows={10} placeholder="What can we do for you today?"
                                              value={service}
                                              onChange={(e) => setService(e.target.value)}
                                              className={styles.textarea} />
                                </div>
                                <div className={styles.fileInputContainer}>
                                  <span className={styles.textSmallWhite}>If you have any plan to attach (Single image or pdf only)</span>
                                  <div className={styles.inputContainer}>
                                    <input type="file"
                                           className={styles.input}
                                           multiple={false}
                                           name="attachment"
                                           accept="image/*, application/pdf"
                                           onChange={(e) => setAttachment(e.target.files[0])}/>
                                  </div>
                                </div>
                                <div className={styles.btnGroup}>
                                  <button disabled={btnDisable} className={styles.linkGreenSmall} onClick={ querySubmitHandler }>
                                      <span className={styles.linkGreenSmallSlider}></span>
                                      <span className={styles.linkGreenSmallText}>{spinner ?
                                        <FontAwesomeIcon icon={faSpinner} spinPulse className={styles.btnSpinner} />
                                        :
                                        'Submit Query'
                                      }
                                      </span>
                                  </button>
                                  <button className={styles.linkBlueSmall} onClick={ () => navigate(-1) }>
                                      <span className={styles.linkBlueSmallSlider}></span>
                                      <span className={styles.linkBlueSmallText}>Go Back</span>
                                  </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.element5Container}>
                <h3 className={styles.headerWhite}>looking for something else?</h3>
                <h2 className={styles.headerSmall}>are you looking for someone to build a professional website for your company or youeself?</h2>
                <h3 className={styles.headerExSmall}>we got you covered. our talented professional team are always ready for you here</h3>
                <Link to={'/service/web-development'} className={styles.linkBlue}>
                    <span className={styles.linkBlueSlider}></span>
                    <span className={styles.linkText}>checkout our service</span>
                </Link>
            </div>
            <div className={styles.element5Container}>
                <h3 className={styles.headerWhite}>checkout our pricing</h3>
                <h2 className={styles.headerSmall}>whether you got small or large project, our low flexible price range will make tour feet in e-commerce field.</h2>
                <h3 className={styles.el5TextWhite}>TRIDIVA IT pround to offer low price flexible payment options that are unbeatable in industries.
                Besides, we have several payment options that will hep you choose the best options that will fit your need. Whether you choose one-off-payment or pay monthly, our price range are guaranteed to make you happy.
                And in case, if you are not happy then yoy can leave us anytime. See our terms & conditions for more details.</h3>
                <Link to={'/pricing'} className={styles.linkGreen}>
                    <span className={styles.linkGreenSlider}></span>
                    <span className={styles.linkText}>go to pricing</span>
                </Link>
            </div>
        </div>
        </>
    )
}

export default Contact;
