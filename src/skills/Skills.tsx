import React from 'react';
import s from './Skills.module.css'
import sContainer from '../common/Container.module.css'
import Skill from '../skill/Skill';

function Skills() {

    const skills = ['Html', 'Css', 'JavaScript']

    const mappedSkills = skills.map((sk, i) => {
        return (
            <Skill title={sk} />
        )
    })

    return (
        <div className={s.skills}>
            <div className={
                `${sContainer.container} ${s.container}`
            }>
                <h2 className={s.title}>Мои Скиллы</h2>
                <div className={s.items}>
                    {mappedSkills}
                </div>
            </div>
        </div>
    );
}

export default Skills;