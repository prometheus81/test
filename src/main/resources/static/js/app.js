$(document).ready(function() {

    var keycloak = Keycloak({
        url: 'https://keycloak-button-test.herokuapp.com/auth',
        realm: 'Matze',
        clientId: 'matze-client'
    });

    keycloak.init({ onLoad: 'login-required'
    }).success(
        function(){
            console.log('authenticated!');
            getEntries();
        })
        .error(
            function(){
                console.log('error');
            });
});

var getEntries = function(){
    console.log('token:' + keycloak.token);

    $.ajax({
        url:"https://matze-docker-test.herokuapp.com/hello",
        method:"GET",
        headers: {
            "Authorization": "Bearer " + keycloak.token
        },
        success:function(data) {
            document.querySelector('#output').innerHTML=data.hello;
        },
        error:function() {
            console.log("error");
        }
    });
};