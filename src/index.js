import qwest from 'qwest'

qwest.get('google.com')
  .then(function(xhr, response) {
    alert(response);
  });