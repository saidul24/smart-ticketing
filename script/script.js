

// let seatsLeft = parseInt(seatsLeftElement)



let seatLefNumber = getElementTextNumberById('seats-left');
let seatSelectedNumber = getElementTextNumberById('selected-seats')
let count = 0;
const allSeat = document.getElementsByClassName('seat');
for (const seat of allSeat) {

    seat.addEventListener('click', function () {

        if (count === 4) {
            alert('You can select only 4 seat')
        }
        else {
            count++

            // -----
            seatLefNumber--
            setElementTextById('seats-left', seatLefNumber);

            // +++++
            seatSelectedNumber++
            setElementTextById('selected-seats', seatSelectedNumber)


            // Total Price
            const perSeat = 550;
            const total = seatSelectedNumber * perSeat;
            const currentTotalPrice = document.getElementById('total')
            currentTotalPrice.innerText = total;

            // Total Price
            // const perSeat = 550;
            // const total = seatSelectedNumber * perSeat;
            const currentTotalGrandPrice = document.getElementById('grand-total')
            currentTotalGrandPrice.innerText = total;


            // color set
            setBgColorById(seat.innerText)

            // append
            // Assuming you have a table element with id="myTable"
            const tableParent = document.getElementById('table-parent');

            // Create a new table row
            var newRow = document.createElement("tr");

            // Create new table data cell(s)
            var cell1 = document.createElement("td");
            var cell2 = document.createElement("td");
            var cell3 = document.createElement("td");

            // Add content to the cells if needed
            cell1.textContent = seat.innerText;
            cell2.textContent = "Economy";
            cell3.textContent = 550;

            // Append the cells to the row
            newRow.appendChild(cell1);
            newRow.appendChild(cell2);
            newRow.appendChild(cell3);

            // Append the row to the table
            tableParent.appendChild(newRow);


            // remove disable apply button
            if (count === 4) {
                applyBtn.removeAttribute("disabled");
            }

            else {
                applyBtn.setAttribute("disabled", true);
            }
        }
    })
}

// Apply Coupon
const couponInput = document.getElementById('coupon-input')
const applyBtn = document.getElementById('apply');

applyBtn.addEventListener("click", function () {
    const inputValue = couponInput.value;
    if (inputValue === "NEW15") {
        // discount 15%
        const total = document.getElementById('total');
        

    }
    else if (inputValue === "Couple 20") {
        console.log(inputValue);
    }
    else {
        alert('Please input Valid Coupon Code')
    }
});

applyBtn.addEventListener('click', function () {

})
// apply coupon end


function next() {

    if ((count > 0) && (document.getElementById('number-input').value.length > 0)) {
        const header = document.getElementById('header');
        const main = document.getElementById('main');
        const model = document.getElementById('model');

        header.classList.add('hidden')
        main.classList.add('hidden');
        model.classList.remove('hidden')
    }
}



// continueBtn
function continueBtn() {
    const header = document.getElementById('header');
    const main = document.getElementById('main');
    const model = document.getElementById('model');

    header.classList.remove('hidden')
    main.classList.remove('hidden');
    model.classList.add('hidden')
}




