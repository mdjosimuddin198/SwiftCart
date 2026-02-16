const whyCards = [
  {
    icon: "fa-truck-fast",
    title: "Fast Delivery",
    desc: "Get your orders delivered quickly and efficiently.",
  },
  {
    icon: "fa-headset",
    title: "24/7 Support",
    desc: "Our support team is available around the clock.",
  },
  {
    icon: "fa-shield-halved",
    title: "Secure Payment",
    desc: "Safe and secure encrypted transactions.",
  },
  {
    icon: "fa-rotate-left",
    title: "Easy Returns",
    desc: "Return your products easily within 30 days.",
  },
];

const whyChooseUsContainer = document.getElementById("whyUsCardContainer");
console.log(whyChooseUsContainer);

whyCards.forEach((card) => {
  whyChooseUsContainer.innerHTML += `
    <div class="card bg-base-100 shadow-md hover:shadow-xl hover:skew-x-2  transition">
        <div class="card-body items-center ">
          <div class="p-4 bg-primary/10 rounded-xl text-blue-500 mb-4 text-2xl">
         <i class="fa-solid ${card.icon}"></i>
          </div>
          <h3 class="font-semibold text-lg  ">${card.title}</h3>
          <p class="text-gray-500">${card.desc}</p>
        </div>
      </div>
    `;
});
