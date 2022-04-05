let say = '';

let feet;

function scuberGreetingForFeet(feet){
  if (feet <= 400) {
    say = 'This one is on me!';
  } else if (feet >= 400 && feet <= 2000) {
    say = 'That will be twenty bucks.';
  } else if (feet >= 2000 && feet <= 2500) {
    say = 'I will gladly take your thirty bucks.';
  } else if (feet >= 2500) {
    say = 'No can do.';
  }

  return say;
}

let city = '';

function ternaryCheckCity(city){
  city === 'NYC' ? say = 'Ok, sounds good.' : say = 'No go.';
  return say;
};

let tip;

let phrase;

function switchOnCharmFromTip(tip){
  switch(tip) {
    case 'generous':
      phrase = 'Thank you so much.';
      break;
    case 'not as generous':
      phrase = 'Thank you.';
      break;
    default:
      phrase = 'Bye.';
      break;

  };
  return(phrase);
}