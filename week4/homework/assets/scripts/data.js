let moviesData = [{
        "title": "The Shawshank Redemption",
        "year": "1994",
        "genre": "Crime",
        "image": "https://ia.media-imdb.com/images/M/MV5BMDFkYTc0MGEtZmNhMC00ZDIzLWFmNTEtODM1ZmRlYWMwMWFmXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        "id": 0
    },
    {
        "title": "The Godfather",
        "year": "1972",
        "genre": "Crime",
        "image": "https://www.arthipo.com/image/cache/catalog/poster/movie/1-758/pfilm26-26-film-godfather-2-1000x1000.jpg",
        "id": 1
    },
    {
        "title": "The Dark Knight",
        "year": "2008",
        "genre": "Action",
        "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        "id": 3
    },
    {
        "title": "12 Angry Men",
        "year": "1957",
        "genre": "Crime",
        "image": "https://ia.media-imdb.com/images/M/MV5BMWU4N2FjNzYtNTVkNC00NzQ0LTg0MjAtYTJlMjFhNGUxZDFmXkEyXkFqcGdeQXVyNjc1NTYyMjg@._V1_SX300.jpg",
        "id": 4
    },
    {
        "title": "Schindler's List",
        "year": "1993",
        "genre": "Biography",
        "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BNDE4OTMxMTctNmRhYy00NWE2LTg3YzItYTk3M2UwOTU5Njg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "id": 5
    },
    {
        "title": "Pulp Fiction",
        "year": "1994",
        "genre": "Crime",
        "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg",
        "id": 7
    },
    {
        "title": "The Good, the Bad and the Ugly",
        "year": "1966",
        "genre": "Western",
        "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BOTQ5NDI3MTI4MF5BMl5BanBnXkFtZTgwNDQ4ODE5MDE@._V1_SX300.jpg",
        "id": 8
    },
    {
        "title": "Fight Club",
        "year": "1999",
        "genre": "Drama",
        "image": "https://upload.wikimedia.org/wikipedia/tr/thumb/a/ab/D%C3%B6v%C3%BC%C5%9F_Kul%C3%BCb%C3%BC_film_afi%C5%9Fi.jpg/440px-D%C3%B6v%C3%BC%C5%9F_Kul%C3%BCb%C3%BC_film_afi%C5%9Fi.jpg",
        "id": 9
    },
    {
        "title": "The Lord of the Rings: The Fellowship of the Ring",
        "year": "2001",
        "genre": "Adventure",
        "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg",
        "id": 10
    },
    {
        "title": "Forrest Gump",
        "year": "1994",
        "genre": "Drama",
        "image": "https://ia.media-imdb.com/images/M/MV5BNWIwODRlZTUtY2U3ZS00Yzg1LWJhNzYtMmZiYmEyNmU1NjMzXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "id": 11
    },
    {
        "title": "Star Wars: Episode V - The Empire Strikes Back",
        "year": "1980",
        "genre": "Action",
        "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BYmU1NDRjNDgtMzhiMi00NjZmLTg5NGItZDNiZjU5NTU4OTE0XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "id": 12
    },
    {
        "title": "Inception",
        "year": "2010",
        "genre": "Action",
        "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        "id": 13
    },
    {
        "title": "The Lord of the Rings: The Two Towers",
        "year": "2002",
        "genre": "Adventure",
        "image": "http://tr.web.img4.acsta.net/c_310_420/pictures/bzp/01/39186.jpg",
        "id": 14
    },
    {
        "title": "One Flew Over the Cuckoo's Nest",
        "year": "1975",
        "genre": "Drama",
        "image": "https://ia.media-imdb.com/images/M/MV5BZjA0OWVhOTAtYWQxNi00YzNhLWI4ZjYtNjFjZTEyYjJlNDVlL2ltYWdlL2ltYWdlXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
        "id": 15
    },
    {
        "title": "Goodfellas",
        "year": "1990",
        "genre": "Biography",
        "image": "http://2.bp.blogspot.com/-i0WfRcCtUgI/UHmDmq1EaJI/AAAAAAAAAfE/Dz3wKSwy8eg/s1600/MV5BMjU3MTQ4OTA0MV5BMl5BanBnXkFtZTYwNjAyMDg4._V1._SY317_CR7,0,214,317_.jpg",
        "id": 16
    },
    {
        "title": "The Matrix",
        "year": "1999",
        "genre": "Action",
        "image": "https://images-na.ssl-images-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        "id": 17
    },
    {
        "title": "Seven Samurai",
        "year": "1954",
        "genre": "Adventure",
        "image": "https://i.pinimg.com/originals/47/bc/0a/47bc0a644da77b8d5d6cc8f8b022c634.jpg",
        "id": 18
    },
    {
        "title": "Star Wars: Episode IV - A New Hope",
        "year": "1977",
        "genre": "Action",
        "image": "https://ia.media-imdb.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg",
        "id": 19
    }
]
export default moviesData;