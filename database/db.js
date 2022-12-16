module.exports = {
    items: [{
            name: "Breaking Bad",
            gender: "Action",
            type:"TVShow",
            cover: "../assets/images/breakingbad.jpg",
            url: "https://www.netflix.com/title/70143836",
            year: 2008
        },
        {
            name: "Prison Break",
            gender: "Action",
            type:"TVShow",
            cover: "../assets/images/prisonbreak.jpg",
            url: "https://globoplay.globo.com/prison-break-em-busca-da-verdade/t/MPnYV7Kbsn/",
            year: 2005
        },
        {
            name: "Bleach",
            gender: "Shounen",
            type:"Anime",
            cover: "../assets/images/bleach.jpg",
            url: "https://www.crunchyroll.com/pt-br/series/G63VGG2NY/bleach",
            year: 2004
        },
        {
            name: "One Piece",
            gender: "Shounen",
            type:"Anime",
            cover: "../assets/images/onepiece.jpg",
            url: "https://www.crunchyroll.com/pt-br/series/GRMG8ZQZR/one-piece",
            year: 1999
        },
        {
            name: "Black Clover",
            gender: "Shounen",
            type:"Anime",
            cover: "../assets/images/blackclover.jpeg",
            url: "https://www.crunchyroll.com/pt-br/series/GRE50KV36/black-clover",
            year: 2015
        },
        {
            name: "Dark",
            gender: "Sci-Fi",
            type:"TVShow",
            cover: "../assets/images/dark.jpg",
            url: "https://www.netflix.com/title/80100172",
            year: 2017
        },
        {
            name: "Horimiya",
            gender: "Romance",
            type:"Anime",
            cover: "../assets/images/horimiya.jpg",
            url: "https://www.crunchyroll.com/pt-br/series/G9VHN9P43/horimiya",
            year: 2021
        },
        {
            name: "Kaguya-Sama",
            gender: "Romance",
            type:"Anime",
            cover: "../assets/images/kaguyasama.webp",
            url: "https://www.crunchyroll.com/pt-br/series/GRJ0J828Y/kaguya-sama-love-is-war",
            year: 2019
        },
        {
            name: "Stranger Things",
            gender: "Sci-Fi",
            type: "TVShow",
            cover: "../assets/images/strangerthings.jpg",
            url: "https://www.netflix.com/title/80057281",
            year: 2016
        },
        {
            name: "Re-Zero",
            gender: "Isekai",
            type:"Anime",
            cover: "../assets/images/rezero.webp",
            url: "https://www.crunchyroll.com/pt-br/series/GRGG9798R/rezero--starting-life-in-another-world-",
            year: 2016
        },
        {
            name: "Rising of The Shield Hero",
            gender: "Isekai",
            type:"Anime",
            cover: "../assets/images/shieldhero.jpg",
            url: "https://www.crunchyroll.com/pt-br/series/G6W4QKX0R/the-rising-of-the-shield-hero",
            year: 2019
        },],
        
    getAll() {
        return this.items;
    },

    getTvShows() {
        let tvShows = this.items.filter(item => { return item.type == "TVShow"})
        console.log(tvShows);
        return tvShows;
    },

    getAnimes() {
        let Animes = this.items.filter(item => { return item.type == "Anime"})
        console.log(Animes);
        return Animes;
    },


    getAction() {
        let actionCategory = this.items.filter(item => { return item.gender == "Action"})
        console.log(actionCategory);
        return actionCategory;
    },

    getShounen() {
        let shounenCategory = this.items.filter(item => { return item.gender == "Shounen"})
        console.log(shounenCategory);
        return shounenCategory;
    },
    getSciFi() {
        let scifiCategory = this.items.filter(item => { return item.gender == "Sci-Fi"})
        console.log(scifiCategory);
        return scifiCategory;
    },
    getIsekai() {
        let isekaiCategory = this.items.filter(item => { return item.gender == "Isekai"})
        console.log(isekaiCategory);
        return isekaiCategory;
    },
    getRomance() {
        let romanceCategory = this.items.filter(item => { return item.gender == "Romance"})
        console.log(romanceCategory);
        return romanceCategory;
    }
}