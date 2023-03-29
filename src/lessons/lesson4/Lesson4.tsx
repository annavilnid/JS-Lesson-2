import React, {useEffect} from 'react'
import './lesson_4';
import {handlePromise} from "./lesson_4";

const Lesson4 = () => {

  let resolvePromis = () => {
    handlePromise.onSuccess('ok')
  }

  let rejectPromis = () => {
    handlePromise.onError('ne-ok')
  }

  let createPromis = () => {
    let promis = new Promise((res, rej) => {
      document.querySelector('#btn-resolve-promise')?.addEventListener('click', () => {
        res("успех")
      })
      document.querySelector('#btn-reject-promise')?.addEventListener('click', () => {
        rej("ошибка")
      })
    });
    handlePromise.promise = promis;
    handlePromise.resolve = resolvePromis;
    handlePromise.reject = rejectPromis;
  }


  return (
    <div>
      <button id='btn-create-promise' onClick={createPromis}>Create Promise</button>
      <button id='btn-resolve-promise' onClick={resolvePromis}>Resolve Promise</button>
      <button id='btn-reject-promise' onClick={rejectPromis}>Reject Promise</button>
      <button onClick={() => console.log(handlePromise.promise)}>Promise</button>
    </div>
  );
}

export default Lesson4;