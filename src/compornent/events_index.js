import React from "react";

import {connect} from 'react-redux'
import _ from 'lodash'
import {readEvents} from '../actions'

 class Events extends React.Component {
   componentDidMount(){
     this.props.readEvents()
   }

renderEvents(){
  return _.map(this.props.events, event =>(
    <tr key={event.id}>
      <td>{event.id}</td>
      <td>{event.title}</td>
      <td>{event.body}</td>
    </tr>
  ))
}
   render(){
    const props =this.props

     return (
          <table>
           <thead>
             <tr>
               <tr>ID</tr>
               <tr>Title</tr>
               <tr>Body</tr>
             </tr>
           </thead>

           <tbosy>
             {this.readEvents()}
           </tbosy>
         </table>
         )
     }
 }

const mapStateToProps = state => ({ events: state.events })

const mapDispatchToProps = ({ readEvents })

export default connect(mapStateToProps,mapDispatchToProps)(Events)
