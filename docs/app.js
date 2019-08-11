var fullName="";
var contactInfo ="";
var addressInfo = "";
var emailAdd ="";
var pass="";
var dob = "";
var image = document.getElementById("userImg");

$.ajax({
    url: 'https://randomuser.me/api/',
    dataType: 'json',
    success: function(data) {
        data.results.forEach(person => {

            image.src = person.picture.large;
            var sub = document.getElementById("subText");
            var x = document.getElementById("test");
            sub.innerHTML = `<span class=".c-card__subtitle">Hi, my name is</span>`;
            x.innerHTML=`<span>${person.name.first}</span> <span>${person.name.last}</span>`;

            fullName=`<span>${person.name.first}</span> <span>${person.name.last}</span>`;
            document.getElementById("fullNameIcon").addEventListener("mouseover", fullNameMouseOver);
            function fullNameMouseOver() {
              sub.innerHTML = `<span class=".c-card__subtitle">Hi, my name is</span>`;
                x.innerHTML=fullName;
            }
            var bday = new Date(person.dob.date);
            let formatted_date2 = bday.getDate() + "/" + (bday.getMonth() + 1) + "/" + bday.getFullYear()
            //dob =`<span>${person.dob.date}</span>`;
            dob=`<span>${formatted_date2}</span>`
                document.getElementById("dobIcon").addEventListener("mouseover", dobInfoMouseOver);
            function dobInfoMouseOver() {
              sub.innerHTML = `<span class=".c-card__subtitle">My birthday is</span>`;
                x.innerHTML=dob;
            }
            
            emailAdd = `<span>${person.email}</span>`;
            document.getElementById("emailAddIcon").addEventListener("mouseover", emailAddIconMouseOver);
            function emailAddIconMouseOver() {
              sub.innerHTML = `<span class=".c-card__subtitle">My email is</span>`;
                x.innerHTML = emailAdd;
            }

            contactInfo = `<span>${person.phone}</span>`;
            document.getElementById("contactNumIcon").addEventListener("mouseover", contactInfoMouseOver);
            function contactInfoMouseOver() {
              sub.innerHTML = `<span class=".c-card__subtitle">My number is</span>`;
                x.innerHTML=contactInfo;
            }

           // addressInfo = `<span>${person.location.postcode + person.location.street}</span>`;
           addressInfo = `<span>${person.location.street}</span>`;
            document.getElementById("addressInfoIcon").addEventListener("mouseover", addressInfoMouseOver);
            function addressInfoMouseOver() {
              sub.innerHTML = `<span class=".c-card__subtitle">My address is</span>`;
                x.innerHTML=addressInfo;
            }

            pass =`<span>${person.login.password}</span>`;
            document.getElementById("passIcon").addEventListener("mouseover", passInfoMouseOver);
            function passInfoMouseOver() {
              sub.innerHTML = `<span class=".c-card__subtitle">My password is</span>`;
                x.innerHTML=pass;
            }
        });
      //console.log(fullName,contactInfo,emailAdd,addressInfo,dob,pass);
    }
  });


