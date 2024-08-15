function getIP() {
  return new Promise((resolve, reject) => {
    const resolver = new doh.DohResolver("https://1.1.1.1/dns-query");
    resolver
      .query(location.hostname, "A")
      .then((response) => {
        response.answers.forEach((ans) => {
          resolve(ans.data)
        });
        if (response.answers.length == 0) {
          resolve(location.hostname)
        }
      })
      .catch((err) => reject(err));
  });
}

getIP().then((res) => {
  document.getElementById("ip").innerText = res;
});
