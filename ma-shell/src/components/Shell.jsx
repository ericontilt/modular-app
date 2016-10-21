import React from 'react';
import { connect } from 'react-redux';

const Shell = ({ modules }) =>
  <div>
    <h1>Hello Modular World!</h1>
    <div id="modules">
      {
        modules.map((m, key) => <div id={m.target} key={key}></div>)
      }
    </div>
  </div>;

const mapStateToProps = (state) => {
  return {
    modules: state.modules
  };
};

export default connect(mapStateToProps)(Shell);
