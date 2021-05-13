function get_contacts(){
    var contacts = new Array();
    var contact_str = localStorage.getItem('contact');
    if(contact_str !== null){
        contacts = JSON.parse(contact_str);
    }
    return contacts;
}
function add_contact(){
    var contact = document.getElementById('contact-phone').value;
    var contacts = get_contacts();
    contacts.push(contact);
    localStorage.setItem('contact',JSON.stringify(contacts));
    $('#contact-phone').val("");
    show();
    return false;
}
function removeContact(){
    var id = $(this).attr('id');
    var contacts = get_contacts();
    contacts.splice(id,1);
    localStorage.setItem('contact',JSON.stringify(contacts));
    show();
    return false;
}
function show(){
    var contacts = get_contacts();
    var html = '<ul>';
    for(var i = 0;i < contacts.length;i++){
        html += '<li class="contacts">'+ contacts[i] + ' <button class="btn-delete" id="'+ i +'">Supprimer</button>' +'</li>';
    }
    html += '</ul>';
    $('#contacts-list').html(html);
    var buttons = document.getElementsByClassName('btn-delete');
    for(var i = 0;i < buttons.length;i++){
        buttons[i].addEventListener('click',removeContact);
    }

}
var add = document.getElementById('add');
add.addEventListener('click',add_contact);
show();