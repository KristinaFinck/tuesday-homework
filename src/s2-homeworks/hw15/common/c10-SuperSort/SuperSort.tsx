import React from 'react'
import downIcon from './../icons/sort-down.svg'
import upIcon from './../icons/sort-up.svg'
import noneIcon from './../icons/nonIcon.svg'
import s from './../../HW15.module.css'
// добавить в проект иконки и импортировать

// const downIcon = '[\\/]'
// const upIcon = '[/\\]'
// const noneIcon = '[--]'

export type SuperSortPropsType = {
    id?: string
    sort: string //старое значение сортировки
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
//+
    if (sort === down) {
        return up
    } else if( sort === up) {
        return ''
    } else return down

}

export const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        const newSort = pureChange(sort, down, up)
        onChange(newSort)

    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
            className={s.sort}
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
            <img
                id={id + '-icon-' + sort}
                src={icon}
                alt="sort-icon"
            />
        </span>
    )
}

export default SuperSort
