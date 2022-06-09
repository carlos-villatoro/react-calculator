import React,{Component} from "react";

export default class Calculator extends Component{
    state = {
        num1:'',
        num2:'',
        sum:'',
        operator: '+'
    }

    setNum = (e)=>{
    this.setState({ [e.target.name]: e.target.value })
    }

    handleCalculate = (e)=>{
    e.preventDefault()
    this.setState(prevState=>{
        let result =0
        // swtich case based on operator
        switch(this.state.operator){
            case '+':
                result = Number(prevState.num1) + Number(prevState.num2)
                break
            case '-':
                result = prevState.num1 - prevState.num2
                break
            case '*':
                result = prevState.num1 * prevState.num2
                break
            case '/':
                result = prevState.num1 / prevState.num2
                break
            default:
                console.warn(`${this.state.operator} is not a kind opf math i've heard of`)
                break
        }
        return {sum: result}
    })}

    handleOperatorChange = (e)=>{
    console.log(e)
    this.setState({operator: e.target.value})
    }

    
    render(){
        return(
            <div className="caclulator">
                <h1>Add with React!</h1>
        
                <form onSubmit={this.handleCalculate}>
                <input type="number" 
                    name="num1"
                    value={this.state.num1}
                    onChange={this.setNum}
                />

                <select name='operator' 
                onChange={this.handleOperatorChange}
                >
                    <option value='+'>+</option>
                    <option value='-'>-</option>
                    <option value='*'>*</option>
                    <option value='/'>/</option>
                </select>
                
                <input type="number" 
                    name="num2"
                    value={this.state.num2}
                    onChange={this.setNum}
                />
                <button>=</button>
                <h3>{this.state.sum}</h3>
                </form>
            </div>
        )
    }
}