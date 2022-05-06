/**
 * Countdown timer
 * Hiervoor moeten de volgende stappen worden uitgevoerd:
 *  Stap 1: Declareer een geldige einddatum.
 *  Stap 2: Bereken de overgebleven tijd.
 *  Stap 3: Converteer de tijd naar een bruikbaar formaat.
 *  Stap 4: Declareer de timergegevens als een bruikbaar object.
 *  Stap 5: Geef de timer weer op de pagina en stop de timer als het nul bereikt. 
 */


function getTimeRemaining(endtime) {
  // Stap 2: Bereken de overgebleven tijd
  const total = Date.parse(endtime) - Date.parse(new Date());

  // Stap 3: Converteer de tijd naar een bruikbaar formaat
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds
  };
}

function initializeClock(endtime) {
    // Stap 4: Declareer en initialiseer variabelen voor de div elementen days, hours, minutes en seconds
    const daysDiv = document.querySelector(".counter__box--days .digits");
    const hoursDiv = document.querySelector(".counter__box--hours .digits");
    const minutesDiv = document.querySelector(".counter__box--minutes .digits");
    const secondsDiv = document.querySelector(".counter__box--seconds .digits");

    function updateClock() {
      // Bereken de overgebleven tijd
      const t = getTimeRemaining(endtime);

      // Stap 5: Geef de overgebleven tijd weer in HTML elementen
      daysDiv.textContent = ("0" + t.days).slice(-2);
      hoursDiv.textContent = ("0" + t.hours).slice(-2);
      minutesDiv.textContent = ("0" + t.minutes).slice(-2);
      secondsDiv.textContent = ("0" + t.seconds).slice(-2);

      // Als de overgebleven tijd nul wordt, stop dan de timer
      if (t.total <= 0) {
        clearInterval(timeInterval);
      }
    }

    updateClock(); // Run deze functie eerst één keer om vertraging te voorkomen
    const timeInterval = setInterval(updateClock, 1000);  
}


// Stap 1: Set a valid end date
const deadline = 'May 10 2022';
// Stap 2 t/m 5 
initializeClock(deadline);