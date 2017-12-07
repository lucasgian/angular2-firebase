
/*
button.addEventListener('click', function (){
    create(name.value, password.value);
});
*/

$("#seed").on('click', function () {
    create(
        document.getElementById("nameInput").value, 
        document.getElementById("passwordInput").value
    );
});

function create(name, password){
    var data = {
        name: name,
        password: password
    };

    return firebase.database().ref().child('users').push(data);
}


firebase.database().ref('users').on('value', function (snapshot){
    usersList.innerHTML = '';
    snapshot.forEach(function (item) {
        var li = document.createElement('li');
        li.appendChild(document.createTextNode(item.val().name + ': ' + item.val().password));
        usersList.appendChild(li);
    });
});