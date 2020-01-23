$(function () {
    $("[data-toggle='tooltip']").tooltip();
    $("[data-toggle='popover']").popover();
    $('.carousel').carousel({
        interval: 2000
    });
    $('#contacto').on('show.bs.modal', function (e) {
        console.log('El model se está mostrando');

        $('#contactoBtn').removeClass('btn');
        $('#contactoBtn').addClass('btn-primary');
        $('#contactoBtn').prop('disabled', true);
    });
    $('#contacto').on('shown.bs.modal', function (e) {
        console.log('El model se mostró');
    });
    $('#contacto').on('hide.bs.modal', function (e) {
        console.log('El model se oculta');
        $('#contactoBtn').removeClass('btn');
        $('#contactoBtn').addClass('btn-primary');
        $('#contactoBtn').prop('disabled', true);
    });
    $('#contacto').on('shown.bs.modal', function (e) {
        console.log('El model se mostró');
    });
    $('#contacto').on('hide.bs.modal', function (e) {
        console.log('El model se oculta');
    });
    $('#contacto').on('hidden.bs.modal', function (e) {
        console.log('El model se ocultó');
        $('#contactoBtn').prop('disabled', false);
    });
    $('#contacto').on('hidden.bs.modal', function (e) {
        console.log('El model se ocultó');
        $('#contactoBtn').prop('disabled', false);
    });
});
