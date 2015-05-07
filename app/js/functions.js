// create links for sharebuttons
function sharebtns() {
    var sharetext = "So viel erbt die Schweiz: Alle zwei Sekunden ein GA, jede Minute einen Ferrari...";
    var shareurl = "http://www.tageswoche.ch/+o1p9h";
    var sharetitle = $('title').text();

    $('a#sharetwitter').attr("href", "https://twitter.com/intent/tweet?text=" + "So viel erbt die Schweiz: Alle zwei Sekunden ein GA, jede Minute einen Ferrari... " + "http://bit.ly/1F15wJU");
    $('a#sharefb').attr("href", "https://www.facebook.com/dialog/feed?app_id=204329636307540&redirect_uri=" + shareurl + "&link=" + shareurl + "&name=" + sharetitle + "&description=" + sharetext);
    $('a#shareemail').attr("href", "mailto:?subject=Empfehlung: " + sharetitle + "&body=" + sharetext + " || " + shareurl);
}

/* trigger when page is ready */
$(document).ready(function (){


});

// Initialisierung des Carousels, ohne Zeitschaltung und Durchlauf


$("#carousel-example-generic").carousel({
    interval: false,
    wrap: false
});

// Funktion, um die Slider-Buttons zu deaktivieren

checkitem = function() {
    var $this;
    $this = $("#carousel-example-generic");
    if ($("#slide4").hasClass("active")) {
        $this.children(".left").hide();
        $this.children(".right").show();
    }
    else if ($("#slide3").hasClass("active")) {
        $this.children(".right").hide();
        $this.children(".left").show();
    }
    else {
        $this.children(".carousel-control").show();
    }
};

checkitem();



$("#carousel-example-generic").on("slid.bs.carousel", "", checkitem);
$("#einkommen").on("input propertychange", checkitem);

$( document ).ready(function() {

    sharebtns();

    /* open all links in a new window */

    $("a").attr("target", "_blank");


    // Counter-Funktion

    var intervalMilis = 100;
    var timeOnSite = 0;

    setInterval(function(){

        timeOnSite = timeOnSite + intervalMilis;

        //National Einkommen

        var nationalEinkommen = (20136*(timeOnSite/1000));
        $('#nationalEinkommen').html(nationalEinkommen).formatNumber({format:"#,###", locale:"ch"});
        var miniCooper = (0.8*(timeOnSite/1000));
        $('#miniCooper').html(miniCooper).formatNumber({format:"#,##0", locale:"ch"});

        //Arbeit

        var Arbeit = (11891*(timeOnSite/1000));
        $('#Arbeit').html(Arbeit).formatNumber({format:"#,###", locale:"ch"});
        var einbau = (1.1*(timeOnSite/1000));
        $('#einbau').html(einbau).formatNumber({format:"#,##0", locale:"ch"});


        //Erbe

        var Erbe = (2410*(timeOnSite/1000));
        $('#Erbe').html(Erbe).formatNumber({format:"#,###", locale:"ch"});
        var ga = (0.66*(timeOnSite/1000));
        $('#ga').html(ga).formatNumber({format:"#,##0", locale:"ch"});

        //Einnahmen BS

        var einnahmenBS = (80*(timeOnSite/1000));
        $('#einnahmenBS').html(einnahmenBS).formatNumber({format:"#,##0", locale:"ch"});
        var regal = (0.89*(timeOnSite/1000));
        $('#regal').html(regal).formatNumber({format:"#,##0", locale:"ch"});

        //Erbsteuer BS

        var erbsteuerBS = (1.14*(timeOnSite/1000));
        $('#erbsteuerBS').html(erbsteuerBS).formatNumber({format:"#,##0.00", locale:"ch"});
        var espresso = (0.25*(timeOnSite/1000));
        $('#espresso').html(espresso).formatNumber({format:"#,##0", locale:"ch"});
        if ($('#espresso').html() < 2) {$('#espressoText').html("Espresso") }
        else
        {
            $('#espressoText').html("Espressi")
        }

        var erbsteuerBS_neu = (1.71*(timeOnSite/1000));
        $('#erbsteuerBS_neu').html(erbsteuerBS_neu).formatNumber({format:"#,##0.00", locale:"ch"});
        var espresso_neu = (0.43*(timeOnSite/1000));
        $('#espresso_neu').html(espresso_neu).formatNumber({format:"#,##0", locale:"ch"});
        if ($('#espresso_neu').html() < 2) {$('#espressoText_neu').html("Espresso") }
        else
        {
            $('#espressoText_neu').html("Espressi")        }


        //AHV

        var AHV_alt = (1268*(timeOnSite/1000));
        $('#AHV_alt').html(AHV_alt).formatNumber({format:"#,##0", locale:"ch"});
        var iphone_alt = (1.6*(timeOnSite/1000));
        $('#iphone_alt').html(iphone_alt).formatNumber({format:"#,##0", locale:"ch"});

        var AHV_neu = (1395*(timeOnSite/1000));
        $('#AHV_neu').html(AHV_neu).formatNumber({format:"#,##0", locale:"ch"});
        var iphone_neu = (1.75*(timeOnSite/1000));
        $('#iphone_neu').html(iphone_neu).formatNumber({format:"#,##0", locale:"ch"});

        // Verdienst

        var einkommen = $('#einkommen').val();
        var einkommenZeit = (einkommen/30/24/60/60);
        var verdienst = (einkommenZeit*(timeOnSite/1000));

        $("#user_wert").html(verdienst).formatNumber({format:"#,##0.00", locale:"ch"});

    }, intervalMilis);


    // Erbschaftssteuer-Rechner

    $('form').submit(function (e) {
        e.preventDefault();
        var vermoegenKinder = 0;
        var vermoegenEltern = 0;
        var vermoegenAndere = 0;
        var vermoegenInit = 0;
        var erbeEltern = 0;
        $('#erbeKinder').html(0);
        $('#erbeEltern').html(0);
        $('#erbeAndere').html(0);
        $('#erbeAndere').html(0);
        $('#erbeInitiative').html(0);
        var vermoegen = $('#vermoegen').val();

        //Baselland


        if ($('#auswahlKanton').val() === "baselland")
        {
            $('#erbeText').hide("slow");
            $('#erbeText_SZ').hide("slow");

            if (vermoegen <= 10000) {
                $('#erbeTextInitiative').show("slow");
                $('#erbeText_BL').show("slow");

            }
            else if (vermoegen <= 2000000) {
                $('#erbeText_BL').hide("slow");
                $('#erbeTextInitiative').show("slow");
                vermoegenAndere = ((vermoegen - 10000) * 0.3);
                $('#erbeAndere').html(vermoegenAndere).formatNumber({format: "#,##0", locale: "ch"});


            }
            else {
                $('#erbeText_BL').hide("slow");
                $('#erbeTextInitiative').hide("slow");

                vermoegenAndere = ((vermoegen - 10000) * 0.3);
                $('#erbeAndere').html(vermoegenAndere).formatNumber({format: "#,##0", locale: "ch"});

                vermoegenInit = ((vermoegen - 2000000) * 0.2);
                $('#erbeInitiative').html(vermoegenInit).formatNumber({format: "#,##0", locale: "ch"});
            }

        }

        //Basel-Stadt

        else if ($('#auswahlKanton').val() === "baselstadt") {
            $('#erbeText_BL').hide("slow");

            if (vermoegen <= 2000) {

                $('#erbeText').show("slow");
                $('#erbeTextInitiative').show("slow");
                $('#erbeText_SZ').hide("slow");
            }

            else if (vermoegen <= 100000) {
                $('#erbeText').hide("slow");
                $('#erbeTextInitiative').show("slow");
                vermoegenEltern = (0.05 * vermoegen);
                $('#erbeEltern').html(vermoegenEltern).formatNumber({format: "#,##0", locale: "ch"});

                vermoegenAndere = (0.225 * vermoegen);
                $('#erbeAndere').html(vermoegenAndere).formatNumber({format: "#,##0", locale: "ch"});
            }
            else if (vermoegen <= 200000) {
                $('#erbeText').hide("slow");
                $('#erbeTextInitiative').show("slow");
                vermoegenEltern = (0.06 * vermoegen);
                $('#erbeEltern').html(vermoegenEltern).formatNumber({format: "#,##0", locale: "ch"});

                vermoegenAndere = (0.27 * vermoegen);
                $('#erbeAndere').html(vermoegenAndere).formatNumber({format: "#,##0", locale: "ch"});
            }
            else if (vermoegen <= 500000) {
                $('#erbeText').hide("slow");
                $('#erbeTextInitiative').show("slow");
                vermoegenEltern = (0.07 * vermoegen);
                $('#erbeEltern').html(vermoegenEltern).formatNumber({format: "#,##0", locale: "ch"});

                vermoegenAndere = (0.315 * vermoegen);
                $('#erbeAndere').html(vermoegenAndere).formatNumber({format: "#,##0", locale: "ch"});
            }
            else if (vermoegen <= 1000000) {
                $('#erbeText').hide("slow");
                $('#erbeTextInitiative').show("slow");
                vermoegenEltern = (0.08 * vermoegen);
                $('#erbeEltern').html(vermoegenEltern).formatNumber({format: "#,##0", locale: "ch"});

                vermoegenAndere = (0.36 * vermoegen);
                $('#erbeAndere').html(vermoegenAndere).formatNumber({format: "#,##0", locale: "ch"});
            }

            else if (vermoegen <= 2000000) {
                $('#erbeText').hide("slow");
                $('#erbeTextInitiative').show("slow");
                vermoegenEltern = (0.09 * vermoegen);
                $('#erbeEltern').html(vermoegenEltern).formatNumber({format: "#,##0", locale: "ch"});

                vermoegenAndere = (0.405 * vermoegen);
                $('#erbeAndere').html(vermoegenAndere).formatNumber({format: "#,##0", locale: "ch"});
            }
            else if (vermoegen <= 3000000) {
                $('#erbeText').hide("slow");
                $('#erbeTextInitiative').hide("slow");
                vermoegenEltern = (0.1 * vermoegen);
                $('#erbeEltern').html(vermoegenEltern).formatNumber({format: "#,##0", locale: "ch"});

                vermoegenAndere = (0.45 * vermoegen);
                $('#erbeAndere').html(vermoegenAndere).formatNumber({format: "#,##0", locale: "ch"});

                vermoegenInit = ((vermoegen - 2000000) * 0.2);
                $('#erbeInitiative').html(vermoegenInit).formatNumber({format: "#,##0", locale: "ch"});
            }
            else {
                $('#erbeText').hide("slow");
                $('#erbeTextInitiative').hide("slow");
                vermoegenEltern = (0.11 * vermoegen);
                $('#erbeEltern').html(vermoegenEltern).formatNumber({format: "#,##0", locale: "ch"});

                vermoegenAndere = (0.495 * vermoegen);
                $('#erbeAndere').html(vermoegenAndere).formatNumber({format: "#,##0", locale: "ch"});

                vermoegenInit = ((vermoegen - 2000000) * 0.2);
                $('#erbeInitiative').html(vermoegenInit).formatNumber({format: "#,##0", locale: "ch"});
            }
        }

        //Zuerich

        else if ($('#auswahlKanton').val() === "zuerich") {
            vermoegenEltern = vermoegen - 200000;
            $('#erbeText').hide("slow");
            $('#erbeText_BL').hide("slow");
            $('#erbeText_SZ').hide("slow");

            if (vermoegen <= 30000) {
                $('#erbeTextInitiative').show("slow");

                vermoegenAndere = (0.02 * vermoegen)*6;
                $('#erbeAndere').html(vermoegenAndere).formatNumber({format: "#,##0", locale: "ch"});
            }
            else if (vermoegen <= 90000) {
                $('#erbeTextInitiative').show("slow");

                vermoegenAndere = ((((vermoegen - 30000)*0.03))+600)*6;
                $('#erbeAndere').html(vermoegenAndere).formatNumber({format: "#,##0", locale: "ch"});
            }
            else if (vermoegen <= 180000) {
                $('#erbeTextInitiative').show("slow");

                vermoegenAndere = ((((vermoegen - 90000)*0.04))+2400)*6;
                $('#erbeAndere').html(vermoegenAndere).formatNumber({format: "#,##0", locale: "ch"});
            }
            else if (vermoegen <= 360000) {
                $('#erbeTextInitiative').show("slow");

                vermoegenAndere = ((((vermoegen - 180000)*0.05))+6000)*6;
                $('#erbeAndere').html(vermoegenAndere).formatNumber({format: "#,##0", locale: "ch"});
            }
            else if (vermoegen <= 840000) {
                $('#erbeTextInitiative').show("slow");

                vermoegenAndere = ((((vermoegen - 360000)*0.06))+15000)*6;
                $('#erbeAndere').html(vermoegenAndere).formatNumber({format: "#,##0", locale: "ch"});
            }
            else if (vermoegen <= 1500000) {
                $('#erbeTextInitiative').show("slow");

                vermoegenAndere = ((((vermoegen - 840000)*0.07))+43800)*6;
                $('#erbeAndere').html(vermoegenAndere).formatNumber({format: "#,##0", locale: "ch"});
            }
            else if (vermoegen <= 2000000)  {
                $('#erbeTextInitiative').show("slow");

                vermoegenAndere = ((((vermoegen - 1500000)*0.06))+90000)*6;
                $('#erbeAndere').html(vermoegenAndere).formatNumber({format: "#,##0", locale: "ch"});
            }

            else  {
                $('#erbeTextInitiative').hide("slow");

                vermoegenAndere = ((((vermoegen - 1500000)*0.06))+90000)*6;
                $('#erbeAndere').html(vermoegenAndere).formatNumber({format: "#,##0", locale: "ch"});

                vermoegenInit = ((vermoegen - 2000000) * 0.2);
                $('#erbeInitiative').html(vermoegenInit).formatNumber({format: "#,##0", locale: "ch"});
            }

            // Erbe an Eltern, Freibetrag von 200'000

            if (vermoegenEltern < 0) {

                $('#erbeEltern').html(0);
            }

            else if (vermoegenEltern <= 30000) {

                erbeEltern = (0.02 * vermoegenEltern);
                $('#erbeEltern').html(erbeEltern).formatNumber({format: "#,##0", locale: "ch"});
            }
            else if (vermoegenEltern <= 90000) {

                erbeEltern = ((((vermoegenEltern - 30000)*0.03))+600);
                $('#erbeEltern').html(erbeEltern).formatNumber({format: "#,##0", locale: "ch"});
            }
            else if (vermoegenEltern <= 180000) {

                erbeEltern = ((((vermoegenEltern - 90000)*0.04))+2400);
                $('#erbeEltern').html(erbeEltern).formatNumber({format: "#,##0", locale: "ch"});
            }
            else if (vermoegenEltern <= 360000) {

                erbeEltern = ((((vermoegenEltern - 180000)*0.05))+6000);
                $('#erbeEltern').html(erbeEltern).formatNumber({format: "#,##0", locale: "ch"});
            }
            else if (vermoegenEltern <= 840000) {
                erbeEltern = ((((vermoegenEltern - 360000)*0.06))+15000);
                $('#erbeEltern').html(erbeEltern).formatNumber({format: "#,##0", locale: "ch"});
            }
            else if (vermoegenEltern <= 1500000) {
                erbeEltern = ((((vermoegenEltern - 840000)*0.07))+43800);
                $('#erbeEltern').html(erbeEltern).formatNumber({format: "#,##0", locale: "ch"});
            }
            else {
                erbeEltern = ((((vermoegenEltern - 1500000)*0.06))+90000);
                $('#erbeEltern').html(erbeEltern).formatNumber({format: "#,##0", locale: "ch"});

            }

        }
        else if ($('#auswahlKanton').val() === "neuenburg") {
            $('#erbeText').hide("slow");
            $('#erbeText_SZ').hide("slow");

            if (vermoegen <= 10000) {
                $('#erbeTextInitiative').show("slow");

                $('#erbeText_BL').show("slow");
            }

            else if (vermoegen <= 50000) {
                $('#erbeTextInitiative').show("slow");

                vermoegenAndere = (vermoegen - 10000)*0.45;
                $('#erbeAndere').html(vermoegenAndere).formatNumber({format: "#,##0", locale: "ch"});
            }

            else if (vermoegen <= 2000000) {
                $('#erbeTextInitiative').show("slow");

                vermoegenKinder = (vermoegen - 50000) * 0.03;
                $('#erbeKinder').html(vermoegenKinder).formatNumber({format: "#,##0", locale: "ch"});

                $('#erbeEltern').html(vermoegenKinder).formatNumber({format: "#,##0", locale: "ch"});

                vermoegenAndere = (vermoegen - 10000) * 0.45;
                $('#erbeAndere').html(vermoegenAndere).formatNumber({format: "#,##0", locale: "ch"});
            }
            else {
                $('#erbeTextInitiative').hide("slow");

                vermoegenKinder = (vermoegen - 50000) * 0.03;
                $('#erbeKinder').html(vermoegenKinder).formatNumber({format: "#,##0", locale: "ch"});

                $('#erbeEltern').html(vermoegenKinder).formatNumber({format: "#,##0", locale: "ch"});

                vermoegenAndere = (vermoegen - 10000) * 0.45;
                $('#erbeAndere').html(vermoegenAndere).formatNumber({format: "#,##0", locale: "ch"});

                vermoegenInit = ((vermoegen - 2000000) * 0.2);
                $('#erbeInitiative').html(vermoegenInit).formatNumber({format: "#,##0", locale: "ch"});

            }

        }
        //Schwyz

        else if ($('#auswahlKanton').val() === "schwyz") {

           if  (vermoegen <= 2000000) {
               $('#erbeText_SZ').show("slow");
               $('#erbeTextInitiative').show("slow");
           }
            else {
               $('#erbeText_SZ').show("slow");
               $('#erbeTextInitiative').hide("slow");
               vermoegenInit = ((vermoegen - 2000000) * 0.2);
               $('#erbeInitiative').html(vermoegenInit).formatNumber({format: "#,##0", locale: "ch"});

           }
        }


    });

});

// Initialisierung des Popovers

$(function () {
    $('[data-toggle="popover"]').popover()
});

