import { BEGIN_MESSAGE, END_MESSAGE, TRANSLATION_QUERY, TRANSLATE_MESSAGE, UPDATE_DOG_FRAMES } from '../actions/translation';


const dogFrames = [
`                         ,._                     <br>
                 ,--.    |   \`-.                 <br>
              ,-'    \   :      \`-.              <br>
             /__,.    \  ;  \`--.___)             <br>
            ,'    \    \/   /                     <br>
               __,-' - /   '\                     <br>
            ,-'              \`-._ ,---^.         <br>
            \   ,                \`-|    |        <br>
             \,(o                  ;    |         <br>
         _,-'   \`-'                |    |        <br>
      ,-'                          |    |         <br>
  Y8PYF                            ;    ;         <br>
  \`""_\`           ,         ,--   /    :        <br>
   \      .   ___/|       ,'\   ,' ,'  ;          <br>
    \`.     ;-'         ,\`\`   |\   ,'   /       <br>
     \`,---'     ,\`\`\`\`\`\`      | \`-'   ,'   <br>
      \`-------\`\`             \`--.__,'         <br>
`,
`                         ,._                     <br>
                 ,--.    |   \`-.                 <br>
              ,-'    \   :      \`-.              <br>
             /__,.    \  ;  \`--.___)             <br>
            ,'    \    \/   /                     <br>
               __,-' - /   '\                     <br>
            ,-'              \`-._ ,---^.         <br>
            \   ,                \`-|    |        <br>
             \,(o                  ;    |         <br>
         _,-'   \`-'                |    |        <br>
      ,-'                          |    |         <br>
  Y8PYF                            ;    ;         <br>
  \`""_\`           ,         ,--   /    :        <br>
   \      .   ___/|       ,'\   ,' ,'  ;          <br>
    \`.     ;-'__|      ,'    |\   ,'   /         <br>
      \`---'_\\\`/     ,'       | \`-'   ,'       <br>
           \,'    /          \`--.__,'            <br>
            \`----'                               <br>
`,
`                         ,._                     <br>
                 ,--.    |   \`-.                 <br>
              ,-'    \   :      \`-.              <br>
             /__,.    \  ;  \`--.___)             <br>
            ,'    \    \/   /                     <br>
               __,-' - /   '\                     <br>
            ,-'              \`-._ ,---^.         <br>
            \   __               \`-|    |        <br>
             \,(o,\`~               ;    |        <br>
         _,-'  \`~-'                |    |        <br>
      ,-'                          |    |         <br>
  Y8PYF                            ;    ;         <br>
  \`""_\`           ,         ,--   /    :        <br>
   \      .   ___/|       ,'\   ,' ,'  ;          <br>
    \`.     ;-'___|      ,'   |\   ,'   /         <br>
      \`---' __\ /     ,'     | \`-'   ,'         <br>
            \ ,'    /        \`--.__,'            <br>
              \`----'                             <br>
`,
`                         ,._                     <br>
                 ,--.    |   \`-.                 <br>
              ,-'    \   :      \`-.              <br>
             /__,.    \  ;  \`--.___)             <br>
            ,'    \    \/   /                     <br>
               __,-' - /   '\                     <br>
            ,-'              \`-._ ,---^.         <br>
            \   __               \`-|    |        <br>
             \,(-_,\`~              ;    |        <br>
         _,-'                      |    |         <br>
      ,-'                          |    |         <br>
  Y8PYF                            ;    ;         <br>
  \`""_\`           ,         ,--   /    :        <br>
   \      .   ___/|       ,'\   ,' ,'  ;          <br>
    \`.     ;-' ___|      ,'  |\   ,'   /         <br>
      \`---'  __\ /     ,'    | \`-'   ,'         <br>
             \ ,'    /       \`--.__,'            <br>
               \`----'                            <br>
`
].map(f => f.replace(/\s/g, '&nbsp;'));

const initialState = {
  message: '',
  barking: false,
  currentIndex: null,
  dogFrame: dogFrames[0]
};

export default function translation(state = initialState, action) {
  switch (action.type) {
    case TRANSLATION_QUERY:
      return Object.assign({}, state, {
        message: action.message
      });

    case UPDATE_DOG_FRAMES:
      return Object.assign({}, state, {
        dogFrame: dogFrames[action.dogFrameIndex]
      });

    case TRANSLATE_MESSAGE:
      return Object.assign({}, state, {
        currentIndex: action.currentIndex
      });

    case BEGIN_MESSAGE:
      return Object.assign({}, state, {
        barking: true
      });

    case END_MESSAGE:
      return Object.assign({}, state, {
        barking: false,
        currentIndex: null
      });

    default:
      return state;
  }
}
