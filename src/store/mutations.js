
console.log('inside the mutations file');


export const increment = state => {
  state.count++
  state.history.push('increment')
}

export const decrement = state => {
  state.count--
  state.history.push('decrement')
}

export const saveString = (state, text) => {
  state.savedString = text;
}

export const color1Save = (state, color) => {
  console.log('inside color1Save & value of color is ', color);
  for(var x = 0; x<state.shapearray.length; x++){
    if(state.shapearray[x]["color"]===state.color1){
      console.log('inside if statement');
      var addshape = state.shapearray[x]["shape"]
      var shapelen = addshape.length;
      var coloredshape = addshape.substring(0, shapelen-8) + " background: rgb(" + state.color1 + ');' + addshape.substring(shapelen-8);
      state.shapearray[x]['coloredshape'] = coloredshape;
      state.shapearray[x]["color"] = color
    }
  }
  state.color1 = color
}

export const color2Save = (state, color) => {
  for(var x = 0; x<state.shapearray.length; x++){
    if(state.shapearray[x]['color']===state.color2){
      var addshape = state.shapearray[x]['shape']
      var shapelen = addshape.length;
      var coloredshape = addshape.substring(0, shapelen-8) + " background: rgb(" + state.color2 + ');' + addshape.substring(shapelen-8);
      state.shapearray[x]['coloredshape'] = coloredshape;
      state.shapearray[x]['color'] = color
    }
  }
  state.color2 = color
}

export const color3Save = (state, color) => {
  for(var x = 0; x<state.shapearray.length; x++){
    if(state.shapearray[x]['color']===state.color3){
      var addshape = state.shapearray[x]['shape']
      var shapelen = addshape.length;
      var coloredshape = addshape.substring(0, shapelen-8) + " background: rgb(" + state.color3 + ');' + addshape.substring(shapelen-8);
      state.shapearray[x]['coloredshape'] = coloredshape
      state.shapearray[x]['color'] = color
    }
  }
  state.color3 = color
}

export const color4Save = (state, color) => {
  for(var x = 0; x<state.shapearray.length; x++){
    if(state.shapearray[x]['color']===state.color4){
      var addshape = state.shapearray[x]['shape']
      var shapelen = addshape.length;
      var coloredshape = addshape.substring(0, shapelen-8) + " background: rgb(" + state.color4 + ');' + addshape.substring(shapelen-8);
      state.shapearray[x]['coloredshape'] = coloredshape
      state.shapearray[x]['color'] = color
    }
  }
  state.color4 = color
}

export const color5Save = (state, color) => {
  for(var x = 0; x<state.shapearray.length; x++){
    if(state.shapearray[x]['color']===state.color5){
      var addshape = state.shapearray[x]['shape']
      var shapelen = addshape.length;
      var coloredshape = addshape.substring(0, shapelen-8) + " background: rgb(" + state.color5 + ');' + addshape.substring(shapelen-8);
      state.shapearray[x]['coloredshape'] = coloredshape
      state.shapearray[x]['color'] = color
    }
  }
  state.color5 = color
}

export const AddShapeArray = (state, {addshape, addcolornumber}) => {
  // console.log('inside AddShapeArray');
  // console.log('value of addshape: ', addshape);
  // console.log('value of addcolornumber: ', addcolornumber);
  if(addcolornumber === 1){
    var shapelen = addshape.length;
    var coloredshape = addshape.substring(0, shapelen-8) + " background: rgb(" + state.color1 + ');' + addshape.substring(shapelen-8);
    var temparray = state.shapearray;
    temparray.push({shape: addshape, coloredshape: coloredshape, color: state.color1});
    state.shapearray = temparray;
  }else if( addcolornumber === 2){
    var shapelen = addshape.length;
    var coloredshape = addshape.substring(0, shapelen-8) + " background: rgb(" + state.color2 + ');' + addshape.substring(shapelen-8);
    var temparray = state.shapearray;
    temparray.push({shape: addshape, coloredshape: coloredshape, color: state.color2});
    state.shapearray = temparray;
  }else if( addcolornumber === 3){
    var shapelen = addshape.length;
    var coloredshape = addshape.substring(0, shapelen-8) + " background: rgb(" + state.color3 + ');' + addshape.substring(shapelen-8);
    var temparray = state.shapearray;
    temparray.push({shape: addshape, coloredshape: coloredshape, color: state.color3});
    state.shapearray = temparray;
  }else if( addcolornumber === 4){
    var shapelen = addshape.length;
    var coloredshape = addshape.substring(0, shapelen-8) + " background: rgb(" + state.color4 + ');' + addshape.substring(shapelen-8);
    var temparray = state.shapearray;
    temparray.push({shape: addshape, coloredshape: coloredshape, color: state.color4});
    state.shapearray = temparray;
  }else if( addcolornumber === 5){
    var shapelen = addshape.length;
    var coloredshape = addshape.substring(0, shapelen-8) + " background: rgb(" + state.color5 + ');' + addshape.substring(shapelen-8);
    var temparray = state.shapearray;
    temparray.push({shape: addshape, coloredshape: coloredshape, color: state.color5});
    state.shapearray = temparray;
  }
  // console.log('inside AddShapeArray and value of shapearray is: ', state.shapearray);
}

export const SubtractShapeArray = (state, index) => {
  var tempstate = state.shapearray;
  var tempstate = tempstate.splice(index, 1);
  // state.shapearray = tempstate;
  // console.log('inside SubtractShapeArray and value of new shapearray is ', state.shapearray);
}

export const ResetShapeArray = ( state ) => {
  state.shapearray = []
}

export const ResetNoteArray = ( state ) => {
  state.notearray = [[], [], [], [],
                    [], [], [], [],
                    [], [], [], []]
}

export const AddNoteArray = ( state, {index, builtcolor, shapepath, colorchosen, shapechosen}) => {                                             
  var temparray = state.notearray[index];
  temparray.push({builtcolor: builtcolor, shapepath: shapepath, colorchosen: colorchosen, shapechosen: shapechosen});
  state.notearray[index] = temparray
  // console.log('inside AddNoteArray and value of notearray is, ', state.notearray);
}

export const SubtractNoteArray = (state, {index12, indexsmall}) => {
  var tempstate = state.notearray[index12];
  console.log('value of index12: ', index12, ' value of indexsmall: ', indexsmall);
  // delete tempstate[index12][indexsmall]
  tempstate.splice(indexsmall, 1);
  // state.shapearray = tempstate;
  // console.log('inside SubtractNoteArray and value of new notearray is ', state.notearray);
}


// export const ChangeShapeColor = (state, index, newcolor) => {
//   state.shapearray[index][1] = newcolor;
// }

export const BackgroundPlay = ( state ) => {
  state.playinbackground = !state.playinbackground;
  console.log('inside BackgroundPlay after set and value of state.playinbackground: ', state.playinbackground);
}

export const SetCurrentPage = ( state, newpage ) => {
  state.currentpage = newpage;
}

export const ColorChanger = (state, color, index)=>{
  if(index===1){
    state.color1
  }else if (index === 2){
    state.color2
  }else if (index === 3){
    state.color3
  }else if (index === 4){
    state.color4
  }else {
    state.color5
  }
}
