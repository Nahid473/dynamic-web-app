/* =====================================================
   CIVIL ENGINEERING JOBS
   Complete Jobs System - One JS File
===================================================== */


/* =====================================================
   JOB DATA
===================================================== */

const civilJobs = [

    {
        title: "Sub-Assistant Engineer",
        type: "Government / Private",
        qualification: "Diploma in Civil Engineering",
        salary: "৳20,000 - ৳35,000",
        location: "Bangladesh",
        experience: "0 - 3 Years",

        description:
            "Sub-Assistant Engineers assist engineers in supervising construction activities, checking measurements, monitoring materials and maintaining site records.",

        responsibilities: [
            "Supervise daily construction activities",
            "Check construction measurements",
            "Monitor materials at site",
            "Read and understand construction drawings",
            "Prepare daily progress reports",
            "Maintain site safety"
        ],

        skills: [
            "AutoCAD",
            "Civil Drawing",
            "Quantity Measurement",
            "RCC",
            "Site Supervision",
            "MS Office"
        ]
    },


    {
        title: "Site Engineer",
        type: "Construction Company",
        qualification: "Diploma / BSc Civil",
        salary: "৳30,000 - ৳50,000",
        location: "Dhaka / Khulna / Chattogram",
        experience: "1 - 4 Years",

        description:
            "A Site Engineer supervises construction work and ensures that the project is completed according to approved drawings, specifications, quality requirements and schedule.",

        responsibilities: [
            "Supervise construction workers",
            "Check RCC work",
            "Inspect reinforcement placement",
            "Check formwork and shuttering",
            "Monitor concrete casting",
            "Prepare daily site reports",
            "Coordinate with Project Engineer",
            "Maintain site safety"
        ],

        skills: [
            "AutoCAD",
            "RCC",
            "BBS",
            "BOQ",
            "Site Management",
            "Quantity Survey"
        ]
    },


    {
        title: "Junior Engineer",
        type: "Government / Organization",
        qualification: "Diploma Civil",
        salary: "৳25,000 - ৳40,000",
        location: "Bangladesh",
        experience: "0 - 2 Years",

        description:
            "Junior Engineers assist senior engineers in construction supervision, quantity measurement, quality control, documentation and project coordination.",

        responsibilities: [
            "Assist Senior Engineer",
            "Monitor construction activities",
            "Check materials",
            "Take site measurements",
            "Check drawings",
            "Prepare reports",
            "Assist in quality control"
        ],

        skills: [
            "AutoCAD",
            "Surveying",
            "Estimation",
            "Quantity Survey",
            "RCC",
            "MS Office"
        ]
    },


    {
        title: "Estimator",
        type: "Real Estate / Construction",
        qualification: "Diploma Civil",
        salary: "৳25,000 - ৳45,000",
        location: "Dhaka",
        experience: "1 - 3 Years",

        description:
            "An Estimator calculates construction quantities and project costs and prepares BOQ, rate analysis and material estimates.",

        responsibilities: [
            "Prepare quantity takeoff",
            "Prepare BOQ",
            "Calculate material quantities",
            "Prepare rate analysis",
            "Estimate project cost",
            "Check drawings",
            "Prepare cost reports"
        ],

        skills: [
            "BOQ",
            "Rate Analysis",
            "AutoCAD",
            "Excel",
            "Quantity Takeoff",
            "Estimation"
        ]
    }

];


/* =====================================================
   RENDER JOBS PAGE
===================================================== */

function renderJobs() {

    document.getElementById("content").innerHTML = `

        <div class="page-title">
            💼 Civil Jobs
        </div>


        <p style="
            color:#aaa;
            margin:10px 0 20px;
        ">
            Find Civil Engineering jobs and explore
            qualification, salary, responsibilities and
            required skills.
        </p>


        <div class="jobs-grid">

            ${civilJobs.map((item, index) => {

                return job(
                    item.title,
                    item.type,
                    item.qualification,
                    item.salary,
                    item.location,
                    item.experience,
                    item.description,
                    item.responsibilities,
                    item.skills,
                    index
                );

            }).join("")}

        </div>

    `;
}


/* =====================================================
   JOB CARD
===================================================== */

function job(
    title,
    type,
    qualification,
    salary,
    location,
    experience,
    description,
    responsibilities,
    skills,
    index
) {

    return `

        <div class="exam-card job-card">


            <div class="job-header">

                <div>

                    <h3>
                        ${title}
                    </h3>

                    <p class="job-type">
                        💼 ${type}
                    </p>

                </div>


                <span class="job-status">
                    OPEN
                </span>

            </div>


            <div class="job-info">


                <p>
                    🎓
                    <strong>Qualification:</strong>
                    ${qualification}
                </p>


                <p>
                    💰
                    <strong>Salary:</strong>
                    ${salary}
                </p>


                <p>
                    📍
                    <strong>Location:</strong>
                    ${location}
                </p>


                <p>
                    👨‍💼
                    <strong>Experience:</strong>
                    ${experience}
                </p>


            </div>


            <button
                class="primary-btn"
                style="
                    width:100%;
                    margin-top:15px;
                "
                onclick="openJobDetails(${index})">

                📄 View Details

            </button>


        </div>

    `;
}


/* =====================================================
   OPEN JOB DETAILS
===================================================== */

function openJobDetails(index) {

    const item = civilJobs[index];

    if (!item) {

        toast("Job information not found");

        return;
    }


    closeJobDetails();


    const modal =
        document.createElement("div");


    modal.id = "jobDetailsModal";


    modal.className =
        "job-details-modal";


    modal.innerHTML = `

        <div class="job-details-box">


            <!-- CLOSE -->

            <button
                class="job-close-btn"
                onclick="closeJobDetails()">

                ✕

            </button>


            <!-- ICON -->

            <div class="job-big-icon">
                💼
            </div>


            <!-- TITLE -->

            <h2>
                ${item.title}
            </h2>


            <p class="job-modal-type">
                ${item.type}
            </p>


            <!-- QUICK DETAILS -->

            <div class="job-detail-grid">


                <div class="job-detail-item">

                    <span>
                        🎓
                    </span>

                    <div>

                        <small>
                            Qualification
                        </small>

                        <strong>
                            ${item.qualification}
                        </strong>

                    </div>

                </div>


                <div class="job-detail-item">

                    <span>
                        💰
                    </span>

                    <div>

                        <small>
                            Salary
                        </small>

                        <strong>
                            ${item.salary}
                        </strong>

                    </div>

                </div>


                <div class="job-detail-item">

                    <span>
                        📍
                    </span>

                    <div>

                        <small>
                            Location
                        </small>

                        <strong>
                            ${item.location}
                        </strong>

                    </div>

                </div>


                <div class="job-detail-item">

                    <span>
                        👨‍💼
                    </span>

                    <div>

                        <small>
                            Experience
                        </small>

                        <strong>
                            ${item.experience}
                        </strong>

                    </div>

                </div>


            </div>


            <!-- DESCRIPTION -->

            <div class="job-section">

                <h3>
                    📋 Job Description
                </h3>

                <p>
                    ${item.description}
                </p>

            </div>


            <!-- RESPONSIBILITIES -->

            <div class="job-section">

                <h3>
                    🛠 Responsibilities
                </h3>


                <ul>

                    ${item.responsibilities.map(
                        responsibility => `
                            <li>
                                ${responsibility}
                            </li>
                        `
                    ).join("")}

                </ul>

            </div>


            <!-- SKILLS -->

            <div class="job-section">

                <h3>
                    ⭐ Required Skills
                </h3>


                <div class="job-skills">

                    ${item.skills.map(
                        skill => `
                            <span>
                                ${skill}
                            </span>
                        `
                    ).join("")}

                </div>

            </div>


            <!-- APPLY -->

            <button
                class="primary-btn"
                style="
                    width:100%;
                    margin-top:25px;
                    padding:14px;
                    font-size:16px;
                "
                onclick="applyForJob('${item.title}')">

                🚀 Apply Now

            </button>


        </div>

    `;


    document.body.appendChild(modal);


    setTimeout(() => {

        modal.classList.add("show");

    }, 20);


    document.body.style.overflow =
        "hidden";
}


/* =====================================================
   CLOSE DETAILS
===================================================== */

function closeJobDetails() {

    const modal =
        document.getElementById(
            "jobDetailsModal"
        );


    if (!modal) return;


    modal.classList.remove("show");


    document.body.style.overflow =
        "";


    setTimeout(() => {

        modal.remove();

    }, 250);
}


/* =====================================================
   APPLY JOB
===================================================== */

function applyForJob(title) {

    closeJobDetails();


    setTimeout(() => {

        toast(
            "🚀 Application started for " + title
        );

    }, 300);
}


/* =====================================================
   CLOSE MODAL BY CLICKING BACKGROUND
===================================================== */

document.addEventListener(
    "click",
    function(event) {

        const modal =
            document.getElementById(
                "jobDetailsModal"
            );


        if (!modal) return;


        if (event.target === modal) {

            closeJobDetails();

        }

    }
);


/* =====================================================
   ESC KEY
===================================================== */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {

            closeJobDetails();

        }

    }
);


/* =====================================================
   JOB SEARCH
===================================================== */

function searchCivilJobs(keyword) {

    const search =
        String(keyword)
            .toLowerCase()
            .trim();


    const results =
        civilJobs.filter(item => {

            return (

                item.title
                    .toLowerCase()
                    .includes(search)

                ||

                item.type
                    .toLowerCase()
                    .includes(search)

                ||

                item.qualification
                    .toLowerCase()
                    .includes(search)

                ||

                item.location
                    .toLowerCase()
                    .includes(search)

            );

        });


    if (results.length === 0) {

        document.getElementById(
            "content"
        ).innerHTML = `

            <div class="page-title">
                💼 Civil Jobs
            </div>

            <div style="
                text-align:center;
                padding:60px 20px;
                color:#888;
            ">

                <div style="
                    font-size:50px;
                    margin-bottom:15px;
                ">
                    🔍
                </div>

                <h3>
                    No Jobs Found
                </h3>

                <p style="margin-top:8px">
                    Try searching for another job.
                </p>

            </div>

        `;

        return;
    }


    document.getElementById(
        "content"
    ).innerHTML = `

        <div class="page-title">
            🔎 Search Results
        </div>


        <div class="jobs-grid">

            ${results.map(item => {

                const originalIndex =
                    civilJobs.indexOf(item);


                return job(
                    item.title,
                    item.type,
                    item.qualification,
                    item.salary,
                    item.location,
                    item.experience,
                    item.description,
                    item.responsibilities,
                    item.skills,
                    originalIndex
                );

            }).join("")}

        </div>

    `;
}


/* =====================================================
   AUTO CSS
   Everything stays inside this JS file
===================================================== */

(function addJobCSS() {

    const style =
        document.createElement("style");


    style.innerHTML = `


        /* JOB GRID */

        .jobs-grid {

            display:grid;

            grid-template-columns:
                repeat(
                    auto-fit,
                    minmax(280px, 1fr)
                );

            gap:20px;

        }


        /* JOB CARD */

        .job-card {

            position:relative;

            overflow:hidden;

            transition:
                transform .3s ease,
                box-shadow .3s ease;

        }


        .job-card:hover {

            transform:
                translateY(-6px);

            box-shadow:
                0 18px 50px
                rgba(0,255,170,.12);

        }


        /* HEADER */

        .job-header {

            display:flex;

            justify-content:
                space-between;

            align-items:
                flex-start;

            gap:10px;

        }


        .job-type {

            color:#00ffaa;

            margin-top:7px;

            font-size:13px;

        }


        /* STATUS */

        .job-status {

            color:#00ffaa;

            background:
                rgba(
                    0,
                    255,
                    170,
                    .10
                );

            border:
                1px solid
                rgba(
                    0,
                    255,
                    170,
                    .20
                );

            padding:
                5px 9px;

            border-radius:
                20px;

            font-size:10px;

            font-weight:bold;

        }


        /* INFO */

        .job-info {

            margin-top:15px;

            display:grid;

            gap:9px;

            color:#aaa;

            font-size:13px;

            line-height:1.5;

        }


        /* MODAL */

        .job-details-modal {

            position:fixed;

            inset:0;

            z-index:999999;

            display:flex;

            justify-content:center;

            align-items:center;

            padding:20px;

            background:
                rgba(
                    0,
                    0,
                    0,
                    .80
                );

            backdrop-filter:
                blur(12px);

            opacity:0;

            transition:
                opacity .25s ease;

        }


        .job-details-modal.show {

            opacity:1;

        }


        /* MODAL BOX */

        .job-details-box {

            position:relative;

            width:
                min(
                    700px,
                    100%
                );

            max-height:
                90vh;

            overflow-y:auto;

            background:
                #0b1424;

            border:
                1px solid
                rgba(
                    255,
                    255,
                    255,
                    .12
                );

            border-radius:
                25px;

            padding:30px;

            box-shadow:
                0 30px 100px
                rgba(
                    0,
                    0,
                    0,
                    .7
                );

            transform:
                translateY(30px)
                scale(.95);

            transition:
                transform .3s ease;

        }


        .job-details-modal.show
        .job-details-box {

            transform:
                translateY(0)
                scale(1);

        }


        /* CLOSE */

        .job-close-btn {

            position:absolute;

            right:18px;

            top:18px;

            width:40px;

            height:40px;

            border-radius:50%;

            border:
                1px solid
                rgba(
                    255,
                    255,
                    255,
                    .10
                );

            background:
                rgba(
                    255,
                    255,
                    255,
                    .06
                );

            color:#fff;

            cursor:pointer;

            font-size:18px;

            transition:.25s;

        }


        .job-close-btn:hover {

            transform:
                rotate(90deg);

            background:
                rgba(
                    255,
                    70,
                    70,
                    .20
                );

        }


        /* BIG ICON */

        .job-big-icon {

            width:65px;

            height:65px;

            display:flex;

            justify-content:center;

            align-items:center;

            background:
                linear-gradient(
                    135deg,
                    rgba(
                        0,
                        255,
                        170,
                        .18
                    ),
                    rgba(
                        0,
                        160,
                        255,
                        .18
                    )
                );

            border-radius:18px;

            font-size:30px;

            margin-bottom:18px;

        }


        /* MODAL TITLE */

        .job-details-box h2 {

            color:#fff;

            font-size:28px;

            margin:0;

        }


        .job-modal-type {

            color:#00ffaa;

            margin-top:7px;

            font-size:14px;

        }


        /* DETAIL GRID */

        .job-detail-grid {

            display:grid;

            grid-template-columns:
                repeat(2,1fr);

            gap:12px;

            margin-top:22px;

        }


        .job-detail-item {

            display:flex;

            align-items:flex-start;

            gap:12px;

            padding:15px;

            border-radius:15px;

            background:
                rgba(
                    255,
                    255,
                    255,
                    .04
                );

            border:
                1px solid
                rgba(
                    255,
                    255,
                    255,
                    .07
                );

        }


        .job-detail-item > span {

            font-size:23px;

        }


        .job-detail-item small {

            display:block;

            color:#777;

            margin-bottom:5px;

        }


        .job-detail-item strong {

            color:#eee;

            font-size:13px;

            line-height:1.4;

        }


        /* SECTION */

        .job-section {

            margin-top:25px;

        }


        .job-section h3 {

            margin-bottom:10px;

            color:#fff;

        }


        .job-section p {

            color:#aaa;

            line-height:1.7;

            font-size:14px;

        }


        /* LIST */

        .job-section ul {

            padding-left:22px;

            color:#aaa;

            line-height:1.9;

            font-size:14px;

        }


        .job-section li {

            margin-bottom:3px;

        }


        /* SKILLS */

        .job-skills {

            display:flex;

            flex-wrap:wrap;

            gap:8px;

        }


        .job-skills span {

            padding:
                7px 12px;

            border-radius:20px;

            background:
                rgba(
                    0,
                    255,
                    170,
                    .08
                );

            border:
                1px solid
                rgba(
                    0,
                    255,
                    170,
                    .18
                );

            color:#00ffaa;

            font-size:12px;

        }


        /* MOBILE */

        @media(max-width:600px) {

            .job-detail-grid {

                grid-template-columns:
                    1fr;

            }


            .job-details-box {

                padding:22px;

                border-radius:20px;

            }


            .job-details-box h2 {

                font-size:22px;

            }

        }

    `;


    document.head.appendChild(style);

})();