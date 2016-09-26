import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import TranslatorInput from '../components/TranslatorInput';
import TranslationBox from '../components/TranslationBox';
import * as TranslateActions from '../actions/translation';
import { Row, Col } from 'react-flexbox-grid/lib/index';


function mapStateToProps({translation: {message, currentIndex, dogFrame}}) {
  return {
    message,
    currentIndex,
    dogFrame
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(TranslateActions, dispatch);
}

class TranslatorPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { message, currentIndex, dogFrame, translateMessage, translationQuery } = this.props;

    return (
      <Row>
        <Col xs>
          <TranslatorInput message={message} translateMessage={translateMessage} translationQuery={translationQuery} />
          <TranslationBox message={message} currentIndex={currentIndex} dogFrame={dogFrame}/>
        </Col>
      </Row>
    );
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(TranslatorPage);
