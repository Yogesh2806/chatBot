// VARIABLE DECLARATION
const chatBtn = document.querySelector(".chatClick");
const chatBot = document.querySelector(".chatBot");
const chatInfo = document.querySelector(".chatInfo");
const contentBot = document.querySelector(".contentBot");
const contentBg = document.querySelector(".contentBg");
const floatingSection = document.querySelector(".floatingSection");
const conversation = document.querySelector(".conversation");

const fadein1 = document.querySelector(".fadein1");
const fadein2 = document.querySelector(".fadein2");
const fadein3 = document.querySelector(".fadein3");
const fadein4 = document.querySelector(".fadein4");

// FUNCTION

chatBtn.addEventListener("click", () => {
  if (chatBot.classList.toggle("chatActive")) {
    chatInfo.classList.add("chatInfoActive");
    contentBot.classList.add("chatInfoActive");
    contentBg.classList.add("contentBgActive");
    floatingSection.classList.add("floatingSectionActive");
    conversation.classList.add("conversationActive");
    fadein1.classList.add("fadeinActive1");
    fadein2.classList.add("fadeinActive2");
    fadein3.classList.add("fadeinActive3");
    fadein4.classList.add("fadeinActive4");
  } else {
    chatInfo.classList.remove("chatInfoActive");
    contentBot.classList.remove("chatInfoActive");
    contentBg.classList.remove("contentBgActive");
    floatingSection.classList.remove("floatingSectionActive");
    conversation.classList.remove("conversationActive");
    fadein1.classList.remove("fadeinActive1");
    fadein2.classList.remove("fadeinActive2");
    fadein3.classList.remove("fadeinActive3");
    fadein4.classList.remove("fadeinActive4");
  }
});
