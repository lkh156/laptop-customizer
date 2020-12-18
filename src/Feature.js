import React from 'react';
import Option from './Option';
import './Feature.css';


class Feature extends React.Component {
  render() {
    const featureHash = this.props.feature + '-' + this.props.idx;
      
    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{this.props.feature}</h3>
        </legend>
        {this.props.features[this.props.feature].map((item, index) => 
          <Option
            key={index} 
            updateFeature={this.props.updateFeature} 
            item={item} 
            feature={this.props.feature} 
            selected={this.props.selected}
          />
        )}
      </fieldset>
    )
  }
}

export default Feature;