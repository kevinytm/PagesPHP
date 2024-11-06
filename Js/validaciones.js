var expreNomyApe =/^[a-zA-ZÀ-ÿ\s]{1,40}$/;
var expreDir =/^[a-zA-Z0-9À-ÿ\s]{1,40}$/;
var expreTel =/^\d{7,14}$/;
var expreEmail = /^[a-zA-Z0-9_.+-]+@upemor\.edu\.mx$/;





function validacion(){

    if(document.frm.nombre.value.trim().length<=2 || !expreNomyApe.test(document.frm.nombre.value)){
        /* alert("inserta un nombre correcto"); */
        document.getElementById("nombre").focus();
        nom.style.display = "block";
        return false;
    }

    nom.style.display = "none";

    if(document.frm.apellido.value.trim().length<=2 || !expreNomyApe.test(document.frm.apellido.value)){
        /* alert("inserta un apellido correcto"); */
        document.getElementById("apellido").focus();
        app.style.display = "block";
        return false;
    }

    app.style.display = "none";

    if(document.frm.direccion.value.trim().length<=2 || !expreDir.test(document.frm.direccion.value)){
        /* alert("inserta una dirección correcta"); */
        document.getElementById("direccion").focus();
        dir.style.display = "block";
        return false;
    }

    dir.style.display = "none";

    if(document.frm.telefono.value.trim().length<=6 || !expreTel.test(document.frm.telefono.value)){
        /* alert("inserta un telefono correcto"); */
        document.getElementById("telefono").focus();
        tel.style.display = "block";
        return false;
    }

    tel.style.display = "none";

    if(!expreEmail.test(document.frm.email.value)){
        /* alert("inserta un email correcto"); */
        document.getElementById("email").focus();
        ema.style.display = "block";
        return false;
    }

    ema.style.display = "none";

    if(document.frm.sexo.value==""){
        document.getElementById("sexo").focus();
        s.style.display = "block";
        return false;
    }

    s.style.display = "none";
    btn.style.display = "block";

    frm.submit();
}
