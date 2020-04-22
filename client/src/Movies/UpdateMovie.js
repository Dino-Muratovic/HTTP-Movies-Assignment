import React, { useState, useEffect } from 'react';
import axios from 'axios';

const initialMovie = {
    
    title: "",
    director: "",
    metascore: "",
    stars: [],    
}

const UpdateMovie = () => {

    //Set state

    const [movie, setMovie] = useState(initialMovie);


    //Use effect
    useEffect(() => {
       axios
       .get('http://localhost:5000/api/movies') 
       .then(res => {
           //res.data
           console.log(res)
           setMovie(res.data);
       })
       .catch(err => console.log(`There was an error returning data`, err))
    }, [])

    //Handle changes

    const onInputChange = ev => {
        // console.log(ev)
        ev.persist();
    }


    
    return (

        <div>
            <h3>Update Movie</h3>

            <form>              

                <input
                    type="text"
                    name="title"
                    placeholder="Title"
                    value={movie.title}
                    onChange={onInputChange}
                 />
                <br/>

                <input 
                    type="text"
                    name="director"
                    placeholder="Director"
                    value={movie.director}
                    onChange={onInputChange}
                />
                <br/>

                <input 
                    type="text"
                    name="metascore"
                    placeholder="Metascore"
                    value={movie.metascore}
                    onChange={onInputChange}
                />
                <br/> 
                   
                <input 
                    type="text"
                    name="stars"
                    placeholder="Stars"
                    value={movie.stars}
                    onChange={onInputChange}
                />
                <br/>

            </form>
        </div>
    )
    

}

export default UpdateMovie;