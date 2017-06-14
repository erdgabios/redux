import React,{Component} from 'react';
import { connect } from 'react-redux';

class EloadasDetail extends Component {
  render() {
    if (!this.props.eloadas) {
      return(
        <div>
          Válasszon egy előadást a kezdéshez.
        </div>
      );
    }

    return (
        <div>
          <h3>Details for:</h3>
            <div>Cím: {this.props.eloadas.title}</div>
            <div>Időtartam: {this.props.eloadas.eloadasHossz}</div>
          </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    eloadas: state.activeEloadas
  };
}

export default connect(mapStateToProps)(EloadasDetail);
