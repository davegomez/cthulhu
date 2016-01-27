import React, { Component, PropTypes } from 'react';
import TableOfContents from './TableOfContents';
import ContentView from './ContentView';
import CSSModules from 'react-css-modules';
import styles from './_content.scss';

export default class Content extends Component {
  static propTypes = {
    actions: PropTypes.object.isRequired,
    model: PropTypes.object,
    bind: PropTypes.func,
    drive: PropTypes.object,
    path: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;

    if (!props.model) {
      return (
        <div>Loading...</div>
      );
    }

    const content = props.model.contents
      .filter(section => props.path.active.indexOf(section.id) >= 0)[0] || props.model.contents[0];

    return (
      <div className='row'>
        <TableOfContents
          content={props.model.tableOfContents}
          drive={this.props.drive}
          path={this.props.path} />
        <ContentView
          content={content}
          subsections={content.subsections}
          editing={props.model.editing}
          actions={props.actions}
          drive={props.drive}
          path={props.path}
          modalActive={props.model.modalActive}
          marker={props.model.marker}/>
      </div>
    );
  }
}

export default CSSModules(Content, styles);
