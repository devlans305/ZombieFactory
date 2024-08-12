pragma solidity >=0.5.0 <0.6.0;

contract ZombieFactory {

    event NewZombie(uint zombieId, string name, uint dna);

    // each zombie has a particular dna, we restrict this to 32 hexadecimals 

    uint dnaDigits = 16;
    uint dnaModulus = 10 ** dnaDigits;

   // we define the data types that are used by the zombies 

    struct Zombie {
        string name;
        uint dna;
    }

  //we initializa an empty array list, upon which we contously add new zombies or remove from the list

    Zombie[] public zombies;
    
//this function is private to the class and is used to create new zombies with the defined params and add them to the array

    function _createZombie(string memory _name, uint _dna) private {
        uint id = zombies.push(Zombie(_name, _dna)) - 1;
        emit NewZombie(id, _name, _dna);
    }

    function _generateRandomDna(string memory _str) private view returns (uint) {
        uint rand = uint(keccak256(abi.encodePacked(_str)));
        return rand % dnaModulus;
    }

// this function creates a random zombie ,ny taking its name and randdom DNA

    function createRandomZombie(string memory _name) public {
        uint randDna = _generateRandomDna(_name);
        _createZombie(_name, randDna);
    }

}
