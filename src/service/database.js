const campanhaFranquias = () => {
  let request = new XMLHttpRequest();
  request.open("GET", "http://127.0.0.1:5000/franquias");
  request.send();
  request.onload = function () {
    if (request.status === 200) {
      return request.responseText;
    } else {
      console.log("error");
    }
  };
};

export { campanhaFranquias };
