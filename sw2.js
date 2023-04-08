class member {
    constructor(name, date) {
    this.name = name;
    this.date = date;
    }
}

class Movie {
    contructor(id, name) {
        this.id= id;
        this.name = name;
        this.cast = [];
    }

    addcast(cast) {
        this.cast.push(cast);
    }


    deleteCast(cast) {
        let index = this.cast.indexOf(cast);
        this.cast.splice(index, 1);
    }
}

let movies = [];
let movieId = 0;

onClick('new-movie', () => {
    movies.push(new Movie(movieId++, getValue('new-movie-name')));
    drawDOM();

});



function onClick(id, action) {
    let element = document.getElementById(id);
     element.addEventListener('click', action);
    return element;
}

function getValue(id) {
    return document.getElementById(id).value;
}


function drawDOM() {
    let movieDiv = document.getElementById('movies');
    clearElement(moviediv);
    for (movie of movies) {
        let table = createMovieTable(movie);
        let title = document.createElement('h2');
        title.innerHTML = movie.name;
        title.appendChild(createDeleteMovieButton(movie));
        movieDiv.appendChild(title);
        movieDiv.appendChild(table);
        for (cast of movie.cast) {
            createCastRow(movie, table, cast);
        }
        
    }
}

function createCastRow(movie, table, cast) {
    let row = table.instertRow(2);
    row.insertCell(0).innerHTML = cast.name;
    row.insertCell(1).innerHTML = cast.position;
    let actions = row.insertCell(2);
    actions.appendChild(createDeleteRowButton(movie, cast));
}


function createDeleteRowButtton(movie, cast) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Delete';
    btn.onclick = () => {
        let index = movie.cast.indexOf(cast);
        movie.cast.splice(index, 1);
        drawDOM();

    };
    return btn;
}

function createDeleteMovieButton(movie) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Delete Movie';
    btn.onclick = () => {
        let index = movies.indexOf(movie);
        movies.splice(index, 1);
        drawDOM();

    };
    return btn;

}

function createNewCastButton(movie) {
    let btn = document.createElement('button');
    btn.className = 'btn btn-primary';
    btn.innerHTML = 'Create';
    btn.onclick = () => {
      movie.cast. push(new Cast(getValue('name-input-${movie.id}'), getValue('date-input-${movie.id}')));
      drawDOM();
    };
    return btn;
}



function createMovieTable(movie) {
    let table = document.createElement('table');
    table.setAttribute('class', 'table table-dark table-striped');
    let row = table.instertRow(0);
    let nameColumn = document.createElement('th');
    let positionColumn = document.createElement('th');
    nameColumn.innerHTML = 'Name';
    dateColumn.innerHTML = 'Date';
    row.appendChild(nameColumn);
    row.appendChild(dateColumn);
    let formRow = table.insertRow(1);
    let nameTh = document.createElement('th');
    let dateTh = document.createElement('th');
    let createTh = document.createElement('th');
    let nameInput= document.createElement('input');
    nameInput.setAttribute('id', 'name-input-${movie.id}');
    nameInput.setAttribute('type', 'text');
    nameInput.setAttribute('class', 'form-control');
    let dateInput= document.createElement('input');
    dateInput.setAttribute('id', 'date-input-${movie.id}');
    dateInput.setAttribute('type', 'text');
    dateInput.setAttribute('class', 'form-control');
    let newCastButton = createNewCastButton(movie);
    nameTh.appendChild(nameInput);
    dateTh.appendChild(dateInput);
    createTh.appendChild(newCastButton);
    formRow.appendChild(nameTh);
    formRow.appendChild(dateTh);
    formRow.appendChild(createTh);
    return table;

}


function clearElemen(element) {
    while(element.firstChild) {
        element.removeChild(element.firstChild);
    }
}




