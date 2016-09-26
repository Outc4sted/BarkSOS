
const morseCode = {
  a: [1, 2],    n: [2,1],     '.': [1,2,1,2],
  b: [2,1,1,1], o: [2,2,2],   ',': [2,2,1,1,2,2],
  c: [2,1,2,1], p: [1,2,2,1], ':': [2,2,2,1,1,1],
  d: [2,1,1],   q: [2,2,1,2], '?': [1,1,2,2,1,1],
  e: [1],       r: [1,2,1],   '.': [1,2,1,2],
  f: [1,1,2,1], s: [1,1,1],   '"': [1,2,2,2,2,1],
  g: [2,2,1],   t: [2],       '-': [2,1,1,1,1,2],
  h: [1,1,1,1], u: [1,1,2],   '/': [2,1,1,2,1],
  i: [1,1],     v: [1,1,1,2], '@': [1,2,2,1,2,1],
  j: [1,2,2,2], w: [1,2,2],   '=': [2,1,1,1,2],
  k: [2,1,2],   x: [2,1,1,2],
  l: [1,2,1,1], y: [2,1,2,2],
  m: [2,2],     z: [2,2,1,1],
};

const timers = [];
const duration = {
  character: 500,
  word: 450,
  frame: 130
};

export const UPDATE_DOG_FRAMES = 'UPDATE_DOG_FRAMES';
export function updateDogFrames(stop) {
  return dispatch => {
    let dogFrameIndex = 0;

    if (stop) {
      timers.forEach(t => clearInterval(t));
      dispatch({
        type: UPDATE_DOG_FRAMES,
        dogFrameIndex
      });
    }
    else {
      const animating = setInterval(() => {
        dispatch({
          type: UPDATE_DOG_FRAMES,
          dogFrameIndex
        });

        if (++dogFrameIndex === 4)
          clearInterval(animating);
      }, duration.frame);

      timers.push(animating);
    }
  };
}

export const TRANSLATION_QUERY = 'TRANSLATION_QUERY';
export function translationQuery(event) {
  return {
    type: TRANSLATION_QUERY,
    message: event.target.value
  };
}

export const TRANSLATE_MESSAGE = 'TRANSLATE_MESSAGE';
export function translateMessage(message) {
  return dispatch => {
    const msgCopy = message.toLowerCase().split('');

    async function translate() {
      dispatch(beginMessage());

      while (msgCopy.length) {
        const currentIndex = message.length - msgCopy.length,
              morseTranslation = Array.prototype.concat.apply([], morseCode[msgCopy.shift()]),
              barks = morseTranslation || null;

        dispatch({
          type: TRANSLATE_MESSAGE,
          currentIndex
        });

        await woof(barks);
      }

      dispatch(updateDogFrames(true));
      dispatch(endMessage());
    }

    const woof = barks => {
      return new Promise((resolve, reject) => {
        const barking = setInterval(() => {
          if (barks && barks === ' ')
            setTimeout(() => {
              resolve(clearInterval(barking));
            }, duration.word);

          else if (barks.length) {
            barks.shift() === 1 ? dispatch(shortBark()) : dispatch(longBark());
            dispatch(updateDogFrames());
          }

          else resolve(clearInterval(barking));
        }, duration.character);
      });
    };

    translate();
  };
}

export const END_MESSAGE = 'END_MESSAGE';
export function endMessage() {
  return {
    type: END_MESSAGE
  };
}

export const BEGIN_MESSAGE = 'BEGIN_MESSAGE';
export function beginMessage() {
  return {
    type: BEGIN_MESSAGE
  };
}

export const SHORT_BARK = 'SHORT_BARK';
export function shortBark() {
  return {
    type: SHORT_BARK,
    meta: { sound: 'barks.shortBark' }
  };
}

export const LONG_BARK = 'LONG_BARK';
export function longBark() {
  return {
    type: LONG_BARK,
    meta: { sound: 'barks.longBark' }
  };
}
