import { Component } from "react";
class Assignment1 extends Component {
    state = { pizza:[] }
    
    componentDidMount(){
        let promise=new Promise((resolve,reject)=>{
            var helper=new XMLHttpRequest();
            helper.onreadystatechange=()=>{
                if(helper.readyState==4 && helper.status==200){
                    let data=JSON.parse(helper.responseText)
                    resolve(data);
                }
            }
            helper.open('GET','https://www.themealdb.com/api/json/v1/1/search.php?s=pizza');
            helper.send('');
        })
        promise.then((data)=>{
            this.setState({pizza:data.meals[0]})})
        .catch((err)=>console.log('error'+err))
    } 
    render() { 
        return (<>
        <h1>Sample</h1>
        <h1>Recipe </h1>
        <div>
            <p>Recipe Name: {this.state.pizza.strMeal}</p>
                        <img 
                            src={this.state.pizza.strMealThumb} 
                            alt={this.state.pizza.strMeal} 
                            style={{ width: "200px", height: "200px" }} 
                        />
                        <p>Instructions: {this.state.pizza.strInstructions}</p>
                    </div>
        </>);
    }
}
 
export default Assignment1;