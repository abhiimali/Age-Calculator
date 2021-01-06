let btn = document.querySelector('.btn-1');
var input = document.querySelector('.date-in');
var output = document.querySelector('.age');

btn.addEventListener("click",calculateAge);

function calculateAge(){
 
    let inputDate, inputArray , year , month , day ;

    inputDate = input.value;

    if(inputDate !== "")
    {
        inputArray = inputDate.split('-');
        [ year , month , day ] = inputArray ;

        year = Number(year);
        month = Number(month);
        day = Number(day);
        let currentDate , cDate ,cMonth, cYear ;
        // cDate Is Current Date 
         currentDate = new Date();
         cDate= currentDate.getDay();
         cMonth = currentDate.getMonth() + 1; // Current Month 
         cYear = currentDate.getFullYear();   // Current Year 

         if (day === cDate && month === cMonth) {
            let birthday = cYear - year;
            output.innerHTML = `Yeah ! Today Is your birthday your are <span class="year">${birthday}</span> Years Old. `;
          } else {
      
            //  calculate the day 
            if (day > cDate) {
              Newdate = cDate + 30;
              day = Newdate - day;
              cMonth = cMonth - 1;
            } else {
              day = cDate - day;
            }
            // calcuclate the month
            if (month > cMonth) {
              newMonth = cMonth + 12;
              month = newMonth - month;
              cYear = cYear - 1;
            } else {
              month = cMonth - month;
            }
            year = cYear - year;
      
            output.innerHTML = `Your Age : <span class="year">${year}</span> Year <span class="month">${month}</span> Month <span class="day">${day}</span> Days.`;
          }
      
        } else {
          alert("Please Input your Birthday");
        }


}