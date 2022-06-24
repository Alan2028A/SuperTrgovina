var varijabla = document.getElementById("nekiId");


const datum = new Date();
const vrijeme = datum.getTime();
var trenutnoVrijeme = 0;

var mojInterval = window.setInterval(updateVrijeme, 1000);


function updateVrijeme()
{
	if(trenutnoVrijeme >= 4)
    {
        clearInterval(mojInterval);

    }


	const trenutniDatum = new Date();
	trenutnoVrijeme = (trenutniDatum.getTime() - vrijeme) / 1000;
	varijabla.innerHTML = Math.round(trenutnoVrijeme);
}
