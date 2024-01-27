import React, { useState } from 'react';
import { 
  AiFillApple, 
  AiFillAndroid, 
  AiOutlineGlobal 
} from "react-icons/ai";
import { 
  RxPlus, 
  RxBorderSolid 
} from "react-icons/rx";
import './questions.css';

import moodsync from "../../assets/moodsync3.png"

const Explanation = () => (
  <>
    <p className="explanation">
      For card debit transactions, a 1% transaction fee is applicable based on the transaction amount. However, there is a minimum charge of $1 and a maximum fee of $5.
    </p>
    <p className="explanation">
      Additionally, there is a $1 monthly maintenance fee per card. This fee will only be deducted after your first debit transaction in a given month.
    </p>
  </>
)

const Questions = () => {
  const [toggleExplain, setToggleExplain] = useState(false);
  
  return (
    <div className="section5">
      <div className="question_section">
        <div className="question_heading">
          <p className="topline">Answered Questions?</p>
          <h3 className="text_heading">Questions? We got <br />answers!</h3>
        </div>
        <div className="">
          <div className="question">
            <button className="question1">
              <h3>What are the fees associated with transmission?</h3>
              <div className="bar">
                {toggleExplain
                  ? <RxBorderSolid size={27} onClick={() => setToggleExplain(false)} />
                  : <RxPlus size={27} onClick={() => setToggleExplain(true)} />
                }
              </div>
            </button>
            {toggleExplain && (
              <Explanation />
            )}
            <hr />
          </div>
        </div>
        <button className="question_button">See more answered questions</button>
        <div className="land">
          <div className="ready">
            <div className="">
              <h3>Ready to join the <br/> Geng? Sign up today!</h3>
            </div>
            <div className="">
              <p>Available on</p>
            </div>
            <div className="app_button">
              <button className="apple_app">
                <div className="icon"><AiFillApple/></div>
                App store
              </button>
              <button className="play_app">
                <div className="icon"><AiFillAndroid/></div>
                Play store</button>
              <button className="web_app">
                <div className="icon"><AiOutlineGlobal /></div>
                Web App</button>
            </div>        
          </div>
          <div className="sample">
            <img src={moodsync} alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Questions;