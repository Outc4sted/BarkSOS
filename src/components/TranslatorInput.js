import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import { Row, Col } from 'react-flexbox-grid/lib/index';


const style = {
  width: '100%',
  paddingLeft: 5
};

const TranslationBox = ({ translateMessage, translationQuery, message }) => (
  <Row middle="xs">
    <Col xs={10}>
      <TextField style={style} hintText="What would you like barked to you in morse code" onChange={translationQuery} />
    </Col>
    <Col xs>
      <RaisedButton label="Translate" onClick={() => translateMessage(message)} />
    </Col>
  </Row>
);

TranslationBox.propTypes = {
  message: PropTypes.string,
  translateMessage: PropTypes.func.isRequired,
  translationQuery: PropTypes.func.isRequired
};


export {TranslationBox as default};
