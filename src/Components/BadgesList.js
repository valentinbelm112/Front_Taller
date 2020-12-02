
import React from 'react'

import './styles/BadgesList.css';

class BadgesListItem extends React.Component {
    render() {
      return (
        <div className="BadgesListItem">
          <img
            className="BadgesListItem__avatar"
            src={this.props.badge.avatarUl}
            alt={`${this.props.badge.descripcion} ${this.props.badge.lastName}`}
          />
  
          <div>
            <strong>
              {this.props.badge.descripcion} {this.props.badge.codigo}
            </strong>
            <br />@{this.props.badge.descripcion}
            <br />
            {this.props.badge.jobTitle}
          </div>
        </div>
      );
    }
  }
class BadgestList extends React.Component{
    render(){
    return(
    <ul className="list-unstyled">
                 
        {this.props.badges.map((badge)=>{
            return(
                <li key={badge.id}>
                 <BadgesListItem badge={badge} />   
                </li>
            );
          })}
    </ul>  
     ); }
}

export default BadgestList;