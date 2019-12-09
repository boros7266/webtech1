$(document).ready(function () {
    $.getJSON('manufacturerNames', function (data) {
        var select = $('<select name="manufacturer" required="required"></select>');
        $.each(data, function (key, value) {
            var option = $('<option value="' + value+ '">' + value + '</option>');
            select.append(option);
        });
        $(".select").append(select);
    });
});

$(function (){
    $('form').on('submit', function (submit) {
        submit.preventDefault();

        $.ajax({
            type:'post',
            url: 'addCar',
            data: $('form').serialize(),                                   //mit küldjön
            success: function () {                                         //ha sikerül a küldés megkapja az adatot
                confirm("Új autót adtál hozzá!")                           //mi történjen(ha megkaptuk az adatot)
            },
            error: function () {                                           //ha nem sikerül a küldés
                window.alert("Oops!");                                     //mi történjen(ha nem kaptuk meg az adatot)
            }
        })
    })
});