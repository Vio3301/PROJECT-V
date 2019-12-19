
// function forms(){

//     var name = document.getElementById('name').value
//     console.log(name)
//     var email = document.getElementById('email').value
//     var subject = document.getElementById('subject').value
//     var message = document.getElementById('message').value
// }

// var sendForm = document.querySelector('#send-form');

// sendForm.onclick = function(event){
//     event.preventDefault();
//     form()
//     localStorage.setItem('Form',form())
// }


// function form(){
//     var form = document.querySelector('form')
//     if(!form || form.nodeName !== "FORM"){
//         return false;
//     }
//    var a = []
//    for (i = form.elements.length - 1; i >=0 ; i = i - 1){
//        if(form.elements[i].name === "" ){
//            continue;
//        }
//        switch (form.elements[i].nodeName){
//            case 'INPUT':
//                switch (form.elements[i].type){
//                    case 'text':
//                    case 'email':
//                    case 'password':
//                    case 'button':
//                    case 'submit': 
//                    a.push(form.elements[i].name + "=" + form.elements[i].value);
//                    break;
                    
//                }
//                break;
//                case 'file': break;
//             case 'TEXTAREA': 
//                a.push(form.elements[i].name + "=" + form.elements[i].value);
//                 break;
//        }
//    }

// return a.join("&")
// }
