import './categories.scss'

import React from 'react'

// Importing Icons
import { ReactComponent as AllIcon } from '../../assets/icons/all.svg'
import { ReactComponent as ComedyIcon } from '../../assets/icons/comedy.svg'
import { ReactComponent as Music} from '../../assets/icons/music.svg'
import { ReactComponent as NightLife} from '../../assets/icons/nightlife.svg'
import { ReactComponent as Sports} from '../../assets/icons/sports.svg'
import { ReactComponent as Theaters} from '../../assets/icons/theaters.svg'



const Categories = () => {
    return (
        <div className='categories-cr'>
            <h2>Categories</h2>
            <div className='cr'>
                <CategoryItem title='All' image={ <AllIcon/> } msg="AllIcon"/>
                <CategoryItem title='Comedy' image={ <ComedyIcon/> } msg="Comedy Icon"/>
                <CategoryItem title='Movies' image={ <Theaters/> } msg='Movies Icon'/>
                <CategoryItem title='Music' image={ <Music/> } msg='Music Icon'/>
                <CategoryItem title='Lifestyle' image={ <NightLife/> } msg='Lifestyle Icon'/>
                <CategoryItem title='Sports' image={ <Sports/> } msg='Sports Icon   '/>
            </div>
        </div>
    )
}

const CategoryItem = (props) => {
    return (
        <a href='?' className='item'>
            {props.image}
            <p className='title'>{ props.title }</p>
        </a>
    )
}

export default Categories
