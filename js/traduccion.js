function botonEus() {
  $(".cuando").html(
    '<span class="barra">/</span>Birziklatzen duzunean, bizitza oparitzen diguzu. Beraz, zuretzat opari hau.'
  );
  $(".sorteo").text(
    "Zozketa: Bi lagunentzako asteburua Zeanuriko zuhaitzetako txaboletan. Parte hartzeko birziklapenaren testa egin ezazu. Zorte on!"
  );
  $(".sorteo-flysch").text(
    "Zozketa: Bi lagunentzako itsasontzi ibilbidea Gipuzkoako Flyschetan. Parte hartzeko birziklapenaren testa egin ezazu. Zorte on!"
  );
  $(".sorteo-azurmendi").text(
    "Zozketa: Bi lagunentzako menua Azurmendi jatetxean. Parte hartzeko birziklapenaren testa egin ezazu. Zorte on!"
  );
  $(".sorteo-arima").text(
    "Zozketa: Bi lagunentzako asteburua Donostiako Arima hotelean. Parte hartzeko birziklapenaren testa egin ezazu. Zorte on!"
  );
  $(".repasar").text("Berrikusi lehenago");
  $(".hacer-test").text("Egin testa");
  $(".antes").html(
    '<span class="barra">/</span>Parte hartu aurretik, errepaso txiki bat'
  );
  $(".ya").html(
    'Dena dakit. <a href="#cuestionario">Joan zuzenean testera.</a>'
  );
  $(".y-yo").text("Ni nora noa?");
  $(".cual").text("Zein da nire edukiontzia?");
  $(".donde").text("Non utziko zenidake?");
  $(".adivina").text("Asmatu nora noan.");
  $(".hola").text("Kaixo, Lataburu Papelplatagaray naiz.");
  $(".todos").text(
    "Metalezko ontzi guztiak edukiontzi horira goaz. Denak: kontserba-latak, edari-potoak, aluminiozko erretiluak, aerosolak, botilen metalezko tapoiak, flaskoen metalezko estalkiak…"
  );
  $(".aqui").text("Hemen Fraskobide Botellamendi.");
  $(".mi").text(
    "Nire edukiontzia kolore berdekoa da. Beirazko ontziak, berdera. Baina beirazko ontziak bakarrik, e? Berriro diot: beirazko ontziak bakarrik. Botilak, flaskoak, poteak… Ez nazazu nahastu kristalezko edalontziekin eta ispiluekin. Eta ez bota inolako estalki edo tapoirik. Hemen beira bakarrik! Mila esker."
  );
  $(".aupa").text("Aupa, Kajaguren Kartoiagoiti naiz.");
  $(".espero").text(
    "Beti edukiontzi urdinean uztea espero dut, hau da, paperen eta kartoien edukiontzian. Hara joaten gara egunkariak, aldizkariak, kartoizko arrautza-ontziak, kartoizko ontziak, paperezko poltsak… Erabilitako ahozapiak edo erabilitako paperezko platerak ez, mesedez!"
  );
  $(".yo").text("Ni Detergenteberri Mantekillaga naiz.");
  $(".al").text(
    "Edukiontzi horira, plastikozko ontzi guztiak bezala. Eta familia handia gara, begira: ur-botilak, garbiketa-produktuen ontziak, izoztuen poltsak, gurin-terrinak, jogurt-ontziak, kortxo zuriko erretiluak, plastikozko bilgarriak, saltokietako plastikozko poltsak eta abar. Eta brikak ere bai!"
  );

  $(".ahora").text("Orain bai, goazen merezi duzun opari horren bila!");
  $(".el-test").text(
    "“Behin betiko birziklatze-testa”. 6 galdera, super sari 1."
  );
  $(".tour").text("Ekoadrilaren bira jarrai ezazu!");
  $(".informate").text(
    "Informa zaitez zure herritik noiz pasatzen den, hurbildu eta lortu zure oparia."
  );
  $(".sigue").text("Jarraitu gure abenturak sareetan!");
  $(".puedes").html(
    'Jarrai gaitzazu Instagrameko gure profil pertsonaletan, edo <a href="https://www.facebook.com/Ekoadrila" target="_blank">jarraitu Ekoadrila, Facebooken</a>'
  );
  $(".material").text("Prentsa materiala");
  $(".dosier").text("Dosierra");
  $(".aviso").text("Legezko oharra");
  $(".cookies").text("Cookie politika");

  /*CUESTIONARIO */

  $(".empezar").text("Hasi");
  $(".respuesta").text("Erantzuna");
  $(".siguiente-pregunta").text("Hurrengo galdera");

  $(".terminar").text("Bukatu");
  $(".enviar").text("Parte hartu");
  $(".falta-respuesta").text("Zalantzak dituzu? Berdin dio! Aukeratu bat.");

  $(".pregunta1").text(
    "Plastikozko jostailu bat, plastikozkoa denez, horira, ezta?"
  );
  $(".pregunta1a").html(
    '<input type="radio" id="a1" name="pregunta1" value="a" />A. Noski. Plastikozkoa bada, edozer bota dezakezu.'
  );
  $(".pregunta1b").html(
    '<input type="radio" id="b1" name="pregunta1" value="b" />B. Ez! Edukiontzi horira, ontziak bakarrik.</label>'
  );
  $(".respuesta1a").text(
    "A. O! Ez da zuzena. Jostailuek eta plastikozko produktuek, hondartzako ontziek adibidez, zalantza asko sortzen dituzte, baina gogoratu beti: edukiontzi horira, ontziak bakarrik. Besterik ez. Plastikozko eta metalezko ontziak, eta brikak. Baina ontziak bakarrik! Jarraitu galdeketarekin! Oraindik garaiz zaude zure oparia lortzeko."
  );
  $(".respuesta1b").text(
    "B. Oso ondo. Asmatu duzu! Jostailuek eta plastikozko produktuek, hondartzako ontziek adibidez, zalantza asko sortzen dituzte, baina gogoratu beti: edukiontzi horira, ontziak bakarrik. Besterik ez. Plastikozko eta metalezko ontziak, eta brikak. Baina ontziak bakarrik!"
  );

  $(".pregunta2").text(
    "Kristalezko edalontzi bat apurtzen bazaizu, edukiontzi berdera bota behar duzu?"
  );
  $(".pregunta2a").html(
    '<input type="radio" id="a2" name="pregunta2" value="a" />A. Bai. Edalontziak, ispiluak, bonbilak eta kristalak, oro har, berdera.</label>'
  );
  $(".pregunta2b").html(
    '<input type="radio" id="b2" name="pregunta2" value="b" />B. Inoiz ez! Berdera beirazko ontziak bakarrik. Beirazkoak bakarrik.'
  );
  $(".respuesta2a").text(
    "A. O! Zure erantzuna ez da zuzena. Berdera beirazko ontziak BAKARRIK! Beirazko potoak, beirazko botilak, beirazko flaskoak. Ez edalontzi, bonbila edo ispilurik. Eskerrik asko! Jarraitu galdeketarekin! Oraindik garaiz zaude zure oparia lortzeko."
  );
  $(".respuesta2b").text(
    "B. Hau zaila zen, eta asmatu duzu! Berdera beirazko ontziak BAKARRIK! Beirazko potoak, beirazko botilak, beirazko flaskoak. Ez edalontzi, bonbila edo ispilurik. Eskerrik asko!"
  );

  $(".pregunta3").text("Merezi al du birziklatzeko ahalegina egiteak?");
  $(".pregunta3a").html(
    '<input type="radio" id="a3" name="pregunta3" value="a"/>A. Ez gehiegi. Azkenean ia hobe da produktu berriak egitea.'
  );
  $(".pregunta3b").html(
    '<input type="radio" id="b3" name="pregunta3" value="b"/>B. Noski merezi duela. Produktu berri bat egitea baino gutxiago kostatzen da birziklatzea.</label>'
  );
  $(".respuesta3a").text(
    "A. Zer diozu? Birziklatzen dugunean, ura, energia eta lehengaiak aurrezten ditugu. Gainera, lehengaiak egiteko prozesuan sortzen den kutsadura murrizten dugu. Noski merezi duela! Jarraitu galdeketarekin! Oraindik garaiz zaude zure oparia lortzeko. "
  );
  $(".respuesta3b").text(
    "B. Horixe baietz! Birziklatzen dugunean, ura, energia eta lehengaiak aurrezten ditugu. Gainera, lehengaiak egiteko prozesuan sortzen den kutsadura murrizten dugu. Noski merezi duela!"
  );

  $(".pregunta4").text(
    "Edukiontzi berdera bota aurretik, beirazko flaskoen estalkiak kendu behar ditut, edo ez?"
  );
  $(".pregunta4a").html(
    '<input type="radio" id="a4" name="pregunta4" value="a"/>A. Beti! Edukiontzi berdera, beirazko ontziak bakarrik.'
  );
  $(".pregunta4b").html(
    '<input type="radio" id="b4" name="pregunta4" value="b"/>B. Ez da beharrezkoa. Hori birziklatze-instalazioan egiten dute.'
  );
  $(".respuesta4a").text(
    "A. Hori da. Gogoratu beti: edukiontzi berdera, beirazko ontziak bakarrik: beirazko botilak, potoak eta flaskoak, estalkirik GABE."
  );
  $(".respuesta4b").text(
    "B. Ez da zuzena. Gogoratu beti: edukiontzi berdera, beirazko ontziak bakarrik: beirazko botilak, potoak eta flaskoak, estalkirik GABE. Jarraitu galdeketarekin! Oraindik garaiz zaude zure oparia lortzeko."
  );

  $(".pregunta5").text("Birziklatutako produktuen kalitatea txarragoa da?");
  $(".pregunta5a").html(
    '<input type="radio" id="a5" name="pregunta5" value="a"/>A. Bai, bai. Oro har, birziklatu ahala behera egiten du kalitateak.'
  );
  $(".pregunta5b").html(
    '<input type="radio" id="b5" name="pregunta5" value="b"/>B. Ez, ontzi gehienak mugarik gabe birzikla daitezke.'
  );
  $(".respuesta5a").text(
    "A. Erantzun zuzena: Bai zera! Ontzi gehienetan, kalitatea mantendu egiten da birziklatu ahala. Beira, aluminioa eta plastiko asko mugarik gabe birzikla daitezke, kalitatea galdu gabe. Jarraitu galdeketarekin! Oraindik garaiz zaude zure oparia lortzeko."
  );
  $(".respuesta5b").text(
    "B. Txalo bero bat! Izan ere, ontzi gehienen kalitatea mantendu egiten da birziklatu ahala. Beira, aluminioa eta plastiko asko mugarik gabe birzikla daitezke, kalitatea galdu gabe."
  );

  $(".pregunta6").text("Aerosolak ere birzikla daitezke?");
  $(".pregunta6a").html(
    '<input type="radio" id="a6" name="pregunta6" value="a"/>A. Noski, metalezko ontziak dira. Edukiontzi horian utzi behar dira.'
  );
  $(".pregunta6b").html(
    '<input type="radio" id="b6" name="pregunta6" value="b"/>B. Ez, zakarrontzi arruntean utzi behar dira.'
  );
  $(".respuesta6a").text(
    "A. Asmatu duzu! Eta ez zen erraza. Etxean poltsa horia izan arren, biztanleriaren % 22k ez ditu edukiontzi horira botatzen, nora bota ez dakitelako. Aerosolak, horira!"
  );
  $(".respuesta6b").text(
    "B. O! Ez duzu asmatu, baina galdera hau ez zen erraza. Etxean poltsa horia izan arren, biztanleriaren % 22k ez ditu edukiontzi horira botatzen, nora bota ez dakitelako. Aerosolak, horira! Zure oparia lortzear zaude!"
  );

  /* FORMULARIO EMAIL */
  $(".enhorabuena").text("Zorionak! Amaieraraino iritsi zara");
  $(".ya-solo").text(
    "Horregatik bakarrik, zozketan sartzea merezi duzu: 2 lagunentzako asteburua Donostiako Arima hotelean. Utzi zure datuak parte hartu ahal izateko."
  );
  $(".nombre").text("Izena eta abizena*");
  $(".email").text("Emaila*");
  $(".acepto").html(
    '<a href="/terminos-y-condiciones" target="_blank">Base legalak</a>* onartzen ditut'
  );

  $(".revisa-campos").text("Datuak berrikusi formularioa bidali aurretik.");
  $(".gracias").text("Eskerrik asko parte hartzeagatik!");
  $(".el-sorteo").html(
    "Zozketa irailaren 2an egingo da.</br>Irabazlea bazara, zurekin harremanetan jarri ahal izango gara.</br>Zorte on!"
  );
  /*--------------------------------*/

  $("#es").removeClass("bold");
  $("#es").addClass("light");
  $("#eu").removeClass("light");
  $("#eu").addClass("bold");

  /* COOKIES*/
  $(".politica-de-cookies").html(
    '<h1>Cookie politika</h1></br></br><h2 class="">Zer dira cookie-ak?</h2><p>Cookie bat webgune jakin batzuetan sartzen zarenean zure ordenagailuan deskargatzen den fitxategi bat da. cookie-ek, besteak beste, erabiltzaile baten edo haren ekipamenduaren nabigazio-azturei buruzko informazioa biltzeko eta berreskuratzeko bidea ematen diote web orri bati. Barne hartzen duten informazioaren arabera eta ekipamendua erabiltzen den moduaren arabera, erabiltzailea ezagutzeko erabil daitezke.</br>www.ekoadrila.eus webgunean nabigatzen duzunean cookie-ak erabiltzea onartuko duzu, atal honetan azaldutako baldintzetan.</p><h2 class="">Cookie motak</h2><p>· Cookie teknikoak: erabiltzaileak webgune, plataforma edo aplikazio batean nabigatzea ahalbidetzen dute, baita horietan dauden aukera edo zerbitzu desberdinak erabiltzea ere; hala nola, trafikoa kontrolatzea eta datuak komunikatzea, saioa identifikatzea, sarrera mugatua duten ataletan sartzea, eskabidea osatzen duten elementuak gogoratzea, eskabide bat erosteko prozesua egitea, ekimen batean izena emateko edo parte hartzeko eskaera egitea, zabaltzeko bideoak edo soinua daukaten edukia gordetzea edo sare sozialen bidez edukiak partekatzea.</br></br>· Analisirako Cookie-ak: erabiltzaile kopurua zenbatzea ahalbidetzen dute, baita nabigazioaren neurketa eta analisi estatistikoa egitea ere. Horren helburua da eskura dauden zerbitzuak hobetzea. Propioak edo beste batenak izan daitezke.</br></br>· Pertsonalizatzeko Cookie-ak: erabiltzaileak zerbitzura sartzea ahalbidetzen dute, erabiltzailearen gailuan aurretik definitutako irizpide batzuen araberako ezaugarri orokor batzuekin; hala nola, hizkuntza, zerbitzura sartzeko erabiltzen den nabigatzaile mota, zerbitzura sartzeko erabiltzen duen eskualdeko konfigurazioa, eta abar.</br></br>· Publizitateko eta marketineko cookieak: erabiltzaileen jokabideari buruzko informazioa gordetzen dutenak. Nabigazio-ohituren ikuskapen jarraituaren bidez eskuratzen da informazio hori, eta Facebook/Twitteri (edo erabiltzen ari garenari) ahalbidetzen dio profil berezia sortzea eta iragarkiak horren arabera ematea.</p><h2 class="">Cookies-en iraupena</h2><p>Saiorako Cookie-ak: erabiltzailea webgune batera sartzen den bitartean datuak bildu eta gordetzen dituzte. Informazioa gordetzeko erabiltzen dira, eskuarki, informazio hori gordetzeko interesa eskatutako zerbitzua behin emateko baino ez da (adibidez: erosteko orgatxoan dauden produktuen zerrenda).</br></br>Cookie iraunkorrak: datuek gailuan gordeta jarraitzen dute, eta horietara sartu daiteke eta horiek erabili cookie-en arduradunak definitutako aldi batean. Aldi hori minutu batzuetatik zenbait urtetara bitartekoa izan daiteke.</p><h2 class="">Cookies motak kudeatzailearen arabera</h2><p>Ekipoa nork kudeatzen duen, zer domeinutik bidaltzen diren cookie-ak edo lortzen diren datuen arabera honako hauek bereiz ditzakegu:</br></br>· Cookie propioak: Sirope Agencia Creativa, S.L.k kudeatzen ditu.</p><h2 class="">Nola desaktibatu edo ezabatu daitezke cookie-ak?</h2><p>Zure ordenagailuan instalaturiko cookie-ak baimendu, blokeatu edo ezaba ditzakezu zure ordenagailuan instalatuta dagoen nabigatzailearen aukeren konfigurazioaren bidez. Informazio gehiago izateko erabiltzen duzun nabigatzailearen konfigurazio-aukerak kontsultatzea aholkatzen da.</br></br>· <a href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&amp;hl=es&amp;oco=0" target="_blank" title="(Abre una nueva ventana)">Desaktibatu cookieak Chromen</a></br></br>· <a href="https://support.microsoft.com/es-es/topic/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" title="(Abre una nueva ventana)">Desaktibatu cookieak Exploreren</a></br></br>· <a href="https://support.mozilla.org/es/kb/Deshabilitar%20cookies%20de%20terceros" target="_blank" title="(Abre una nueva ventana)">Desaktibatu cookieak FireFoxen</a></br></br· <a href="https://support.apple.com/es-es/HT201265#:~:text=Para%20activar%20o%20desactivar%20el,funcionen%20si%20bloqueas%20las%20cookies" target="_blank" title="(Abre una nueva ventana)"></a></br></br>· <a href="https://support.microsoft.com/es-es/microsoft-edge/problema-al-bloquear-cookies-de-terceros-f91209bd-0104-2446-61be-d2e4d7da64da" target="_blank" title="(Abre una nueva ventana)">Desaktibatu cookieak Edgen<p>Cookie-ak desaktibatu edo ezabatzen badira baliteke bizkaia.eus webguneko zenbait funtzionaltasun ondo ez ibiltzea.</p>'
  );

  /* Bases*/
  $(".terminos").html(
    '<h1>ZOZKETAREN TERMINOAK ETA BALDINTZAK:</h1> <h1>“Ekoadrilaren Birziklatze Testa”</h1> <h2>1. KLAUSULA.- Erakunde antolatzaileak</h2> <p>Sirope Agencia Creativa SL enpresak, IFZ: B95943932 eta egoitza soziala Bilboko Prim kalea 58 (atzealdea), 3 - 48006 helbidean duenak (aurrerantzean, “Antolatzailea”), “Ekoadrilaren Birziklatze Testaren” 4 zozketak (aurrerantzean “Zozketa”) antolatu ditu, jarraian adierazitako egunetan, oinarri hauetan jasotzen diren terminoen eta baldintzen arabera. </p><h2>2. KLAUSULA.- Oinarriak onartzea </h2> <p>Oinarri hauek interesdunen eskura daude www.ekoadrila.eus web-orrian. Zozketetan parte hartzeak esan nahi du parte-hartzaileek: </br></br> 1. Oinarri hauetan ezarritako baldintza guztiak betetzen dituztela.</br></br> 2. Oinarrietako termino eta baldintza guztiak onartzen dituztela, pribatutasun-politika eta datuen babesa barne.</br></br> 3. Zozketetatik eratorritako edozein gai ebazteari dagokionez, Antolatzailearen irizpidea onartzen dutela.</p><h2>3. KLAUSULA.- Parte-hartzaileen baldintzak </h2> <p>Zozketetan parte hartzeko baldintzak: </br></br> · 18 urtetik gorakoa izatea.</br></br> · NAN edo bizileku-txartela indarrean izatea. </br></br> · Euskadin bizitzea.</p><h2>4. KLAUSULA.- Parte hartzeko epea</h2> <p>Lau zozketa egingo dira eta 4 sari desberdin egongo dira. Zozketak 2021eko uztailaren 22tik irailaren 1era egingo dira, biak barne.</br></br> Erakunde antolatzaileak epe hori aldatu ahal izango du (luzatu edo murriztu) zozketak egin aurretik, eta epe berria jakinarazi beharko du www.ekoadrila.eus web-orrian.</p><h2>5.- KLAUSULA. Parte hartzeko eskaera aurkezteko modua </h2> <p>1. Sartu www.ekoadrila.eus web-orrian eta osatu testa.</br></br> 2. Webgune horretan dagoen testa amaitzean, sartu datu hauek: </br></br> · Izena eta abizenak.</br></br> · Posta elektronikoko helbidea.</br></br> Ezin izango dute zozketetan parte hartu Ecoembesekin, Ecovidriorekin edo Eusko Jaurlaritzarekin lotura pertsonala edo profesionala duten pertsonek, ez eta haien antolakuntzan eta/edo prestakuntzan zuzenean edo zeharka parte hartu dutenek edo haien lehen mailako senideek. </p><h2>6. KLAUSULA.- Sariak </h2> <p>Lau zozketa egingo dira eta horietako bakoitzak sari bat izango du. Zozketa bakoitza 10-11 egunez behin egingo da, kanpaina hasten denetik aurrera: uztailaren 22an.</br></br> Sariak Euskadin gozatzeko esperientzia jasangarriak izango dira. Honako hauek dira: </br></br> • 2 pertsonentzako asteburu bat Zeanuriko Zuhaitz Etxeetan (Bizkaia).</br></br> • 2 pertsonentzako itsasontzi bidezko ibilbidea Gipuzkoako Flyschetan.</br></br> • 2 pertsonentzako menua Azurmendin, munduko jatetxerik jasangarrienean.</br></br> • 2 pertsonentzako asteburu bat Donostiako Arima Hotelean, Small Luxury Hotels of the World katalogoan sartuta dagoen Europako jasangarrienetako bat.</br></br> Antolatzaileak saria ordezkatzeko eskubidea izango du, antzeko ezaugarriak edo hobeak dituen beste batekin.</br></br> Saria pertsonala eta besterenezina da. Beraz, irabazleak eta hark laguntzaile izendatzen duen pertsonak bakarrik trukatu ahal izango dute. </br></br> Saria ezin izango zaie beste sari batzuei metatu, ez eta beste zerbitzu batekin trukatu. </br></br></br> <b class="bols" >Sariek honako hauek barne hartzen dituzte: </b></br></br> • 2 pertsonentzako asteburu bat Zeanuriko Zuhaitz Etxeetan (Bizkaia). 2021eko abenduaren 31 baino lehen trukatzekoa. 2 urteko balioa. Bi gau, ostirala eta larunbata, Txantxangorri zuhaitz-etxean, gosaria barne. Sarituak balio handiagoko zuhaitz-etxe bat erreserbatu nahi badu, aldea ordaindu ahal izango du. Eta balio txikiagoa izanez gero, zerbitzu gehigarriak kontratatu ahal izango ditu. </br></br> • 2 pertsonentzako itsasontzi bidezko ibilbidea Gipuzkoako Flyschetan. Ibilbidea Euskal Kostaldeko Unesco Geoparkeko Flyscheko itsaslabarretan zehar. 3,15 orduko ibilbidea izango da, itsasontzi partekatuan. Bisita gidatua eta erantzukizun zibileko asegurua barne. </br></br> • 2 pertsonentzako menua Azurmendin, munduko jatetxerik jasangarrienean. Adarrak menua; hainbat plater, artisau erara egindako ogiak eta postrea hartzen ditu barne. Edariak kanpo. </br></br> • 2 pertsonentzako asteburu bat Donostiako Arima Hotelean, Small Luxury Hotels of the World katalogoan sartuta dagoen Europako jasangarrienetako bat. Ostiral gaua eta larunbat gaua hartzen ditu barne, 4 izarreko hoteleko logela bikoitz standard batean. </p><h2>7. KLAUSULA.- Zozketa </h2> <p><b>Zozketa bakoitzean izena emateko datak:</b></br></br> • Zeanuriko Zuhaitz Etxeetako asteburuaren zozketa: 2021eko uztailaren 22tik abuztuaren 1era (biak barne).</br></br> • Itsasontzi bidezko ibilbidearen zozketa Gipuzkoako Flyschetatik zehar: 2021eko abuztuaren 2tik 11ra (biak barne).</br></br> • Azurmendi jatetxeko menuaren zozketa: 2021eko abuztuaren 12tik 22ra (biak barne).</br></br> • Donostiako Arima Hoteleko asteburuaren zozketa: 2021eko abuztuaren 23tik irailaren 1era (biak barne).</br></br></br> <b>Zozketen egunak</b></br></br> • Zeanuriko Zuhaitz Etxeetako asteburuaren zozketa: 2021eko abuztuaren 2an.</br></br> • Itsasontzi bidezko ibilbidearen zozketa Gipuzkoako Flyschetan zehar: 2021eko abuztuaren 12an.</br></br> • Azurmendi jatetxeko menuaren zozketa: 2021eko abuztuaren 23an.</br></br> • Donostiako Arima Hoteleko asteburuaren zozketa: 2021eko irailaren 2an.</br></br> 1. www.ekoadrila.eus web-orrian testa bete duten parte-hartzaile guztien artean zerrenda bat egingo da. </br></br> 2. Zerrenda horretan, parte-hartzaileak inprimakia bidali den egunaren eta orduaren arabera antolatuta agertuko dira. </br></br> 3. Parte-hartzaile bakoitzari zenbaki ordinal bat esleituko zaio. Zenbaki hori batetik hasiko da, goranzko hurrenkeran, oinarri hauetan ezarritakoa bete duten parte-hartzaile guztiek zenbaki bat izan arte. </br></br> 4. Zozketan izena emandako pertsonen zerrendatik, Antolatzaileak helbide elektroniko bat aterako du ausazko sistema baten bidez, Random edo antzekoa.</p><h2>8. KLAUSULA.- Saria ematea </h2> <p>Irabazleari emaitzaren berri emateko jakinarazpen bat bidaliko zaio Zozketan izena ematean adierazi duen helbide elektronikora, zozketa egin eta hurrengo egunean.</br></br> Irabazleak saria onartu beharko du. Horretarako, saria onartzeko mezu elektroniko bat bidali beharko du<a href="mailto:ekoadrila@gmail.com"> ekoadrila@gmail.com </a>helbidera. Bertan, saria emateko eta gozatzeko baldintzak jasoko dira. </br></br> Saria onartzeko e-maila hamar (10) egun naturaleko epean bidali beharko da gehienez ere. Hamar (10) egun naturaleko epea zozketa irabazi duela jakinarazten zaion mezu elektronikoa jaso eta hurrengo egunetik aurrera hasiko da kontatzen. </br></br> Adierazitako epean erantzuten ez badu, edo saria ukatzen badu, irabazlearen izaera galdu eta Antolatzailearen esku geratuko da saria. Hark erreserba-erregistroetara (ordezkoetara) joko du, erauzte-ordenaren arabera. </br></br> Saria 2021eko irailaren 3tik 2021eko abenduaren 31ra bitartean erabili beharko da, betiere hoteleko plazak eta zerbitzuak (erreserbak, bisitak eta abar) eskuragarri badaude. </br></br> Irteera-data finkatu ondoren, ezin izango da aldatu. Aldaketak edo baliogabetzeak eragindako gastuak irabazleak ordaindu beharko ditu. </br></br> Antolatzaileak ez du inolako erantzukizunik izango bidaian zehar bere borondatetik kanpo gerta litezkeen gorabeherei dagokienez. </br></br> Sariaren zenbatekoa indarrean dagoen zerga-legeria aplikagarriaren mende egongo da. </br></br> Ostatuan/jatetxean/jardueran tokirik ez izateagatik erreserba ezin bada egin zehaztutako datetan (2021eko irailaren 3tik abenduaren 31ra), Antolatzaileak sariaren zenbateko baliokidea eman beharko dio eskudirutan, 2022ko urtarrilaren 1etik aurrera. Sari bakoitzari dagokion kantitate ekonomikoa 7. klausulan adierazitako deskribapenaren eta erdi-denboraldiko tarifen arabera zehaztuko da. </p><h2>9. KLAUSULA.- Sariaren irabazlearentzako betebeharrak </h2> <p>Sustapenean parte hartzen duten guztiek, parte hartze hutsagatik, sustapenaren oinarriak, parte hartzeko arauak, terminoak eta baldintzak, eta pribatutasun-politika eta datuen babesa onartzen dituzte. Sustapenaren oinarriak interesdun guztien eskura egongo dira www.ekoadrila.eus web-orrian.</br></br> Saria onartzean, irabazleak baimena ematen dio Sirope Agencia Creativa enpresari emandako datuak (izen-abizenak eta beste datu batzuk) argitaratzeko eta erabiltzeko. </p><h2>10. KLAUSULA.- Datu pertsonalen babesa </h2> <p>Internet bidez jasotako datuak Zozketarako datu-base batean sartuko dira, eta zozketa promozio-epea amaitu ondoren egingo da. </br></br> Parte-hartzaileek emandako datuak honako legeria honetan zehaztutakoaren arabera tratatuko dira: 3/2018 Lege Organikoa, abenduaren 5ekoa, Datu Pertsonalak Babesteari eta Eskubide Digitalak Bermatzeari buruzkoa; 2016/679 (EB) Erregelamendua, 2016ko apirilaren 27koa, Europako Parlamentuarena eta Kontseiluarena, datu pertsonalen tratamenduari eta datu horien zirkulazio askeari dagokionez pertsona fisikoak babesteari buruzkoa; eta indarrean dagoen gainerako araudi aplikagarria. </br></br></br> Tratamenduaren arduraduna:</br></br> Sirope Agencia Creativa SL, IFZ: B95943932 eta egoitza soziala Bilboko Prim kalea 58 (atzealdea), 3 - 48006 helbidean duena. Posta elektronikoko helbidea: admin@sirope.es</br></br></br> Tratamenduaren helburua eta legitimazioa:</br></br> • Zozketan parte hartzeko izapideak egitea eta, hala badagokio, saria ematea, dagozkion atxikipen fiskalekin.</br></br> • Antolatzaileari parte-hartzaileei buruzko informazioa bidaltzea.</br></br> • Erabilitako datuak:</br></br> • Zozketan izena ematean parte-hartzaileek emandako datuak, baita aipatutako helburuak behar bezala betetzeko eska daitezkeen gainerako datuak ere.</br></br></br> Hartzaileak:</br></br> Aurrez aurreikusitako helburuak garatzeko, ez da aurreikusten zure datuak hirugarrenen sozietateei jakinaraziko zaizkienik, legezko betebeharrak izan ezean. </br></br></br> Nazioarteko transferentziak: </br></br> Irabazlearen datuak Ekoadrilaren kanpainarekin lotutako web-plataformetan edo sare sozialetan argitara daitezke.</br></br> Argitalpen horrek nazioarteko transferentzia bat eragin dezake, eta xede-herrialdeko datuak babesteko araudia Europakoaren maila berekoa ez izatea gerta liteke. </br></br> Interesdunak, Zozketan parte hartuz, transferentzia hori onartzen du. Hala ere, Antolatzaileak neurri osagarriak hartu ahal izango ditu emandako datuen segurtasun-maila bermatzeko. </br></br></br> Kontserbatzeko epea: </br></br> Datuak gorde egingo dira bildu ziren helburua betetzeko eta helburu horretatik eta datuen tratamendutik erator daitezkeen erantzukizunak zehazteko behar den denboran. </br></br></br> Eskubideak: </br></br> Zure datuak eskuratzeko, zuzentzeko, ezabatzeko eta transferitzeko eskubideak erabil ditzakezu, baita datuen tratamendua mugatzeko eta tratatzeari uko egiteko eskubideak, eta zure datuen tratamendu automatizatuan bakarrik oinarritutako erabakien xede ez izateko eskubideak ere, hala dagokionean, Sirope Agencia Creativa SLn bertan (IFZ: B95943932 eta helbide soziala: Prim kalea 58 (atzealdea), 3 – 48006 Bilbo) edo admin@sirope.es helbide elektronikoaren bidez.</br></br> Sustapenean parte hartzen duten guztiek baimena ematen diote Antolatzaileari beren izen-abizenak argitara ditzan, oinarri hauetan xedatutako ondorioetarako, eta aldizka erabili ahal izango dira parte-hartzaile irabazlearen izena eta irudia, baita haren helbide elektronikoa ere, sustapenari buruzko informazioa bidaltzeko. </br></br> Antolatzaileak ezin izango ditu erabili parte-hartzaileek emandako datuak oinarrietan adierazitakoa ez den beste helburu batekin, eta datuak babesteari buruz indarrean dagoen legeriaren arabera tratatuko ditu. </p><h2>11. KLAUSULA.- Oinarriak onartzea. Erantzukizuna. </h2> <p>1. Zozketan parte hartze hutsak oinarri hauek guztiz onartzen direla esan nahi du. </br></br> 2. Antolatzaileak edozein unetan aldatu ahal izango ditu Zozketaren oinarriak, guztiz edo zati batean. Era berean, hura deuseztatzeko edo saria hutsik uzteko eskubidea izango du, irregulartasunen bat hautemanez gero. Edozein aldaketa egin ondoren, aldaketa behar bezala jakinaraziko zaie parte-hartzaileei, www.ekoadrila.eus web-orrian.</br></br> 3. Antolatzaileak zozketan parte hartzetik kanpo utzi ahal izango ditu oinarri hauetan jasotako edozein baldintza betetzen ez dutela uste duen parte-hartzaile guztiak. Parte-hartzaile bat baztertuz gero, arrazoia dena dela, hark parte-hartzailearen izaeratik eratorritako eskubide guztiak galduko ditu. </br></br> 4. Oinarri hauek gehiegikeriaz edo iruzurrez erabiliz gero, Zozketan parte hartzen duena deskalifikatu egingo da. </br></br> 5. Antolatzaileak ez du inolako erantzukizunik izango parte-hartzaileek emandako datuetan akatsen bat badago eta, beraz, parte-hartzaileak identifikatu ezin badira. </br></br> 6. Antolatzaileak zozketaren baldintzak aldatu edo ezeztatzeko eskubidea izango du zozketa egiten den bitartean, antolatzailearen kontrolarekin zerikusirik ez duten inguruabarrak direla eta. </p><h2>12. KLAUSULA.- Aplikatu beharreko legea </h2> <p>Antolatzaileak eta sustapeneko parte-hartzaileek berariaz uko egiten diote beste edozein foruri, eta Bilboko epaitegien eta auzitegien mende jarriko dira bien artean sor litekeen edozein eztabaidarako. </p>'
  );

  /* PRENSA*/
  $(".prensa").html(
    '<h1>PRENTSA MATERIALA</h1><p>Hemen aurki ditzakezu deskarga daitezkeen material guztiak.</p><div class="flex column"><a href="dossier.pdf" download>Dossier</a><a href="Material-Grafico.zip" download>Material grafikoa</a><a href="Prentsa-oharra-Nota-de-prensa.docx" download>Prentsa oharra</a><a href="Evento-Inauguracion.zip" download>Inaugurazio ekitaldiaren argazkiak</a></div>'
  );
}

function botonEs() {
  $(".cuando").html(
    '<span class="barra">/</span>Cuando nos reciclas nos das vida. Así que para ti, este regalo.'
  );
  $(".sorteo").text(
    "Sorteo de un fin de semana para 2 en las cabañas de los árboles de Zeanuri por completar el test del reciclaje. ¡Suerte!"
  );
  $(".sorteo-flysch").text(
    "Sorteo de una ruta en barco para 2 por los Flysch de Gipuzkoa por completar el test del reciclaje. ¡Suerte!"
  );
  $(".sorteo-azurmendi").text(
    "Sorteo de un de un menú para 2 en el restaurante Azurmendi por completar el test del reciclaje. ¡Suerte!"
  );
  $(".sorteo-arima").text(
    "Sorteo de un fin de semana para 2 en Hotel Arima de Donosti por completar el test del reciclaje. ¡Suerte!"
  );
  $(".repasar").text("Repasar antes");
  $(".hacer-test").text("Hacer test");
  $(".antes").html(
    '<span class="barra">/</span>Antes de participar, un pequeño repaso'
  );
  $(".ya").html(
    'Ya me lo sé todo. <a href="#cuestionario">Ir directamente al test</a>.'
  );
  $(".y-yo").text("¿Y yo dónde voy?");
  $(".cual").text("¿Cuál es mi contenedor?");
  $(".donde").text("¿Dónde me depositarías?");
  $(".adivina").text("Adivina dónde voy.");
  $(".hola").text("Hola, soy Lataburu Papelplatagaray.");
  $(".todos").text(
    "Todos los envases metálicos vamos al contenedor amarillo. To-dos: latas de conservas, de bebidas, bandejas de aluminio, aerosoles, tapones metálicos de botellas, tapas metálicas de frascos…"
  );
  $(".aqui").text("Aquí Fraskobide Botellamendi.");
  $(".mi").text(
    "Mi contenedor es el de color verde. Envases de vidrio, al verde.Pero solo envases de vidrio ¿eh? Repito: solo envases vidrio. Botellas, frascos, botes… No me mezcles con vasos de cristal ni espejos. Y tampoco eches las tapas ni tapones de ningún tipo.¡Aquí, solo vidrio! Gracias."
  );
  $(".aupa").text("Aupa, soy Kajaguren Kartoiagoiti.");
  $(".espero").text(
    "Espero que me deposites siempre en el contenedor azul, el de los papeles y los cartones. Ahí vamos los diarios, las revistas, las hueveras de cartón, los envases de cartón, las bolsas de papel… ¡Servilletas usadas o platos de papel usado no por favor!"
  );
  $(".yo").text("Yo soy Detergenteberri Mantekillaga.");
  $(".al").text(
    "Al contenedor amarillo, como todos los envases de plástico. Y somos una gran familia, mira: botellas de agua, envases de productos de limpieza, bolsas de congelados, tarrinas de mantequilla y de yogur, bandejas de corcho blanco, envoltorios de plástico, bolsas de plástico de las tiendas, etc. ¡Y briks también!"
  );

  $(".ahora").text("Ahora sí, ¡a por tu merecido regalo! ");
  $(".el-test").text(
    "El “Test de Reciclaje Definitivo”. 6 preguntas, 1 premio."
  );
  $(".sigue").text("¡Sigue nuestras aventuras en las redes!");
  $(".puedes").html(
    'Puedes seguir a los protagonistas en sus perfiles personales de Instagram o <a href="https://www.facebook.com/Ekoadrila" target="_blank">la ekoadrila al completo en su cuenta de Facebook.</a>'
  );
  $(".tour").text("¡Sigue el tour de la Ekoadrila!");
  $(".informate").text(
    "Infórmate de cuándo pasa por tu localidad, acércate y consigue tu regalo."
  );
  $(".material").text("Material prensa");
  $(".dosier").text("Dosier");
  $(".aviso").text("Aviso legal");
  $(".cookies").text("Política de cookies");

  /*CUESTIONARIO */

  $(".empezar").text("Empezar");
  $(".respuesta").text("Respuesta");
  $(".siguiente-pregunta").text("Siguiente pregunta");

  $(".terminar").text("Terminar");
  $(".enviar").text("Participar");
  $(".falta-respuesta").text("¿Tienes dudas? ¡No importa! Elige una opción.");

  $(".pregunta1").text(
    "Un juguete de plástico, como es de plástico, al amarillo, ¿no?"
  );
  $(".pregunta1a").html(
    '<input type="radio" id="a1" name="pregunta1" value="a" />A. Claro, mientras sea de plástico, puedes tirar lo que quieras.'
  );
  $(".pregunta1b").html(
    '<input type="radio" id="b1" name="pregunta1" value="b" />B. ¡No! Al contenedor amarillo, solo envases.</label>'
  );
  $(".respuesta1a").text(
    "A. Oooh. No es correcto. Los juguetes y los productos de plástico como los cubos de playa, generan muchas dudas, pero recuerda siempre: al contenedor amarillo, solo envases. Nada más. Envases de plástico, de metal y briks. ¡Pero solo envases! ¡Sigue con la encuesta! Todavía estás a tiempo de conseguir tu regalo."
  );
  $(".respuesta1b").text(
    "B. ¡Muy bien, has acertado! Y eso que los juguetes y los productos de plástico como los cubos de playa, generan muchas dudas, pero recuerda siempre: al contenedor amarillo, solo envases. Nada más. Envases de plástico, de metal y briks.  ¡Pero solo envases!"
  );

  $(".pregunta2").text(
    "Si se te rompe un vaso de cristal, ¿lo echas al contenedor verde?"
  );
  $(".pregunta2a").html(
    '<input type="radio" id="a2" name="pregunta2" value="a" />A. Sí. Vasos, espejos, bombillas y cristales en general, al verde.</label>'
  );
  $(".pregunta2b").html(
    '<input type="radio" id="b2" name="pregunta2" value="b" />B. ¡Nunca! Al verde solo envases de vidrio. Única y exclusivamente.'
  );
  $(".respuesta2a").text(
    "A. ¡Oooh! Tu respuesta no es correcta. ¡Al verde SOLO envases de vidrio! Tarros de vidrio, botellas de vidrio, frascos de vidrio. Nada de vasos, bombillas o espejos. ¡Gracias! ¡Sigue con la encuesta! Todavía estás a tiempo de conseguir tu regalo."
  );
  $(".respuesta2b").text(
    "B. Esta era difícil, ¡y has acertado! ¡Al verde SOLO envases de vidrio! Tarros de vidrio, botellas de vidrio, frascos de vidrio. Nada de vasos, bombillas o espejos. ¡Gracias!"
  );

  $(".pregunta3").text("¿Merece la pena el esfuerzo de reciclar?");
  $(".pregunta3a").html(
    '<input type="radio" id="a3" name="pregunta3" value="a"/>A. No mucho, al final casi es mejor fabricar productos nuevos.'
  );
  $(".pregunta3b").html(
    '<input type="radio" id="b3" name="pregunta3" value="b"/>B. Claro que merece la pena. Cuesta menos reciclar que fabricar un nuevo producto.</label>'
  );
  $(".respuesta3a").text(
    "A. ¡Qué dices! Reciclando ahorramos agua, energía y materia prima. Además, reducimos la contaminación que se produce en el proceso de obtención de la materia prima. ¡Claro que merece la pena! ¡Sigue con la encuesta! Todavía estás a tiempo de conseguir tu regalo."
  );
  $(".respuesta3b").text(
    "B. ¡Claro que sí! Reciclando ahorramos agua, energía y materia prima. Además, reducimos la contaminación que se produce en el proceso de obtención de la materia prima. ¡Claro que merece la pena!"
  );

  $(".pregunta4").text(
    "¿Quito o no quito las tapas de los frascos de vidrio antes de echarlos al contenedor verde?"
  );
  $(".pregunta4a").html(
    '<input type="radio" id="a4" name="pregunta4" value="a"/>A. ¡Siempre! Al contenedor verde, solo envases de vidrio.'
  );
  $(".pregunta4b").html(
    '<input type="radio" id="b4" name="pregunta4" value="b"/>B. No hace falta, eso lo separan en la planta de reciclaje.'
  );
  $(".respuesta4a").text(
    "A. Efectivamente. Recuerda siempre: al contenedor verde, solo envases de vidrio: botellas de vidrio, tarros y frascos de vidrio SIN sus respectivas tapas."
  );
  $(".respuesta4b").text(
    "B. No es correcto. Recuerda siempre: al contenedor verde, solo envases de vidrio: botellas de vidrio, tarros y frascos de vidrio SIN sus respectivas tapas. ¡Sigue con la encuesta! Todavía estás a tiempo de conseguir tu regalo."
  );

  $(".pregunta5").text("¿La calidad de los productos reciclados es peor?");
  $(".pregunta5a").html(
    '<input type="radio" id="a5" name="pregunta5" value="a"/>A. Sí, sí, en general, reciclado a reciclado la calidad va mermando.'
  );
  $(".pregunta5b").html(
    '<input type="radio" id="b5" name="pregunta5" value="b"/>B. No, la mayoría de los envases se pueden reciclar de manera ilimitada.'
  );
  $(".respuesta5a").text(
    "A. La respuesta correcta es… ¡qué va! En la mayoría de los envases, la calidad no va mermando reciclado a reciclado. Tanto el vidrio, como el aluminio y muchos plásticos pueden ser reciclados de forma ilimitada sin perder su calidad. ¡Sigue con la encuesta! Todavía estás a tiempo de conseguir tu regalo."
  );
  $(".respuesta5b").text(
    "B. ¡Aplausos! Efectivamente, la calidad de la mayoría de los envases no va mermando reciclado a reciclado. Tanto el vidrio, como el aluminio y muchos plásticos pueden ser reciclados de forma ilimitada sin perder su calidad."
  );

  $(".pregunta6").text("¿Los aerosoles, se pueden reciclar?");
  $(".pregunta6a").html(
    '<input type="radio" id="a6" name="pregunta6" value="a"/>A. Claro, son envases metálicos. Van al contenedor amarillo.'
  );
  $(".pregunta6b").html(
    '<input type="radio" id="b6" name="pregunta6" value="b"/>B. No, van a la basura general.'
  );
  $(".respuesta6a").text(
    "A. ¡Has acertado! Y esta no era fácil. De hecho, hay un 22 % de población que a pesar de tener bolsa amarilla en casa, no los depositan ahí por no saber dónde deben ir. ¡Aerosoles, al amarillo!"
  );
  $(".respuesta6b").text(
    "B. Oooh, no has acertado, pero esta pregunta no era fácil. De hecho, hay un 22 % de población que a pesar de tener bolsa amarilla en casa, no los depositan ahí por no saber dónde deben ir. ¡Aerosoles, al amarillo! ¡Estás a un solo paso de tu regalo!"
  );

  /* FORMULARIO EMAIL */
  $(".enhorabuena").text("¡Enhorabuena! Has llegado hasta el final");
  $(".ya-solo").text(
    "Ya solo por eso, te mereces entrar en el sorteazo: fin de semana para 2 en Hotel Arima de Donosti. Déjanos tus datos para participar."
  );
  $(".nombre").text("Nombre y apellido*");
  $(".email").text("Email*");
  $(".acepto").html(
    'Acepto las <a href="/terminos-y-condiciones" target="_blank">bases legales</a>*'
  );

  $(".revisa-campos").text("Revisa los campos antes de enviar el formulario.");

  $(".gracias").text("¡Gracias por participar!");
  $(".el-sorteo").html(
    "El sorteo se realizará el 2 de septiembre.</br>Si eres la persona ganadora, nos podremos en contacto contigo.</br>¡Suerte!"
  );
  /*--------------------------------*/

  $("#eu").removeClass("bold");
  $("#eu").addClass("light");
  $("#es").removeClass("light");
  $("#es").addClass("bold");

  /* COOKIES*/
  $(".politica-de-cookies").html(
    '<h1>Política de cookies</h1></br></br><h2 class="">¿Qué es una cookie?</h2><p>Una cookie es un fichero que se descarga en su dispositivo al acceder a determinadas páginas web. Las cookies permiten a una página web, entre otras cosas, almacenar y recuperar información sobre los hábitos de navegación de un usuario o de su equipo y, dependiendo de la información que contengan y de la forma en que utilice su equipo, pueden utilizarse para reconocer al usuario.</br></br>Al navegar en www.ekoadrila.eus, estará consintiendo el uso de las cookies en las condiciones contenidas en este apartado.</p><h2 class="">Tipos de cookies</h2><p>· Cookies técnicas: permiten a la persona usuaria la navegación a través de una página web, plataforma o aplicación y la utilización de las diferentes opciones o servicios que en ella existan como, por ejemplo, controlar el tráfico y la comunicación de datos, identificar la sesión, acceder a partes de acceso restringido, recordar los elementos que integran un pedido, realizar el proceso de compra de un pedido, realizar la solicitud de inscripción o participación en un evento, utilizar elementos de seguridad durante la navegación, almacenar contenidos para la difusión de videos o sonido o compartir contenidos a través de redes sociales.</br></br>· Cookies de análisis: permiten cuantificar el número de personas usuarias y realizar la medición y análisis estadístico de la navegación que se realiza, con el objetivo de mejorar los servicios que están a su disposición. Pueden ser propias o de terceros.</br></br>· Cookies de personalización: permiten a la persona usuaria acceder al servicio con algunas características de carácter general predefinidas en función de una serie de criterios en el dispositivo del usuario como por ejemplo, el idioma, el tipo de navegador a través del cual accede al servicio, la configuración regional desde donde accede al servicio, etc.</br></br>· Cookies de publicidad y marketing: almacenan información del comportamiento de los usuarios obtenida a través de la observación continuada de sus hábitos de navegación, lo que permite a Facebook/Twitter (o donde la estemos usando) desarrollar un perfil específico a la hora de entregar los anuncios en función del mismo.</p><h2 class="">Duración de las cookies</h2><p>Cookies de sesión: recaban y almacenan datos mientras la persona usuaria accede a una página web. Se suelen emplear para almacenar información que solo interesa conservar para la prestación del servicio solicitado en una sola ocasión (ejemplo: lista de productos de un carrito de la compra).</br></br>Cookies persistentes: los datos siguen almacenados en el dispositivo y pueden ser accedidos y tratados durante un periodo definido por el responsable de la cookie, que puede ir de unos minutos a varios años.</p><h2 class="">Tipos de cookies según el gestor</h2><p>Según quién gestione el equipo o dominio desde donde se envían las cookies y trate los datos que se obtengan, podemos distinguir:</br></br>· Cookies propias: están gestionadas por Sirope Agencia Creativa, S.L.</br></br>· Cookies de terceros: están gestionadas por otra entidad que trata los datos obtenidos través de las cookies. En esta página web se utilizan cookies de Google Analytics: un servicio de analítica web desarrollada por Google, que permite la medición y análisis de la navegación en las páginas web y cookies de Facebook que almacenan información para medir y optimizar campañas publicitarias. En su navegador podrá observar cookies de ambos servicios.</p><h2 class="">¿Cómo desactivar o eliminar las cookies?</h2><p>ZPuede permitir, bloquear o eliminar las cookies instaladas en su equipo mediante la configuración de las opciones del navegador instalado en su dispositivo. Para más información, se aconseja consultar las opciones de configuración de su navegador web.</br></br>· <a href="https://support.google.com/accounts/answer/61416?co=GENIE.Platform%3DDesktop&amp;hl=es&amp;oco=0" target="_blank" title="(Abre una nueva ventana)">Desactivar Cookies en Chrome</a></br></br>· <a href="https://support.microsoft.com/es-es/topic/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" title="(Abre una nueva ventana)">Desactivar Cookies en Explorer</a></br></br>· <a href="https://support.mozilla.org/es/kb/Deshabilitar%20cookies%20de%20terceros" target="_blank" title="(Abre una nueva ventana)">Desactivar Cookies en Firefox</a></br></br· <a href="https://support.apple.com/es-es/HT201265#:~:text=Para%20activar%20o%20desactivar%20el,funcionen%20si%20bloqueas%20las%20cookies" target="_blank" title="(Abre una nueva ventana)">Desactivar Cookies en Safari</a></br></br>· <a href="https://support.microsoft.com/es-es/microsoft-edge/problema-al-bloquear-cookies-de-terceros-f91209bd-0104-2446-61be-d2e4d7da64da" target="_blank" title="(Abre una nueva ventana)">Desactivar Cookies en Edge</a></br></br>En caso de desactivación o eliminación de las cookies, algunas funcionalidades de www.ekoadrila.eus podrían no funcionar correctamente.</p>'
  );

  /* Bases*/
  $(".terminos").html(
    '<h1>TÉRMINOS Y CONDICIONES DEL SORTEO:</h1> <h1>“Test de Reciclaje de la Ekoadrila”</h1> <h2>CLÁUSULA 1.- Entidades organizadoras</h2> <p>Sirope Agencia Creativa, S.L., con CIF B95943932 y  domicilio social en la Calle Prim 58 trasera 3º- 48006 de Bilbao (en adelante el “Organizador”) organiza, en las fechas indicadas a continuación, los 4 sorteos del “Test de Reciclaje de la Ekoadrila”, (en adelante, “el Sorteo”), de acuerdo con los términos y condiciones que se recogen en estas Bases.</p><h2>CLÁUSULA 2.- Aceptación de las Bases</h2> <p>Las presentes Bases están a disposición de las personas interesadas en la página web www.ekoadrila.eus. La participación en los sorteos implica que las personas que participen:</br></br> 1. Cumplen con todos y cada uno de los requisitos establecidos en estas Bases.</br></br> 2. Aceptan todos los términos y condiciones de las Bases, incluyendo la política de privacidad y protección de datos.</br></br> 3. Aceptan el criterio de la Organización en cuanto a la resolución de cualquier cuestión derivada de los sorteos.</p><h2>CLÁUSULA 3.- Requisitos de los participantes </h2> <p>Requisitos para poder participar en los sorteos:</br></br> · Ser mayor de 18 años.</br></br> · Poseer DNI o Tarjeta de Residencia en vigor.</br></br> · Residir en Euskadi.</p><h2>CLÁUSULA 4.- Plazo para participar</h2> <p>Se trata de 4 sorteos, con 4 premios diferentes, a realizar entre las fechas del 22 de julio al 1 de septiembre de 2021, ambos incluidos.</br></br> Este plazo podrá ser modificado (ampliado o reducido), en cualquier momento anterior a su celebración, por parte de la entidad organizadora, comunicándose el nuevo plazo en la página web www.ekoadrila.eus</p><h2>CLÁUSULA 5.- Modo de presentar la solicitud de participación</h2> <p>1. Entrar en la web www.ekoadrila.eus y completar el test.</br></br> 2. Introducir, finalizado el test que se encuentra dentro de esta web, los siguientes datos: </br></br> · Nombre y apellidos.</br></br> · Dirección de correo electrónico.</br></br> No podrán participar en estos sorteos personas vinculadas, laboral o profesionalmente, con Ecoembes, Ecovidrio o Gobierno Vasco, ni aquellas personas que hayan participado, directa o indirectamente, en su organización y/o preparación, así como sus familiares en primer grado.</p><h2>CLÁUSULA 6.- Los premios</h2> <p>Se trata de 4 sorteos diferentes, cada uno de ellos con un premio diferente, a realizar cada 10-11 días desde el inicio de campaña: 22 de julio.</br></br> Los premios consisten en experiencias sostenibles a disfrutar en Euskadi. Son los siguientes:</br></br> • Fin de semana para 2 en las Cabañas en los Árboles de Zeanuri (Bizkaia).</br></br> • Ruta en barco para 2 por los Flysch de Gipuzkoa.</br></br> • Menú para 2 en el Azurmendi, el restaurante más sostenible del mundo.</br></br> • Fin de semana para 2 en Hotel Arima de Donosti, uno de los más sostenibles de Europa y parte de Small Luxury Hotels of the World.</br></br> La Organización se reserva el derecho de sustituir el premio por otro de características similares o superiores.</br></br> El premio es personal e intransferible. Por lo tanto, únicamente podrá ser canjeado por el ganador y por la persona que este designe como su acompañante. </br></br> El premio no es acumulable a otros premios, ni canjeable por ningún otro servicio, ni por su valor en metálico.</br></br></br> <b class="bols" >Los premios incluyen:</b></br></br> • Fin de semana para 2 en las Cabañas en los Árboles de Zeanuri (Bizkaia). A canjear antes del 31 de diciembre de 2021. Validez de 2 años.</br>Dos noches, viernes y sábado, en la cabaña Txantxangorria que incluye desayuno. En caso de que la persona premiada quiera reservar una cabaña de mayor valor, podrá pagar la diferencia. Y en caso de menor valor, podrá contratar servicios adicionales.</br></br> • Ruta en barco para 2 por los Flysch de Gipuzkoa.</br> Ruta por los acantilados del Flysch del Geoparque Unesco de la Costa Vasca, en barco compartido de 3,15 horas. Incluye visita guiada y seguro RC.</br></br> • Menú para 2 en el Azurmendi, el restaurante más sostenible del mundo.</br> Menú Adarrak con varios platos, panes elaborados de manera artesanal y postre. No incluye maridaje.</br></br> • Fin de semana para 2 en Hotel Arima de Donosti, uno de los más sostenibles de Europa y parte de Small Luxury Hotels of the World.</br> Incluye noche de viernes y noche de sábado en habitación doble standard en hotel de 4 estrellas.</p><h2>CLÁUSULA 7.- Sorteo</h2> <p><b>Fechas para apuntarse a cada sorteo:</b></br></br> • Sorteo fin de semana en las Cabañas en los Árboles de Zeanuri: del 22 de julio al 1 de agosto de 2021 (ambos incluidos).</br></br> • Sorteo ruta en barco por los Flysch de Gipuzkoa: del 2 al 11 de agosto de 2021 (ambos incluidos).</br></br> • Sorteo menú Azurmendi: del 12 al 22 de agosto de 2021 (ambos incluidos).</br></br> • Sorteo fin de semana Hotel Arima Donosti: del 23 de agosto al 1 de septiembre de 2021 (ambos incluidos).</br></br></br> <b>Fechas de celebración de los sorteos</b></br></br> • Sorteo fin de semana en las Cabañas en los Árboles de Zeanuri: 2 de agosto de 2021</br></br> • Sorteo ruta en barco por los Flysch de Gipuzkoa: 12 de agosto de 2021</br></br> • Sorteo menú Azurmendi: 23 de agosto de 2021</br></br> • Sorteo fin de semana Hotel Arima Donosti: 2 de septiembre de 2021</br></br> 1. Entre todos los participantes que hayan rellenado el test en la página web www.ekoadrila.eus se elaborará una lista. </br></br> 2. En esta lista, los participantes constarán ordenados, por fecha y hora de envío del formulario. </br></br> 3. A cada participante se le asignará un número ordinal, comenzando la numeración por el número uno, y siguiendo en orden ascendente, hasta el número total de participantes que hayan cumplido con lo establecido en estas Bases. </br></br> 4. Del listado de personas inscritas en el Sorteo, el Organizador extraerá una dirección de correo electrónico mediante un sistema de extracción aleatoria, Random o similar.</p><h2>CLÁUSULA 8.- Entrega del premio </h2> <p>Se notificará el resultado al ganador enviándole una notificación, a la dirección de correo electrónico que haya facilitado al inscribirse en el Sorteo, el día posterior al sorteo.</br></br> El ganador deberá aceptar el premio. Para ello, deberá enviar un mail de aceptación de premio a <a href="mailto:ekoadrila@gmail.com">ekoadrila@gmail.com</a>, donde se recogerán las condiciones de su otorgamiento y de su disfrute. </br></br> Deberá enviar el mail de aceptación del premio en el plazo máximo de diez (10) días naturales. El plazo de diez (10) días naturales comenzará a contar a partir del día siguiente a la recepción del mail en el que se le notifica que ha resultado ganador del sorteo. </br></br> En el caso de que no responda en el plazo indicado, o bien rechace el premio, perderá su condición de ganador y el premio quedará a disposición del Organizador, que acudirá a los registros de reserva (suplentes), por orden de extracción. </br></br> El premio deberá canjearse entre el 3 de septiembre de 2021 y el 31 de diciembre de 2021, siempre que esté sujeto a disponibilidad de plazas hoteleras y servicios (reservas, visitas etc...) Una vez fijada la fecha de salida ésta no se podrá modificar. Los gastos ocasionados en caso de modificación o cancelación deberán ser abonados por el ganador. </br></br> La Organización queda exenta de cualquier responsabilidad con respecto a las incidencias que ajenas a su voluntad, pudieran ocasionarse en el transcurso del viaje. </br></br> El importe del premio está sujeto a la vigente legislación fiscal aplicable. </br></br> Si por falta de disponibilidad de plazas en el alojamiento/restaurante/actividad no se puede realizar la reserva dentro de las fechas establecidas (del 3 de septiembre al 31 de diciembre de 2021), el organizador se compromete a entregar el equivalente al premio en metálico a partir de 1 de enero de 2022. La cantidad económica que equivale a cada premio está sujeta a la descripción indicada en la cláusula 7 y a tarifas de temporada media. </p><h2>CLÁUSULA 9.- Obligaciones para el ganador del premio</h2> <p>Todos los participantes en la promoción, por el simple hecho de participar, aceptan las bases de esta promoción, las normas que rigen su participación así como los términos y condiciones, y la política de privacidad y protección de datos. Las bases de la promoción estarán a disposición de cualquier interesado en la página web www.ekoadrila.eus</br></br> Mediante la aceptación del premio el ganador autoriza a Sirope Agencia Creativa a publicar y utilizar los datos facilitados (nombre y apellidos y otros datos). </p><h2>CLÁUSULA 10.- Protección de datos personales</h2> <p>Los datos recibidos a través de internet serán incluidos en una base de datos para el Sorteo que se realizará una vez concluido el plazo promocional. </br></br> Los datos que faciliten los participantes serán tratados de conformidad con lo establecido en la Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y Garantía de los Derechos Digitales, y en el Reglamento (UE) 2016/679 del Parlamento Europeo y del Consejo, de 27 de abril de 2016, relativo a la Protección de las Personas Físicas en lo que respecta al Tratamiento de Datos Personales y a la Libre Circulación de estos Datos, así como en el resto de la normativa vigente que resulte de aplicación. </br></br></br> Responsable de Tratamiento: </br></br> Sirope Agencia Creativa, S.L., con CIF B95943932 y  domicilio social en la Calle Prim 58 trasera 3º- 48006 de Bilbao. Dirección de correo electrónico: admin@sirope.es</br></br></br> Finalidad y legitimación del Tratamiento: </br></br> Tramitar la participación en el Sorteo y, en su caso, proceder a la entrega del premio con las retenciones fiscales que resulten procedentes. • Remitir información a los participantes al Organizador.</br></br></br> Datos tratados: </br></br> Datos facilitados por los participantes al realizar la inscripción en el Sorteo, así como aquéllos otros datos que, adicionalmente, se puedan llegar a solicitar para el correcto desarrollo de las finalidades mencionadas. </br></br></br> Destinatarios: </br></br> Para el desarrollo de las finalidades previstas anteriormente no se prevé que tus datos se comuniquen a terceras sociedades, salvo obligación legal. </br></br></br> Transferencias internacionales: </br></br> Los datos del ganador pueden publicarse en las distintas Plataformas Web o cualquier Red Social asociada a las campaña de la Ekoadrila.</br></br> Esta publicación puede implicar una transferencia internacional con destino a un país cuya normativa de protección de datos no presente un nivel equivalente a la europea. </br></br> El interesado, a través de su participación en el Sorteo, acepta tal transferencia, sin perjuicio de que el Organizador pueda adoptar medidas adicionales para garantizar el nivel de seguridad de los datos facilitados. </br></br></br> Plazo de conservación: </br></br> Los datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la que se recabaron y para determinar las posibles responsabilidades que se pudieran derivar de dicha finalidad y del tratamiento de los datos. </br></br></br> Derechos: </br></br> Puede ejercer los derechos de acceso, rectificación, supresión y portabilidad de sus datos, de limitación y oposición a su tratamiento, así como a no ser objeto de decisiones basadas únicamente en el tratamiento automatizado de sus datos, cuando procedan, antes Sirope Agencia Creativa, S.L., con CIF B95943932 y  domicilio social en la Calle Prim 58 trasera 3º- 48006 de Bilbao, o a través de su correo electrónico admin@sirope.es</br> Todos los participantes en la promoción autorizan al Organizador a publicar sus nombres y apellidos, a los efectos dispuestos en estas Bases, pudiéndose utilizar periodísticamente el nombre y la imagen del participante ganador, así como su dirección de correo electrónico para el envío de información promocional. </br> El organizador no podrá utilizar los datos facilitados por los participantes con una finalidad distinta a la indicada en las Bases, tratando los mismos de acuerdo con la legislación vigente en materia de protección de datos. </p><h2>CLÁUSULA 11.- Aceptación de las Bases. Responsabilidad.</h2> <p>1. El mero hecho de participar en el Sorteo implica la aceptación íntegra de las presentes Bases. </br></br> 2. El Organizador se reserva el derecho a modificar las Bases del Sorteo, parcial o totalmente, en cualquier momento. Asimismo, se reserva el derecho a anularlo o dejar el premio desierto, en caso de detectarse alguna irregularidad. Realizada cualquier modificación, ésta será debidamente puesta en conocimiento de los participantes en la página web de www.ekoadrila.eus</br></br> 3. El organizador se reserva el derecho de excluir de la participación en el Sorteo a todos aquellos participantes que estime están incumpliendo cualesquiera de los términos y condiciones de participación incluida en las presentes Bases. La exclusión de un participante, cualquiera que sea la causa, conlleva la pérdida de todos los derechos derivados de su condición de participante. </br></br> 4. Cualquier utilización abusiva o fraudulenta de estas Bases dará lugar a la consiguiente descalificación del participante en el Sorteo. </br></br> 5. El Organizador queda eximido de cualquier responsabilidad en el caso de que exista algún error en los datos facilitados por los participantes y que impidieran su identificación. </br></br> 6. La organización se reserva el derecho a modificar o cancelar las condiciones del sorteo durante el desarrollo del mismo por circunstancias ajenas al control de la organización que lo hagan aconsejables. </p><h2>CLÁUSULA 12.- Ley aplicable </h2> <p>Estas Bases están sujetas a la legislación española. </br></br> El organizador y los participantes en la promoción se someten, con renuncia expresa a cualquier otro fuero, a los juzgados y tribunales de la ciudad de Bilbao para cualquier controversia que pudiera generarse entre ambos. </p>'
  );

  /* PRENSA*/
  $(".prensa").html(
    '<h1>MATERIAL PRENSA</h1><p>Aquí puedes encontrar todos los materiales descargables.</p><div class="flex column"><a href="dossier.pdf" download>Dossier</a><a href="Material-Grafico.zip" download>Material gráfico</a><a href="Prentsa-oharra-Nota-de-prensa.docx" download>Nota de prensa</a><a href="Evento-Inauguracion.zip" download>Imágenes del evento de inauguración</a></div>'
  );
}
