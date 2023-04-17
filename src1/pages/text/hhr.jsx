class A extends React.Component{
    state={carName:'benchi'}
    changcar = () =>{
        this.setState({
            carName:'aotuoo'
        })
    }   

render(){
    return(
    <div>
        <div>woshi1A</div>
        <button onClick={this.changcar}>huahe</button>
        <b carName={this.state.carName}/>
    </div>
    )
}}
class B extends React.Component{
    componentWillReceiveProps(){}
    render(){
        <div>wishib:{this.props.carName  }</div>

    }
}