create database if not exists preSeleccionCursos;
use preSeleccionCursos;

create table estudiantes(
	id int auto_increment not null,
    name varchar(50) not null,
    lastname varchar(50) not null,
    age int not null,
    cedula int not null,
    password varchar(100) not null,
    unidadCredito int not null,
    semestres_id int not null,
    materias_id int not null,
    primary key(id)
);

create table materias(
	id int auto_increment not null,
    codigoMateria varchar(6) not null,
    nameMateria varchar(100) not null,
    creditoMateria int not null,
    primary key(id)
);

create table semestre(
	id int auto_increment not null,
    numSemestre varchar(7) not null,
    year int not null,
    periodo int not null,
    primary key(id)
);