function $(id) {
  return document.getElementById(id);
}

(function () {

  var Lyric = function(lyric, song) {
    this.lyric = lyric;
    this.song = song;
  };

  var lyrics = [];


  lyrics.push(
    new Lyric('Enough of this terror' + '<br>' + 'We deserve to know light' + '<br>' + 'And grow evermore lighter and lighter', 'Sawdust & Diamonds'),
    new Lyric('The phantom of love' + '<br>' + 'Moves among us at will' + '<br>' + 'Each phantom-limb lost' + '<br>' + 'Has got an angel', 'Esme'),
    new Lyric('I regret how I said to you' + '<br>' + '<q>Honey, just open your heart</q>' + '<br>' + 'When I’ve got trouble even opening a honey jar', 'Good Intentions Paving Company'),
    new Lyric('Held her there' + '<br>' + 'Kicking and mewling' + '<br>' + 'Upending, unspooling, unsung and blue', 'Baby Birch'),
    new Lyric('I saw a star fall into the sky' + '<br>' +  'Like a chunk of thrown coal' + '<br>' + 'As if God himself spat like a cornered rat', 'Have One on Me'),
    new Lyric('Helpless as a child' + '<br>' + 'When you held me in your arms' + '<br>' + 'And I knew that no other could ever love me', 'Have One on Me'),
    new Lyric('I fell' + '<br>' + 'I tried to do well, but I won’t be' + '<br>' + 'Will you tell the one that I love to remember and hold me?', 'Sapokanikan'),
    new Lyric('My love,' + '<br>' +  'I swear by the air I breathe' + '<br>' + 'Sooner or later you’ll bare your teeth', 'Monkey & Bear'),
    new Lyric('Ambition came and reared its head' + '<br>' + 'And went – far from you', 'Inflammatory Writ'),
    new Lyric('But though I tried so hard,' + '<br>' + 'My little darling' + '<br>' + 'I couldn’t keep the night from coming in', 'Cosmia'),
    new Lyric('I am watching you' + '<br>' + 'And you are starry, starry, starry', 'Clam, Crab, Cockle, Cowrie'),
    new Lyric('Blossoms all have fallen, and the pollen ruins the plow' + '<br>' + 'Peonies nod in the breeze', 'Emily'),
    new Lyric('And in an infinite regress' + '<br>' + 'Tell me why is the pain of birth' + '<br>' + 'Lighter borne than the pain of death??', 'The Diver’s Wife'),
    new Lyric('Are you mine?' + '<br>' + 'My heart?' + '<br>' + 'Mine anymore?', 'Only Skin'),
    new Lyric('Told her <q>Wherever you go' + '<br>' + 'Little runaway bunny' + '<br>' + 'I will find you</q>' + '<br>' + 'And then she ran' + '<br>' + 'As they’re liable to do', 'Baby Birch'),
    new Lyric('I don’t belong to anyone' + '<br>' + 'My heart is heavy as an oil drum' + '<br>' + 'And I don’t want to be alone', 'In California'),
    new Lyric('Give love a little shove' + '<br>' + 'And it becomes terror', 'Soft as Chalk'),
    new Lyric('I am not like you' + '<br>' + 'I ain’t from this place' + '<br>' + 'And I do reserve the right' + '<br>' + 'To repeat all my same mistakes', 'Ribbon Bows'),
    new Lyric('Scrape your knee' + '<br>' + 'It is only skin' + '<br>' + 'Makes the sound of violins', 'Only Skin'),
    new Lyric('Awful atoll' + '<br>' + 'O, incalculable indiscreetness and sorrow!' + '<br>' + 'Bawl bellow:' + '<br>' + 'Sibyl sea-cow, all done up in a bow', 'Only Skin'),
    new Lyric('This is an old song' + '<br>' + 'These are old blues' + '<br>' + 'And this is not my tune' + '<br>' + 'But it’s mine to use', 'Sadie'),
    new Lyric('And all that I knew' + '<br>' + 'Is moving away from me' + '<br>' + 'And all that I know' + '<br>' + 'Is blowing like tumbleweed', 'Sadie'),
    new Lyric('Go to sleep' + '<br>' + 'You stunning sky' + '<br>' + 'Gently creep' + '<br>' + 'Cunning by', 'Cassiopeia'),
    new Lyric('When I could speak, it was too late' + '<br>' + 'Didn’t you hear me calling?' + '<br>' + 'Didn’t you see my heart leap?', 'Kingfisher'),
    new Lyric('And I have torn my soul apart' + '<br>' + 'From pulling artlessly with fool commands', 'In California'),
    new Lyric('I was all horns and thorns' + '<br>' + 'Sprung out fully formed' + '<br>' + 'Knock-kneed and upright', 'Sawdust & Diamonds'), 
    new Lyric('And everything with wings is restless, aimless, drunk and dour' + '<br>' + 'Butterflies and birds collide at hot, ungodly hours', 'Emily'),
    new Lyric('There is a blacksmith' + '<br>' + 'And there is a shepherd' + '<br>' + 'And there is a butcher boy' + '<br>' + 'And there is a barber who’s cutting and cutting away at my only joy', 'Baby Birch'),
    new Lyric('And when we were found' + '<br>' + 'I know we both grieved' + '<br>' + 'My heart made the sound' + '<br>' + 'Of snow falling from eaves', 'You and Me, Bess'),
    new Lyric('I scrabbled at your chest like a mute' + '<br>' + 'With my fists of ham' + '<br>' + 'Trying to tell you that I am' + '<br>' + 'Telling I can' + '<br>' + 'I can love you again', 'Jackrabbits'),
    new Lyric('We both want the very same thing' + '<br>' + 'We are praying I am the one to save you', 'Go Long'),
    new Lyric('You have been wronged' + '<br>' + 'Tore up since birth' + '<br>' + 'You have done harm' + '<br>' + 'Others have done worse', 'Go Long'), 
    new Lyric('So it would seem to be true' + '<br>' + 'Cruel birth debases, we forget' + '<br>' + 'When cruel death debases' + '<br>' + 'We believe it erases all the rest that precedes', 'Time, As a Symptom'),
    new Lyric('But stand brave, life-liver' + '<br>' + 'Bleeding out your days' + '<br>' + 'In the river of time' + '<br>' + 'Stand brave;' + '<br>' + 'Time moves both ways', 'Time, As a Symptom'),
    new Lyric('If I have the space of half a day' + '<br>' + 'I’m ashamed of half the things I say' + '<br>' + 'I’m ashamed to have turned out this way' + '<br' + 'And I desire to make amends', 'The Things I Say'),
    new Lyric('There’s an old trick played' + '<br>' + 'When the light and the wine conspire' + '<br>' + 'To make me think I’m fine' + '<br>' + 'I’m not, but I have got half a mind' + '<br>' + 'To maybe get there, yet', 'The Things I Say'),
    new Lyric('And you cannot learn that you burn when you touch the heat' + '<br>' + 'So we touch the heat', 'Goose Eggs')
    
    );
    var numsToShuffle = [];
    // creates array of nums of lyrics.length to be shuffled
    var pushNums = function () {
      for (var i = 0; i < lyrics.length; i++) {
        numsToShuffle.push(i);
      }
    };

    pushNums();

    // shuffle function from StackOverflow
    function shuffle(array) {
        var counter = array.length, temp, index;
        while (counter > 0) {
            index = Math.floor(Math.random() * counter);
            counter--;
            temp = array[counter];
            array[counter] = array[index];
            array[index] = temp;
        }

        return array;
    }

    shuffle(numsToShuffle);



  function genLyric() {
    var i = numsToShuffle.pop();
    var printL =  lyrics[i].lyric;
    var printS = lyrics[i].song;
    $('lyric').innerHTML = printL;
    $('song').innerHTML = printS;
    if (numsToShuffle.length < 1) {
        pushNums();
        shuffle(numsToShuffle);
      }
  }

  genLyric();


  function tweetLyric() {
    var lyric = $('lyric').innerHTML;
    //removes <br> tags and separates lyrics with a forward slash
    lyric = lyric.split('<br>').join(' / ');
    //removes quotation marks and the space they took up
    lyric = lyric.replace(/(<([^>]+)>)/g, '');

    var text = lyric + ' —Joanna Newsom' + ' http://meowwwls.githib.io/jnewlyrics';
    if (text.length > 140) {
        (function(){
          var alertMsg ='<div class="message-wrap"><div class=\"message\">';
          alertMsg += '<p>' + 'Well mercy me, I\'ll be goddamned. This lyric is too long to be tweeted. Curse you, character limit!' + '</p>';
          alertMsg += '<p><img src=\"img/tweet-error.gif\"></p>'; 
          alertMsg += '<div class=\"close\"><a id=\"close\" href=\"#\" aria-label=\"Close Alert Modal\">' + 'close' + '</a></div></div></div>';

          var alertModal = document.createElement('div');
          alertModal.setAttribute('id', 'alert-modal');
          alertModal.setAttribute('class', 'alert');
          alertModal.innerHTML = alertMsg;
          document.body.appendChild(alertModal);

          // if escape key is pressed or modal is clicked, dismiss modal
          function dismiss( e ) {
                var key = e.which || e.keyCode || 0;
                if (key === 27 || !e.keyCode) {
                  document.body.removeChild(alertModal);
              }
            }

          document.addEventListener('keydown', dismiss, false);
          $('alert-modal').addEventListener('click', dismiss, false);
            })();

      } else { 
          var tweet = 'http://twitter.com/home?status=' + encodeURIComponent(text);
          window.open(tweet,'_blank');
        }
  }


  // click, key + touch events

  // generate new lyric by hitting SPACEBAR or >
  document.body.addEventListener('keyup', function(e) {
    var key = e.which || e.keyCode || 0;
    if(key === 32 || key === 39) {
      genLyric();
    }
  }, false);
  $('gen-lyric').addEventListener('click', genLyric, false);
  $('tweet').addEventListener('click', tweetLyric, false);
})();