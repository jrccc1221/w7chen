let query = ""
let req = {}
let results = []
let pw = "JCH21395"
let netID = "zhuhaicjr1"

btnCustomerSelect4.onclick = function() {
  ChangeForm(customerSelect)
}
btnCustomerDelete4.onclick = function() {
  ChangeForm(customerDelete)
}
btnCustomerAdd4.onclick = function() {
  ChangeForm(customerAdd)
}

customerDelete.onshow = function() {
  query = "UPDATE * FROM customer"
  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
  if (req.status == 200) {
    results = JSON.parse(req.responseText)
    console.log(`The results are \n ${results}`)
    if (results.length == 0)
      lblMessage2.value = "There are no customers in the database."
    else {
      let message = ""
      for (i = 0; i < results.length; i++)
        message = message + results[i][1] + "\n"
      txtaCustomerDelete.value = message
    }
  } else
    lblMessage2.value = "Error code: " + req.status
}
let newName = inptUpdatedName4.value
let oldName = txtaCustomers4.value

let found = false
for (i = 0; i <= allCustomers.length - 1; i++) {
  if (oldName == allCustomers[i]) {
    found = true
    break
  }
}
if (found == false)
  NSB.MsgBox("That customer name is not in the database.")
else if (found == true) {
  query = "UPDATE customer SET name =" + '"' + newName + '"' + " WHERE name = " + '"' + oldName + '"'

  req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
  if (req.status == 200) {
    if (req.responseText == 500) {
      NSB.MsgBox(`You have successfully changed the customer name!`)
      inptUpdate.value = ""
      txtUpdate.value = ""
    } else
      NSB.MsgBox(`There was a problem changing the customer name.`)
  } else

    NSB.MsgBox(`Error: ${req.status}`);
}