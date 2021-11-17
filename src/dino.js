export default class DinoDNA {
  static getDinosaur() {
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://dinoipsum.com/api/?format=json&words=10&paragraphs=1`;
        request.onload = function() {
          if (this.status === 200) {
            resolve(request.response);
          } else {
            reject(request.response);
          }
        }
        request.open("GET", url, true);
        request.send();
    });
  }
}