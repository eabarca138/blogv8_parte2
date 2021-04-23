import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './views/Inicio'
import Home from './views/Home'
import Port from './views/Port'
const Portada = () => import ('./views/Portada')
const Articulo = () => import ('./views/Articulo')
const Contacto = () => import ('./views/Contacto')
const SobreMi = () => import ('./views/SobreMi')
import NotFound from './views/NotFound'
import Administrador from './views/Administrador'



Vue.use(Router)

export default new Router({
    mode: "history",
    routes: [
      {
        path: "/",
        component: Portada,
        name: "inicio",
      },
      {
        path: "/inicio",
        component: Inicio,
        redirect: "/"
      },
      {
        path: "/home",
        component: Home,
        redirect: "/"
      },
      {
        path: "/portada",
        component: Port,
        redirect: "/"
      },
      {
        path: "/administrador/:tipo",
        component: Administrador,
        props: true
    },
      {
          path: "/post/:npost",
          component: Articulo
      },
      {
          path: "/contacto",
          component: Contacto,
          alias: ['/contactame']
      },
      {
          path: "/sobremi",
          component: SobreMi,
          name: "sobremi",
          alias: ['/acerca']
      },
      {
          path: "*",
          component: NotFound
      }
    ]
})