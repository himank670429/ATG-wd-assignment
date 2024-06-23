document.addEventListener("DOMContentLoaded", function () {
	const singinmodal = document.querySelector("dialog[data-label='signin']");
	const singupmodal = document.querySelector("dialog[data-label='signup'");


    document.querySelectorAll('button#group-button')
    .forEach(element => {
        element.addEventListener('click', function(e){
            console.log(e.target.innerText.toLowerCase())
            if (e.target.innerText.toLowerCase() === "join group"){
                e.target.innerHtml = "Leave Group"
            }
            if (e.target.innerText.toLowerCase() === "leave group"){
                e.target.innerText = "Join Group"
            }
        })
    })

    document.querySelectorAll('#close-modal').forEach(element => {
        element.addEventListener('click', function(){
            closeSignInModal()
            closeSignUpModal()  
        });
    })
    document.querySelector('#open-modal').addEventListener('click', openSignInModal)
    document.querySelector('.phone-group-btn').addEventListener('click', openSignInModal)


    function openSignInModal(){
        singinmodal.showModal()
    }
    function closeSignInModal(){
        singinmodal.close();
    }   
    function closeSignUpModal(){
        singupmodal.close();
    }
    function openSignUpModal(){
        singupmodal.showModal();
    }

	document.querySelectorAll("#sign-in-btn").forEach(element => 
        element.addEventListener("click", switchToSignIn)
    )
	document.querySelectorAll("#sign-up-btn").forEach(element => 
        element.addEventListener("click", switchToSignUp)
    )



	function switchToSignIn() {
        closeSignUpModal()
        openSignInModal()
		
	}
	function switchToSignUp() {
        closeSignInModal()
        openSignUpModal()
	}
});
