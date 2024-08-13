//call our abi script 

var abi =  /**. **/
var ZombieFactoryContract = web3.eth.contract(abi);
var contractAddress = /** our etherium contact addess */
var ZombieFactory = ZombieFactoryContract.at(contractAddress)

//our zombie factor now has access to all our functions and events


//Next , we create an event listener to the app whenever a new zombie is created

$('#ourButton').click(function(e){
    var name = $('#someInput').val()

    //now , we call our contarct function to create zombie
    ZombieFactory.createRandomZombie(name)

})

//listen to the Zombie Event and update the UI 

var event = ZombieFactory.NewZombie(function(error, result){
    if (error) return
    genearateZombie(result.ZombieID, result.name, result.dna)
})


function generateZombie(id, name,dna){
       let dnaStr =  String(dna)
        while (dnaStr.length <16)
            dnaStr = "0" + dnaStr

let zombieDetails ={
     headChoice: dnaStr.substring(0,2) % 7 + 1,
     eyeChoice: dnaStr.substring(2,4) % 11 + 1,
     shirtChoice: dnaStr.substring(4,6) % 6 + 1,

     skinColorColorChoice: parseInt(dnaStr.substring(6,8) / 100 * 360),
     eyeColorChoice: parseInt(dnaStr.substring(8,10) / 100 * 360),
     clothesColorChoice: parseInt(dnaStr.substring(12,14) / 100 * 360),
     zombieName: name,
     zombieDescription: "A level 1 Crypto Zombie",
    }
    return zombieDetails
}
