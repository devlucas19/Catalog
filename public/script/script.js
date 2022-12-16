
document.addEventListener('DOMContentLoaded', getAllContent())

function getAllContent() {
    fetch('http://localhost:8080/api/all').then(res => {
        return res.json()
    }).then(data => {
        const finalData = JSON.parse(data)
        console.log(finalData)

        const $container = $(".container")[0]

        finalData.forEach(element => {
            $container.insertAdjacentHTML("beforeend", `<div class="item">
                                                        <a href="${element.url}" target="_blank">
                                                            <img src="${element.cover}" height="200px" width="160px">
                                                            <div class="desc">
                                                                <h2>${element.name}</h2>
                                                                <h3>${element.gender}</h3>
                                                                <h4>${element.year}</h4>
                                                            </div>
                                                        </a>
                                                        </div>`
                                    )
        })
    })
}

function getTvShows() {
    fetch('http://localhost:8080/api/tvshows').then(res => {
        return res.json()
    }).then(data => {
        const finalData = JSON.parse(data)
        console.log(finalData)

        const $container = $(".container")[0];
        $container.innerHTML = ""

        finalData.forEach(element => {
            $container.insertAdjacentHTML("beforeend", `<div class="item">
                                                        <a href="${element.url}" target="_blank">
                                                            <img src="${element.cover}" height="200px" width="160px">
                                                            <div class="desc">
                                                                <h2>${element.name}</h2>
                                                                <h3> ${element.gender}</h3>
                                                                <h4>${element.year}</h4>
                                                            </div>
                                                        </a>
                                                        </div>`
                                    )
        })
    })
}

function getAnimes() {
    fetch('http://localhost:8080/api/animes').then(res => {
        return res.json()
    }).then(data => {
        const finalData = JSON.parse(data)
        console.log(finalData)

        const $container = $(".container")[0];
        $container.innerHTML = ""

        finalData.forEach(element => {
            $container.insertAdjacentHTML("beforeend", `<div class="item">
                                                        <a href="${element.url}" target="_blank">
                                                            <img src="${element.cover}" height="200px" width="160px">
                                                            <div class="desc">
                                                                <h2>${element.name}</h2>
                                                                <h3> ${element.gender}</h3>
                                                                <h4>${element.year}</h4>
                                                            </div>
                                                        </a>
                                                        </div>`
                                    )
        })
    })
}

function getAction() {
    fetch('http://localhost:8080/api/action').then(res => {
        return res.json()
    }).then(data => {
        const finalData = JSON.parse(data)
        console.log(finalData)

        const $container = $(".container")[0];
        $container.innerHTML = ""

        finalData.forEach(element => {
            $container.insertAdjacentHTML("beforeend", `<div class="item">
                                                        <a href="${element.url}" target="_blank">
                                                            <img src="${element.cover}" height="200px" width="160px">
                                                            <div class="desc">
                                                                <h2>${element.name}</h2>
                                                                <h3> ${element.gender}</h3>
                                                                <h4>${element.year}</h4>
                                                            </div>
                                                        </a>
                                                        </div>`
                                    )
        })
    })
}

function getShounen() {
    fetch('http://localhost:8080/api/shounen').then(res => {
        return res.json()
    }).then(data => {
        const finalData = JSON.parse(data)
        console.log(finalData)

        const $container = $(".container")[0];
        $container.innerHTML = ""

        finalData.forEach(element => {
            $container.insertAdjacentHTML("beforeend", `<div class="item">
                                                        <a href="${element.url}" target="_blank">
                                                            <img src="${element.cover}" height="200px" width="160px">
                                                            <div class="desc">
                                                                <h2>${element.name}</h2>
                                                                <h3> ${element.gender}</h3>
                                                                <h4>${element.year}</h4>
                                                            </div>
                                                        </a>
                                                        </div>`
                                    )
        })
    })
}

function getSciFi() {
    fetch('http://localhost:8080/api/scifi').then(res => {
        return res.json()
    }).then(data => {
        const finalData = JSON.parse(data)
        console.log(finalData)

        const $container = $(".container")[0];
        $container.innerHTML = ""

        finalData.forEach(element => {
            $container.insertAdjacentHTML("beforeend", `<div class="item">
                                                        <a href="${element.url}" target="_blank">
                                                            <img src="${element.cover}" height="200px" width="160px">
                                                            <div class="desc">
                                                                <h2>${element.name}</h2>
                                                                <h3> ${element.gender}</h3>
                                                                <h4>${element.year}</h4>
                                                            </div>
                                                        </a>
                                                        </div>`
                                    )
        })
    })
}

function getIsekai() {
    fetch('http://localhost:8080/api/isekai').then(res => {
        return res.json()
    }).then(data => {
        const finalData = JSON.parse(data)
        console.log(finalData)

        const $container = $(".container")[0];
        $container.innerHTML = ""

        finalData.forEach(element => {
            $container.insertAdjacentHTML("beforeend", `<div class="item">
                                                        <a href="${element.url}" target="_blank">
                                                            <img src="${element.cover}" height="200px" width="160px">
                                                            <div class="desc">
                                                                <h2>${element.name}</h2>
                                                                <h3> ${element.gender}</h3>
                                                                <h4>${element.year}</h4>
                                                            </div>
                                                        </a>
                                                        </div>`
                                    )
        })
    })
}

function getRomance() {
    fetch('http://localhost:8080/api/romance').then(res => {
        return res.json()
    }).then(data => {
        const finalData = JSON.parse(data)
        console.log(finalData)

        const $container = $(".container")[0];
        $container.innerHTML = ""

        finalData.forEach(element => {
            $container.insertAdjacentHTML("beforeend", `<div class="item">
                                                        <a href="${element.url}" target="_blank">
                                                            <img src="${element.cover}" height="200px" width="160px">
                                                            <div class="desc">
                                                                <h2>${element.name}</h2>
                                                                <h3>${element.gender}</h3>
                                                                <h4>${element.year}</h4>
                                                            </div>
                                                        </a>
                                                        </div>`
                                    )
        })
    })
}

let buttonTvShows = $('#tv').click(getTvShows)
let buttonAnimes = $('#animes').click(getAnimes)

let buttonAll = $('#all').click(() => {
    const $container = document.querySelector(".container");
    $container.innerHTML = ""

    getAllContent()
})
let buttonAction = $('#action').click(getAction)
let buttonShounen = $('#shounen').click(getShounen)
let buttonScifi = $('#scifi').click(getSciFi)
let buttonIsekai = $('#isekai').click(getIsekai)
let buttonRomance = $('#romance').click(getRomance)

console.log(document.getElementsByTagName('body')[0])

