

console.log('inside the actions file');



export const increment = ({ commit }) => commit('increment')
export const decrement = ({ commit }) => commit('decrement')

export const incrementIfOdd = ({ commit, state }) => {
  if ((state.count + 1) % 2 === 0) {
    commit('increment')
  }
}

export const incrementAsync = ({ commit }) => {
  setTimeout(() => {
    commit('increment')
  }, 1000)
}

export const saveString = ({ commit }, e) => {
  // console.log('inside saveString in the actions file');
  // console.log('value of e.target.value is ', e.target.value);
  commit('saveString', e.target.value)
}

export const color1Save = ({ commit }, color) => {
  // console.log('inside color1Save and value of color is ', color);
  commit('color1Save', color)
}

export const color2Save = ({ commit }, color) => {
  commit('color2Save', color)
}

export const color3Save = ({ commit }, color) => {
  commit('color3Save', color)
}

export const color4Save = ({ commit }, color) => {
  commit('color4Save', color)
}

export const color5Save = ({ commit }, color) => {
  commit('color5Save', color)
}

export const AddShapeArray = ({ commit }, {addshape, addcolornumber}) => {
  // console.log('*****');
  // console.log('value of passedarray[0]', addshape);
  // console.log('value of passedarray[1]', addcolornumber);
  // console.log('*****');
  commit('AddShapeArray', {addshape, addcolornumber});
}

export const SubtractShapeArray = ( {commit}, index ) =>{
  commit('SubtractShapeArray', index)
}

export const ResetShapeArray = ( { commit } ) => {
  commit('ResetShapeArray')
}

export const ResetNoteArray = ( { commit } ) => {
  commit('ResetNoteArray')
}

export const AddNoteArray = ( { commit }, {index, builtcolor, shapepath, colorchosen, shapechosen} ) => {
  commit('AddNoteArray', {index, builtcolor, shapepath, colorchosen, shapechosen})
}

export const SubtractNoteArray = ( { commit }, { index12, indexsmall } ) =>{
  console.log('inside SubtractNoteArray actions');
  commit('SubtractNoteArray', { index12, indexsmall })
}

export const BackgroundPlay = ( { commit } ) => {
  console.log('inside BackgroundPlay action');
  commit('BackgroundPlay');
}

export const SetCurrentPage = ( {commit}, newpage ) => {
  console.log('inside SetCurrentPage and value of newpage is', newpage);
  commit('SetCurrentPage', newpage)
}
