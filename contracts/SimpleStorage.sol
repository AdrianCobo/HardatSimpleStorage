//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7; //indicamos la version de solidity ^indica que acepta versiones superiores

//podrias poner por ejemplo >= 0.8.7 < 0.9.0 por ejemplo

//EVM, Ethereum Virtual Machine
//Avalanche, Fantom, Polygon
contract SimpleStorage {
    //en solidity se inicializa a cero directamente si no le pones nada y se declara como private por defecto
    //pero si debajo, hubiese otra variable sin inicialicar, se inicializaria a 1, y la siguiente a 2...
    //las variables publicas tienen un metodo getter por defecto para obtenere los valores
    uint256 favoriteNumber;

    mapping(string => uint256) public nameToFavoriteNumber;

    struct People {
        uint256 favoriteNumber;
        string name;
    }

    People[] public people; //si no indicas el tamaño, es un array dinamico, y si se lo pones, es estatico con ese tamaño

    function store(uint256 _favouriteNumber) public virtual {
        favoriteNumber = _favouriteNumber;
    }

    //view, pure(no cuestan gas excepto si son llamadas desde otro metodo que si que cueste)
    function retrive() public view returns (uint256) {
        return favoriteNumber;
    }

    //calldata,memory, storage
    //calldata y memory solo van a existir mientras la funcion se esta ejecutando.
    //calldata indica que no puede ser modificado y memory si
    //storage son variables permanentes que se pueden modificar
    //solo hay que indicarlo en arrays,structs or mappings
    function addPerson(string memory _name, uint256 _favouriteNumber) public {
        people.push(People(_favouriteNumber, _name));
        nameToFavoriteNumber[_name] = _favouriteNumber;
    }
    //para desplegar un contrato en la red, cambias el environ en deploy & run, y en injected web 3 y conectas la cartera
    // y se desplegar a en la red que estes en ese momento usando
}
