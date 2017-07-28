window.onload = function() {

    var navToggle = document.getElementById('nav-toggle');

    var navItems = document.getElementById('nav-items')

    //write the psuedo code

    navToggle.addEventListener('click', function() {

        navItems.classList.toggle('mobile-nav-hidden');
    });
    //the button will be clicked 

    //when the button is clicked it will show the navabr
}

<script language="javascript">
function dis_able()
{
	if(document.myform.D1.value != 'delivery')
		document.myform.pickup.disabled=1;
	
	else
		document.myform.pickup.disabled=0;
}

