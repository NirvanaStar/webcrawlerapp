import React, { Component } from 'react';
import { connect } from 'react-redux';


class AppList extends Component {
  renderApp(appData){
    return (
      <tr key={appData._id}>
        <td><a href={appData._source.appurl}>{appData._source.title}</a></td>
        <td>{appData._source.category}</td>
        <td>{appData._source.rating}</td>
        <td><img src={appData._source.imgurl}  alt={appData._source.title} /></td>
      </tr>
    )
  }

  render() {
    return(
    	<table className="table table-hover">
          <thead>
            <tr>
              <th>Name</th>
              <th>Category</th>
              <th>Rating</th>
              <th>Icon</th>
            </tr>
          </thead>
          <tbody>
            {this.props.app.map(this.renderApp)}
          </tbody>
    	</table>
    );
  }
}

function mapStateToProps({app}){
  console.log(app);
  return { app };
}

export default connect(mapStateToProps)(AppList);