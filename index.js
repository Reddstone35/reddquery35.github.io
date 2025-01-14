/*
  SCH = school
  G = google
  WEB = website
  V = verify
*/

const searchParams = window.location.search;
const urlParams = new URLSearchParams(searchParams);
const q = urlParams.get("q");
const l = urlParams.get("l");
const t = urlParams.get("t");
const spt = urlParams.get("spt");

if (q === null || l === null || t === null || spt === null) {
  window.history.back();
  setTimeout(() => {
    window.close();
  }, 100);
}

function readQuery(q, l, t, spt) {
  if (t === "input") {
    console.log(t)
    inputQuery(q, l, spt);
  } else {
    window.history.back();
    setTimeout(() => {
      window.close();
    }, 100);
  }
}

function inputQuery(q, l, spt) {
  if (spt === "SCH_GWEB_imagine_V") {
    console.log("spt correct")
    if (btoa(q) === "cmVkZGFiYzE=") {
      window.location.href = "https://reddstone35.com/data/091320220824511_SCH/SData/accinfo";
    } else if (btoa(q) === "cmVkZGNvbXA2NTEx") {
      window.location.href = "https://schcompany-gage-website-40339472080.github.io";
    } else {
      window.history.back();
      setTimeout(() => {
        window.close();
      }, 100);
    }
  }
}

readQuery(q, l, t, spt)
