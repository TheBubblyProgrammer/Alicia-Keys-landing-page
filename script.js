function subscribe() {

            let name = prompt(" Enter Your name please?");
            let latest = prompt("Would you like to be updated about the latest celebrity news?");
            let h1 = document.querySelector("h1");

            if (latest === "yes") {
                let email = prompt("Please enter your email addrress");
                h1.innerHTML = "Thank you " + name + ",  we will be in touch!๐พ๐";


            } else if (latest !== "yes") {
                h1.innerHTML = "Some Other Time then " + name + " ๐๐พ";
            }
        }
        let button = document.querySelector("button");
        button.addEventListener("click", subscribe);


        function follow() {
            let giveAway = prompt("Would you like a chance to win a free gift?")
            let instagram = prompt("Do you have Instagram?");
            let h1 = document.querySelector("h1");

            if (giveAway === "yes" && instagram === "yes") {
                let firstName = prompt("Enter your first name please ");
                h1.innerHTML = " Thank You " + firstName + ", Follow @Alicia Keys and like the give-away post for a chance to win โฃ ";

            }
            if (instagram !== "yes" && giveAway === "no") {
                h1.innerHTML = "unfortunately you need to have instagram to participate๐"
            }


        }


        let btn = document.querySelector("#btn");
        btn.addEventListener("click", follow);

        function aboutUs() {
            let message = prompt("Would you like to know more about Us?")
            h1 = document.querySelector("h1")
            if (message === "yes") {
                h1.innerHTML = "We are a small digital megazine company that focuses on fashion, beauty, entertainment, and culture.  "
            } else {
                h1.innerHTML = " bye bye,thank you for visiting โค๐ "
            }
        }
        let aboutBtn = document.querySelector("#about");
        aboutBtn.addEventListener("click", aboutUs);
