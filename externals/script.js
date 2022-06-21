alert("Try to input 'ettisafisagoodboy' as a string into the password input field, Any username will be fine, also try a wrong password");

function rup(){

    // Required Password
    const cp = "ettisafisagoodboy";
    
    // User Informations
    
    let un = document.getElementById('name').value;
    let up = document.getElementById('pass').value;

    if (up==cp) {
        window.location.href = "https://ettisafrup.netlify.app/";
        return false;
        
    } else {
        alert(un + 'Aint Im a good boy? :|');
    }
    
}
