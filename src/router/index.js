import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import LoginorSignup from '@/components/LoginSignup/LoginorSignup'
import NewCharacter from '@/components/NewCharacter/NewCharacter'
import SavedCharacters from '@/components/SavedCharacters/SavedCharacters'
// import Color from '@/components/Color'
// import Sound from '@/components/Sound'
// import About from '@/components/About'
// import Work from '@/components/Work'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/loginsignup',
      name: 'LoginorSignup',
      component: LoginorSignup
    },
    {
      path: '/newcharacter',
      name: 'NewCharacter',
      component: NewCharacter
    },
    {
      path: '/savedcharacters',
      name: 'SavedCharacters',
      component: SavedCharacters
    },
    // {
    //   path: '/about',
    //   name: 'About',
    //   component: About
    // },
    // {
    //   path: '/Work',
    //   name: 'Work',
    //   component: Work
    // },
    // {
    //   path: '/sound',
    //   name: 'Sound',
    //   component: Sound,
    //   children: [
    //     { path: 'home', component: Home, name: 'Home' },
    //     { path: 'color', component: Color, name: 'Color'},
    //     { path: 'work', component: Work, name: 'Work'},
    //     { path: 'about', component: About, name: 'About'},
    //   ]
    // },
  ]
})
