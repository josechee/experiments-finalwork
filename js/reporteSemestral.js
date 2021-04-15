$(document).ready(function() {

    $('#checkboxConflcito').on('change', function() {
        if ($(this).is(':checked')) {
            $('#descripcionConflcito').show();
        } else {
            $('#descripcionConflcito').hide();
        }
    });
    $('#checkboxConflcito').trigger('change');

    $('#checkboxAyuda').on('change', function() {
        if ($(this).is(':checked')) {
            $('#descripcionAyuda').show();
        } else {
            $('#descripcionAyuda').hide();
        }
    });
    $('#checkboxAyuda').trigger('change');
});