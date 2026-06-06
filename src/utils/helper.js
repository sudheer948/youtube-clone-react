const nameList = [
  "Rahul_07",
  "MusicLover99",
  "ArjunYT",
  "Priya_Official",
  "KeralaBeats",
  "MelodyFan",
  "Ananya24",
  "RohanMusic",
  "AishaLive",
  "Vikram_09",
  "SongAddict",
  "NehaTunes",
  "AaravVibes",
  "MeeraMusic",
  "IndianMelodies",
  "NightListener",
  "Vishnu_2026",
  "KavyaVibes",
  "SoulfulSongs",
  "AdityaLive",
];

export function generateRandomName() {
  return nameList[Math.floor(Math.random() * nameList.length)];
}

const liveMessages = [
  "What a beautiful voice ❤️",
  "This song never gets old 🎶",
  "Listening on repeat 🔥",
  "Goosebumps from the first line 😍",
  "Anyone else singing along? 🎤",
  "This melody is pure magic ✨",
  "Perfect song for a rainy day 🌧️",
  "The vocals are incredible ❤️",
  "Can't stop listening to this 🎵",
  "One of my favorite songs ever 🙌",
  "The music hits differently at night 🌙",
  "Feeling emotional already 🥺",
  "This song is a masterpiece 🔥",
  "Much love from Kerala ❤️",
  "Who's listening with headphones? 🎧",
  "The lyrics are so beautiful ✨",
  "Instant mood booster 😍",
  "Every time I hear this song, it's special ❤️",
  "Pure talent 🎶",
  "This deserves millions of views 🔥",
  "Anyone else getting chills? 🥹",
  "Such a soothing voice 🎤",
  "Listening while studying 📚",
  "This song is on my playlist ❤️",
  "Can't skip this one ever 🎵",
  "The composition is amazing 🔥",
  "Best way to start the day ☀️",
  "This performance is magical ✨",
  "Sending love from India 🇮🇳",
  "Absolutely beautiful ❤️",
];

export function getRandomMessage() {
  const randomIndex = Math.floor(Math.random() * liveMessages.length);
  return liveMessages[randomIndex];
}

export const findPrime = (num) => {
  let i,
    primes = [2, 3],
    n = 5;
  const isPrime = (n) => {
    let i = 1,
      p = primes[i],
      limit = Math.ceil(Math.sqrt(n));
    while (p <= limit) {
      if (n % p === 0) {
        return false;
      }
      i += 1;
      p = primes[i];
    }
    return true;
  };
  for (i = 2; i <= num; i += 1) {
    while (!isPrime(n)) {
      n += 2;
    }
    primes.push(n);
    n += 2;
  }
  return primes[num - 1];
};
