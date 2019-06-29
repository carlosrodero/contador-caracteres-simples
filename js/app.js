
$('textarea').on('keyup paste', function () {
  setTimeout(function () {
    const valueTextarea = $('textarea').val().length;
    const words = $('textarea').val().replace(/\n/g, ' ').split(' ').length;
    $('.caracteres').text(valueTextarea);
    $('.palavras').text(words);
  }, 200);
});