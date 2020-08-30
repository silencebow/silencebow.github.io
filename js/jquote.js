// regex replace \t with \n on export for formatting

var quotes = [
  {
    quote: "I would not chug this Mountain Dew Throwback for a million dollars.",
    link: "https://youtu.be/Lm_XqaFh1uY?t=859"
  },
  {
    quote: "I drank like three or four little chugs of this and my balls hurt. Right now. It has to be related.",
    link: "https://youtu.be/Lm_XqaFh1uY?t=951"
  },
  {
    quote: "I value non-testicular pain.",
    link: "https://youtu.be/Lm_XqaFh1uY?t=968"
  },
  {
    quote: "Hey Mr. President, uhh, can you like chug this Mountain Dew and shit your pants?",
    link: "https://youtu.be/Lm_XqaFh1uY?t=1008"
  },
  {
    quote: "When Abraham Lincoln fuckin' created the universe this is not what he thought was gonna happen.",
    link: "https://youtu.be/Lm_XqaFh1uY?t=1123"
  },
  {
    quote: "No, I'm not gonna turn this into like a fetish stream. I'm not doing that.",
    link: "https://youtu.be/Lm_XqaFh1uY?t=1430"
  },
  {
    quote: "What, you're telling me I just can't slide like a DVD player into my pants and walk out? Why not?",
    link: "https://youtu.be/Lm_XqaFh1uY?t=1749"
  },
  {
    quote: "Oh, I'm boiling him alive!",
    link: "https://youtu.be/Lm_XqaFh1uY?t=2109"
  },
  {
    quote: "No that's actually true, I'm not making that up, that's real. This is like the 5% time (sic) when I'm saying something real.",
    link: "https://youtu.be/Lm_XqaFh1uY?t=2222"
  },
  {
    quote: "Welcome to Dark Souls games, if your back's in a corner, you may as well go microwave a fuckin' burrito.",
    link: "https://youtu.be/8Kpu58900Kk?t=220"
  },
  {
    quote: "He kicked me, Mom, he kicked me in the face from across the fucking game!",
    link: "https://youtu.be/8Kpu58900Kk?t=408"
  },
  {
    quote: "Yeah, take a picture of my mouth!",
    link: "https://youtu.be/olJq4Vp-64M?t=518"
  },
  {
    quote: "Hey, get ready for some fake reactions.",
    link: "https://youtu.be/ZdnRu3PLZ-U?t=9"
  },
  {
    quote: "I'm eating cigarettes in my sleep.",
    link: "https://youtu.be/ZdnRu3PLZ-U?t=296"
  },
  {
    quote: "Suck my fuckin' bum.",
    link: "https://youtu.be/ZdnRu3PLZ-U?t=815"
  },
  {
    quote: "Maybe like 5% of you are chumps.",
    link: "https://youtu.be/ZdnRu3PLZ-U?t=917"
  },
  {
    quote: "You ever shoved a wrench up your ass?",
    link: "https://youtu.be/xH7fcqrvEIY?t=424"
  },
  {
    quote: "Shit in my face.",
    link: "https://youtu.be/KKxq7OxBsoY?t=361"
  },
  {
    quote: "And my hand is just caked with shit.",
    link: "https://youtu.be/HR4cGhdd1Ds?t=2852"
  },
  {
    quote: "Im on crack today, I'm gonna be honest with you.",
    link: "https://youtu.be/YaS8KkfLHA8?t=510"
  },
  {
    quote: "Hey, shove those bone dragons up your ass, you fuckin' dick.",
    link: "https://youtu.be/L27Lmrnqc_0?t=1140"
  },
  {
    quote: "Pineapple on pizza is fucking disgusting.",
    link: "https://youtu.be/WBdtiBcCgoE?t=560"
  },
  {
    quote: "The Witcher 3 is not a good game at all. I think it should never have received even one award.",
    link: "https://youtu.be/WBdtiBcCgoE?t=592"
  },
  {
    quote: "Half-Life 1 and Half-Life 2, like I mean really that whole company in general just made nothing but 4/10 games.",
    link: "https://youtu.be/WBdtiBcCgoE?t=605"
  },
  {
    quote: "No, I'm not going to shave my armpits. I manage my armpits.",
    link: "https://youtu.be/WBdtiBcCgoE?t=693"
  },
  {
    quote: "Don't you hate it when you have chicken bones in your coffee?",
    link: "https://youtu.be/uVBZew0eLQY?t=350"
  },
  {
    quote: "Coffee, Cheetos, Chicken.",
    link: "https://youtu.be/6x7ezLiR4rY?t=0"
  },
  {
    quote: "Get ready for a real jock-shocker.",
    link: "https://youtu.be/ydo2GNXEh2E?t=420"
  },
  {
    quote: "Hey, how about you suck a fart outta my ass.",
    link: "https://youtu.be/ydo2GNXEh2E?t=563"
  },
  {
    quote: "Do you eat ass?",
    link: "https://youtu.be/dEU005uOMlk?t=211"
  },
  {
    quote: "Do you know what it's like to shit?",
    link: "unknown"
  },
  {
    quote: "I'm hiding my penis because people are outta control!",
    link: "https://youtu.be/pbMkyQdo2x8?t=1032"
  },
  {
    quote: "I sound like an attitude boy.",
    link: "https://youtu.be/4-QMpR1L6XM?t=158"
  },
  {
    quote: "Jell-O is somebody spitting a cold loogie down your throat.",
    link: "https://youtu.be/PHUjZ91boic?t=213"
  },
  {
    quote: "Everybody knows at Burger King there are fuckin' ants everywhere.",
    link: "https://youtu.be/_3Mg3x5xsmU?t=60"
  },
  {
    quote: "I can't call Luigi anymore, he called up Verizon and had my number fuckin' blocked. Permanently.",
    link: "https://youtu.be/DtXwqjz0MYE?t=436"
  },
  {
    quote: "Am I the porn?",
    link: "https://youtu.be/aprn0dzKHww?t=78"
  },
  {
    quote: "Why can't we just eat shit?",
    link: "https://youtu.be/CUUMJljcFAQ?t=65"
  },
  {
    quote: "I'm on drugs you motherfuckers!",
    link: "https://youtu.be/X2C9dSRi9S8?t=282"
  },
  {
    quote: "I would suck to be him.",
    link: "https://youtu.be/tPKfNqTgvfE?t=541"
  },
];

// Select a random index #
var result = Math.floor(Math.random() * quotes.length);
// Declare the quote and link as variables
var quote = quotes[result].quote;
var link = quotes[result].link;
// The powerhouse of the cell
function page_load() {
  // Insert the quote text and give it quotation marks
  document.getElementById("quote").innerHTML = "\"" + quote + "\"";
  // If the link starts with https:// (if it's a link)
  if (link.startsWith("https://")) {
    // Set up the embed
    // Declare the embed, video id, and timestamp as variables
    var embed = document.getElementById("embed")
    var timestamp_index = link.lastIndexOf("?t=");
    var video_id = link.slice(17, timestamp_index);
    var timestamp = link.slice(timestamp_index + 3);
    // Concat the video id and timestamp into the embed link
    embed.setAttribute("src", "https://www.youtube-nocookie.com/embed/" + video_id + "?start=" + timestamp);
  }
}

function source() {
  if (link.startsWith("https://")) {
    embed.setAttribute("width", 560);
    embed.setAttribute("height", 315);
  } else {
    document.getElementById("source_link").innerHTML = "¯\\_(ツ)_/¯";
  }
}
