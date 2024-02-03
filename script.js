let netice;

topla.onclick = () => {
    netice = `${+rqm1.value} + ${+rqm2.value} = ${+rqm1.value + +rqm2.value}`
    document.getElementById('hesab').innerHTML = netice
}
cix.onclick = () => {
    netice = `${rqm1.value} - ${rqm2.value} = ${rqm1.value - rqm2.value}`
    document.getElementById('hesab').innerHTML = netice
}

vur.onclick = () => {
    netice = `${rqm1.value} * ${rqm2.value} = ${rqm1.value * rqm2.value}`
    document.getElementById('hesab').innerHTML = netice
}

bol.onclick = () => {
    netice = `${rqm1.value} / ${rqm2.value} = ${rqm1.value / rqm2.value}`
    document.getElementById('hesab').innerHTML = netice
}
