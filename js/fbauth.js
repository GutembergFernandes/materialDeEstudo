// Cria uma instÃ¢ncia do objeto provedor do Google
var provider = new firebase.auth.GoogleAuthProvider();

// Usa o idioma do navegador no Firebase
firebase.auth().useDeviceLanguage();

// VariÃ¡vel global com os dados do usuÃ¡rio
var user = {};

// Roda a aplicaÃ§Ã£o ao carregar o documento
$(document).ready(authApp);

// AplcaÃ§Ã£o principal --> Observar eventos
function authApp() {

    // Observador de usuÃ¡rios
    firebase.auth().onAuthStateChanged(userStatus);

    // Monitora cliques no login
    $(document).on('click', '.login', Login);

    // Monitora cliques no logout
    $(document).on('click', '.logout', Logout);

}

// Altera o status do usuÃ¡rio
function userStatus(userData) {

    if (userData) {

        // Fazer isso quando alguÃ©m estÃ¡ logado
        isLoged(userData);

    } else {

        // Fazer isso quando nÃ£o tem usuÃ¡rio logado
        notLoged();

    }
}

// Faz login do usuÃ¡rio
function Login() {

    // Login usando pop-up
    firebase.auth().signInWithPopup(provider);

    // Redirecionar home
    $.get('pages/home.html', '', function(data) {
        $('#main').html(data);
    });

    // (opcional) Oculta o menu principal
    //hideMenu();

}

// Faz logout do usuÃ¡rio
function Logout() {

    if (confirm('Tem certeza que deseja sair?')) {

        // Faz logout
        firebase.auth().signOut();

        // Redirecionar home
        $.get('pages/home.html', '', function(data) {
            $('#main').html(data);
        });

        // (opcional) Oculta o menu principal
        //hideMenu();

    }

}

function isLoged(userData) {

    // Atribuir dados ao usuÃ¡rio
    user = userData;

    // Limita o nome do usuÃ¡rio
    var displayName = user.displayName.substr(0, 12);

    // Mostra a opÃ§Ã£o de logout
    var out = `
<img src="${user.photoURL}" alt="${user.displayName}">
<span>&nbsp;${displayName}</span>        
<a href="#user" class="logout"><i class="fas fa-fw fa-sign-out-alt"></i></a>
        `;

    // Atualiza o DOM
    $('#usermenu').html(out);

    // Mostrar botÃ£o perfil no menu principal
    $('#perfil').css('display', 'block');

}

function notLoged() {

    // Mostra opÃ§Ã£o de login
    var out = `
<i class="fas fa-user-circle fa-fw"></i>
<span>&nbsp;Logue-se...</span>
<a href="#user" class="login"><i class="fas fa-fw fa-sign-in-alt"></i></a>
        `;

    // Atualiza o DOM
    $('#usermenu').html(out);

    // Ocultar botÃ£o perfil no menu principal
    $('#perfil').css('display', 'none');

    // Carrega o documento
    $.get('pages/home.html', '', function(data) {

        // Grava o documento na tag <main>
        $('#main').html(data);

        // Oculta o menu
        // hideMenu();

    });

}