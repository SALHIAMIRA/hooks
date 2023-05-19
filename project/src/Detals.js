import React from 'react'
import { useParams,Link } from 'react-router-dom'

const Detals = ({movies}) => {
    const {id} = useParams()
    const foundMovie= movies.find((el)=> el.id === +id)
    return (
        <div>
            <h1>{foundMovie.title}</h1>
            <iframe width="560" height="315" 
            src={foundMovie.trailer} 
            title="dzdzd" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen></iframe>
            <h3>{foundMovie.description}</h3>
            <Link to={"/"}><button> back to Home</button></Link>
        </div>
    )
}

export default Detals
