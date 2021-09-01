function siguientePregunta0() {
  $("#pregunta1").removeClass("none");
  $("#pregunta1").addClass("flex");
  $("#empezar-preguntas").removeClass("flex");
  $("#empezar-preguntas").addClass("none");
}

/* BOTÓN RESPUESTA 1*/

function siguientePregunta1() {
  if (
    document.getElementById("a1").checked ||
    document.getElementById("b1").checked
  ) {
    $("#pregunta1").removeClass("flex");
    $("#pregunta1").addClass("none");
    $("#respuesta1").removeClass("none");
    $("#respuesta1").addClass("flex");
    if (document.getElementById("a1").checked) {
      $("#respuesta1b-texto").hide();
      $("#respuesta1a-texto").show();
    } else if (document.getElementById("b1").checked) {
      $("#respuesta1a-texto").hide();
      $("#respuesta1b-texto").show();
    }
  } else {
    $(".falta1").removeClass("none");
  }
}

/* ---RESPUESTA 1---*/

/* ANTERIOR*/

function anteriorRespuesta1() {
  $("#pregunta1").removeClass("none");
  $("#pregunta1").addClass("flex");
  $("#respuesta1").removeClass("flex");
  $("#respuesta1").addClass("none");
}

/* SIGUIENTE*/

function siguienteRespuesta1() {
  $("#respuesta1").removeClass("flex");
  $("#respuesta1").addClass("none");
  $("#pregunta2").removeClass("none");
  $("#pregunta2").addClass("flex");
}

/* ---PREGUNTA 2---*/

/* ANTERIOR*/

function anteriorPregunta2() {
  $("#pregunta2").removeClass("flex");
  $("#pregunta2").addClass("none");
  $("#respuesta1").removeClass("none");
  $("#respuesta1").addClass("flex");
}

/* SIGUIENTE*/

function siguientePregunta2() {
  if (
    document.getElementById("a2").checked ||
    document.getElementById("b2").checked
  ) {
    $("#pregunta2").removeClass("flex");
    $("#pregunta2").addClass("none");
    $("#respuesta2").removeClass("none");
    $("#respuesta2").addClass("flex");
    if (document.getElementById("a2").checked) {
      $("#respuesta2b-texto").hide();
      $("#respuesta2a-texto").show();
    } else if (document.getElementById("b2").checked) {
      $("#respuesta2a-texto").hide();
      $("#respuesta2b-texto").show();
    }
  } else {
    $(".falta2").removeClass("none");
  }
}

/* ---RESPUESTA 2---*/

/* ANTERIOR*/

function anteriorRespuesta2() {
  $("#pregunta2").removeClass("none");
  $("#pregunta2").addClass("flex");
  $("#respuesta2").removeClass("flex");
  $("#respuesta2").addClass("none");
}

/* SIGUIENTE*/

function siguienteRespuesta2() {
  $("#respuesta2").removeClass("flex");
  $("#respuesta2").addClass("none");
  $("#pregunta3").removeClass("none");
  $("#pregunta3").addClass("flex");
}

/* ---PREGUNTA 3---*/

/* ANTERIOR*/

function anteriorPregunta3() {
  $("#pregunta3").removeClass("flex");
  $("#pregunta3").addClass("none");
  $("#respuesta2").removeClass("none");
  $("#respuesta2").addClass("flex");
}

/* SIGUIENTE*/

function siguientePregunta3() {
  if (
    document.getElementById("a3").checked ||
    document.getElementById("b3").checked
  ) {
    $("#pregunta3").removeClass("flex");
    $("#pregunta3").addClass("none");
    $("#respuesta3").removeClass("none");
    $("#respuesta3").addClass("flex");
    if (document.getElementById("a3").checked) {
      $("#respuesta3b-texto").hide();
      $("#respuesta3a-texto").show();
    } else if (document.getElementById("b3").checked) {
      $("#respuesta3a-texto").hide();
      $("#respuesta3b-texto").show();
    }
  } else {
    $(".falta3").removeClass("none");
  }
}

/* ---RESPUESTA 3---*/

/* ANTERIOR*/

function anteriorRespuesta3() {
  $("#pregunta3").removeClass("none");
  $("#pregunta3").addClass("flex");
  $("#respuesta3").removeClass("flex");
  $("#respuesta3").addClass("none");
}

/* SIGUIENTE*/

function siguienteRespuesta3() {
  $("#respuesta3").removeClass("flex");
  $("#respuesta3").addClass("none");
  $("#pregunta4").removeClass("none");
  $("#pregunta4").addClass("flex");
}

/* ---PREGUNTA 4---*/

/* ANTERIOR*/

function anteriorPregunta4() {
  $("#pregunta4").removeClass("flex");
  $("#pregunta4").addClass("none");
  $("#respuesta3").removeClass("none");
  $("#respuesta3").addClass("flex");
}

/* SIGUIENTE*/

function siguientePregunta4() {
  if (
    document.getElementById("a4").checked ||
    document.getElementById("b4").checked
  ) {
    $("#pregunta4").removeClass("flex");
    $("#pregunta4").addClass("none");
    $("#respuesta4").removeClass("none");
    $("#respuesta4").addClass("flex");
    if (document.getElementById("a4").checked) {
      $("#respuesta4b-texto").hide();
      $("#respuesta4a-texto").show();
    } else if (document.getElementById("b4").checked) {
      $("#respuesta4a-texto").hide();
      $("#respuesta4b-texto").show();
    }
  } else {
    $(".falta4").removeClass("none");
  }
}

/* ---RESPUESTA 4---*/

/* ANTERIOR*/

function anteriorRespuesta4() {
  $("#pregunta3").removeClass("none");
  $("#pregunta3").addClass("flex");
  $("#respuesta4").removeClass("flex");
  $("#respuesta4").addClass("none");
}

/* SIGUIENTE*/

function siguienteRespuesta4() {
  $("#respuesta4").removeClass("flex");
  $("#respuesta4").addClass("none");
  $("#pregunta5").removeClass("none");
  $("#pregunta5").addClass("flex");
}

/* ---PREGUNTA 5---*/

/* ANTERIOR*/

function anteriorPregunta5() {
  $("#pregunta5").removeClass("flex");
  $("#pregunta5").addClass("none");
  $("#respuesta4").removeClass("none");
  $("#respuesta4").addClass("flex");
}

/* SIGUIENTE*/

function siguientePregunta5() {
  if (
    document.getElementById("a5").checked ||
    document.getElementById("b5").checked
  ) {
    $("#pregunta5").removeClass("flex");
    $("#pregunta5").addClass("none");
    $("#respuesta5").removeClass("none");
    $("#respuesta5").addClass("flex");
    if (document.getElementById("a5").checked) {
      $("#respuesta5b-texto").hide();
      $("#respuesta5a-texto").show();
    } else if (document.getElementById("b5").checked) {
      $("#respuesta5a-texto").hide();
      $("#respuesta5b-texto").show();
    }
  } else {
    $(".falta5").removeClass("none");
  }
}

/* ---RESPUESTA 5---*/

/* ANTERIOR*/

function anteriorRespuesta5() {
  $("#pregunta4").removeClass("none");
  $("#pregunta4").addClass("flex");
  $("#respuesta5").removeClass("flex");
  $("#respuesta5").addClass("none");
}

/* SIGUIENTE*/

function siguienteRespuesta5() {
  $("#respuesta5").removeClass("flex");
  $("#respuesta5").addClass("none");
  $("#pregunta6").removeClass("none");
  $("#pregunta6").addClass("flex");
}

/* ---PREGUNTA 6---*/

/* ANTERIOR*/

function anteriorPregunta6() {
  $("#pregunta6").removeClass("flex");
  $("#pregunta6").addClass("none");
  $("#respuesta5").removeClass("none");
  $("#respuesta5").addClass("flex");
}

/* SIGUIENTE*/

function siguientePregunta6() {
  if (
    document.getElementById("a6").checked ||
    document.getElementById("b6").checked
  ) {
    $("#pregunta6").removeClass("flex");
    $("#pregunta6").addClass("none");
    $("#respuesta6").removeClass("none");
    $("#respuesta6").addClass("flex");
    if (document.getElementById("a6").checked) {
      $("#respuesta6b-texto").hide();
      $("#respuesta6a-texto").show();
    } else if (document.getElementById("b6").checked) {
      $("#respuesta6a-texto").hide();
      $("#respuesta6b-texto").show();
    }
  } else {
    $(".falta6").removeClass("none");
  }
}

/* ---RESPUESTA 6---*/

/* ANTERIOR*/

function anteriorRespuesta6() {
  $("#pregunta5").removeClass("none");
  $("#pregunta5").addClass("flex");
  $("#respuesta6").removeClass("flex");
  $("#respuesta6").addClass("none");
}

/* SIGUIENTE*/

function siguienteRespuesta6() {
  $("#respuesta6").removeClass("flex");
  $("#respuesta6").addClass("none");
  $("#gracias").removeClass("none");
  $("#gracias").addClass("flex");
}

/* ---EMAIL---*/

/* ANTERIOR*/

function anterioremail() {
  $("#respuesta2").removeClass("none");
  $("#respuesta2").addClass("flex");
  $("#email").removeClass("flex");
  $("#email").addClass("none");
}

/* SIGUIENTE */

function enviarEmail() {
  var campoNombre = document.getElementById("mce-FNAME").value;
  var campoMail = document.getElementById("mce-EMAIL").value;
  var campoAceptacion = document.getElementById("aceptacion");
  var validRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (
    campoNombre.length > 1 &&
    campoMail.match(validRegex) &&
    campoAceptacion.checked
  ) {
    $("#email").hide();
    $("#gracias").removeClass("none");
    $("#gracias").addClass("flex");
  } else {
    $(".revisa-campos").removeClass("none");
    $(".revisa-campos").addClass("flex");
  }
}

/* DESPLEGAR INFO EN MÓVIL */

function infoLataburu() {
  $(".lataburu-info").toggleClass("none");
  $(".lataburu-pregunta").toggleClass("none");
}

function infoFraskobide() {
  $(".fraskobide-info").toggleClass("none");
  $(".fraskobide-pregunta").toggleClass("none");
}

function infoKajaguren() {
  $(".kajaguren-info").toggleClass("none");
  $(".kajaguren-pregunta").toggleClass("none");
}

function infoDetergenteberri() {
  $(".detergenteberri-info").toggleClass("none");
  $(".detergenteberri-pregunta").toggleClass("none");
}

setTimeout(function () {
  var options = {};
  $(".loader").hide();
}, 2000);

$("label").click(function () {
  $("label").removeClass("label-seleccionado");
  $(this).addClass("label-seleccionado");
});

$(".individual-personajes").hide();
$(".boton-cerrar").hide();

function lataburu() {
  $(".individual-personajes").hide();
  $("#lataburu").show();
  $(".boton-cerrar").show();
}

function fraskobide() {
  $(".individual-personajes").hide();
  $("#fraskobide").show();
  $(".boton-cerrar").show();
}

function kajaguren() {
  $(".individual-personajes").hide();
  $("#kajaguren").show();
  $(".boton-cerrar").show();
}

function detergenteberri() {
  $(".individual-personajes").hide();
  $("#detergenteberri").show();
  $(".boton-cerrar").show();
}

function cerrarPersonaje() {
  $(".individual-personajes").hide();
  $(".boton-cerrar").hide();
}

/*__________ COOKIES __________*/

$(document).ready(function () {
  $(".modal-notice-heading").html(
    '<span id="modal-heading-icon" class="modal-heading-icon"><svg stroke="currentColor" fill="currentColor" stroke-width="60px" viewBox="0 0 1024 1024" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M724 218.3V141c0-6.7-7.7-10.4-12.9-6.3L260.3 486.8a31.86 31.86 0 0 0 0 50.3l450.8 352.1c5.3 4.1 12.9.4 12.9-6.3v-77.3c0-4.9-2.3-9.6-6.1-12.6l-360-281 360-281.1c3.8-3 6.1-7.7 6.1-12.6z"></path</svg></span>Configurar cookies'
  );
  $(".save-button-cookie-policy").text("guardar");
});

/*$(".cookies-banner").hide();
if (!localStorage.getItem("cookies-aceptadas")) {
  $(".cookies-banner").show();
}

function aceptarCookies() {
  $(".cookies-banner").hide();
  localStorage.setItem("cookies-aceptadas", true);
}*/

/*__________ ACORDEÓN __________*/

$(".accordion-item").click(function () {
  $(this).find(".answer").toggleClass("none");
  $(this).find(".plus").toggleClass("none");
  $(this).find(".close").toggleClass("none");
});
