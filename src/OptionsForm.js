import React from 'react';
import './OptionsForm.css';
import Feature from './Feature';


class OptionsForm extends React.Component {
  
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {Object.keys(this.props.features).map((feature, idx) => {
          return <Feature
            key={idx} 
            features={this.props.features} 
            feature={feature} 
            idx={idx} 
            selected={this.props.selected} 
            updateFeature={this.props.updateFeature}
          />
        })}
      </form>
    )
  }
}

export default OptionsForm;