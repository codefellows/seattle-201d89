
let hoursOpen = ['6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm'];

Seattle = {
  name: 'seattle',
  min: 23,
  max: 65,
  avg: 6.3,
  avgCookies: function () { //average cookies per customer per hour
    return (Math.floor(Math.random() * (this.max - this.min + 1)) + this.min) * this.avg;
  },
  total: 0,
  calculateHourlyValues: function () {
    let hourlySales = [];
    for (let i = 0; i < hoursOpen.length; i++) {
      let sales = this.avgCookies();
      hourlySales.push(sales);
      this.total += sales;
    }
    return hourlySales;
  },
  addListToHtml: function () {
    let salesValues = this.calculateHourlyValues();
    // read Elements
    let listContainer = document.getElementById(this.name); // <div id="seattle"></div

    // create Elements
    let newList = document.createElement('ul');
    listContainer.appendChild(newList);
    for (let sale of salesValues) {
      let listItem = document.createElement('li');
      // update Elements
      listItem.textContent = sale;
      newList.appendChild(listItem);
    }

    // add one more list item
    let listItem = document.createElement('li');
    listItem.textContent = this.total;
    newList.appendChild(listItem);
  },
  addHtml: function () { //adds html to the table
    let html = `
    <h1>Seattle</h1>
    <table>
      <tr>
        <th>Time</th>
        <th>Cookies</th>
        </tr>
        <tr>
        <td>6:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>7:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>8:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>9:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>10:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>11:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>12:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>1:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>2:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>3:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>4:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>5:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>6:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>7:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>        
        </table>
        <h2>Total: ${this.total()} cookies</h2>
        `;
    document.getElementById("seattle").innerHTML = html;
  },
};

Tokyo = {
  min: 3,
  max: 24,
  avg: 1.2,
  avgCookies: function () { //average cookies per customer per hour
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  },
  total: function () { //total cookies sold
    let total = 0;
    for (let i = 0; i < 14; i++) {
      total += this.avgCookies();
    }
    return total;
  },
  addHtml: function () { //adds html to the table
    let html = `
    <h1>Tokyo</h1>
    <table>
      <tr>
        <th>Time</th>
        <th>Cookies</th>
        </tr>
        <tr>
        <td>6:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>7:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>8:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>9:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>10:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>11:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>12:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>1:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>2:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>3:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>4:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>5:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>6:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>7:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>        
        </table>
        <h2>Total: ${this.total()} cookies</h2>
        `;
    document.getElementById("tokyo").innerHTML = html;
  },
};

Dubai = {
  min: 11,
  max: 38,
  avg: 3.7,
  avgCookies: function () {  //average cookies per customer per hour
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  },
  total: function () { //total cookies sold
    let total = 0;
    for (let i = 0; i < 14; i++) {
      total += this.avgCookies();
    }
    return total;
  },
  addHtml: function () {    //adds html to the table
    let html = `
    <h1>Dubai</h1>
    <table>
      <tr>
        <th>Time</th>
        <th>Cookies</th>
        </tr>
        <tr>
        <td>6:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>7:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>8:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>9:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>10:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>11:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>12:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>1:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>2:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>3:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>4:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>5:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>6:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>7:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>        
        </table>
        <h2>Total: ${this.total()} cookies</h2>
        `;
    document.getElementById("dubai").innerHTML = html;
  },
};

Paris = {
  min: 20,
  max: 38,
  avg: 2.3,
  avgCookies: function () { //average cookies per customer per hour
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  },
  total: function () {  //total cookies sold
    let total = 0;
    for (let i = 0; i < 14; i++) {
      total += this.avgCookies();
    }
    return total;
  },
  addHtml: function () {    //adds html to the table
    let html = `
    <h1>Paris</h1>
    <table>
      <tr>
        <th>Time</th>
        <th>Cookies</th>
        </tr>
        <tr>
        <td>6:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>7:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>8:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>9:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>10:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>11:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>12:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>1:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>2:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>3:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>4:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>5:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>6:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>7:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>        
        </table>
        <h2>Total: ${this.total()} cookies</h2>
        `;
    document.getElementById("paris").innerHTML = html;
  },
};

Lima = {
  min: 2,
  max: 16,
  avg: 4.6,
  avgCookies: function () { //average cookies per customer per hour
    return Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
  },
  total: function () { //total cookies sold
    let total = 0;
    for (let i = 0; i < 14; i++) {
      total += this.avgCookies();
    }
    return total;
  },
  addHtml: function () { //adds html to the table
    let html = `
    <h1>Lima</h1>
    <table>
      <tr>
        <th>Time</th>
        <th>Cookies</th>
        </tr>
        <tr>
        <td>6:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>7:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>8:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>9:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>10:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>11:00am</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>12:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>1:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>2:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>3:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>4:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>5:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>6:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>
        <tr>
        <td>7:00pm</td>
        <td>${this.avgCookies()} cookies</td>
        </tr>        
        </table>
        <h2>Total: ${this.total()} cookies</h2>
        `;
    document.getElementById("lima").innerHTML = html;
  },
};


function addTable(){
    //Variables
    let h1 = document.createElement("h1");
    let table = document.createElement("table");
    let total = document.createElement("h2");
    let header = document.createElement("th");
    let header1 = document.createElement("th");
    let header2 = document.createElement("th");

    //Content
    header1.innerHTML = "Time " ; 
    header2.innerHTML = "Cookies " ;
    header.appendChild(header1); //append header1 to header
    header.appendChild(header2); //append header2 to header
    table.appendChild(header); //append header to table
    h1.innerHTML = "Seattle"; //set h1 content
    total.innerHTML = "Total: " + Seattle.total() + " cookies"; //total cookies

    for(let i = 6; i <= 12; i++){ //loop for 6am to 12pm
        let row = document.createElement("tr"); //create row
        let time = document.createElement("td"); //create td for time
        time.innerHTML = i + "am: " + " " + Seattle.avgCookies() + " cookies"; //set time content
        row.appendChild(time);
        table.appendChild(row);
    }
    for(let i = 1; i <= 7; i++){ //loop for 1pm to 7pm
        let row = document.createElement("tr");
        let time = document.createElement("td");
        time.innerHTML = i + "pm: " + " " + Seattle.avgCookies() + " cookies";
        row.appendChild(time);
        table.appendChild(row);
    }

    //Append
    document.getElementById("seattle").appendChild(h1); //append h1 to seattle
    document.getElementById("seattle").appendChild(table); //append table to seattle
    document.getElementById("seattle").appendChild(total); //append total to seattle
}

// addTable();
Seattle.addListToHtml();
console.log(Seattle.total);
// Tokyo.addHtml();
// Dubai.addHtml();
// Paris.addHtml();
// Lima.addHtml();


