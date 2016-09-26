import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';


const styles = {
  container: {
    height: 20,
    width: 20,
    margin: 0,
    textAlign: 'center',
    display: 'inline-block'
  },
  highlight: {
    height: '100%',
    backgroundColor: 'red'
  },
};

const TranslationBox = ({ message, currentIndex, dogFrame }) => (
  <Paper>
    {message.split('').map((c, index) => {
      const letterbox = index === currentIndex ?
                        c !== ' ' ? <div style={styles.highlight}>{c}</div> : <div style={styles.highlight}>&#8203;</div>
                      : c !== ' ' ? <div>{c}</div> : <div>&#8203;</div>;
      return (
        <Paper key={index} style={styles.container}>
          {letterbox}
        </Paper>
      );
    })}

    <pre dangerouslySetInnerHTML={{__html: dogFrame}} />
  </Paper>
);

TranslationBox.propTypes = {
  message: PropTypes.string.isRequired,
  currentIndex: PropTypes.number,
  dogFrame: PropTypes.string.isRequired
};


export {TranslationBox as default};
