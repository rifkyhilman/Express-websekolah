function getData(request, response) {
    response.send('Cari jodoh dengan http ' + request.method)
}
function setData(request, response) {
    response.send('Cari jodoh dengan http ' + request.method)
}
function updateData(request, response) {
    response.send('Cari jodoh dengan http ' + request.method)
}
function deleteData(request, response) {
    response.send('Cari jodoh dengan http ' + request.method)
}
module.exports = {
    getData,
    setData,
    updateData,
    deleteData,
}