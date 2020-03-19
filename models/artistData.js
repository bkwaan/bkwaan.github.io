let db = require ('../util/database');


async function validate(user, pass) {
    let sql = "Select * from user where username = " + "'" + user + "' && pw = '" + pass + "'";
    let validated = await db.execute(sql); 
    if(validated[0].length > 0) {
        return true;
    }
    return false;
}

async function addArtist(name,about,img) {
    let sql = "Insert into artists (name,about,img) VALUES (?,?,?)"
    await db.execute(sql,[name,about,img]);
}

async function loadArtist(){
    let sql = 'Select * FROM artists';
   return await db.execute(sql);
}

async function deleteArtist(id) {
    let sql = "Delete From artists where id = '" + id + "'"
    console.log(sql);
    await db.execute(sql);
}

async function search(input) {
    let sql = "Select * FROM artists where name like '" + input + "%'"
    if(sql[0].length < 0) {
        return loadArtist();
    }
    return await db.execute(sql);
}

module.exports = {
    validate : validate,
    addArtist : addArtist,
    loadArtist : loadArtist,
    deleteArtist : deleteArtist,
    search : search
};
