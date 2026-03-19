import React from 'react'
import downIcon from './../icons/icon-down.png'
import upIcon from './../icons/icon-up.png'
import noneIcon from './../icons/icon-none.png'
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

    if (sort === down) {
        return up
    } else if( sort === up) {
        return ''
    } else return down

}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
        //const newSort = pureChange(sort, down, up)
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon

    return (
        <span
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
