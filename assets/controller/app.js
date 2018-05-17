
var app = angular.module('fwd', ['ui.router','ngMaterial', 'ngMessages', 'material.svgAssetsCache','wt.responsive']);
app.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise("/");
    $stateProvider

        .state('login', {
            url: '/',
             views: {
                'main': { templateUrl: 'auth/main.html'},
                'nav': { templateUrl: 'auth/nav.html'},
                'footer': { templateUrl: 'auth/footer.html'}
            }
        })

        .state('quotation', {
            url: '/quotation',
             views: {
                'main': { templateUrl: 'view/quotation.html'},
                'nav': { templateUrl: 'view/nav.html'},
                'footer': { templateUrl: 'view/footer.html'}
            }
        })

        .state('new-quotation', {
            url: '/new-quotation',
             views: {
                'main': { templateUrl: 'view/new-quotation.html'},
                'nav': { templateUrl: 'view/nav.html'},
                'footer': { templateUrl: 'view/footer.html'}
            }
        })

        .state('quotation-version', {
            url: '/quotation-version',
             views: {
                'main': { templateUrl: 'view/quotation-version.html'},
                'nav': { templateUrl: 'view/nav.html'},
                'footer': { templateUrl: 'view/footer.html'}
            }
        })

        .state('quotation-add-version', {
            url: '/quotation-add-version',
             views: {
                'main': { templateUrl: 'view/quotation-add-version.html'},
                'nav': { templateUrl: 'view/nav.html'},
                'footer': { templateUrl: 'view/footer.html'}
            }
        })

       
        .state('print-report', {
            url: '/print-report',
             views: {
                'main': { templateUrl: 'view/print-report.html'},
                'nav': { templateUrl: 'view/nav.html'},
                'footer': { templateUrl: 'view/footer.html'}
            }
        })

        .state('adjustment-request', {
            url: '/adjustment-request',
             views: {
                'main': { templateUrl: 'view/adjustment-request.html'},
                'nav': { templateUrl: 'view/nav.html'},
                'footer': { templateUrl: 'view/footer.html'}
            }
        })


        .state('client-list', {
            url: '/client-list',
             views: {
                'main': { templateUrl: 'view/client-list.html'},
                'nav': { templateUrl: 'view/nav.html'},
                'footer': { templateUrl: 'view/footer.html'}
            }
        })


        .state('create-new-client', {
            url: '/create-new-client',
             views: {
                'main': { templateUrl: 'view/create-new-client.html'},
                'nav': { templateUrl: 'view/nav.html'},
                'footer': { templateUrl: 'view/footer.html'}
            }
        })


        .state('sme', {
            url: '/sme',
             views: {
                'main': { templateUrl: 'view/sme.html'},
                'nav': { templateUrl: 'view/nav.html'},
                'footer': { templateUrl: 'view/footer.html'}
            }
        })

        .state('create-new-sme', {
            url: '/create-new-sme',
             views: {
                'main': { templateUrl: 'view/create-new-sme.html'},
                'nav': { templateUrl: 'view/nav.html'},
                'footer': { templateUrl: 'view/footer.html'}
            }
        })

        .state('profile-detail', {
            url: '/profile-detail',
             views: {
                'main': { templateUrl: 'view/profile-detail.html'},
                'nav': { templateUrl: 'view/nav.html'},
                'footer': { templateUrl: 'view/footer.html'}
            }
        })
        
        ;

});
