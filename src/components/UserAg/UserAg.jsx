import React, {Component} from "react";
import "./UserAg.css";
import { Link } from "react-router-dom"


  class UserAg extends Component {
      constructor(props){
          super(props)
          this.state={
              allocation:"",
              startdate:"",
              starttime:""

          }
          this.starttime= React.createRef();
        this.startdate= React.createRef();
      }
      handleCal=()=>{
          this.setState({
              startdate:this.startdate.current.value,
              starttime:this.starttime.current.value
          });
          console.log(this.startdate);
          console.log(this.starttime);
      }

      handleChange=(e)=>{
          this.setState({
              [e.target.id]:e.target.value
          });
          console.log(this.state.allocation);
          console.log(this.state.startdate);
          console.log(this.state.starttime);
      }

      componentDidMount(){
          const M = window.M;
           let con = this;
           document.addEventListener('DOMContentLoaded', function() {
    var elemsDate = document.querySelectorAll('.datepicker');
    M.Datepicker.init(elemsDate, {
        format:"dd/mm/yyyy",
        onSelect:con.handleCal

    });
    var elemsTime = document.querySelectorAll('.timepicker');
    M.Timepicker.init(elemsTime, {});
  });
  

      }
        render(){
        return (
            <div>
            <h1><i className="fas fa-calendar-alt" style={{color:"#A4D8F4"}}></i> Agendar</h1>
            <form>
                <div className="row">
                
                    <div className="input-field col s6" style={{width:"100%"}}>
                        <input  
                        id="allocation" 
                        type="text" 
                        className="active" 
                        style={{width:"90%"}}
                        value={this.state.allocation}
                        onChange={this.handleChange}
                        />
                        <label className="active" htmlFor="allocation" style={{width:"90%", left:"10%"}} >  Ubicacion</label>
                    </div>
                    <div className="input-field col s6" style={{width:"100%"}}>
                        <input 
                        type="text" 
                        className="datepicker" 
                        style={{width:"90%"}} 
                        id="startdate" 
                        ref={this.startdate}
                        />
                        <label className="active" htmlFor="startdate" style={{width:"90%" , left:"10%"}} > Dia</label>
                    </div>
                    
                    <div className="input-field col s6" style={{width:"100%"}}>
                        <input 
                        type="text" 
                        className="timepicker" 
                        style={{width:"90%" , left:"10%"}} 
                        id="starttime" 
                        ref={this.starttime}
                        />
                        <label className="active" htmlFor="starttime" style={{width:"90%", left:"10%"}} > Hora</label>
                    </div>
                </div>
            </form> 
            <div className="btns">
         <Link to="/usuarios" ><button >Cancel</button></Link>  <Link to="/usuarios" ><button >OK</button></Link> 
            
              
             </div>
            </div>
            
        );
};
}

export default UserAg;