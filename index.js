document.getElementById("generate-btn").addEventListener("click", () => {
    // Récupération des valeurs du formulaire
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const skills = document.getElementById("skills").value.split(",");
    const experience = document.getElementById("experience").value;
    const education = document.getElementById("education").value;
  
    // Création du CV
    const cvContainer = document.getElementById("cv-container");
    cvContainer.innerHTML = `
      <h3>${name}</h3>
      <p><strong>Email :</strong> ${email}</p>
      <p><strong>Téléphone :</strong> ${phone}</p>
      <h4>Compétences</h4>
      <ul>${skills.map(skill => `<li>${skill.trim()}</li>`).join("")}</ul>
      <h4>Expériences professionnelles</h4>
      <p>${experience}</p>
      <h4>Formation</h4>
      <p>${education}</p>
    `;
  
    // Affichage du CV
    document.getElementById("form-section").style.display = "none";
    document.getElementById("cv-section").style.display = "block";
  });
  
  // Téléchargement du CV en HTML
  document.getElementById("download-btn").addEventListener("click", () => {
    const cvContent = document.getElementById("cv-container").innerHTML;
    // Crée un Blob contenant le code HTML
    const blob = new Blob([cvContent], { type: "text/html" });

    // Crée un lien de téléchargement temporaire
    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "cv.html"; // Nom du fichier
    link.click(); // Déclenche le téléchargement
  });
  