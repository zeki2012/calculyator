let netice;

kv.onclick = () => {
    netice = `${kvadrat.value} ededinin kvadrati ${kvadrat.value ** 2} olacaq`
    document.getElementById('hesab').innerHTML = netice
}