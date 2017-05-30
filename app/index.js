import angular from 'angular'
import 'bootstrap/dist/css/bootstrap.css'
import { RechercheComponent } from './recherche/rechercheCoordonnees.component'

import { SessionStorage } from './session-storage/sessionStorage.component'


angular.module('app', [])

    .component('recherche', RechercheComponent)
    .component('sessionStorage', SessionStorage)

