import React from 'react'
import './lesson_4';
import {handlePromise} from "./lesson_4";

const Lesson4 = () => {

  let rejectPromis = () => {
    handlePromise.onError('333')
  }

  let resolvePromis = () => {
    handlePromise.onSuccess('222')
  }

  let createPromis = () => {
    let promis = new Promise((res, rej) => {
    })
    handlePromise.promise = promis;
    handlePromise.resolve = resolvePromis;
    handlePromise.reject = rejectPromis;
    console.log(handlePromise)
  }


  return (
        <div>
            <button id='btn-create-promise' onClick={createPromis}>Create Promise</button>
            <button id='btn-resolve-promise' onClick={resolvePromis}>Resolve Promise</button>
            <button id='btn-reject-promise' onClick={rejectPromis}>Reject Promise</button>
        </div>
    );
}

export default Lesson4;