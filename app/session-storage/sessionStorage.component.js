import template from './sessionStorage.component.html'

const API_URL_COLLABORATEUR = 'http://localhost:8080/sgp/api/collaborateurs'
const API_URL_DEPARTEMENT = 'http://localhost:8080/sgp/api/departements'

class controller {
    // j'injecte $http et $q (qui sont donné par angular) dans mon objet BanqueService
    constructor($http, $q) {
        this.$http = $http
        this.$q = $q
    }
    $onInit() {


        // on crée un objet collaborateurs dans lequel on stock les collaborateur recupérer grâce à getCollaborateur sous forme de tableau(car fait en json donc sous forme de tableau de l'autre côté)
        this.getCollaborateur().then(response => this.collaborateurs = response.data)
        this.departements = this.getDepartements()
    }

    //  je recupére ma liste de collaborateur qu'on a en json fait sur le serveur Wildfly
    getCollaborateur() {
        return this.$http.get(API_URL_COLLABORATEUR)
    }

    getDepartements() {
        return this.$http.get(API_URL_DEPARTEMENT)
    }



}



export let SessionStorage = {
    template,
    controller,
    bindings: {

        collaborateurs: "<",
        departements: "<"
    }
}