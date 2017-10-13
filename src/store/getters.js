
console.log('inside the getters file');

export const count = state => state.count
export const savedString = state => state.savedString
export const color1 = state => state.color1
export const color2 = state => state.color2
export const color3 = state => state.color3
export const color4 = state => state.color4
export const color5 = state => state.color5
export const usecolor1 = state => `rgb(`+state.color1[0]+`, `+state.color1[1]+`, `+state.color1[2]+`)`
export const usecolor2 = state => `rgb(`+state.color2[0]+`, `+state.color2[1]+`, `+state.color2[2]+`)`
export const usecolor3 = state => `rgb(`+state.color3[0]+`, `+state.color3[1]+`, `+state.color3[2]+`)`
export const usecolor4 = state => `rgb(`+state.color4[0]+`, `+state.color4[1]+`, `+state.color4[2]+`)`
export const usecolor5 = state => `rgb(`+state.color5[0]+`, `+state.color5[1]+`, `+state.color5[2]+`)`
export const shapearray = state => state.shapearray
export const notearray = state => state.notearray
export const playinbackground = state => state.playinbackground
export const currentpage = state => state.currentpage



const limit = 5

export const recentHistory = state => {
  const end = state.history.length
  const begin = end - limit < 0 ? 0 : end - limit
  return state.history
    .slice(begin, end)
    .toString()
    .replace(/,/g, ', ')
}
