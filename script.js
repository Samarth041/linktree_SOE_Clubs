/* ==== CLUB DATA ==== */
const clubData = {
  "Technical Clubs": [
    { name: "GDGC", link: "https://linktr.ee/gdgcJNU", logo: "gdgc.png", desc: "Google Developer community" },
    { name: "LOOP", link: "https://linktr.ee/loop.soe", logo: "LOOP.png", desc: "Development" },
    { name: "COLD", link: "https://linktr.ee/CoLDJNU", logo: "cold.png", desc: "Competitive Programming" },
    { name: "DEROBOTICA", link: "https://chat.whatsapp.com/El8f4p9BoNcBvE4HefZArZ?mode=ac_t", logo: "derobotica.jpg", desc: "Robotics" },
    { name: "VOLT", link: "https://linktr.ee/qr/415cd30f-0be0-4655-80fb-028a7fe2077c", logo: "volt.png", desc: "Electronics & circuits" },
    { name: "ANTARIKSH", link: "https://chat.whatsapp.com/BJkA3gMYdFvETTpT3QJYHE", logo: "antariksh.png", desc: "Space & aero" },
    { name: "UAV AND DRONE CLUB", link: "https://chat.whatsapp.com/HQYWMrXaWdOFL2J5sFLjDJ", logo: "uav.png", desc: "Drone enthusiasts" }
  ],

  "Non-Technical & Non-Cultural Clubs": [
    { name: "MEGAWHATS", link: "https://chat.whatsapp.com/BHa0lnGCerC1G2ZbDGPopV", logo: "megawhats.png", desc: "Quizzing & more" },
    { name: "PERSPECTIVES", link: "https://chat.whatsapp.com/C4VfUODZ8zjC9A8LDW5oAr", logo: "perspectives.png", desc: "Talks & debates" },
    { name: "PALETTE", link: "https://chat.whatsapp.com/KECAviY9YhICNVUGPQCcoH", logo: "palette.png", desc: "Art & creativity" },
    { name: "PHOENIX", link: "https://chat.whatsapp.com/G3DNF8Mp92b4qUT5thaDbe", logo: "phoenix.png", desc: "E-Cell" },
    { name: "DRUSHYAM", link: "https://chat.whatsapp.com/CTg4Hxofliv8Xzxf2oEKw3", logo: "drushyam.png", desc: "Film & photography" }
  ],

  "Cultural Clubs": [
    { name: "AKSHAR", link: "https://chat.whatsapp.com/DafiQIDrzZ7E4WxG5m12zW", logo: "akshar.png", desc: "Literature & writing" },
    { name: "ABHINAY", link: "https://chat.whatsapp.com/B4kskqkmI6H7vThgDhhIgs", logo: "abhinay.png", desc: "Drama & theatre" },
    { name: "BANDISH", link: "https://chat.whatsapp.com/GhHAGHRdhLhKytyp55Bs4I", logo: "bandish.png", desc: "Music & singing" },
    { name: "BAILAAMOR", link: "https://chat.whatsapp.com/EK5rB8c3EcMFjkdYHztouV", logo: "bailaamor.png", desc: "Dance & culture" }
  ],

  "Sports Clubs": [
    { name: "KREEDA", link: "https://chat.whatsapp.com/Bw6WR21bXzQ5HMx5175xhT", logo: "kreeda.png", desc: "Sports activities" },
    { name: "EPHIRIUM", link: "https://chat.whatsapp.com/EEJjKIjD7gj1ehpByk7Mbg", logo: "ephirium.png", desc: "E-sports & gaming" },
    { name: "QUEEN'S SACRIFICE", link: "https://chat.whatsapp.com/CZssrLdYHbd1KEcEdJb7qw", logo: "queensacrifice.png", desc: "Chess club" },
    { name: "BLACKOUT", link: "https://chat.whatsapp.com/D4PrAXzbP7D0Sam1ZS7EYU", logo: "blackout.jpg", desc: "Fitness & Weightlifting" }
  ],

  "Upcoming Clubs": [
    { name: "MC²", link: "https://chat.whatsapp.com/IxKPLcOU5ixLeuhNCgpBOf", logo: "mcsquarelogo.jpg", desc: "Management & Consulting" }
  ]
};

/* ==== RENDER ==== */
const container = document.getElementById("club-sections");

Object.entries(clubData).forEach(([section, clubs]) => {
  const h2 = document.createElement("h2");
  h2.className = "section-title";
  h2.textContent = section;
  container.appendChild(h2);

  const grid = document.createElement("div");
  grid.className = "grid";

  clubs.forEach(c => {
    const card = document.createElement("div");
    card.className = "card";

    if (c.logo) {
      const img = document.createElement("img");
      img.className = "logo-small";
      img.src = c.logo;
      img.alt = `${c.name} logo`;
      img.onerror = () => img.remove();
      card.appendChild(img);
    }

    const name = document.createElement("div");
    name.className = "club-name";
    name.textContent = c.name;
    card.appendChild(name);

    if (c.desc) {
      const desc = document.createElement("div");
      desc.className = "desc";
      desc.textContent = c.desc;
      card.appendChild(desc);
    }

    if (c.link) {
      const btn = document.createElement("a");
      btn.href = c.link;
      btn.target = "_blank";
      btn.rel = "noopener noreferrer";
      btn.className = "btn";
      btn.textContent = "Join WhatsApp";
      card.appendChild(btn);
    }

    grid.appendChild(card);
  });

  container.appendChild(grid);
});
