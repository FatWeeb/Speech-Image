x = 0;
y = 0;
draw_soccer = "";
soccer = "";
screen_width = 0;
screen_height = 0;
to_number = 0;

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}

recognition.onresult = function(event)
{
    console.log(event);
    var content = event.results[0][0].transcript;
    to_number = Number(content);
    if(Number.isInteger(to_number))
    {
        document.getElementById("status").innerHTML = "Started drawing Soccer";
        draw_soccer = "set";
    }
    else
    {
        document.getElementById("status").innerHTML = "The speech not recognised a number";
    }
}

function preload()
{
soccer = loadImage("ball.png");
}

function setup()
{
    screen_width = window.innerWidth;
    screen_height = window.innerHeight;
    canvas = createCanvas(screen_width, screen_height - 150);
    canvas.position(0,150);
}

function draw()
{
    if(draw_soccer == "set")
    {
        for(var i = 1; i<=to_number; i++)
        {
            x=Math.floor(Math.random()*700)
            y=Math.floor(Math.random()*400)
            document.getElementById("status").innerHTML = to_number+"Soccer's Drawn";
            draw_soccer = "";
        }
    }
}