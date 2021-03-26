import React from 'react';
import { observer } from "mobx-react" // Or "mobx-react".


@observer class ParentComponent extends React.Component {
    onOpenClick = () => {
      this.overlayState.active = true;
    };
  
    @observable overlayState = {
      active: false,
    };
  
    render() {
      return (
        <div>
          <a onClick={this.onOpenClick}>open</a>
          <Overlay observable={this.overlayState}>
        </div>
      );
    }
  }
  
  @observer class Overlay extends React.Component {
    onCloseClick = () => {
      this.props.observable.active = false;
    };
  
    render() {
      return (
        {this.props.observable.active ?
          <div>
            <a onClick={this.onCloseClick}>close</a>
          </div>
        : null}
      );
    }
  }
  
  Overlay.propTypes = {
    observable: React.PropTypes.shape({
      active: React.PropTypes.bool.isRequired,
    }).isRequired,
  };