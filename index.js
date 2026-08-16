
/* =====================================================
   DATA
===================================================== */


/* =====================================================
   PAGE SYSTEM
===================================================== */

function showPage(page, clickedButton){

    closeDrawer();

    if(clickedButton){

        document.querySelectorAll(".nav-item")
        .forEach(x=>x.classList.remove("active"));

        clickedButton.classList.add("active");
    }

    const content = document.getElementById("content");

    if(page==="home"){
        renderHome();
    }

    else if(page==="learn"){
        renderLearn();
    }

    else if(page==="mock"){
        renderMock();
    }

    else if(page==="progress"){
        renderProgress();
    }

    else if(page==="search"){
        renderSearch();
    }

    else if(page==="mcq"){
        renderMCQ();
    }

    else if(page==="calculator"){
        renderCalculator();
    }

    else if(page==="formulas"){
        renderFormulas();
    }

    else if(page==="site"){
        renderSite();
    }

    else if(page==="interview"){
        renderInterview();
    }

    else if(page==="jobs"){
        renderJobs();
    }

    else if(page==="ai"){
        renderAI();
    }

    else if(page==="favorites"){
        renderFavorites();
    }

    else if(page==="profile"){
        renderProfile();
    }

    else if(page==="settings"){
        renderSettings();
    }

    content.scrollTop=0;
}

/* =====================================================
   HOME
===================================================== */

function renderHome(){

    document.getElementById("content").innerHTML = `

        <div class="hero">

            <h1>🏗️ CIVIL JOB PREP</h1>

            <p>
                Diploma in Civil Engineering শিক্ষার্থীদের
                চাকরি প্রস্তুতির জন্য সম্পূর্ণ Study & Exam App।
            </p>

            <div class="hero-buttons">

                <button class="primary-btn"
                    onclick="showPage('mcq')">
                    📝 MCQ Practice
                </button>

                <button class="secondary-btn"
                    onclick="showPage('mock')">
                    🎯 Mock Exam
                </button>

            </div>

        </div>

        <div class="stats">

            <div class="stat">
                <strong>1,250+</strong>
                <small>MCQ</small>
            </div>

            <div class="stat">
                <strong>10</strong>
                <small>Subjects</small>
            </div>

            <div class="stat">
                <strong>85%</strong>
                <small>Progress</small>
            </div>

        </div>

        <div class="section-title">
            📝 Exam Section
        </div>

        <div class="grid">

            ${homeCard("🎯","Mock Exam","mock")}
            ${homeCard("📝","MCQ Practice","mcq")}
            ${homeCard("🔀","Random Quiz","mcq")}
            ${homeCard("📚","Previous Questions","mock")}
            ${homeCard("🏆","Job Preparation","jobs")}
            ${homeCard("🎤","Interview","interview")}
            ${homeCard("💼","Job Solution","jobs")}
            ${homeCard("📊","Result Analysis","progress")}

        </div>

        <div class="section-title">
            📚 Study Section
        </div>

        <div class="grid">

            ${homeCard("📖","Learn Subjects","learn")}
            ${homeCard("📐","Formulas","formulas")}
            ${homeCard("🧮","Calculators","calculator")}
            ${homeCard("🦺","Site Engineering","site")}
            ${homeCard("🤖","AI Assistant","ai")}
            ${homeCard("⭐","Favorites","favorites")}

        </div>

        <div class="progress-box">

            <div class="progress-head">
                <b>Today's Progress</b>
                <b>63%</b>
            </div>

            <div class="progress-bar">
                <div class="progress-fill"></div>
            </div>

            <p style="color:#aaa;margin-top:9px;font-size:13px;">
                আজ 25টি MCQ practice করুন।
            </p>

        </div>

        <div style="height:20px"></div>
    `;
}

function homeCard(icon,title,page){

    return `
        <div class="grid-card"
             onclick="showPage('${page}')">

            <div class="grid-icon">
                ${icon}
            </div>

            <span>${title}</span>

        </div>
    `;
}

/* =====================================================
   LEARN
===================================================== */


/* =====================================================
   MOCK EXAM
===================================================== */

function renderMock(){

    document.getElementById("content").innerHTML=`

        <div class="page-title">
            🎯 Mock Exam
        </div>

        ${examCard(
            "Diploma Civil Engineering Full Mock Test",
            "Civil Engineering",
            "50",
            "45 min"
        )}

        ${examCard(
            "Surveying Model Test",
            "Surveying",
            "25",
            "20 min"
        )}

        ${examCard(
            "RCC Model Test",
            "RCC & Concrete",
            "25",
            "20 min"
        )}

        ${examCard(
            "Soil Mechanics Test",
            "Soil Mechanics",
            "25",
            "20 min"
        )}

        ${examCard(
            "Highway Engineering Test",
            "Highway",
            "25",
            "20 min"
        )}
        ${examCard(
            "RCC Model Test",
            "RCC & Concrete",
            "25",
            "20 min"
        )}

        ${examCard(
            "Soil Mechanics Test",
            "Soil Mechanics",
            "25",
            "20 min"
        )}

        ${examCard(
            "Highway Engineering Test",
            "Highway",
            "25",
            "20 min"
        )}

    `;
}

function examCard(title,subject,marks,duration){

    return `

        <div class="exam-card">

            <div class="exam-top">

                <div class="exam-title">
                    ${title}
                </div>

                <div class="omr">
                    MCQ
                </div>

            </div>

            <div class="exam-info">

                <span>Total marks: ${marks}</span>

                <span>Duration: ${duration}</span>

            </div>

            <div class="exam-description">
                বিষয়: ${subject}<br>
                Diploma Civil Job Preparation
            </div>

            <div class="exam-buttons">

                <button class="practice"
                    onclick="renderMCQ()">
                    Practice Quiz
                </button>

                <button class="live"
                    onclick="startExam()">
                    পরীক্ষা দিন
                </button>

            </div>

        </div>
    `;
}

function startExam(){

    renderMCQ();

    toast("Mock Exam শুরু হয়েছে");
}

/* =====================================================
   MCQ
===================================================== */

let score=0;
let answered=0;

function renderMCQ(){

    score=0;
    answered=0;

    let html=`

        <div class="page-title">
            📝 MCQ Practice
        </div>

        <div class="progress-box">

            <div class="progress-head">
                <b>Quiz Progress</b>
                <b id="quizCount">0/${mcqs.length}</b>
            </div>

            <div class="progress-bar">
                <div class="progress-fill"
                     id="quizProgress"
                     style="width:0%">
                </div>
            </div>

        </div>
    `;

    mcqs.forEach((q,i)=>{

        html+=`

            <div class="mcq-card">

                <div class="question">
                    ${i+1}) ${q.q}
                </div>

                ${q.options.map((o,j)=>`

                    <button class="option"
                        id="q${i}o${j}"
                        onclick="answer(${i},${j})">

                        ${["ক","খ","গ","ঘ"][j]}) ${o}

                    </button>

                `).join("")}

                <div class="explanation"
                     id="exp${i}">
                    💡 ${q.exp}
                </div>

            </div>
        `;
    });

    html+=`

        <button class="primary-btn"
            style="width:100%;margin-bottom:20px"
            onclick="showResult()">
            Submit Quiz
        </button>
    `;

    document.getElementById("content").innerHTML=html;
}

function answer(qIndex,selected){

    const q=mcqs[qIndex];

    const buttons=q.options.map(
        (_,i)=>document.getElementById(`q${qIndex}o${i}`)
    );

    if(buttons[0].disabled){
        return;
    }

    buttons.forEach(b=>b.disabled=true);

    buttons[q.answer].classList.add("correct");

    if(selected!==q.answer){

        buttons[selected].classList.add("wrong");

    }else{

        score++;

    }

    answered++;

    document.getElementById(`exp${qIndex}`)
        .style.display="block";

    document.getElementById("quizCount").innerText=
        `${answered}/${mcqs.length}`;

    document.getElementById("quizProgress").style.width=
        `${(answered/mcqs.length)*100}%`;
}

function showResult(){

    const percentage=Math.round(
        (score/mcqs.length)*100
    );

    document.getElementById("content").innerHTML=`

        <div class="page-title">
            📊 Result Analysis
        </div>

        <div class="result">

            <div class="result-score">

                <strong>${score}</strong>

                <span>/ ${mcqs.length}</span>

            </div>

            <h2>
                ${percentage >= 70
                    ? "🎉 Excellent!"
                    : "📚 Keep Practicing!"}
            </h2>

            <div class="result-table">

                <div class="result-row">
                    <span>আপনার মার্কস</span>
                    <b>${score}</b>
                </div>

                <div class="result-row">
                    <span>Total Right</span>
                    <b style="color:#20c76a">
                        ${score}
                    </b>
                </div>

                <div class="result-row">
                    <span>Total Wrong</span>
                    <b style="color:#ff4757">
                        ${answered-score}
                    </b>
                </div>

                <div class="result-row">
                    <span>Unanswered</span>
                    <b>
                        ${mcqs.length-answered}
                    </b>
                </div>

            </div>

            <button class="primary-btn"
                style="margin-top:20px;width:100%"
                onclick="renderMCQ()">
                আবার পরীক্ষা দিন
            </button>

        </div>
    `;
}

/* =====================================================
   PROGRESS
===================================================== */

function renderProgress(){

    document.getElementById("content").innerHTML=`

        <div class="page-title">
            📊 Progress
        </div>

        <div class="progress-box">

            <h2>Overall Progress</h2>

            <div style="
                text-align:center;
                font-size:38px;
                margin:20px 0;">
                63%
            </div>

            <div class="progress-bar">
                <div class="progress-fill"></div>
            </div>

        </div>

        <div class="stats">

            <div class="stat">
                <strong>850</strong>
                <small>Attempted</small>
            </div>

            <div class="stat">
                <strong>692</strong>
                <small>Correct</small>
            </div>

            <div class="stat">
                <strong>158</strong>
                <small>Wrong</small>
            </div>

        </div>

        <div class="section-title">
            Subject Performance
        </div>

        ${subjects.slice(0,6).map((s,i)=>`

            <div class="progress-box">

                <div class="progress-head">

                    <span>
                        ${s.icon} ${s.name}
                    </span>

                    <b>
                        ${55+i*5}%
                    </b>

                </div>

                <div class="progress-bar">

                    <div class="progress-fill"
                         style="width:${55+i*5}%">
                    </div>

                </div>

            </div>

        `).join("")}
    `;
}

/* =====================================================
   FORMULAS
===================================================== */

function renderFormulas(){

    document.getElementById("content").innerHTML=`

        <div class="page-title">
            📐 Civil Formulas
        </div>

        ${formula(
            "Concrete",
            "Density = Mass / Volume"
        )}

        ${formula(
            "Area of Rectangle",
            "A = L × B"
        )}

        ${formula(
            "Area of Triangle",
            "A = ½ × Base × Height"
        )}

        ${formula(
            "Volume of Concrete",
            "V = Length × Width × Height"
        )}

        ${formula(
            "Discharge",
            "Q = A × V"
        )}

        ${formula(
            "Hydraulic Radius",
            "R = A / P"
        )}

        ${formula(
            "Percentage",
            "% = (Part / Total) × 100"
        )}

    `;
}

function formula(title,value){

    return `

        <div class="subject-card">

            <h3>📐 ${title}</h3>

            <div style="
                margin-top:12px;
                padding:14px;
                background:#18191e;
                border-radius:10px;
                font-size:18px;
                text-align:center;">

                ${value}

            </div>

        </div>
    `;
}

/* =====================================================
   CALCULATOR
===================================================== */

function renderCalculator(){

    document.getElementById("content").innerHTML=`

        <div class="page-title">
            🧮 Civil Calculator
        </div>

        <div class="calculator">

            <h3>Concrete Volume Calculator</h3>

            <input class="input"
                id="length"
                type="number"
                placeholder="Length">

            <input class="input"
                id="width"
                type="number"
                placeholder="Width">

            <input class="input"
                id="height"
                type="number"
                placeholder="Height">

            <button class="primary-btn"
                style="width:100%;margin-top:8px"
                onclick="calculateVolume()">

                Calculate

            </button>

            <div class="calc-result"
                 id="calcResult">
                Result = 0 m³
            </div>

        </div>

        <div class="calculator" style="margin-top:14px">

            <h3>Area Calculator</h3>

            <input class="input"
                id="areaL"
                type="number"
                placeholder="Length">

            <input class="input"
                id="areaB"
                type="number"
                placeholder="Width">

            <button class="primary-btn"
                style="width:100%"
                onclick="calculateArea()">

                Calculate Area

            </button>

            <div class="calc-result"
                 id="areaResult">
                Area = 0 m²
            </div>

        </div>
    `;
}

function calculateVolume(){

    let l=parseFloat(document.getElementById("length").value)||0;
    let w=parseFloat(document.getElementById("width").value)||0;
    let h=parseFloat(document.getElementById("height").value)||0;

    let result=l*w*h;

    document.getElementById("calcResult").innerText=
        `Result = ${result.toFixed(3)} m³`;
}

function calculateArea(){

    let l=parseFloat(document.getElementById("areaL").value)||0;
    let b=parseFloat(document.getElementById("areaB").value)||0;

    document.getElementById("areaResult").innerText=
        `Area = ${(l*b).toFixed(3)} m²`;
}

/* =====================================================
   SITE ENGINEERING
===================================================== */

function renderSite(){

    document.getElementById("content").innerHTML=`

        <div class="page-title">
            🦺 Site Engineering
        </div>

        ${siteCard(
            "🧱 Brick Work",
            "Brick quality, mortar ratio, bond, wall construction"
        )}

        ${siteCard(
            "🏗️ RCC Work",
            "Rebar placement, cover, shuttering, concrete casting"
        )}

        ${siteCard(
            "📏 Level Checking",
            "Auto level, benchmark and reduced level"
        )}

        ${siteCard(
            "🔨 Formwork",
            "Beam, slab, column shuttering basics"
        )}

        ${siteCard(
            "🧰 Safety",
            "PPE, site safety and common hazards"
        )}

    `;
}

function siteCard(title,desc){

    return `

        <div class="subject-card"
             onclick="toast('${title} opened')">

            <h3>${title}</h3>

            <p>${desc}</p>

        </div>
    `;
}

/* =====================================================
   INTERVIEW
===================================================== */

function interview(q,a){

    return `

        <div class="subject-card"
             onclick="this.querySelector('.answer').style.display =
             this.querySelector('.answer').style.display==='block'
             ? 'none':'block'">

            <h3>❓ ${q}</h3>

            <div class="answer"
                 style="
                 display:none;
                 margin-top:12px;
                 color:#bbb;
                 line-height:1.6;">

                <b style="color:white">Answer:</b><br>
                ${a}

            </div>

        </div>
    `;
}



/* =====================================================
   AI ASSISTANT
===================================================== */

function renderAI(){

    document.getElementById("content").innerHTML=`

        <div class="page-title">
            🤖 AI Assistant
        </div>

        <div class="chat" id="chat">

            <div class="message bot">
                👋 Hello! আমি Civil Job Prep AI Assistant।
                <br><br>
                আপনি Civil Engineering সম্পর্কে প্রশ্ন করতে পারেন।
            </div>

        </div>

        <div class="chat-input">

            <input id="chatInput"
                placeholder="Civil Engineering প্রশ্ন লিখুন...">

            <button onclick="sendAI()">
                ➤
            </button>

        </div>
    `;
}

function sendAI(){

    const input=document.getElementById("chatInput");

    if(!input.value.trim()) return;

    const question=input.value;

    const chat=document.getElementById("chat");

    chat.innerHTML+=`

        <div class="message user">
            ${escapeHTML(question)}
        </div>
    `;

    let answer=
        "এটি একটি demo AI Assistant। আপনার প্রশ্নটি বুঝতে AI backend/API সংযুক্ত করতে হবে।";

    if(question.toLowerCase().includes("rcc")){
        answer=
        "RCC-এর পূর্ণরূপ Reinforced Cement Concrete। Concrete compression ভালোভাবে বহন করে এবং steel reinforcement tension বহন করতে সাহায্য করে।";
    }

    if(question.toLowerCase().includes("survey")){
        answer=
        "Surveying হলো পৃথিবীর পৃষ্ঠের বিভিন্ন point-এর অবস্থান, দূরত্ব, elevation ও direction নির্ণয়ের প্রক্রিয়া।";
    }

    chat.innerHTML+=`

        <div class="message bot">
            ${answer}
        </div>
    `;

    input.value="";

    document.getElementById("content").scrollTop=
        document.getElementById("content").scrollHeight;
}

function escapeHTML(text){

    return text
        .replace(/&/g,"&amp;")
        .replace(/</g,"&lt;")
        .replace(/>/g,"&gt;")
        .replace(/"/g,"&quot;")
        .replace(/'/g,"&#039;");
}

/* =====================================================
   FAVORITES
===================================================== */

function renderFavorites(){

    document.getElementById("content").innerHTML=`

        <div class="page-title">
            ⭐ Favorites
        </div>

        <div class="subject-card">

            <h3>📐 RCC Beam Formula</h3>

            <p>
                Important formulas saved by you.
            </p>

        </div>

        <div class="subject-card">

            <h3>📏 Surveying MCQ</h3>

            <p>
                Favorite MCQ questions.
            </p>

        </div>

        <div class="subject-card">

            <h3>🦺 Site Safety</h3>

            <p>
                Important site engineering notes.
            </p>

        </div>
    `;
}

/* =====================================================
   PROFILE
===================================================== */

function renderProfile(){

    document.getElementById("content").innerHTML=`

        <div class="page-title">
            👤 Profile
        </div>

        <div class="hero"
             style="text-align:center">

            <div class="avatar"
                 style="margin:auto">
                👤
            </div>

            <h2 style="margin-top:12px">
                Civil Student
            </h2>

            <p>
                Diploma in Civil Engineering
            </p>

        </div>

        <div class="stats">

            <div class="stat">
                <strong>850</strong>
                <small>MCQ</small>
            </div>

            <div class="stat">
                <strong>25</strong>
                <small>Exams</small>
            </div>

            <div class="stat">
                <strong>63%</strong>
                <small>Progress</small>
            </div>

        </div>
    `;
}

/* =====================================================
   SEARCH
===================================================== */

function renderSearch(){

    document.getElementById("content").innerHTML=`

        <div class="page-title">
            🔍 Search
        </div>

        <input class="input"
            id="searchBox"
            placeholder="Search Civil topics..."
            oninput="performSearch()">

        <div id="searchResults"></div>
    `;
}

function performSearch(){

    const value=
        document.getElementById("searchBox")
        .value.toLowerCase();

    const results=subjects.filter(s=>
        s.name.toLowerCase().includes(value) ||
        s.desc.toLowerCase().includes(value)
    );

    document.getElementById("searchResults").innerHTML=
        results.map((s,i)=>`

            <div class="subject-card">

                <h3>
                    ${s.icon} ${s.name}
                </h3>

                <p>${s.desc}</p>

            </div>

        `).join("");

}

/* =====================================================
   SETTINGS
===================================================== */

function renderSettings(){

    document.getElementById("content").innerHTML=`

        <div class="page-title">
            ⚙️ Settings
        </div>

        <div class="subject-card"
             onclick="toggleTheme()">

            <h3>🌙 Dark Mode</h3>

            <p>
                Change application appearance
            </p>

        </div>

        <div class="subject-card"
             onclick="toast('Notifications updated')">

            <h3>🔔 Notifications</h3>

            <p>
                Exam and study reminders
            </p>

        </div>

        <div class="subject-card">

            <h3>🌐 Language</h3>

            <p>
                বাংলা / English
            </p>

        </div>

    `;
}

/* =====================================================
   DRAWER
===================================================== */

function openDrawer(){

    document.getElementById("drawer")
        .classList.add("open");

    document.getElementById("overlay")
        .classList.add("show");
}

function closeDrawer(){

    document.getElementById("drawer")
        .classList.remove("open");

    document.getElementById("overlay")
        .classList.remove("show");
}

function drawerPage(page){

    closeDrawer();

    showPage(page);
}

/* =====================================================
   THEME
===================================================== */

let light=false;

function toggleTheme(){

    light=!light;

    if(light){

        document.documentElement.style
            .setProperty("--bg","#f1f2f6");

        document.documentElement.style
            .setProperty("--header","#ffffff");

        document.documentElement.style
            .setProperty("--card","#ffffff");

        document.documentElement.style
            .setProperty("--text","#17181c");

        document.documentElement.style
            .setProperty("--muted","#555");

        toast("Light Mode");

    }else{

        document.documentElement.style
            .setProperty("--bg","#101116");

        document.documentElement.style
            .setProperty("--header","#292a30");

        document.documentElement.style
            .setProperty("--card","#28292e");

        document.documentElement.style
            .setProperty("--text","#f5f5f7");

        document.documentElement.style
            .setProperty("--muted","#b5b5bd");

        toast("Dark Mode");
    }
}

/* =====================================================
   TOAST
===================================================== */

function toast(message){

    const t=document.getElementById("toast");

    t.innerText=message;

    t.classList.add("show");

    setTimeout(()=>{
        t.classList.remove("show");
    },1800);
}

/* =====================================================
   INITIAL APP
===================================================== */

renderHome();

