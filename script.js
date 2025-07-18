//Main script file. All necessary script files are imported here

import { greenBtn, yellowBtn, redBtn, themeBtn } from "./scripts/buttons.js";
import {
    fetchGithubSocialStats, fetchLinkedInStats, fetchLeetCodeStats, fetchGithubStats,
    connections,
    githubStats,
    followers, following,
    ranking, totalSolved, easySolved, mediumSolved, hardSolved,
} from "./scripts/fetchStats.js";

import { getContributors, getBlogs, getIPDetails, getRepo, contributors, userBlogs, IpDetails, userRepos } from "./scripts/getDetails.js";
import {
    neofetch,
    removeNeoFetch,
    getInputValue,
    new_line,
    removeInput,
    trueValue,
    falseValue,
    createText,
    createCode,
    downloadFile,
    calc
} from "./scripts/functions.js";

import { setTheme } from "./scripts/themeSetter.js";

export let commandsList = [
    "help",
    "ls",
    "clear",
    "about",
    "social",
    "projects",
    "repos",
    "cheer",
    "ipconfig",
    "contributors",
    "neofetch",
    "download",
    "calc",
    "blog",
    "contact",
    "github",
    "experience",
    "skills",
    "history",
    "typing",
    "reset"
];


let delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const app = document.querySelector("#app");
const bodyContainer = document.querySelector("#bodyContainer");

const greenButton = document.querySelector("#greenButton");
greenButton.addEventListener("click", greenBtn);

const yellowButton = document.querySelector("#yellowButton");
yellowButton.addEventListener("click", yellowBtn);

const redButton = document.querySelector("#redButton");
redButton.addEventListener("click", redBtn);

const themeButton = document.querySelector("#themeButton");
themeButton.addEventListener("click", themeBtn);

//function to set up and start the terminal
async function openTerminal() {
    await createText("Hey, hey! Welcome to Cherry's Terminal");
    await delay(200);
    await createText("Need help? Just press Enter and we’ll pretend to know what we’re doing. 🤫✨");
    await delay(200);
    //await createText("You can now interact with the Terminal");
    await createCode("Type help", "for a list of commands");
    await delay(500);
    new_line();
}

//fetch statisticss from ./scripts/fetchStats.js
fetchGithubSocialStats();
fetchLinkedInStats();
fetchLeetCodeStats();
fetchGithubStats();

//open the terminal
openTerminal();

//get Details from ./scripts/getDetails.js
getContributors();
// get the Blogs
getBlogs();
// ip lookup --> https://ipapi.co/json
getIPDetails();
// get user github repositories
getRepo();


// Themes Switcher
let switches = document.getElementsByClassName("main-switch");
let style = localStorage.getItem("style");

if (style == null) {
    setTheme("default");
} else {
    setTheme(style);
}

for (let i of switches) {
    i.addEventListener("click", function () {
        let theme = this.dataset.theme;
        setTheme(theme);
    });
}


