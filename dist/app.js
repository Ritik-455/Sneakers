const addbtn = document.getElementById('addbtn')
const counting = document.getElementById('counting')
const minusbtn = document.getElementById('minusbtn')

function openNav() {
  document.getElementById("navbar").classList.toggle("!left-[0%]");
  document.body.classList.toggle("overflow-hidden");
}

addbtn.addEventListener("click", function () {
  if (counting.innerHTML < 20)
  counting.innerHTML = +counting.innerHTML + 1;
})

minusbtn.addEventListener("click", function () {
  if (counting.innerHTML > 1)
    counting.innerHTML = counting.innerHTML - 1;
});

function navtabs(tabs) {
  const tabshow = document.querySelectorAll('.tabshow')
  const tabbtn = document.querySelectorAll('.tabs button')
  tabshow.forEach(content => {
      content.style.display = 'none'
  })
  tabbtn.forEach(content => {
      content.classList.remove('text-red-500')
      content.classList.remove('bottom_line')
  })

  const selecttoshow = document.getElementById(tabs)
  selecttoshow.style.display = 'block'

  const activeTab = document.querySelector(`button[onclick="navtabs('${tabs}')"]`)
  activeTab.classList.add("text-red-500")
  activeTab.classList.add("bottom_line")

}
navtabs('tab1')
