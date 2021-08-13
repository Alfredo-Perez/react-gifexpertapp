import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    // const [categories, setCategories] = useState(['One Punch', 'Samurai X', 'Dragon Ball']);
    // const handleAdd = () => {
        
    //     // setCategories(cats => [...cats, 'HunterXHunter']);
    //     setCategories([...categories, 'HunterXHunter']);
    // }

    return (
        <>
            <h2> GifExpertApp </h2>

            <AddCategory setCategories = { setCategories }/>
            <hr />

            {/* <button onClick={handleAdd} >Agregar</button> */}

            <ol>
                {
                    categories.map( category =>
                        <GifGrid
                            key = { category } 
                            category= { category } 
                        />
                    )

                    // categories.map( category => {
                    //     return <li key={ category } > { category } </li>
                    // })
                }
            </ol>

        </>
    )
}

// export default GifExpertApp;
