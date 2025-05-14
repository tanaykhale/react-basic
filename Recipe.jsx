import React, { Component } from 'react';
import "../../node_modules/bootstrap/dist/css/bootstrap.min.css";


class Recipe extends Component {
    state = { recipe: [] };

    componentDidMount() {
        const ajax = new XMLHttpRequest(); 
        ajax.onreadystatechange = () => {
            if (ajax.readyState === 4 && ajax.status === 200) { 
                const data = JSON.parse(ajax.responseText);
                console.log(data.meals);
                this.setState({ recipe: data.meals });
                // console.log("recipe"+this.state.recipe[0].strMeal);
            }
        };
        const url = 'https://www.themealdb.com/api/json/v1/1/search.php?s=pizza';
        ajax.open('GET', url, true);
        ajax.send();
    }

    render() {
        
        return (
            <>
            <h1>Recipe List</h1>
            <div className="container">
            {this.state.recipe.map((meal) => (
                <>
                <p className="fw-bold">Recipe Name: {meal.strMeal}</p>
                <div className="row mb-4" >
                    <div className="col-md-4">
                        <img
                            className="img-responsive rounded"
                            src={meal.strMealThumb}
                            alt={meal.strMeal}
                            style={{ width: "300px", height: "300px" }}
                        />
                         
                    </div>
                    <div className="col-md-8 d-flex flex-column justify-content-center">
                        
                        <p>{meal.strInstructions}</p>
                    </div> 
                    {meal.strYoutube && (
                            <video
                                controls
                                style={{ width: "300px", height: "300px" }}
                            >
                                <source src={meal.strYoutube} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        )}
                        {/* <img src="temp.gif" alt="" height='100px' width='100px' /> */}
                </div>
                </>
            ))}
        </div>
            </>
        );
    }
}

export default Recipe;