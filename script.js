document.addEventListener('DOMContentLoaded', () => {

    // --- 1. INITIALIZE EMAILJS INFRASTRUCTURE WITH DILKI'S KEYS ---
    const EMAILJS_PUBLIC_KEY = "hKxClsn5eQoHV1gPu"; 
    const EMAILJS_SERVICE_ID = "service_v0jn9hk";
    const EMAILJS_TEMPLATE_ID = "template_xpic2z3";

    // Boot up the EmailJS client SDK core instance
    emailjs.init(EMAILJS_PUBLIC_KEY);

    // --- 2. GSAP LOADER PIPELINE HANDLER ---
    window.addEventListener('load', () => {
        const loadTimeline = gsap.timeline();
        loadTimeline.to(".progress", { width: "100%", duration: 0.5 })
                    .to("#loader", { opacity: 0, y: -30, duration: 0.4, delay: 0.1, onComplete: () => {
                        document.getElementById("loader").style.display = "none";
                    }});
    });

    // --- 3. ADVANCED THREE.JS AMBIENT BACKGROUND MATRIX ---
    const backgroundContainer = document.getElementById("three-container");
    const activeScene = new THREE.Scene();
    const coreCamera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
    
    const webglRenderer = new THREE.WebGLRenderer({ alpha: true, powerPreference: "high-performance" });
    webglRenderer.setSize(window.innerWidth, window.innerHeight);
    webglRenderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    backgroundContainer.appendChild(webglRenderer.domElement);

    // Particle Array Generation 
    const pointGeometry = new THREE.BufferGeometry();
    const internalParticleCount = 1900;
    const trackingCoordinates = new Float32Array(internalParticleCount * 3);

    for (let i = 0; i < internalParticleCount * 3; i++) {
        trackingCoordinates[i] = (Math.random() - 0.5) * 13;
    }

    pointGeometry.setAttribute("position", new THREE.BufferAttribute(trackingCoordinates, 3));
    
    const pointMaterial = new THREE.PointsMaterial({
        color: 0x45f3ff,
        size: 0.03,
        transparent: true,
        opacity: 0.7,
        blending: THREE.AdditiveBlending
    });

    const activeParticlePoints = new THREE.Points(pointGeometry, pointMaterial);
    activeScene.add(activeParticlePoints);
    coreCamera.position.z = 4.5;

    // Smooth Core Render Loop Execution Frame
    function executeAnimationLoop() {
        requestAnimationFrame(executeAnimationLoop);
        activeParticlePoints.rotation.y += 0.0007;
        activeParticlePoints.rotation.x += 0.0002;
        webglRenderer.render(activeScene, coreCamera);
    }
    executeAnimationLoop();

    // Responsive Canvas Resizing Trigger Engine
    window.addEventListener('resize', () => {
        coreCamera.aspect = window.innerWidth / window.innerHeight;
        coreCamera.updateProjectionMatrix();
        webglRenderer.setSize(window.innerWidth, window.innerHeight);
    });

    // --- 4. DYNAMIC ASYNCHRONOUS GITHUB REPOSITORY INJECTION ENGINE ---
    const projectsGridTarget = document.getElementById("projects-target-grid");
    const GITHUB_USERNAME = "Dilki30"; 

    // Custom fallback matrix built featuring your flagship budget software architecture
    const fallbackProjectsMatrix = [
        { name: "Smart-Budget-Management-System", description: "Flagship Platform. Tracks daily expense logs, performs complete CRUD operations, visualizes real-time analytics with Chart.js, and creates custom jsPDF invoices.", stargazers_count: 8, forks_count: 2, html_url: "https://github.com/Dilki30" },
        { name: "Xaro-Clothing-Store", description: "E-commerce interface logic processing live catalog files and inventory data structures asynchronously.", stargazers_count: 4, forks_count: 1, html_url: "https://github.com/Dilki30" },
        { name: "Logistics-Management-Kernel", description: "Structured software data layer computing algorithmic matrix calculations and tracking workflows efficiently.", stargazers_count: 3, forks_count: 0, html_url: "https://github.com/Dilki30" }
    ];

    function executeGithubDataPipeline() {
        if (GITHUB_USERNAME === "YOUR_GITHUB_USERNAME" || !GITHUB_USERNAME) {
            renderRepositoryCards(fallbackProjectsMatrix);
            return;
        }

        fetch(`https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=6`)
            .then(response => {
                if (!response.ok) throw new Error("Throttled");
                return response.json();
            })
            .then(data => {
                if (!data || data.length === 0) {
                    renderRepositoryCards(fallbackProjectsMatrix);
                } else {
                    const originalBuildsList = data.filter(repo => !repo.fork);
                    renderRepositoryCards(originalBuildsList.length > 0 ? originalBuildsList : data);
                }
            })
            .catch(() => {
                renderRepositoryCards(fallbackProjectsMatrix);
            });
    }

    function renderRepositoryCards(repositoriesArray) {
        projectsGridTarget.innerHTML = "";
        
        repositoriesArray.slice(0, 3).forEach(repo => {
            const cardModule = document.createElement("div");
            cardModule.className = "api-repo-card";
            const polishedTitle = repo.name.replace(/[_-]/g, ' ');

            cardModule.innerHTML = `
                <div class="service-icon-wrap"><i class="fas fa-code-branch"></i></div>
                <h3>${polishedTitle}</h3>
                <p>${repo.description || "System architecture built cleanly with focus on performance optimization and scalable code structures."}</p>
                
                <div class="repo-meta-row">
                    <span><i class="fas fa-star"></i> ${repo.stargazers_count || 0} Stars</span>
                    <span><i class="fas fa-code-fork"></i> ${repo.forks_count || 0} Forks</span>
                </div>
                <br>
                <a href="${repo.html_url}" target="_blank" class="repo-link-anchor">Examine Source Code <i class="fas fa-external-link-alt"></i></a>
            `;
            projectsGridTarget.appendChild(cardModule);
        });
    }
    executeGithubDataPipeline();

    // --- 5. DATA-BOUND CONTEXT ASSISTANT CHATBOT ---
    const widgetFrame = document.getElementById("chatbot-wrapper");
    const toggleWidgetBtn = document.getElementById("chat-toggle-widget");
    const dismissWidgetBtn = document.getElementById("close-chat-btn");
    const interfaceMessageScrollArea = document.getElementById("chat-body");
    const interfaceSendBtn = document.getElementById("send-btn");
    const entryInputField = document.getElementById("user-input");

    toggleWidgetBtn.onclick = () => {
        widgetFrame.style.display = widgetFrame.style.display === "flex" ? "none" : "flex";
    };
    dismissWidgetBtn.onclick = () => widgetFrame.style.display = "none";

    function generateResponsePayload(textQuery) {
        textQuery = textQuery.toLowerCase();
        if (textQuery.includes("budget") || textQuery.includes("management") || textQuery.includes("expense")) {
            return "The Smart Budget Management System is live! It includes complete CRUD features, Tailwind styling, real-time Chart.js tracking, and custom jsPDF document streaming to help users cut unessential expenses.";
        }
        if (textQuery.includes("stack") || textQuery.includes("technology") || textQuery.includes("language")) {
            return "Dilki engineers web apps utilizing HTML5, Tailwind CSS, JavaScript (ES6+), Chart.js, Bootstrap, and backend math models.";
        }
        if (textQuery.includes("linkedin") || textQuery.includes("contact") || textQuery.includes("hire")) {
            return "Let's connect! You can review my engineering posts on LinkedIn (linkedin.com/in/dilkinimeshika), send a message over the contact sheet below, or use the direct WhatsApp link!";
        }
        return "Understood! Share your structural requirements or system ideas in the secure contact section below to get a technical breakdown.";
    }

    function processUserMessageAction() {
        const standardText = entryInputField.value.trim();
        if (!standardText) return;

        interfaceMessageScrollArea.innerHTML += `<div class="user-bubble">${standardText}</div>`;
        entryInputField.value = "";
        interfaceMessageScrollArea.scrollTop = interfaceMessageScrollArea.scrollHeight;

        setTimeout(() => {
            const systemReply = generateResponsePayload(standardText);
            interfaceMessageScrollArea.innerHTML += `<div class="bot-bubble">${systemReply}</div>`;
            interfaceMessageScrollArea.scrollTop = interfaceMessageScrollArea.scrollHeight;
        }, 700);
    }

    interfaceSendBtn.onclick = processUserMessageAction;
    entryInputField.onkeydown = (eventObject) => { if (eventObject.key === "Enter") processUserMessageAction(); };

    // --- 6. PRODUCTION EMAILJS ROUTING TRANSMISSION INTERCEPT PIPELINE ---
    const operationalContactForm = document.getElementById("secure-contact-form");
    
    operationalContactForm.addEventListener('submit', (eventObject) => {
        eventObject.preventDefault();
        
        const actionSubmitBtn = operationalContactForm.querySelector('.form-submit-btn');
        actionSubmitBtn.textContent = "Routing Stream Payload...";
        actionSubmitBtn.disabled = true;

        // Dispatches structural parameters directly from form inputs straight to your email link
        emailjs.sendForm(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, operationalContactForm)
            .then(() => {
                alert("Transmission Success! System requirements blueprint logged and forwarded to Dilki's inbox.");
                operationalContactForm.reset();
            }, (errorPayload) => {
                console.error("EmailJS Pipeline Exception Context: ", errorPayload);
                alert("Routing Failure: Data stream link timed out. Please double check credentials or try again.");
            })
            .finally(() => {
                actionSubmitBtn.disabled = false;
                actionSubmitBtn.innerHTML = `Deploy Contact Transmission <i class="fas fa-paper-plane"></i>`;
            });
    });
});