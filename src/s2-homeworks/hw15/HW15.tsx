import React, {useEffect, useState} from 'react'
import s2 from '../../s1-main/App.module.css'
import s from './HW15.module.css'
import axios from 'axios'
import SuperPagination from './common/c9-SuperPagination/SuperPagination'
import {useSearchParams} from 'react-router-dom'
import SuperSort from './common/c10-SuperSort/SuperSort'
import CircularProgress from '@mui/material/CircularProgress'

/*
* 1 - дописать SuperPagination
* 2 - дописать SuperSort
* 3 - проверить pureChange тестами
* 3 - дописать sendQuery, onChangePagination, onChangeSort в HW15
* 4 - сделать стили в соответствии с дизайном
* 5 - добавить HW15 в HW5/pages/JuniorPlus
* */
//
// Пользователь нажал пагинацию
//         ↓
// вызывается onChangePagination
//         ↓
// вызывается sendQuery({page,count,sort})
//         ↓
// sendQuery вызывает getTechs
//         ↓
// getTechs делает axios.get(...)
//         ↓
// axios отправляет запрос на сервер
//         ↓
// сервер возвращает techs и totalCount
//         ↓
// .then получает res
//         ↓
// мы сохраняем данные в state
//         ↓
// React перерисовывает страницу

type TechType = {
    id: number
    tech: string
    developer: string
}

type ParamsType = {
    sort: string
    page: number
    count: number
}

const getTechs = (params: ParamsType) => {
    return axios
        .get<{ techs: TechType[], totalCount: number }>(
            'https://samurai.it-incubator.io/api/3.0/homework/test3',
            {params}
        )
        .catch((e) => {
            alert(e.response?.data?.errorText || e.message)
        })
}

const HW15 = () => {
    const [sort, setSort] = useState('')// строка сортировки (например: '0tech', '1tech', '')
    const [page, setPage] = useState(1) //текущий номер страницы
    const [count, setCount] = useState(4) //количество строк на странице
    const [isLoading, setLoading] = useState(false) //просто крутилка
    const [totalCount, setTotalCount] = useState(100) // общее количество элементов на сервере (нужно для расчёта страниц)
    const [searchParams, setSearchParams] = useSearchParams() // параметры из URL (query string) и функция для их изменения
    const [techs, setTechs] = useState<TechType[]>([]) // список технологий (данные, пришедшие с сервера)

    const sendQuery = (params: ParamsType) => {
        setLoading(true)
        getTechs(params)
            .then((res) => {
                // делает студент +
                if (res) {
                    setTechs(res.data.techs)
                    setTotalCount(res.data.totalCount)
                }
            })

            .finally(() => {
                setLoading(false)
            })
    }

    const onChangePagination = (newPage: number, newCount: number) => {
        // делает студент +
// выбираем страницу
        console.log('onChangePagination', newPage, newCount)

        setPage(newPage)
        setCount(newCount)
        sendQuery({
            sort: sort,
            page: newPage,
            count: newCount,//sendQuery → работает с сервером → числа
        })
        setSearchParams({sort: sort, page: String(newPage), count: String(newCount)})

    }

    const onChangeSort = (newSort: string) => {
        // делает студент +
        setSort(newSort)
        setPage(1)// при сортировке сбрасывать на 1 страницу
        sendQuery({
            sort: newSort,
            page: 1, //sendQuery → работает с сервером → числа
            count
        })
        setSearchParams({sort: newSort, page: "1", count: String(count)})
//setSearchParams → работает с URL → строки
        // setSearchParams нужен, чтобы состояние страницы сохранялось в URL:
// - после обновления страницы
// - при передаче ссылки
// - при навигации назад/вперёд в браузере
    }

    useEffect(() => {
        // при открытии страницы:
        // читаем параметры из URL
        //кладём их в state
        // запрашиваем данные с сервера
        const params = Object.fromEntries(searchParams)

        const initPage = Number(params.page) || 1
        const initCount = Number(params.count) || 4
        const initSort = params.sort || ''

        sendQuery({
            sort: initSort,
            page: initPage,
            count: initCount
        })
        setPage(initPage)
        setCount(initCount)
        setSort(initSort)
    }, [])

    const mappedTechs = techs.map(t => (
        <div key={t.id} className={s.row}>
            <div id={'hw15-tech-' + t.id} className={s.tech}>
                {t.tech}
            </div>

            <div id={'hw15-developer-' + t.id} className={s.developer}>
                {t.developer}
            </div>
        </div>
    ))

    return (
        <div id={'hw15'}>
            <div className={s2.hwTitle}>Homework #15</div>

            <div className={s2.hw}>
                {/*{isLoading && <div id={'hw15-loading'} className={s.loading}>Loading...</div>}*/}
                {isLoading && (
                    <div id={'hw15-loading'} className={s.loading}>
                        <CircularProgress size={70} thickness={4} />
                    </div>
                )}
                <SuperPagination
                    page={page}
                    itemsCountForPage={count}
                    totalCount={totalCount}
                    onChange={onChangePagination}
                />

                <div className={s.rowHeader}>
                    <div className={s.techHeader}>
                        tech
                        <SuperSort sort={sort} value={'tech'} onChange={onChangeSort}/>
                    </div>

                    <div className={s.developerHeader}>
                        developer
                        <SuperSort sort={sort} value={'developer'} onChange={onChangeSort}/>
                    </div>
                </div>

                {mappedTechs}
            </div>
        </div>
    )
}

export default HW15
