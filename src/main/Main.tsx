import React from 'react';
import s from './Main.module.css'
import sContainer from '../common/Container.module.css'

function Main() {
    return (
        <main className={s.main}>
            <div className={sContainer.container}>
                <div className={s.text}>
                    <span>Привет</span>
                    <h1>Я</h1>
                    <p>Никто</p>
                </div>
                <div className={s.photo}></div>
            </div>
        </main>
    );
}

export default Main;