import React from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number //текущий номер страницы
    itemsCountForPage: number  //текущее количество строк на странице
    totalCount: number //общее количество всех записей
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.ceil(totalCount/itemsCountForPage) // пишет студент // вычислить количество страниц +

    const onChangeCallback = (event: any, page: number) => { //
        // пишет студент +
        onChange(page, itemsCountForPage) //newPage создаётся здесь, page = newPage
  // тут пользователь выбрал нужную страницу, количество строк не меняется
    }

    const onChangeSelect = (event: any) => {
        // пишет студент +
        let newCount = Number(event.currentTarget.value)
        // сколько теперь будет строк на страницах,
        onChange(1, newCount)
        // страницу сбрасываем на 1
    }

    return (
        <div className={s.pagination}>
            <Pagination
                //выбираем номер страницы
                id={id + '-pagination'}
                sx={{
                    // стили для Pagination // пишет студент
                }}
                page={page}
                count={lastPage} // общее количество страниц, а не строк
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                //выбираем количество строк на странице
                id={id + '-pagination-select'}
                value={itemsCountForPage} //какое значение сейчас выбрано в select
                //value выбирает пользователь на UI
                // itemsCountForPage - хранится в стейте, текущее значение
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChange={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
