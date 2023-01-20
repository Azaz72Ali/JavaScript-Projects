let myLeads = [];
const inputEl = document.getElementById("input-el");
const saveEl = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteEl = document.getElementById("delete-btn");
const tabBtn = document.getElementById("tab-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
  //for internal so that after refreshing it wont be erased
  myLeads = leadsFromLocalStorage;
  render(myLeads);
}

// let leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"))

// GET TAB LINK
tabBtn.addEventListener("click", function () {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

function render(leads) {
  let listItem = "";
  for (let i = 0; i < leads.length; i++) {
    listItem += `<li> <a href="www.google.com" target="_blank"> ${leads[i]} </a> </li>`;
  }
  ulEl.innerHTML = listItem;
}
// innerHTML vs APPEND
/*
1.create element:
const li= document.createElement("li");
2. set text content
li.textContent= myleads[i];
3.append to ul
ulEl.append(li);
*/
deleteEl.addEventListener("click", function () {
  localStorage.clear();
  myLeads = [];
  render(myLeads);
  // render(myLeads);
});

saveEl.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  // console.log(myLeads);
  inputEl.value = ""; // clear out
  localStorage.setItem("myLeads", JSON.stringify(myLeads)); // locally set value so that after refresh nothing happen

  // console.log(leadsFromLocalStorage);
  // console.log(localStorage.getItem('name'));
  render(myLeads);
});

/************************inner HTML alternative************************************** */

// const li = document.createElement("li")
// li.textContent = myLeads[i]
// ulEl.append(li)

/********************LOCAL STORAGE***************************** */
/*
localStorage.setItem("a", "Hi I am azaz");
this will store the "a" as key and "I am azaz" is value and if we erase this, still we can get the value by
localStorage.getItem("a")
and to clear the data in localStorage use  localStorage.clear()


P.S:- KEY AND VALUE MUST BE STRING
 */

// JSON.PARSE= STRING TO ARRAY
// JSON.STRINGIFY= ARRAY TO STRING
