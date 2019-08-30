import React from "react";

const Home = () => {

// Added identify function to establish user identity when accessing the site.
  window.Appcues.identify("ogofbashan", {
     name: "Joe OG",
     email: "work.joe.og@gmail.com",
     createdAt: 1234567890,
     companyName: "og's_cogs",
     planType: "Trial",
     planTier: "Standard",
     role: "Admin"
   });

  return (
    <div class="content-box">
      <h1 class="header-text">Joe OG's Application</h1>
      <p class="reasons"> I hope that these files will show that I have the capacity
      to learn the skills necessary for the position.</p>
      <p class="reasons"> What I don't know now. I hope to learn soon.</p>
    </div>
  );
};

export default Home;
