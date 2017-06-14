import React,{Component} from 'react';
import { connect } from 'react-redux';
import { selectEloadas } from '../actions/index';
import { bindActionCreators } from 'redux';

class EloadasokList extends Component {
  renderList() {
    return this.props.eloadasok.map((eloadasok) => {
      return (
        <li
          key={eloadasok.title}
          onClick={() => this.props.selectEloadas(eloadasok)}
          className="list-group-item">
          {eloadasok.title}</li>
      );
    });
  }

    render() {
        return (
            <ul className="list-group col-sm-4">
              {this.renderList()}
            </ul>
        );
    }
}

function mapStateToProps(state) {
  // Whatever is returned will show up as props
  // inside of EloadasokList
  return {
    eloadasok: state.eloadasok
  };
}

// Anything returned from this function will end up as props
// on the EloadasList container
function mapDispatchToProps(dispatch) {
  // Whenever selectEloadas is called, the result should be passed
  // to all of our reducers
  return bindActionCreators({selectEloadas: selectEloadas}, dispatch);
}

// Promote EloadasList from a component to a container - it needs to know
// about this new dispatch method, selectBook. Make it available
// as a prop.
export default connect(mapStateToProps, mapDispatchToProps)(EloadasokList);
