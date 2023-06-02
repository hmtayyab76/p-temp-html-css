function navLinksDisplay() {
  console.log("Hello");
  let navLinks = document.getElementById("navbar-sticky");
  navLinks.style.display = navLinks.style.display === "none" ? "flex" : "none";
}

function SingleProject(title, image, languages, description, link) {
  return `<section class="w-50 flex justify-around flex-col p-5 mx-2 my-4 border-solid border-2 border-white rounded-lg overflow-hidden shadow-lg bord" style="width: 450px;">
          <img src="${image}" alt="${title}" class="h-48 w-full object-cover rounded-lg transition duration-300 ease-in-out transform hover:scale-110 hover:-translate-y-1" />
          <div class="m-1">
            <h5 class="text-2xl font-bold text-white my-1">${title}</h5>
            <div class="description-container mb-1 overflow-hidden">
              <p class="text-1/2xl sm:text-1xl text-gray-400 m-1">${description}</p>
            </div>
            <p class="text-3xl my-1 text-white">Stack</p>
            <p class="text-2xl my-2 text-slate-200 pl-1">${languages}</p>
          </div>
          <div class="flex justify-around mt-2">
            <button class="button">Visit</button>
            <button class="button"><a href="${link}">Code</button>
          </div>
        </section>`;
}

function Projects() {
  const projectsData = [
    {
      title: "QuickCart",
      image: "assest/p1.png",
      languages: "#JavaScript || #React",
      link: "https://github.com/hmtayyab76/DashBoard",
      description:
        "The front-end of an add-to-cart project with payment integration using React would typically involve creating a user-friendly interface that allows users to add items to their cart and checkout using various payment methods. This would require creating a shopping cart component that displays items in the cart, calculates the total cost, and provides options for removing or modifying items",
    },
    {
      title: "ShopEZ",
      image: "assest/p2.png",
      languages: "#JavaScript || #React",
      link: "https://github.com/hmtayyab76/AnimatedProject",
      description:
        "Creating the front-end of a shopping website with React JS and other technologies involves using a variety of tools and techniques to build an engaging user experience. Creating a successful shopping website requires careful consideration of user needs and preferences, as well as attention to performance, accessibility",
    },
  ];

  const projectElement = document.getElementById("project");

  const projectsHTML = projectsData.map((projectData) => {
    const { title, image, languages, description, link } = projectData;
    return SingleProject(title, image, languages, description, link);
  });

  projectElement.innerHTML = projectsHTML.join("");
}
Projects();
