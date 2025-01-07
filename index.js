document.getElementById("generate-btn").addEventListener("click", () => {
    // Récupération des valeurs du formulaire
    // const doc = new window.jspdf.jsPDF();
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
    `
    ;

  
    // Affichage du CV
    document.getElementById("form-section").style.display = "none";
    document.getElementById("cv-section").style.display = "block";
  });

  document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("download-btn").addEventListener("click", async () => {
        const { jsPDF } = window.jspdf;
        const doc = new jsPDF();

        const cvContent = document.getElementById("cv-container");

        // Utilisation directe de doc.html() pour convertir le contenu HTML en PDF
        await doc.html(cvContent, {
            callback: function (doc) {
                doc.save("cv.pdf");
            },
            x: 10,
            y: 10,
            width: 180, // Ajuste la largeur pour tenir sur la page A4
            windowWidth: cvContent.scrollWidth // Utilise la largeur réelle du contenu
        });
    });
});

