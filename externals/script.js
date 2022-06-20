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
        alert('Age amar proshongsa kor :|');
    }
    
}