function ExecuteScript(strId)
{
  switch (strId)
  {
      case "605mmfkxZPC":
        Script1();
        break;
  }
}

function Script1()
{
  const url="https://script.google.com/macros/s/AKfycbwGeNf2dIgEw6NBXbJpqwqeUo394J9hrfhjBaOYPESnSnIfDGfCEVm3oLSyg3GY2AGULg/exec"

var player=GetPlayer()

fetch(url,{
	method:"POST",
	mode: 'no-cors',
	cache:'no-cache',
	headers: {'Content-Type': 'application/json'},
	redirect:'follow',
	body: JSON.stringify({q1attempts:player.GetVar("q1attempts"),q1answeredcorrect:player.GetVar("q1answeredcorrect")})
	}
	)
}

