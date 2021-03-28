let query = ""
let req = {}
let results = []
let pw = "JCH21395"
let netID = "zhuhaicjr1"

sbmtBtn.onclick=function(){
    name = nameIpt.value
    address = addIpt.value
    city = cityIpt.value
    state = stateIpt.value
    zip = zipIpt.value
    query = "INSERT INTO customer (name,street,city,state,zipcode) VALUES ('" + name + "', '" + address + "', '" + city + "', '" + state + "', '" + zip + "')"
    // look at how the query is rendered
    alert(query)
    
    // replace my netID with yours (2 places)
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) {
        if (req.responseText == 500)    // for our server - this means the insert succeeded
            lbla3.value = "You have successfully added the pet!"
        else
            lbla3.value = "There was a problem with adding the pet to the database."
    } else 
        // transit error
        lbla3.value = "Error: " + req.status
}