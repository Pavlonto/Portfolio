import React from 'react';
import s from './Skill.module.css'

type SkillPropsType = {
    title: string
}

function Skill(props: SkillPropsType) {

    return (
        <div className={s.item}>
            <div className={s.icon}></div>
            <h3 className={s.title}>{props.title}</h3>
            <span className={s.description}>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius, aspernatur.
            </span>
        </div>
    );
}

export default Skill;